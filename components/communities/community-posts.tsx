import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowBigUp, ArrowBigDown, MessageSquare, Share2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const posts = [
  {
    id: 1,
    title: "New breakthrough in dental implant technology",
    content:
      "Researchers have developed a new type of dental implant that integrates with the jawbone faster and more securely. This could revolutionize the field of implantology.",
    author: "Dr. Jane Smith",
    avatar: "/placeholder.svg?height=50&width=50",
    community: "Dental Implants",
    upvotes: 1520,
    downvotes: 23,
    comments: 89,
    time: "5 hours ago",
  },
  {
    id: 2,
    title: "Tips for managing dental anxiety in pediatric patients",
    content:
      "As a pediatric dentist, I've found that using positive reinforcement and distraction techniques can significantly reduce anxiety in young patients. What strategies do you use?",
    author: "Dr. Michael Johnson",
    avatar: "/placeholder.svg?height=50&width=50",
    community: "Pediatric Dentistry",
    upvotes: 892,
    downvotes: 15,
    comments: 134,
    time: "8 hours ago",
  },
  {
    id: 3,
    title: "Discussion: The future of AI in dentistry",
    content:
      "With recent advancements in AI, how do you see it impacting our field in the next 5-10 years? Will it change diagnostics, treatment planning, or patient care?",
    author: "Dr. Sarah Lee",
    avatar: "/placeholder.svg?height=50&width=50",
    community: "Dental Technology",
    upvotes: 2103,
    downvotes: 76,
    comments: 218,
    time: "1 day ago",
  },
]

export function CommunityPosts({ selectedCommunity, sortBy }: { selectedCommunity: string; sortBy: string }) {
  const filteredPosts =
    selectedCommunity === "All" ? posts : posts.filter((post) => post.community === selectedCommunity)

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "hot") return b.upvotes - a.upvotes
    if (sortBy === "new") return new Date(b.time).getTime() - new Date(a.time).getTime()
    if (sortBy === "top") return b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
    return 0
  })

  return (
    <div className="space-y-4">
      {sortedPosts.map((post) => (
        <Card key={post.id}>
          <CardHeader className="flex flex-row items-start space-x-4 p-4">
            <div className="flex flex-col items-center space-y-1">
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <ArrowBigUp className="h-5 w-5" />
              </Button>
              <span className="text-sm font-bold">{post.upvotes - post.downvotes}</span>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <ArrowBigDown className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={post.avatar} alt={post.author} />
                  <AvatarFallback>
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">
                  r/{post.community} • Posted by u/{post.author} {post.time}
                </span>
              </div>
              <h3 className="text-lg font-semibold mt-1">{post.title}</h3>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{post.content}</p>
          </CardContent>
          <CardFooter className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Button variant="ghost" size="sm" className="hover:bg-muted">
              <MessageSquare className="mr-1 h-4 w-4" />
              {post.comments} Comments
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-muted">
              <Share2 className="mr-1 h-4 w-4" />
              Share
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

