"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { EducationSidebar } from "@/components/education/education-sidebar"
import { EducationGrid } from "@/components/education/education-grid"

export default function EducationPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Courses")
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
  }

  const handleTopicFilter = (topics: string[]) => {
    setSelectedTopics(topics)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold mb-8">Dental Education</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <EducationSidebar onCategoryFilter={handleCategoryFilter} onTopicFilter={handleTopicFilter} />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">{selectedCategory}</h2>
            <EducationGrid selectedCategory={selectedCategory} selectedTopics={selectedTopics} />
          </div>
        </div>
      </main>
    </div>
  )
}

