"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Card3D } from "@/components/ui/3d-card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

// Fallback testimonial data to use when database is unavailable
const fallbackTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Student",
    university: "Oxford University",
    country: "United Kingdom",
    testimonial:
      "The guidance I received throughout my application process was invaluable. From selecting the right program to securing a scholarship, Linsma was with me every step of the way.",
    rating: 5,
    is_featured: true,
    image: "/placeholder.svg?height=100&width=100&text=SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Graduate Student",
    university: "University of Toronto",
    country: "Canada",
    testimonial:
      "The language preparation program really helped me improve my English skills before starting my studies in Canada. I felt confident and prepared from day one.",
    rating: 5,
    is_featured: true,
    image: "/placeholder.svg?height=100&width=100&text=MC",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Undergraduate",
    university: "Technical University of Munich",
    country: "Germany",
    testimonial:
      "I never thought studying in Germany would be possible, but with Linsma's help, I navigated the application process and secured a place at my dream university.",
    rating: 5,
    is_featured: true,
    image: "/placeholder.svg?height=100&width=100&text=PS",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "PhD Candidate",
    university: "Stanford University",
    country: "United States",
    testimonial:
      "The personalized guidance I received for my PhD application was exceptional. Linsma helped me connect with the right professors and craft a compelling research proposal.",
    rating: 5,
    is_featured: true,
    image: "/placeholder.svg?height=100&width=100&text=JW",
  },
]

export function TestimonialsSection({
  featured = false,
  limit = 4,
  title = "What Our Students Say",
  subtitle = "Hear from students who have successfully achieved their study abroad dreams with our help.",
}: {
  featured?: boolean
  limit?: number
  title?: string
  subtitle?: string
}) {
  const [testimonials, setTestimonials] = useState(fallbackTestimonials)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // We'll use client-side fetching instead of direct database access
        const response = await fetch(`/api/testimonials?featured=${featured}&limit=${limit}`)

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials")
        }

        const data = await response.json()

        if (data && data.length > 0) {
          setTestimonials(data)
        }
      } catch (error) {
        console.error("Error loading testimonials:", error)
        // Keep using fallback testimonials
      } finally {
        setIsLoading(false)
      }
    }

    fetchTestimonials()
  }, [featured, limit])

  // Map role to emoji
  const roleToEmoji = (role: string): string => {
    const roleMap: Record<string, string> = {
      Student: "👨‍🎓",
      "Graduate Student": "👩‍🎓",
      Undergraduate: "🧑‍🎓",
      "PhD Candidate": "👩‍🔬",
      Researcher: "🔬",
      Professor: "👨‍🏫",
    }

    return roleMap[role] || "👤"
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-[#e8f4fa] px-3 py-1 text-sm font-medium text-[#003763] mb-4">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002a4a] mb-4">{title}</h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.slice(0, limit).map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} direction="up" delay={index * 0.1}>
              <Card3D>
                <Card className="h-full overflow-hidden">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center">
                      <div className="mr-3 h-12 w-12 overflow-hidden rounded-full bg-[#e8f4fa] flex items-center justify-center text-xl">
                        <span role="img" aria-label={testimonial.role}>
                          {roleToEmoji(testimonial.role)}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-base font-medium">{testimonial.name}</h4>
                        <p className="text-xs text-gray-500">
                          {testimonial.role} • {testimonial.university}
                        </p>
                      </div>
                    </div>
                    <p className="mb-4 text-sm text-gray-600">"{testimonial.testimonial}"</p>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
