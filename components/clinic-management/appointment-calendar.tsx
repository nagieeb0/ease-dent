import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { CalendarPlus } from "lucide-react"

export function AppointmentCalendar() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Appointment Calendar</CardTitle>
        <Button variant="outline" size="sm">
          <CalendarPlus className="h-4 w-4 mr-2" />
          Add Appointment
        </Button>
      </CardHeader>
      <CardContent>
        <Calendar mode="single" className="rounded-md border" />
      </CardContent>
    </Card>
  )
}

