"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { StoreSidebar } from "@/components/store/store-sidebar"
import { ProductGrid } from "@/components/store/product-grid"

export default function StorePage() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  const handleBrandFilter = (brands: string[]) => {
    setSelectedBrands(brands)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold mb-8">Dental Supply Store</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <StoreSidebar onBrandFilter={handleBrandFilter} />
          <ProductGrid selectedBrands={selectedBrands} />
        </div>
      </main>
    </div>
  )
}

