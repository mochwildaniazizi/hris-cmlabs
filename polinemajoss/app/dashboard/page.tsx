'use client';
import { AppSidebar } from "../../components/ui/app-sidebar"
import { ChartAreaInteractive } from "../../components/ui/chart-area-interactive"
import { DataTable } from "../../components/ui/data-table"
import { SectionCards } from "../../components/ui/section-card"
import { SiteHeader } from "../../components/ui/site-header"
import { SidebarInset, SidebarProvider } from "../../components/ui/sidebar"
import data from "./data.json"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import api from "../../lib/axios"

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/api/user") // endpoint user Sanctum
      } catch {
        router.push("/signin")
      }
    }

    checkAuth()
  }, [])
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}