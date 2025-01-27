import { useState } from "react"
import { ProductCard } from "@/components/store/product-card"

const products = [
  {
    id: 1,
    name: "Digital X-Ray Sensor",
    price: 3999.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.5,
    reviews: 128,
    brand: "Dentsply Sirona",
  },
  {
    id: 2,
    name: "Dental Chair Unit",
    price: 8999.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.8,
    reviews: 256,
    brand: "Planmeca",
  },
  {
    id: 3,
    name: "Composite Filling Kit",
    price: 299.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.2,
    reviews: 75,
    brand: "3M",
  },
  {
    id: 4,
    name: "Autoclave Sterilizer",
    price: 1999.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
    reviews: 192,
    brand: "Henry Schein",
  },
  {
    id: 5,
    name: "Dental Implant System",
    price: 4999.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
    reviews: 320,
    brand: "Nobel Biocare",
  },
  {
    id: 6,
    name: "Teeth Whitening Kit",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.3,
    reviews: 412,
    brand: "Ivoclar Vivadent",
  },
]

export function ProductGrid({ selectedBrands }: { selectedBrands: string[] }) {
  const filteredProducts =
    selectedBrands.length > 0 ? products.filter((product) => selectedBrands.includes(product.brand)) : products

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

