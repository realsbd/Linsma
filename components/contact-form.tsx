"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    interest: "",
    budget: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We'll contact you soon.")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      education: "",
      interest: "",
      budget: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-[#e8f4fa] p-6 rounded-lg">
      <div>
        <Input
          type="text"
          placeholder="First name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="bg-white"
        />
      </div>

      <div>
        <Input
          type="text"
          placeholder="Last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="bg-white"
        />
      </div>

      <div>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-white"
        />
      </div>

      <div>
        <Input
          type="tel"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="bg-white"
        />
      </div>

      <div>
        <Select onValueChange={(value) => handleSelectChange("education", value)}>
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="Highest educational qualification" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high-school">High School</SelectItem>
            <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
            <SelectItem value="masters">Master's Degree</SelectItem>
            <SelectItem value="phd">PhD</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Select onValueChange={(value) => handleSelectChange("interest", value)}>
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="What area are you interested?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="undergraduate">Undergraduate Studies</SelectItem>
            <SelectItem value="postgraduate">Postgraduate Studies</SelectItem>
            <SelectItem value="language">Language Programs</SelectItem>
            <SelectItem value="research">Research Opportunities</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Select onValueChange={(value) => handleSelectChange("budget", value)}>
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="Your study budget" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10000-20000">$10,000 - $20,000</SelectItem>
            <SelectItem value="20000-30000">$20,000 - $30,000</SelectItem>
            <SelectItem value="30000-50000">$30,000 - $50,000</SelectItem>
            <SelectItem value="50000+">$50,000+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full bg-[#003763] hover:bg-[#002a4a]">
        Submit
      </Button>
    </form>
  )
}
