import { type NextRequest, NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase"

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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const featured = searchParams.get("featured") === "true"
  const limit = Number.parseInt(searchParams.get("limit") || "4", 10)

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

      return NextResponse.json(filteredTestimonials.slice(0, limit))
    }

    // If table exists, query it
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
      return NextResponse.json(fallbackTestimonials.slice(0, limit))
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in testimonials API route:", error)
    return NextResponse.json(fallbackTestimonials.slice(0, limit))
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    const body = await request.json()

    // Check if the testimonials table exists
    const { error: tableCheckError } = await supabase.from("testimonials").select("id").limit(1).maybeSingle()

    // If table doesn't exist, create it
    if (tableCheckError && tableCheckError.message.includes("does not exist")) {
      // Execute the SQL to create the table
      const { error: createTableError } = await supabase.rpc("create_testimonials_table")

      if (createTableError) {
        console.error("Error creating testimonials table:", createTableError)
        return NextResponse.json({ error: "Failed to create testimonials table" }, { status: 500 })
      }
    }

    // Insert the new testimonial
    const { data, error } = await supabase
      .from("testimonials")
      .insert([
        {
          name: body.name,
          role: body.role,
          university: body.university,
          country: body.country,
          testimonial: body.testimonial,
          rating: body.rating,
          is_featured: body.is_featured,
          image: body.image || null,
        },
      ])
      .select()
      .single()

    if (error) {
      console.error("Error adding testimonial:", error)
      return NextResponse.json({ error: "Failed to add testimonial" }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in testimonials API route:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 })
  }

  try {
    const supabase = createServerSupabaseClient()

    const { error } = await supabase.from("testimonials").delete().eq("id", id)

    if (error) {
      console.error("Error deleting testimonial:", error)
      return NextResponse.json({ error: "Failed to delete testimonial" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error in testimonials API route:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 })
  }

  try {
    const supabase = createServerSupabaseClient()
    const body = await request.json()

    const { data, error } = await supabase.from("testimonials").update(body).eq("id", id).select().single()

    if (error) {
      console.error("Error updating testimonial:", error)
      return NextResponse.json({ error: "Failed to update testimonial" }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in testimonials API route:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
