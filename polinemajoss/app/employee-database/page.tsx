import { AppSidebar } from "../../components/ui/app-sidebar"
import { SiteHeader } from "../../components/ui/site-header"
import { SidebarInset, SidebarProvider } from "../../components/ui/sidebar"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Card, CardContent } from "../../components/ui/card"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { Toggle } from "../../components/ui/toggle"
import { Download, Upload, Plus } from "lucide-react"

export default function EmployeeDatabase() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col p-4 gap-4">
          {/* Top Summary Section */}
          <div className="grid grid-cols-4 gap-5">
            <Card className="col-span-2 w-[95vh] flex-row justify-between pl-10 pr-10">
              <CardContent className="p-4">
                <h3 className="text-sm text-muted-foreground">Periode</h3>
                <p className="text-lg font-semibold">Bulan Tahun</p>
              </CardContent>
              <hr style={{ border: "1px solid #ccc", margin: "8px 0" }} />
              <CardContent className="p-4">
                <h3 className="text-sm text-muted-foreground">Total Employee</h3>
                <p className="text-lg font-semibold">208</p>
              </CardContent>
              <hr className="border border-gray-300 my-4" />
              <CardContent className="p-4">
                <h3 className="text-sm text-muted-foreground">Total New Hire</h3>
                <p className="text-lg font-semibold">20</p>
              </CardContent>
              <hr className="border border-gray-300 my-4" />
              <CardContent className="p-4">
                <h3 className="text-sm text-muted-foreground">Full Time Employee</h3>
                <p className="text-lg font-semibold">20</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            {/* Table Section */}
            <Table className="ml-8 mr-8">
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}