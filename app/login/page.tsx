import { LoginForm } from "@/components/auth/login-form"
import { SiteHeader } from "@/components/site-header"

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 container max-w-lg py-12">
        <h1 className="text-3xl font-bold text-center mb-6">Login to Your Account</h1>
        <LoginForm />
      </main>
    </div>
  )
}

