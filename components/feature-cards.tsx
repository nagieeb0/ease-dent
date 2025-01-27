import { Building2, ShoppingBag, Cog, Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeatureCards() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Building2 className="h-8 w-8 text-blue-600" />
          <div className="grid gap-1">
            <CardTitle>Clinic Management</CardTitle>
            <p className="text-sm text-muted-foreground">Streamline your practice operations and patient care</p>
          </div>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Cog className="h-8 w-8 text-blue-600" />
          <div className="grid gap-1">
            <CardTitle>AI Services</CardTitle>
            <p className="text-sm text-muted-foreground">Advanced diagnostics and treatment planning with AI</p>
          </div>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <ShoppingBag className="h-8 w-8 text-blue-600" />
          <div className="grid gap-1">
            <CardTitle>Dental Store</CardTitle>
            <p className="text-sm text-muted-foreground">One-stop shop for all your dental supplies</p>
          </div>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Briefcase className="h-8 w-8 text-blue-600" />
          <div className="grid gap-1">
            <CardTitle>Dental Jobs</CardTitle>
            <p className="text-sm text-muted-foreground">Connect with opportunities in dental healthcare</p>
          </div>
        </CardHeader>
      </Card>
    </div>
  )
}

