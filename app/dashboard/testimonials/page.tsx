"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Loader2, Plus, Star, Trash2, Check } from "lucide-react"

type Testimonial = {
  id: number
  name: string
  role: string
  university: string
  country: string
  testimonial: string
  rating: number
  is_featured: boolean
  image?: string
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    university: "",
    country: "",
    testimonial: "",
    rating: 5,
    is_featured: false,
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/testimonials?limit=100")
      if (!response.ok) {
        throw new Error("Failed to fetch testimonials")
      }
      const data = await response.json()
      setTestimonials(data)
    } catch (error) {
      console.error("Error fetching testimonials:", error)
      setError("Failed to load testimonials")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    setSuccess("")

    try {
      const response = await fetch("/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to add testimonial")
      }

      setSuccess("Testimonial added successfully!")
      setFormData({
        name: "",
        role: "",
        university: "",
        country: "",
        testimonial: "",
        rating: 5,
        is_featured: false,
      })
      setShowForm(false)
      fetchTestimonials()
    } catch (error) {
      console.error("Error adding testimonial:", error)
      setError("Failed to add testimonial")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) {
      return
    }

    try {
      const response = await fetch(`/api/testimonials?id=${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete testimonial")
      }

      setSuccess("Testimonial deleted successfully!")
      fetchTestimonials()
    } catch (error) {
      console.error("Error deleting testimonial:", error)
      setError("Failed to delete testimonial")
    }
  }

  const handleToggleFeatured = async (id: number, featured: boolean) => {
    try {
      const response = await fetch(`/api/testimonials?id=${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ is_featured: !featured }),
      })

      if (!response.ok) {
        throw new Error("Failed to update testimonial")
      }

      setSuccess("Testimonial updated successfully!")
      fetchTestimonials()
    } catch (error) {
      console.error("Error updating testimonial:", error)
      setError("Failed to update testimonial")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Testimonials</h1>
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? (
            "Cancel"
          ) : (
            <>
              <Plus className="mr-2 h-4 w-4" /> Add Testimonial
            </>
          )}
        </Button>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">{error}</div>}

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative">{success}</div>
      )}

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Testimonial</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" name="role" value={formData.role} onChange={handleInputChange} required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="university">University</Label>
                  <Input
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" name="country" value={formData.country} onChange={handleInputChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="testimonial">Testimonial</Label>
                <Textarea
                  id="testimonial"
                  name="testimonial"
                  value={formData.testimonial}
                  onChange={handleInputChange}
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="rating">Rating</Label>
                  <Select
                    value={formData.rating.toString()}
                    onValueChange={(value) => handleSelectChange("rating", Number.parseInt(value, 10))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select rating" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <SelectItem key={rating} value={rating.toString()}>
                          {rating} {rating === 1 ? "Star" : "Stars"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2 pt-8">
                  <Switch
                    id="is_featured"
                    checked={formData.is_featured}
                    onCheckedChange={(checked) => handleSwitchChange("is_featured", checked)}
                  />
                  <Label htmlFor="is_featured">Featured Testimonial</Label>
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  "Add Testimonial"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        </div>
      ) : testimonials.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No testimonials found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className={testimonial.is_featured ? "border-yellow-300" : ""}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">
                      {testimonial.role} • {testimonial.university}, {testimonial.country}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleToggleFeatured(testimonial.id, testimonial.is_featured)}
                      title={testimonial.is_featured ? "Remove from featured" : "Add to featured"}
                    >
                      <Star className={`h-4 w-4 ${testimonial.is_featured ? "fill-yellow-400 text-yellow-400" : ""}`} />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDelete(testimonial.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete testimonial"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm mb-4">"{testimonial.testimonial}"</p>
                <div className="flex text-yellow-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                {testimonial.is_featured && (
                  <div className="mt-2 flex items-center text-xs text-yellow-600">
                    <Check className="h-3 w-3 mr-1" /> Featured testimonial
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
