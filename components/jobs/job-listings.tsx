import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Clock, Building2 } from "lucide-react"

const jobListings = [
  {
    id: 1,
    title: "Dental Hygienist",
    company: "Bright Smiles Clinic",
    location: "New York, NY",
    type: "Full-time",
    posted: "2 days ago",
    salary: "$65,000 - $85,000",
    badges: ["Health Insurance", "401(k)"],
  },
  {
    id: 2,
    title: "Orthodontist",
    company: "Perfect Teeth Center",
    location: "Los Angeles, CA",
    type: "Part-time",
    posted: "1 week ago",
    salary: "$150,000 - $200,000",
    badges: ["Flexible Hours", "Signing Bonus"],
  },
  {
    id: 3,
    title: "Dental Assistant",
    company: "Family Dental Care",
    location: "Chicago, IL",
    type: "Full-time",
    posted: "3 days ago",
    salary: "$45,000 - $55,000",
    badges: ["Training Program", "Benefits"],
  },
]

export function JobListings() {
  return (
    <div className="space-y-4">
      {jobListings.map((job) => (
        <Card key={job.id} className="overflow-hidden">
          <CardHeader className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <CardTitle className="text-lg md:text-xl mb-1">{job.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Building2 className="h-4 w-4 mr-1 flex-shrink-0" />
                  {job.company}
                </div>
              </div>
              <div className="text-sm font-medium">{job.salary}</div>
            </div>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <div className="flex flex-wrap gap-2 mb-4">
              {job.badges.map((badge) => (
                <Badge key={badge} variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                {job.location}
              </div>
              <div className="flex items-center">
                <Briefcase className="h-4 w-4 mr-1 flex-shrink-0" />
                {job.type}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
                Posted {job.posted}
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 md:p-6 pt-0 flex flex-col sm:flex-row gap-2">
            <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
              Apply Now
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Save Job
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

