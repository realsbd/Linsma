"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Search, Calendar, Clock, Tag, ChevronLeft, ChevronRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right University Abroad",
    excerpt:
      "Learn the key factors to consider when selecting a university in another country that aligns with your academic goals and career aspirations.",
    date: "March 31, 2025",
    category: "Study Advice",
    readTime: "5 min read",
    image: "/placeholder.svg?height=300&width=500&text=University+Choice",
  },
  {
    id: 2,
    title: "Scholarship Opportunities for International Students",
    excerpt:
      "Discover various scholarship programs available for students looking to study abroad, including application tips and deadlines.",
    date: "March 25, 2025",
    category: "Scholarships",
    readTime: "7 min read",
    image: "/placeholder.svg?height=300&width=500&text=Scholarships",
  },
  {
    id: 3,
    title: "Navigating Student Visa Applications",
    excerpt:
      "A comprehensive guide to understanding and successfully completing student visa applications for different countries.",
    date: "March 20, 2025",
    category: "Visa Guide",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=500&text=Visa+Applications",
  },
  {
    id: 4,
    title: "Cultural Adaptation: Thriving in a New Country",
    excerpt:
      "Tips and strategies for adapting to a new culture, making friends, and creating a fulfilling experience while studying abroad.",
    date: "March 15, 2025",
    category: "Student Life",
    readTime: "6 min read",
    image: "/placeholder.svg?height=300&width=500&text=Cultural+Adaptation",
  },
  {
    id: 5,
    title: "Top Universities in Europe for International Students",
    excerpt:
      "An overview of the best universities in Europe that offer excellent programs and support services for international students.",
    date: "March 10, 2025",
    category: "University Guide",
    readTime: "9 min read",
    image: "/placeholder.svg?height=300&width=500&text=European+Universities",
  },
  {
    id: 6,
    title: "Budgeting for Your Study Abroad Experience",
    excerpt:
      "Learn how to create a realistic budget for your study abroad journey, including tuition, accommodation, food, and leisure activities.",
    date: "March 5, 2025",
    category: "Financial Planning",
    readTime: "7 min read",
    image: "/placeholder.svg?height=300&width=500&text=Budgeting",
  },
  {
    id: 7,
    title: "Language Learning Tips for International Students",
    excerpt: "Effective strategies to improve your language skills before and during your study abroad experience.",
    date: "February 28, 2025",
    category: "Language",
    readTime: "5 min read",
    image: "/placeholder.svg?height=300&width=500&text=Language+Learning",
  },
  {
    id: 8,
    title: "Healthcare Systems Around the World: What Students Should Know",
    excerpt:
      "Important information about healthcare systems in popular study abroad destinations and how to navigate them as an international student.",
    date: "February 23, 2025",
    category: "Health & Safety",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=500&text=Healthcare+Systems",
  },
  {
    id: 9,
    title: "Post-Graduation Work Opportunities Abroad",
    excerpt: "Explore work opportunities available to international students after graduation in various countries.",
    date: "February 18, 2025",
    category: "Career Planning",
    readTime: "6 min read",
    image: "/placeholder.svg?height=300&width=500&text=Work+Opportunities",
  },
]

const categories = [
  "All Categories",
  "Study Advice",
  "Scholarships",
  "Visa Guide",
  "Student Life",
  "University Guide",
  "Financial Planning",
  "Language",
  "Health & Safety",
  "Career Planning",
]

