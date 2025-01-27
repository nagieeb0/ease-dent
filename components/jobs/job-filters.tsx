import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function JobFilters() {
  return (
    <div className="bg-card p-4 rounded-lg border">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="job-type">
          <AccordionTrigger className="text-sm font-medium">Job Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="full-time" />
                <label htmlFor="full-time" className="text-sm">
                  Full-time
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="part-time" />
                <label htmlFor="part-time" className="text-sm">
                  Part-time
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="contract" />
                <label htmlFor="contract" className="text-sm">
                  Contract
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="experience">
          <AccordionTrigger className="text-sm font-medium">Experience Level</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="entry-level" />
                <label htmlFor="entry-level" className="text-sm">
                  Entry Level
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mid-level" />
                <label htmlFor="mid-level" className="text-sm">
                  Mid Level
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="senior-level" />
                <label htmlFor="senior-level" className="text-sm">
                  Senior Level
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="location">
          <AccordionTrigger className="text-sm font-medium">Location</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="remote" />
                <label htmlFor="remote" className="text-sm">
                  Remote
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="on-site" />
                <label htmlFor="on-site" className="text-sm">
                  On-site
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="hybrid" />
                <label htmlFor="hybrid" className="text-sm">
                  Hybrid
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

