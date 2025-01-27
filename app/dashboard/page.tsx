"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { UserDashboard } from "@/components/dashboard/user-dashboard"

export default function DashboardPage() {
  const [userType, setUserType] = useState<string>("")

  useEffect(() => {
    // In a real application, you would fetch the user type from your backend or local storage
    // For this example, we'll just set a mock user type
    setUserType("dentist")
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 container py-12">
        <UserDashboard userType={userType} />
      </main>
    </div>
  )
}

