"use client"

import { createServerSupabaseClient } from "@/lib/supabase"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from "@/hooks/use-toast"
import { Search, RefreshCw, MoreHorizontal, Mail, User } from "lucide-react"
import CreateUserForm from "@/components/create-user-form"

export default function AdminUsersPage() {
  const [adminUsers, setAdminUsers] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  const fetchAdminUsers = async () => {
    setIsLoading(true)
    try {
      const supabase = createServerSupabaseClient()

      // Fetch all admin users
      const { data, error } = await supabase.from("admin_users").select(`*, users(*)`)

      if (error) {
        console.error("Error fetching admin users:", error)
        toast({
          title: "Error",
          description: "Failed to fetch admin users",
          variant: "destructive",
        })
        return
      }

      setAdminUsers(data || [])
    } catch (error) {
      console.error("Error in fetchAdminUsers:", error)
      toast({
        title: "Error",
        description: "Failed to fetch admin users",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAdminUsers()
  }, [])

  const filteredAdminUsers = adminUsers.filter(
    (adminUser) =>
      adminUser.users?.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (adminUser.users?.full_name && adminUser.users?.full_name.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admin Users</h1>
        <Button onClick={fetchAdminUsers} variant="outline" size="sm">
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Add New User</CardTitle>
          </CardHeader>
          <CardContent>
            <CreateUserForm />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Admin Users List</CardTitle>
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search admin users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex h-64 items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#003763] border-t-transparent"></div>
              </div>
            ) : filteredAdminUsers.length > 0 ? (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAdminUsers.map((adminUser) => (
                      <TableRow key={adminUser.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f4fa]">
                              <User className="h-4 w-4 text-[#003763]" />
                            </div>
                            <span>{adminUser.users?.full_name || "N/A"}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                            {adminUser.users?.email}
                          </div>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Remove Admin</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="flex h-64 flex-col items-center justify-center">
                <p className="text-muted-foreground">No admin users found</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
