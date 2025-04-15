"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateUserForm() {
  const [message, setMessage] = useState("")
  const router = useRouter()

  async function handleCreateUser(formData: FormData) {
    setMessage("")

    const email = formData.get("email")
    const password = formData.get("password")

    if (!email || !password) {
      setMessage("Please enter an email and password")
      return
    }

    const res = await fetch("/api/create-user", {
      method: "POST",
      body: formData,
    })

    if (res.ok) {
      router.refresh()
    } else {
      const data = await res.json()
      setMessage(data.error || "Something went wrong")
    }
  }

  return (
    <form action={handleCreateUser} className="flex flex-col space-y-4">
      {message && <p className="text-red-500">{message}</p>}
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" className="border rounded p-2" required />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" className="border rounded p-2" required />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
        Create User
      </button>
    </form>
  )
}
