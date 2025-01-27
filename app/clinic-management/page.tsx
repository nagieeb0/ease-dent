import { SiteHeader } from "@/components/site-header"
import { Sidebar } from "@/components/clinic-management/sidebar"
import { DashboardHeader } from "@/components/clinic-management/dashboard-header"
import { AppointmentCalendar } from "@/components/clinic-management/appointment-calendar"
import { PatientList } from "@/components/clinic-management/patient-list"
import { FinancialSummary } from "@/components/clinic-management/financial-summary"
import { InventoryManagement } from "@/components/clinic-management/inventory-management"
import { TreatmentPlanner } from "@/components/clinic-management/treatment-planner"

export default function ClinicManagementPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="flex-1 flex flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 p-4 md:p-8 md:ml-64">
          <DashboardHeader />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2">
              <AppointmentCalendar />
            </div>
            <PatientList />
            <FinancialSummary />
            <InventoryManagement />
            <div className="lg:col-span-2">
              <TreatmentPlanner />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

