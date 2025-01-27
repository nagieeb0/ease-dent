"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/ui/icons"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ChoiceChips } from "@/components/ui/choice-chips"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const userTypes = [
  { id: "dentist", label: "Dentist" },
  { id: "clinic-owner", label: "Clinic Owner" },
  { id: "business-owner", label: "Business Owner (Supplier)" },
  { id: "service-provider", label: "Service Provider" },
]

const dentalSpecialties = [
  "General Practitioner",
  "Orthodontist",
  "Periodontist",
  "Endodontist",
  "Oral Surgeon",
  "Pediatric Dentist",
  "Prosthodontist",
  "Other",
]

const equipmentTypes = [
  "Implants",
  "Materials",
  "Endomotor",
  "Handpieces",
  "Imaging Equipment",
  "Sterilization Equipment",
  "Dental Chairs",
  "Other",
]

export function SignUpForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    userType: "",
    // Dentist fields
    specialties: [] as string[],
    yearsOfExperience: "",
    graduationYear: "",
    cv: null as File | null,
    // Clinic owner fields
    clinicName: "",
    clinicLocation: "",
    clinicEvaluation: {
      preparation: "",
      sterilization: "",
    },
    clinicPhoneNumber: "",
    linktree: "",
    // Business owner fields
    companyName: "",
    companyLocation: "",
    govRegistration: "",
    logo: null as File | null,
    equipmentTypes: [] as string[],
    taxUIN: "",
    // Service provider fields
    serviceType: "",
    portfolio: "",
  })

  const [countryCode, setCountryCode] = useState("")
  const [clientLocation, setClientLocation] = useState("")

  useEffect(() => {
    // Fetch country code and location based on IP
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        setCountryCode(data.country_calling_code)
        setClientLocation(`${data.city}, ${data.region}, ${data.country_name}`)
      })
      .catch((error) => console.error("Error fetching location:", error))
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }))
    }
  }

  const handleMultiSelectChange = (name: string, value: string[]) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePreviousStep = () => {
    setStep(step - 1)
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <div className="flex">
                  <Input
                    id="countryCode"
                    name="countryCode"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-20 mr-2"
                  />
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
          </>
        )
      case 2:
        return (
          <div className="space-y-4">
            <Label>Select User Type</Label>
            <RadioGroup onValueChange={(value) => handleSelectChange("userType", value)} value={formData.userType}>
              {userTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={type.id} id={type.id} />
                  <Label htmlFor={type.id}>{type.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )
      case 3:
        return renderUserTypeForm()
      default:
        return null
    }
  }

  const renderUserTypeForm = () => {
    switch (formData.userType) {
      case "dentist":
        return (
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="specialties">Specialties</Label>
              <ChoiceChips
                options={dentalSpecialties}
                value={formData.specialties}
                onChange={(value) => handleMultiSelectChange("specialties", value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="yearsOfExperience">Years of Experience</Label>
              <Input
                id="yearsOfExperience"
                name="yearsOfExperience"
                type="number"
                value={formData.yearsOfExperience}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="graduationYear">Graduation Year</Label>
              <Input
                id="graduationYear"
                name="graduationYear"
                type="number"
                value={formData.graduationYear}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cv">CV Upload</Label>
              <Input id="cv" name="cv" type="file" onChange={handleFileChange} />
            </div>
          </div>
        )
      case "clinic-owner":
        return (
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="clinicName">Clinic Name</Label>
              <Input
                id="clinicName"
                name="clinicName"
                placeholder="Your Clinic Name"
                value={formData.clinicName}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="clinicLocation">Clinic Location</Label>
              <Input
                id="clinicLocation"
                name="clinicLocation"
                placeholder="Clinic Location"
                value={formData.clinicLocation || clientLocation}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="clinicEvaluation">Clinic Evaluation</Label>
              <div className="space-y-2">
                <Select
                  name="preparation"
                  onValueChange={(value) => handleSelectChange("clinicEvaluation.preparation", value)}
                  value={formData.clinicEvaluation.preparation}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Preparation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="average">Average</SelectItem>
                    <SelectItem value="poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  name="sterilization"
                  onValueChange={(value) => handleSelectChange("clinicEvaluation.sterilization", value)}
                  value={formData.clinicEvaluation.sterilization}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sterilization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="average">Average</SelectItem>
                    <SelectItem value="poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="clinicPhoneNumber">Clinic Phone Number</Label>
              <Input
                id="clinicPhoneNumber"
                name="clinicPhoneNumber"
                type="tel"
                value={formData.clinicPhoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="linktree">Linktree</Label>
              <Input
                id="linktree"
                name="linktree"
                placeholder="Your Linktree URL"
                value={formData.linktree}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )
      case "business-owner":
        return (
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                name="companyName"
                placeholder="Your Company Name"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="companyLocation">Company Location</Label>
              <Input
                id="companyLocation"
                name="companyLocation"
                placeholder="Company Location"
                value={formData.companyLocation || clientLocation}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="govRegistration">Government Registration Number</Label>
              <Input
                id="govRegistration"
                name="govRegistration"
                placeholder="Registration Number"
                value={formData.govRegistration}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="logo">Company Logo Upload</Label>
              <Input id="logo" name="logo" type="file" onChange={handleFileChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="equipmentTypes">Equipment Types</Label>
              <ChoiceChips
                options={equipmentTypes}
                value={formData.equipmentTypes}
                onChange={(value) => handleMultiSelectChange("equipmentTypes", value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="taxUIN">Tax UIN (Optional)</Label>
              <Input
                id="taxUIN"
                name="taxUIN"
                placeholder="Tax UIN"
                value={formData.taxUIN}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )
      case "service-provider":
        return (
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="logo">Logo or Picture Upload</Label>
              <Input id="logo" name="logo" type="file" onChange={handleFileChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="serviceType">Type of Service</Label>
              <Select
                name="serviceType"
                onValueChange={(value) => handleSelectChange("serviceType", value)}
                value={formData.serviceType}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clinic-manager">Dental Clinic Manager</SelectItem>
                  <SelectItem value="marketing-manager">Marketing Manager</SelectItem>
                  <SelectItem value="video-editor">Dental Video Editor</SelectItem>
                  <SelectItem value="videographer">Dental Videographer</SelectItem>
                  <SelectItem value="secretary">Dental Secretary</SelectItem>
                  <SelectItem value="insurance">Insurance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="portfolio">Portfolio</Label>
              <Textarea
                id="portfolio"
                name="portfolio"
                placeholder="Describe your portfolio or provide links to your work"
                value={formData.portfolio}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Sign Up - Step {step}</CardTitle>
          <CardDescription>
            {step === 1 && "Enter your basic information"}
            {step === 2 && "Select your user type"}
            {step === 3 && "Complete your profile"}
          </CardDescription>
        </CardHeader>
        <CardContent>{renderStepContent()}</CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 && (
            <Button type="button" variant="outline" onClick={handlePreviousStep}>
              Previous
            </Button>
          )}
          {step < 3 ? (
            <Button type="button" onClick={handleNextStep}>
              Next
            </Button>
          ) : (
            <Button type="submit">Complete Sign Up</Button>
          )}
        </CardFooter>
      </Card>
    </form>
  )
}

