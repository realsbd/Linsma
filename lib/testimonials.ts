import { createServerSupabaseClient } from "@/lib/supabase"

export type Testimonial = {
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

// Fallback testimonial data
const fallbackTestimonials: Testimonial[] = [
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
  },
]

export async function getTestimonials(limit = 4, featured = false): Promise<Testimonial[]> {
  try {
    const supabase = createServerSupabaseClient()

    // Check if the testimonials table exists
    const { error: tableCheckError } = await supabase.from("testimonials").select("id").limit(1).maybeSingle()

    // If table doesn't exist, return fallback data
    if (tableCheckError && tableCheckError.message.includes("does not exist")) {
      console.log("Testimonials table does not exist, using fallback data")

      // Filter and limit the fallback data
      let filteredTestimonials = fallbackTestimonials
      if (featured) {
        filteredTestimonials = fallbackTestimonials.filter((t) => t.is_featured)
      }

      return filteredTestimonials.slice(0, limit)
    }

    let query = supabase
      .from("testimonials")
      .select("id, name, role, university, country, testimonial, rating, is_featured, image")
      .order("created_at", { ascending: false })

    if (featured) {
      query = query.eq("is_featured", true)
    }

    if (limit > 0) {
      query = query.limit(limit)
    }

    const { data, error } = await query

    if (error) {
      console.error("Error fetching testimonials:", error)
      return fallbackTestimonials.slice(0, limit)
    }

    return data as Testimonial[]
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return fallbackTestimonials.slice(0, limit)
  }
}

export async function getFeaturedTestimonials(limit = 4): Promise<Testimonial[]> {
  return getTestimonials(limit, true)
}
