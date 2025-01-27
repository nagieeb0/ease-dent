import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package2, AlertTriangle } from "lucide-react"

const inventoryItems = [
  { name: "Dental Implants", stock: 50, status: "In Stock" },
  { name: "Composite Resin", stock: 10, status: "Low Stock" },
  { name: "Surgical Gloves", stock: 500, status: "In Stock" },
  { name: "Anesthetic", stock: 5, status: "Critical" },
]

export function InventoryManagement() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Inventory Management</CardTitle>
        <Package2 className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {inventoryItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm font-medium">{item.name}</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">{item.stock} units</span>
                <Badge
                  variant={
                    item.status === "In Stock" ? "default" : item.status === "Low Stock" ? "warning" : "destructive"
                  }
                >
                  {item.status}
                </Badge>
                {item.status !== "In Stock" && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

