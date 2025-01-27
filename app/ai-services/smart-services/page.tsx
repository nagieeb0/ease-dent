import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, FileText, Lightbulb, CreditCard } from "lucide-react"

export default function SmartServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold mb-8">Smart Services</h1>
        <p className="text-xl mb-8">Enhance your dental practice with our AI-powered Smart Services.</p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Calendar className="h-8 w-8 mb-2 text-blue-600" />
              <CardTitle>Automated Appointment Scheduling</CardTitle>
              <CardDescription>Streamline your booking process with AI-driven scheduling.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Intelligent time slot allocation</li>
                <li>Automated reminders and confirmations</li>
                <li>Integration with patient preferences</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 mb-2 text-blue-600" />
              <CardTitle>Digital Patient Records Management</CardTitle>
              <CardDescription>Efficiently manage and access patient information.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Secure, cloud-based storage</li>
                <li>Easy retrieval and updating of records</li>
                <li>Comprehensive patient history at your fingertips</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lightbulb className="h-8 w-8 mb-2 text-blue-600" />
              <CardTitle>Real-time Treatment Planning Assistance</CardTitle>
              <CardDescription>Get AI-powered insights for optimal treatment plans.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Evidence-based treatment suggestions</li>
                <li>Patient-specific recommendations</li>
                <li>Continuous learning from clinical outcomes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CreditCard className="h-8 w-8 mb-2 text-blue-600" />
              <CardTitle>Intelligent Billing and Insurance Processing</CardTitle>
              <CardDescription>Simplify your financial operations with AI.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Automated insurance claim processing</li>
                <li>Real-time eligibility checks</li>
                <li>Predictive billing and payment reminders</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Started with Smart Services
          </Button>
        </div>
      </main>
    </div>
  )
}

