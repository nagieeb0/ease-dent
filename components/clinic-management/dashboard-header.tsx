import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Bell, UserCircle } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
      <h1 className="text-3xl font-bold mb-4 sm:mb-0">Clinic Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-8 w-64" placeholder="Search..." />
        </div>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <UserCircle className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

