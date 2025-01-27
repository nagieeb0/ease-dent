import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle } from "lucide-react"

const treatments = [
  { patient: "Emma Wilson", treatment: "Crown", status: "Scheduled", date: "2023-07-15" },
  { patient: "Michael Lee", treatment: "Implant", status: "In Progress", date: "2023-07-18" },
  { patient: "Sophia Garcia", treatment: "Braces", status: "Completed", date: "2023-07-10" },
  { patient: "Oliver Taylor", treatment: "Wisdom Tooth Extraction", status: "Scheduled", date: "2023-07-22" },
]

export function TreatmentPlanner() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Treatment Planner</CardTitle>
        <Button variant="outline" size="sm">
          <PlusCircle className="h-4 w-4 mr-2" />
          New Treatment
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Treatment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {treatments.map((treatment, index) => (
              <TableRow key={index}>
                <TableCell>{treatment.patient}</TableCell>
                <TableCell>{treatment.treatment}</TableCell>
                <TableCell>{treatment.status}</TableCell>
                <TableCell>{treatment.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

