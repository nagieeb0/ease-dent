import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinancialSummary() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Financial Summary</CardTitle>
        <Button variant="outline" size="sm">
          Full Report
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <DollarSign className="h-5 w-5 text-green-500" />
            <div>
              <p className="text-sm font-medium">Today's Revenue</p>
              <p className="text-2xl font-bold">$1,250.00</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <div>
              <p className="text-sm font-medium">This Week</p>
              <p className="text-2xl font-bold">$7,890.00</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <TrendingDown className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-sm font-medium">Outstanding</p>
              <p className="text-2xl font-bold">$3,450.00</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

