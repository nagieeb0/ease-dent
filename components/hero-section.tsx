import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="container grid lg:grid-cols-2 gap-8 py-12 md:py-24">
      <div className="flex flex-col justify-center space-y-4">
        <div className="flex items-center space-x-2">
          <div className="inline-flex items-center rounded-lg bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-200">
            AI-Powered
          </div>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
          Transform Your <span className="text-blue-600 dark:text-blue-400">Dental Practice</span> with AI
        </h1>
        <p className="text-muted-foreground md:text-xl max-w-[600px]">
          Experience seamless practice management, intelligent diagnostics, and enhanced patient care with our
          comprehensive dental solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <PlayCircle className="h-4 w-4" />
            Watch Demo
          </Button>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-all duration-300 ease-in-out hover:scale-105">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/easedent-ISYt6T916FdGh5mGVLwaxZranEiimF.png"
            alt="EaseDent Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  )
}

