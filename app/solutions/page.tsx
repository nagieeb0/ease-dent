import { SiteHeader } from "@/components/site-header"
import { SolutionCard } from "@/components/solutions/solution-card"
import { Laptop, Shield, Paintbrush, Building2, Users, FileText, Megaphone, Camera, Globe } from "lucide-react"

const solutions = [
  {
    title: "Practice Management Software",
    description:
      "Implementation and training for dental practice software, including data migration and staff training.",
    icon: Laptop,
    href: "/solutions/practice-management",
  },
  {
    title: "Cybersecurity Services",
    description:
      "Protect your practice with comprehensive security solutions, including HIPAA compliance and data encryption.",
    icon: Shield,
    href: "/solutions/cybersecurity",
  },
  {
    title: "Interior Design",
    description: "Create a welcoming and efficient dental practice environment with expert space planning and design.",
    icon: Paintbrush,
    href: "/solutions/interior-design",
  },
  {
    title: "Practice Renovation",
    description: "Complete renovation and construction management services for dental practices.",
    icon: Building2,
    href: "/solutions/renovation",
  },
  {
    title: "Staff Training Programs",
    description: "Comprehensive training programs for your dental team, from front desk to clinical staff.",
    icon: Users,
    href: "/solutions/training",
  },
  {
    title: "Documentation Services",
    description: "Professional documentation and policy development for dental practices.",
    icon: FileText,
    href: "/solutions/documentation",
  },
  {
    title: "Marketing Agency",
    description: "Connect with top dental marketing agencies for comprehensive marketing solutions.",
    icon: Megaphone,
    href: "/solutions/marketing",
  },
  {
    title: "Professional Videography",
    description: "High-quality video production services for showcasing your dental practice.",
    icon: Camera,
    href: "/solutions/videography",
  },
  {
    title: "Website Development",
    description: "Custom website design and development for modern dental practices.",
    icon: Globe,
    href: "/solutions/website",
  },
]

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold mb-8">Solutions</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </main>
    </div>
  )
}

