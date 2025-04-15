"use server"

import { createServerSupabaseClient } from "@/lib/supabase"

type ContactFormData = {
  fullName: string
  email: string
  subject: string
  message: string
  phone?: string
  education?: string
  interest?: string
  budget?: string
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    const supabase = createServerSupabaseClient()
    const { fullName, email, subject, message, phone, education, interest, budget } = formData

    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          full_name: fullName,
          email,
          subject,
          message,
          phone: phone || null,
          education_level: education || null,
          interest_area: interest || null,
          budget_range: budget || null,
        },
      ])
      .select("id")
      .single()

    if (error) {
      console.error("Error submitting contact form:", error)
      return { success: false, message: "There was an error submitting your message. Please try again." }
    }

    return { success: true, message: "Your message has been submitted successfully!" }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { success: false, message: "There was an error submitting your message. Please try again." }
  }
}

type ApplicationFormData = {
  firstName: string
  lastName: string
  email: string
  phone?: string
  education: string
  interest: string
  country?: string
  budget?: string
  message?: string
}

export async function submitApplication(formData: ApplicationFormData) {
  try {
    const supabase = createServerSupabaseClient()
    const { firstName, lastName, email, phone, education, interest, country, budget, message } = formData

    const { data, error } = await supabase
      .from("student_applications")
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone: phone || null,
          education_level: education,
          interest_area: interest,
          destination_country: country || null,
          budget_range: budget || null,
          message: message || null,
        },
      ])
      .select("id")
      .single()

    if (error) {
      console.error("Error submitting application:", error)
      return { success: false, message: "There was an error submitting your application. Please try again." }
    }

    return { success: true, message: "Your application has been submitted successfully!" }
  } catch (error) {
    console.error("Error submitting application:", error)
    return { success: false, message: "There was an error submitting your application. Please try again." }
  }
}
