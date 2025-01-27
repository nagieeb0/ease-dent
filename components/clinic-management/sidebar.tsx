import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CalendarDays, Users, DollarSign, Clipboard, Package2, Settings } from "lucide-react"

const navItems = [
  { icon: CalendarDays, label: "Appointments" },
  { icon: Users, label: "Patients" },
  { icon: DollarSign, label: "Finances" },
  { icon: Clipboard, label: "Treatments" },
  { icon: Package2, label: "Inventory" },
  { icon: Settings, label: "Settings" },
]

export function Sidebar() {
  return (
    <div className="w-full md:w-64 bg-background border-r md:h-screen md:fixed md:left-0 md:top-16">
      <ScrollArea className="h-[300px] md:h-[calc(100vh-4rem)] px-4 py-6">
        <div className="space-y-2">
          {navItems.map((item, index) => (
            <Button key={index} variant="ghost" className="w-full justify-start">
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

