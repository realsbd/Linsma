"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Twitter, Instagram, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !name) return

    setIsSubmitting(true)

    // Simulate API call to Flask backend
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")
      setName("")

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  return (
    <footer className="bg-[#003763] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=500&width=500&text=Pattern')] bg-repeat opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:px-6 relative z-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center p-1">
                  <Image src="/images/linsma-logo.png" alt="Linsma Impact Logo" width={40} height={40} />
                </div>
                <h3 className="ml-2 text-xl font-bold">Linsma Impact</h3>
              </div>
              <p className="text-white/80">
                A dynamic and visionary company dedicated to education, consultancy, language services, and general
                service delivery. Founded on innovation, integrity, and excellence.
              </p>
              <div className="flex space-x-3">
                <motion.a
                  href="https://www.instagram.com/linsmaimpact?igsh=MWZlY3YyNTEwZG1qeg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Instagram size={18} />
                </motion.a>
                <motion.a
                  href="https://x.com/linsmaimpact?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Twitter size={18} />
                </motion.a>
                <motion.a
                  href="mailto:linsmaimpact@gmail.com"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail size={18} />
                </motion.a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h3 className="mb-4 text-lg font-semibold border-b border-white/20 pb-2">Our Services</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/services/education"
                  className="hover:text-white/80 transition-colors duration-200 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Education
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/services/consultancy"
                  className="hover:text-white/80 transition-colors duration-200 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Consultancy
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/services/language"
                  className="hover:text-white/80 transition-colors duration-200 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Language
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/comprehensive-support"
                  className="hover:text-white/80 transition-colors duration-200 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Comprehensive Support
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/blog" className="hover:text-white/80 transition-colors duration-200 flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Blog
                </Link>
              </motion.li>
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <h3 className="mb-4 text-lg font-semibold border-b border-white/20 pb-2">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-white/70" />
                <a
                  href="mailto:linsmaimpact@gmail.com"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  linsmaimpact@gmail.com
                </a>
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <h3 className="mb-4 text-lg font-semibold border-b border-white/20 pb-2">Newsletter</h3>
            <p className="mb-4 text-sm text-white/80">
              Subscribe to our newsletter to get latest updates and news about study abroad opportunities.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 transition-all duration-300 focus:bg-white/20 pr-10"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              </div>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 transition-all duration-300 focus:bg-white/20"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-[#4ca3d8] hover:bg-[#3a8bc0] transition-colors duration-300 relative overflow-hidden"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center">
                    <svg
                      className="h-4 w-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Subscribed!
                  </span>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          </ScrollReveal>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Linsma Impact Limited. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-white/70">
            <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors duration-200">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
