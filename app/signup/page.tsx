import { SignUpForm } from "@/components/auth/signup-form"
import { SiteHeader } from "@/components/site-header"

export default function SignUpPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 container max-w-2xl py-12">
        <h1 className="text-3xl font-bold text-center mb-6">Create Your Account</h1>
        <SignUpForm />
      </main>
    </div>
  )
}

