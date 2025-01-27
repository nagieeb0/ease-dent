import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const categories = [
  "All Products",
  "Instruments",
  "Consumables",
  "Equipment",
  "Infection Control",
  "Orthodontics",
  "Implantology",
  "Lab Supplies",
  "Office Supplies",
]

const brands = [
  "3M",
  "Dentsply Sirona",
  "Henry Schein",
  "Hu-Friedy",
  "Kerr",
  "Ivoclar Vivadent",
  "Nobel Biocare",
  "Planmeca",
  "Straumann",
]

export function StoreSidebar({ onBrandFilter }: { onBrandFilter: (brands: string[]) => void }) {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const filteredBrands = brands.filter((brand) => brand.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) => {
      const newSelection = prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
      onBrandFilter(newSelection)
      return newSelection
    })
  }

  return (
    <aside className="w-full md:w-64 flex-shrink-0 mb-6 md:mb-0">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ScrollArea className="h-[300px] md:h-[calc(100vh-200px)]">
        <div className="space-y-2">
          {categories.map((category) => (
            <Button key={category} variant="ghost" className="w-full justify-start text-left font-normal">
              {category}
            </Button>
          ))}
        </div>
      </ScrollArea>

      <h2 className="text-lg font-semibold mb-4">Brands</h2>
      <Input
        type="search"
        placeholder="Search brands..."
        className="mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ScrollArea className="h-[300px] md:h-[calc(100vh-200px)]">
        <div className="space-y-2">
          {filteredBrands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={brand}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => handleBrandChange(brand)}
              />
              <Label htmlFor={brand}>{brand}</Label>
            </div>
          ))}
        </div>
      </ScrollArea>
    </aside>
  )
}

