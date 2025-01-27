"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { CommunitiesSidebar } from "@/components/communities/communities-sidebar"
import { CommunityPosts } from "@/components/communities/community-posts"
import { Button } from "@/components/ui/button"
import { Flame, Clock, TrendingUp } from "lucide-react"

export default function CommunitiesPage() {
  const [selectedCommunity, setSelectedCommunity] = useState("All")
  const [sortBy, setSortBy] = useState("hot")

  const handleCommunityChange = (community: string) => {
    setSelectedCommunity(community)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <CommunitiesSidebar onCommunityChange={handleCommunityChange} />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">r/{selectedCommunity}</h1>
              <div className="flex space-x-2">
                <Button variant={sortBy === "hot" ? "default" : "ghost"} size="sm" onClick={() => setSortBy("hot")}>
                  <Flame className="mr-1 h-4 w-4" /> Hot
                </Button>
                <Button variant={sortBy === "new" ? "default" : "ghost"} size="sm" onClick={() => setSortBy("new")}>
                  <Clock className="mr-1 h-4 w-4" /> New
                </Button>
                <Button variant={sortBy === "top" ? "default" : "ghost"} size="sm" onClick={() => setSortBy("top")}>
                  <TrendingUp className="mr-1 h-4 w-4" /> Top
                </Button>
              </div>
            </div>
            <CommunityPosts selectedCommunity={selectedCommunity} sortBy={sortBy} />
          </div>
        </div>
      </main>
    </div>
  )
}

