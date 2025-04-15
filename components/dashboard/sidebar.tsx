"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Users, GraduationCap, Globe, Mail, FileText, Settings, Search, Home, ImageIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarInput,
} from "@/components/ui/sidebar"

// Make sure the navigation items are correct
const navigationItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    href: "/dashboard",
  },
  {
    title: "Users",
    icon: Users,
    href: "/dashboard/users",
  },
  {
    title: "Images",
    icon: ImageIcon,
    href: "/dashboard/images",
  },
  {
    title: "Applications",
    icon: FileText,
    href: "/dashboard/applications",
  },
  {
    title: "Programs",
    icon: GraduationCap,
    href: "/dashboard/programs",
    subItems: [
      { title: "Undergraduate", href: "/dashboard/programs/undergraduate" },
      { title: "Postgraduate", href: "/dashboard/programs/postgraduate" },
      { title: "Language", href: "/dashboard/programs/language" },
    ],
  },
  {
    title: "Destinations",
    icon: Globe,
    href: "/dashboard/destinations",
    subItems: [
      { title: "Europe", href: "/dashboard/destinations/europe" },
      { title: "America", href: "/dashboard/destinations/america" },
      { title: "Asia & Pacific", href: "/dashboard/destinations/asia" },
    ],
  },
  {
    title: "Inquiries",
    icon: Mail,
    href: "/dashboard/inquiries",
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>({})

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center px-2 py-3">
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-8 mr-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#003763] text-white text-xs font-bold">
                LI
              </span>
            </div>
            <span className="text-lg font-bold text-[#003763]">Linsma Admin</span>
          </Link>
        </div>
        <SidebarGroup className="py-0">
          <SidebarGroupContent className="relative">
            <Label htmlFor="search" className="sr-only">
              Search
            </Label>
            <SidebarInput id="search" placeholder="Search..." className="pl-8" />
            <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard"}>
                  <Link href="/dashboard">
                    <Home className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {navigationItems.map((item) => (
                <React.Fragment key={item.title}>
                  {item.subItems ? (
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        onClick={() => toggleGroup(item.title)}
                        isActive={pathname.startsWith(item.href)}
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={cn(
                            "ml-auto h-4 w-4 transition-transform",
                            openGroups[item.title] ? "rotate-180" : "",
                          )}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </SidebarMenuButton>

                      {openGroups[item.title] && (
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild isActive={pathname === subItem.href}>
                                <Link href={subItem.href}>{subItem.title}</Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      )}
                    </SidebarMenuItem>
                  ) : (
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive={pathname === item.href}>
                        <Link href={item.href}>
                          <item.icon className="mr-2 h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </React.Fragment>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard/settings"}>
                  <Link href="/dashboard/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 text-xs text-muted-foreground">
          <p>© 2025 Linsma Impact</p>
          <p>Version 1.0.0</p>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
