import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Award } from "lucide-react"

interface EducationItem {
  id: number
  title: string
  description: string
  category: string
  topics: string[]
  duration: string
  attendees: number
  price: number
  image: string
}

const educationItems: EducationItem[] = [
  {
    id: 1,
    title: "Advanced Implant Techniques",
    description: "Learn cutting-edge implant procedures from industry experts.",
    category: "Continuing Education",
    topics: ["Dental Implants", "Oral Surgery"],
    duration: "8 hours",
    attendees: 500,
    price: 299.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    title: "Pediatric Dentistry Essentials",
    description: "Comprehensive course on treating young patients effectively.",
    category: "Inside Courses",
    topics: ["Pediatric Dentistry", "General Dentistry"],
    duration: "6 hours",
    attendees: 350,
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    title: "Digital Dentistry Transformation",
    description: "Explore the latest in digital dental technologies and workflows.",
    category: "Webinars",
    topics: ["General Dentistry", "Prosthodontics"],
    duration: "2 hours",
    attendees: 1000,
    price: 49.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    title: "Periodontal Plastic Surgery",
    description: "Master advanced techniques in periodontal aesthetics.",
    category: "Outsourcing Education Partners",
    topics: ["Periodontics", "Cosmetic Dentistry"],
    duration: "12 hours",
    attendees: 200,
    price: 599.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    title: "Complex Endodontic Case Studies",
    description: "Analyze and learn from challenging endodontic cases.",
    category: "Case Studies",
    topics: ["Endodontics"],
    duration: "4 hours",
    attendees: 300,
    price: 149.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    title: "Orthodontic Aligners Masterclass",
    description: "Comprehensive training on aligner therapy and case management.",
    category: "Continuing Education",
    topics: ["Orthodontics"],
    duration: "10 hours",
    attendees: 400,
    price: 399.99,
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function EducationGrid({
  selectedCategory,
  selectedTopics,
}: {
  selectedCategory: string
  selectedTopics: string[]
}) {
  const filteredItems = educationItems.filter((item) => {
    const categoryMatch = selectedCategory === "All Courses" || item.category === selectedCategory
    const topicMatch = selectedTopics.length === 0 || item.topics.some((topic) => selectedTopics.includes(topic))
    return categoryMatch && topicMatch
  })

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredItems.map((item) => (
        <Card key={item.id} className="flex flex-col">
          <CardHeader>
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardTitle className="mt-2">{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex flex-wrap gap-2 mb-4">
              {item.topics.map((topic) => (
                <Badge key={topic} variant="secondary">
                  {topic}
                </Badge>
              ))}
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {item.duration}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                {item.attendees} attendees
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                {item.category}
              </div>
            </div>
          </CardContent>
          <CardContent className="pt-0 mt-auto">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">${item.price.toFixed(2)}</span>
              <Button>Enroll Now</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

