"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"

const categories = [
  "All Courses",
  "Outsourcing Education Partners",
  "Inside Courses",
  "Continuing Education",
  "Webinars",
  "Case Studies",
]

const topics = [
  "General Dentistry",
  "Orthodontics",
  "Periodontics",
  "Endodontics",
  "Oral Surgery",
  "Pediatric Dentistry",
  "Prosthodontics",
  "Dental Implants",
  "Cosmetic Dentistry",
]

export function EducationSidebar({
  onCategoryFilter,
  onTopicFilter,
}: {
  onCategoryFilter: (category: string) => void
  onTopicFilter: (topics: string[]) => void
}) {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTopics = topics.filter((topic) => topic.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleTopicChange = (topic: string) => {
    setSelectedTopics((prev) => {
      const newSelection = prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
      onTopicFilter(newSelection)
      return newSelection
    })
  }

  return (
    <aside className="w-full md:w-64 flex-shrink-0 mb-6 md:mb-0">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ScrollArea className="h-[300px] md:h-[calc(100vh-200px)]">
        <div className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="w-full justify-start text-left font-normal"
              onClick={() => onCategoryFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </ScrollArea>

      <h2 className="text-lg font-semibold mb-4 mt-6">Topics</h2>
      <Input
        type="search"
        placeholder="Search topics..."
        className="mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ScrollArea className="h-[300px] md:h-[calc(100vh-200px)]">
        <div className="space-y-2">
          {filteredTopics.map((topic) => (
            <div key={topic} className="flex items-center space-x-2">
              <Checkbox
                id={topic}
                checked={selectedTopics.includes(topic)}
                onCheckedChange={() => handleTopicChange(topic)}
              />
              <Label htmlFor={topic}>{topic}</Label>
            </div>
          ))}
        </div>
      </ScrollArea>
    </aside>
  )
}

