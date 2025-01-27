import { SiteHeader } from "@/components/site-header"
import { AIServiceCard } from "@/components/ai-services/ai-service-card"
import { Brain, DollarSign, Package, UserPlus, BarChart2, Stethoscope } from "lucide-react"

const services = [
  {
    title: "Smart Services",
    description: "Automated scheduling, digital records, treatment planning, and intelligent billing.",
    icon: Brain,
    href: "/ai-services/smart-services",
  },
  {
    title: "Dynamic AI Pricing",
    description: "Market-intelligent pricing optimization with competitive analysis and demand-based adjustments.",
    icon: DollarSign,
    href: "/ai-services/dynamic-ai-pricing",
  },
  {
    title: "Intelligent Inventory",
    description: "Predictive inventory management with automated reordering and waste reduction analytics.",
    icon: Package,
    href: "/ai-services/intelligent-inventory",
  },
  {
    title: "Personalized Care",
    description: "AI-driven personalized patient care with risk assessment and treatment success prediction.",
    icon: UserPlus,
    href: "/ai-services/personalized-care",
  },
  {
    title: "Practice Analytics",
    description: "Comprehensive practice performance insights and growth opportunity identification.",
    icon: BarChart2,
    href: "/ai-services/practice-analytics",
  },
  {
    title: "AI Recommendations",
    description: "Evidence-based clinical decision support and continuous learning from clinical data.",
    icon: Stethoscope,
    href: "/ai-services/ai-recommendations",
  },
]

export default function AIServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold mb-8">AI Services</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AIServiceCard key={index} {...service} />
          ))}
        </div>
      </main>
    </div>
  )
}

