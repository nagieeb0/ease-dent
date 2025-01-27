import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { TypeIcon as type, type LucideIcon } from "lucide-react"

interface SolutionCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export function SolutionCard({ title, description, icon: Icon, href }: SolutionCardProps) {
  return (
    <Link href={href}>
      <Card className="h-full transition-shadow hover:shadow-lg">
        <CardHeader>
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <CardTitle className="text-xl mb-2">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}

