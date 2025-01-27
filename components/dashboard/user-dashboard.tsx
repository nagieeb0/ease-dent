import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface UserDashboardProps {
  userType: string
}

export function UserDashboard({ userType }: UserDashboardProps) {
  const renderDashboardContent = () => {
    switch (userType) {
      case "dentist":
        return (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <DashboardCard title="Jobs" description="Browse and apply for dental jobs">
              <Link href="/jobs">
                <Button>View Jobs</Button>
              </Link>
            </DashboardCard>
            <DashboardCard title="Store" description="Shop for dental supplies">
              <Link href="/store">
                <Button>Visit Store</Button>
              </Link>
            </DashboardCard>
            <DashboardCard title="AI Services" description="Access AI-powered dental tools">
              <Link href="/ai-services">
                <Button>Explore AI Services</Button>
              </Link>
            </DashboardCard>
            <DashboardCard title="Communities" description="Connect with other dental professionals">
              <Link href="/communities">
                <Button>Join Communities</Button>
              </Link>
            </DashboardCard>
            <DashboardCard title="Courses" description="Enhance your skills with dental courses">
              <Link href="/education">
                <Button>Browse Courses</Button>
              </Link>
            </DashboardCard>
            <DashboardCard title="Upgrade" description="Upgrade to Clinic Owner (Dentist+)">
              <Button variant="outline">Upgrade Now</Button>
            </DashboardCard>
          </div>
        )
      case "clinic-owner":
        return (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <DashboardCard title="Jobs" description="Post jobs and manage applications">
              <Link href="/jobs">
                <Button>Manage Jobs</Button>
              </Link>
            </DashboardCard>
            <DashboardCard title="AI Services" description="Access advanced AI tools for your clinic">
              <Link href="/ai-services">
                <Button>Explore AI Services</Button>
              </Link>
            </DashboardCard>
            <DashboardCard title="Store" description="Purchase supplies for your clinic">
              <Link href="/store">
                <Button>Visit Store</Button>
              </Link>
            </DashboardCard>
            <DashboardCard title="Clinic Management" description="Manage your clinic operations">
              <Link href="/clinic-management">
                <Button>Clinic Dashboard</Button>
              </Link>
            </DashboardCard>
            <DashboardCard title="Education" description="Access and manage educational content">
              <Link href="/education">
                <Button>Education Center</Button>
              </Link>
            </DashboardCard>
            <DashboardCard title="Communities" description="Engage with dental professionals">
              <Link href="/communities">
                <Button>Join Communities</Button>
              </Link>
            </DashboardCard>
          </div>
        )
      case "business-owner":
        return (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <DashboardCard title="Inventory Management" description="Manage your product inventory">
              <Button>Manage Inventory</Button>
            </DashboardCard>
            <DashboardCard title="Product Management" description="Add, edit, and categorize your products">
              <Button>Manage Products</Button>
            </DashboardCard>
            <DashboardCard title="Order Tracking" description="Track and manage customer orders">
              <Button>View Orders</Button>
            </DashboardCard>
            <DashboardCard title="Analytics" description="View sales and performance analytics">
              <Button>View Analytics</Button>
            </DashboardCard>
            <DashboardCard title="Advertising" description="Create and manage advertising campaigns">
              <Button>Manage Ads</Button>
            </DashboardCard>
            <DashboardCard title="Customer Management" description="Manage customer relationships">
              <Button>Manage Customers</Button>
            </DashboardCard>
          </div>
        )
      case "service-provider":
        return (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <DashboardCard title="Advertising" description="Create and manage your service ads">
              <Button>Manage Ads</Button>
            </DashboardCard>
            <DashboardCard title="Jobs" description="Browse and apply for relevant jobs">
              <Link href="/jobs">
                <Button>View Jobs</Button>
              </Link>
            </DashboardCard>
            <DashboardCard title="AI Tools" description="Access AI tools for your services">
              <Link href="/ai-services">
                <Button>AI Tools</Button>
              </Link>
            </DashboardCard>
            <DashboardCard title="Education" description="Post and purchase educational content">
              <Link href="/education">
                <Button>Education Center</Button>
              </Link>
            </DashboardCard>
            <DashboardCard title="Communities" description="Engage with dental professionals">
              <Link href="/communities">
                <Button>Join Communities</Button>
              </Link>
            </DashboardCard>
            <DashboardCard title="Portfolio" description="Manage and showcase your portfolio">
              <Button>Manage Portfolio</Button>
            </DashboardCard>
          </div>
        )
      default:
        return <p>Invalid user type</p>
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Welcome to Your Dashboard</h2>
      {renderDashboardContent()}
    </div>
  )
}

function DashboardCard({
  title,
  description,
  children,
}: React.PropsWithChildren<{ title: string; description: string }>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

