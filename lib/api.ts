// API utility functions for Flask backend integration

/**
 * Base API URL - change this to match your Flask backend
 */
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

/**
 * Generic fetch function with error handling
 */
export async function fetchFromAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`

  const defaultHeaders = {
    "Content-Type": "application/json",
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || `API error: ${response.status}`)
  }

  return response.json()
}

/**
 * Get study destinations
 */
export async function getStudyDestinations() {
  return fetchFromAPI<any[]>("/destinations")
}

/**
 * Get services
 */
export async function getServices() {
  return fetchFromAPI<any[]>("/services")
}

/**
 * Get blog posts
 */
export async function getBlogPosts(page = 1, limit = 10) {
  return fetchFromAPI<{ posts: any[]; total: number }>(`/blog?page=${page}&limit=${limit}`)
}

/**
 * Get blog post by slug
 */
export async function getBlogPostBySlug(slug: string) {
  return fetchFromAPI<any>(`/blog/${slug}`)
}

/**
 * Submit contact form
 */
export async function submitContactForm(formData: any) {
  return fetchFromAPI("/contact", {
    method: "POST",
    body: JSON.stringify(formData),
  })
}

/**
 * Submit application form
 */
export async function submitApplicationForm(formData: any) {
  return fetchFromAPI("/apply", {
    method: "POST",
    body: JSON.stringify(formData),
  })
}

/**
 * Get testimonials
 */
export async function getTestimonials() {
  return fetchFromAPI<any[]>("/testimonials")
}

/**
 * Get FAQs
 */
export async function getFAQs() {
  return fetchFromAPI<any[]>("/faqs")
}
