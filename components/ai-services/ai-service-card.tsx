import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface AIServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export function AIServiceCard({ title, description, icon: Icon, href }: AIServiceCardProps) {
  return (
    <Link href={href}>
      <Card className="h-full transition-shadow hover:shadow-lg">
        <CardHeader>
          <Icon className="h-8 w-8 mb-2 text-blue-600" />
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}

