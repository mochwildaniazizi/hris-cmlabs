"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Bell,
  Search,
  UserCircle,
  LogOut,
  CreditCard,
  BellIcon,
  UserCircleIcon
} from "lucide-react";
import { useAuth } from "../../lib/authContext";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "./dropdown-menu"; // sesuaikan path komponen dropdown-menu
import { SidebarTrigger } from "./sidebar";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/employee": "Employee",
  // sesuaikan route dan judul
}
export function SiteHeader() {
  const pathname = usePathname()
  const title = pageTitles[pathname] || "Page"

  const [search, setSearch] = useState("")
  

  return (
    <header className="w-full h-12 border-b flex items-center px-4 gap-4 bg-white">
      <SidebarTrigger className="-ml-1" />
      {/* Judul halaman */}
      <h1 className="text-lg font-semibold flex-shrink-0">{title}</h1>

      {/* Search Box */}
      <div className="flex items-center flex-1 max-w-md">
        <Search className="w-5 h-5 text-gray-400 mr-2" />
        <input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Notification Icon */}
      <button
        aria-label="Notifications"
        className="relative p-2 rounded hover:bg-gray-100"
      >
        <Bell className="w-6 h-6 text-gray-600" />
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
          3
        </span>
      </button>

      {/* User Section */}
      <div className="flex items-center gap-2 cursor-pointer">
        <UserCircle className="w-8 h-8 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">John Doe</span>
      </div>
    </header>
  )
}