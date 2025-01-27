import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import {
  Home,
  Briefcase,
  GraduationCap,
  ShoppingBag,
  Building2,
  Brain,
  MessageSquare,
  TrendingUp,
  PenSquare,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const mainPages = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Jobs", icon: Briefcase, href: "/jobs" },
  { name: "Education", icon: GraduationCap, href: "/education" },
  { name: "Store", icon: ShoppingBag, href: "/store" },
  { name: "Clinic Management", icon: Building2, href: "/clinic-management" },
  { name: "AI Services", icon: Brain, href: "/ai-services" },
]

const communities = [
  "All",
  "General Dentistry",
  "Orthodontics",
  "Periodontics",
  "Endodontics",
  "Oral Surgery",
  "Pediatric Dentistry",
  "Prosthodontics",
  "Dental Implants",
  "Cosmetic Dentistry",
  "Dental Technology",
  "Practice Management",
]

const trendingCommunities = [
  { name: "Dental Implants", members: 52000, trend: "+15%" },
  { name: "Orthodontics", members: 48000, trend: "+8%" },
  { name: "Cosmetic Dentistry", members: 35000, trend: "+12%" },
]

export function CommunitiesSidebar({ onCommunityChange }: { onCommunityChange: (community: string) => void }) {
  return (
    <aside className="w-full md:w-64 flex-shrink-0 mb-6 md:mb-0 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Main Pages</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[200px]">
            <div className="space-y-1 p-2">
              {mainPages.map((page) => (
                <Link key={page.name} href={page.href}>
                  <Button variant="ghost" className="w-full justify-start text-left font-normal">
                    <page.icon className="mr-2 h-4 w-4" />
                    {page.name}
                  </Button>
                </Link>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Create Post</CardTitle>
          <PenSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <Button className="w-full">Create Post</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Communities</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[300px]">
            <div className="space-y-1 p-2">
              {communities.map((community) => (
                <Button
                  key={community}
                  variant="ghost"
                  className="w-full justify-start text-left font-normal"
                  onClick={() => onCommunityChange(community)}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  {community}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Trending Communities</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {trendingCommunities.map((community) => (
              <div key={community.name} className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-sm font-medium">{community.name}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {community.members.toLocaleString()} • {community.trend}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}

