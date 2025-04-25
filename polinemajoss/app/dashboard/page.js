import { SidebarLayout } from "/components/ui/sidebar.tsx"

export default function DashboardPage() {
  return (
    <SidebarLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to your Dashboard!</h1>
        <p className="text-muted-foreground mt-2">This is your main panel content.</p>
      </div>
    </SidebarLayout>
  )
}
