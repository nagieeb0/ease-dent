import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function JobSearch() {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <Input placeholder="Search jobs..." className="flex-1" />
      <Button type="submit" className="w-full sm:w-auto">
        <Search className="h-4 w-4 mr-2" />
        Search
      </Button>
    </div>
  )
}