export default function BlogPage() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0])

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Filter posts based on search query and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <section className="relative bg-[#002a4a] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200&text=Pattern')] bg-repeat opacity-5"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <TextReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Blog</h1>
          </TextReveal>
          <ScrollReveal>
            <p className="text-xl text-center text-white/80 max-w-2xl mx-auto">
              Insights, tips, and stories about studying abroad and international education
            </p>
          </ScrollReveal>

          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border-none bg-white/10 px-6 py-3 pl-12 text-white placeholder:text-white/60 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              />
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category ? "bg-white text-[#002a4a]" : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white" ref={targetRef}>
        <div className="container mx-auto">
          <motion.div style={{ opacity, y }}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Featured+Blog+Post"
                  alt="Featured blog post"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block rounded-full bg-[#4ca3d8] px-3 py-1 text-xs font-medium text-white mb-2">
                    Featured
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-2">The Complete Guide to Studying Abroad in 2025</h2>
                  <div className="flex items-center text-white/80 text-sm">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span className="mr-4">April 1, 2025</span>
                    <Clock className="mr-1 h-4 w-4" />
                    <span>12 min read</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <span className="inline-block rounded-full bg-[#e8f4fa] px-3 py-1 text-sm font-medium text-[#003763]">
                  Featured Article
                </span>
                <h2 className="text-3xl font-bold text-[#002a4a]">The Complete Guide to Studying Abroad in 2025</h2>
                <p className="text-gray-600">
                  Everything you need to know about planning your study abroad journey, from choosing the right program
                  and university to preparing for your departure and making the most of your experience.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span className="mr-4">April 1, 2025</span>
                  <Clock className="mr-1 h-4 w-4" />
                  <span>12 min read</span>
                </div>
                <p className="text-gray-600">
                  This comprehensive guide covers visa requirements, scholarship opportunities, accommodation options,
                  cultural adaptation strategies, and much more to ensure you're fully prepared for your international
                  education journey.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild className="bg-[#003763] hover:bg-[#002a4a] transition-all duration-300">
                    <Link href="/blog/complete-guide-studying-abroad-2025" className="flex items-center">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-[#f9f9f9]">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center text-[#002a4a] mb-12">
              {selectedCategory === "All Categories" ? "Latest Articles" : selectedCategory}
            </h2>
          </ScrollReveal>

          {currentPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentPosts.map((post, index) => (
                <ScrollReveal key={post.id} direction="up" delay={index * 0.1}>
                  <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                    <Card className="overflow-hidden h-full">
                      <div className="relative h-48 w-full">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#003763]">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                        <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h3 className="mb-3 text-xl font-semibold line-clamp-2">{post.title}</h3>
                        <p className="mb-4 text-sm text-gray-600 flex-grow line-clamp-3">{post.excerpt}</p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-auto">
                          <Button
                            asChild
                            variant="outline"
                            className="w-full border-[#003763] text-[#003763] hover:bg-[#003763] hover:text-white transition-all duration-300"
                          >
                            <Link href={`/blog/${post.id}`} className="flex items-center justify-center">
                              Read More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">We couldn't find any articles matching your search criteria.</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All Categories")
                }}
                className="bg-[#003763] hover:bg-[#002a4a] transition-all duration-300"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > postsPerPage && (
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="h-9 w-9 rounded-full transition-all duration-300"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous page</span>
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="icon"
                    onClick={() => setCurrentPage(page)}
                    className={`h-9 w-9 rounded-full transition-all duration-300 ${
                      currentPage === page
                        ? "bg-[#003763] hover:bg-[#002a4a]"
                        : "hover:bg-[#e8f4fa] hover:text-[#003763]"
                    }`}
                  >
                    {page}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="h-9 w-9 rounded-full transition-all duration-300"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next page</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#003763] text-white">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="mb-6 text-white/80">
                Stay updated with the latest study abroad opportunities, tips, and insights delivered directly to your
                inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none focus:ring-0 transition-all duration-300"
                  required
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-[#4ca3d8] hover:bg-[#3a8bc0] transition-colors duration-300 whitespace-nowrap">
                    Subscribe
                  </Button>
                </motion.div>
              </form>
              <p className="mt-4 text-sm text-white/60">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center text-[#002a4a] mb-12">Browse by Category</h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.slice(1).map((category, index) => (
              <ScrollReveal key={category} direction="up" delay={index * 0.05}>
                <motion.button
                  whileHover={{ y: -5, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    setSelectedCategory(category)
                    setCurrentPage(1) // Reset to first page when changing category
                  }}
                  className="w-full cursor-pointer"
                >
                  <div
                    className={`rounded-lg bg-[#e8f4fa] p-4 text-center h-full flex flex-col items-center justify-center transition-all duration-300 ${
                      selectedCategory === category ? "ring-2 ring-[#003763]" : ""
                    }`}
                  >
                    <Tag className="h-8 w-8 mb-2 text-[#003763]" />
                    <h3 className="font-medium text-[#003763]">{category}</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {filteredPosts.filter((post) => post.category === category).length} Articles
                    </p>
                  </div>
                </motion.button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
