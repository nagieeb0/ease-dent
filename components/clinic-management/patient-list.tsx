import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const patients = [
  { name: "Alice Johnson", time: "10:00 AM", treatment: "Cleaning" },
  { name: "Bob Smith", time: "11:30 AM", treatment: "Filling" },
  { name: "Carol Davis", time: "2:00 PM", treatment: "Root Canal" },
  { name: "David Brown", time: "3:30 PM", treatment: "Check-up" },
]

export function PatientList() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Today's Patients</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {patients.map((patient, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Avatar>
                <AvatarFallback>
                  {patient.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{patient.name}</p>
                <p className="text-sm text-muted-foreground">
                  {patient.time} - {patient.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

