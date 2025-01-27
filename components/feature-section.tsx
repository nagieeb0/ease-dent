import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, ShoppingBag, Cog, Briefcase, Brain, Users, GraduationCap, MessageSquare } from "lucide-react"
import Link from "next/link"

const features = [
  {
    title: "Clinic Management",
    description: "Streamline your practice operations and patient care",
    icon: Building2,
    href: "/clinic-management",
  },
  {
    title: "AI Services",
    description: "Advanced diagnostics and treatment planning with AI",
    icon: Brain,
    href: "/ai-services",
  },
  {
    title: "Dental Store",
    description: "One-stop shop for all your dental supplies",
    icon: ShoppingBag,
    href: "/store",
  },
  {
    title: "Dental Jobs",
    description: "Connect with opportunities in dental healthcare",
    icon: Briefcase,
    href: "/jobs",
  },
  {
    title: "Smart Solutions",
    description: "Innovative tools to enhance your dental practice",
    icon: Cog,
    href: "/solutions",
  },
  {
    title: "Education",
    description: "Comprehensive dental education and training resources",
    icon: GraduationCap,
    href: "/education",
  },
  {
    title: "Communities",
    description: "Connect and share with dental professionals worldwide",
    icon: MessageSquare,
    href: "/communities",
  },
  {
    title: "Patient Engagement",
    description: "Improve patient experience and retention",
    icon: Users,
    href: "/patient-engagement",
  },
]

export function FeatureSection() {
  return (
    <section className="container py-12 md:py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {features.map((feature, index) => (
          <Link href={feature.href} key={index}>
            <Card className="transition-all hover:shadow-lg h-full">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

