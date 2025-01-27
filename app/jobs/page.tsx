import { JobsHeader } from "@/components/jobs/jobs-header"
import { JobSearch } from "@/components/jobs/job-search"
import { JobFilters } from "@/components/jobs/job-filters"
import { JobListings } from "@/components/jobs/job-listings"

export default function JobsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <JobsHeader />
      <main className="flex-1 container py-4 md:py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Dental Jobs</h1>
        <JobSearch />
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mt-4 md:mt-6">
          <aside className="w-full lg:w-64 flex-shrink-0">
            <JobFilters />
          </aside>
          <section className="flex-1">
            <JobListings />
          </section>
        </div>
      </main>
    </div>
  )
}

