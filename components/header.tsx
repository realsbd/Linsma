"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Home, BookOpen, Briefcase, Users, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { MagneticButton } from "@/components/ui/magnetic"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import { usePathname } from "next/navigation"

const navLinks = [
  {
    name: "Our services",
    href: "#",
    dropdown: [
      { name: "Education", href: "/services/education" },
      { name: "Consultancy", href: "/services/consultancy" },
      { name: "Language", href: "/services/language" },
      { name: "Comprehensive Support", href: "/comprehensive-support" },
    ],
  },
  {
    name: "Study abroad",
    href: "#",
    dropdown: [
      { name: "Study in Europe", href: "/study-abroad/europe" },
      { name: "Study in America", href: "/study-abroad/america" },
      { name: "Study in Asia", href: "/study-abroad/asia" },
    ],
  },
  { name: "About us", href: "/About" },
  { name: "Mission & Vision", href: "/mission" },
  { name: "Contact us", href: "/contact" },
  { name: "Blog", href: "/blog" },
]

const floatingNavItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "Services", link: "/services", icon: <Briefcase className="h-4 w-4" /> },
  { name: "Study Abroad", link: "/study-abroad", icon: <BookOpen className="h-4 w-4" /> },
  { name: "Mission", link: "/mission", icon: <Globe className="h-4 w-4" /> },
  { name: "About", link: "/About", icon: <Users className="h-4 w-4" /> },
  { name: "Contact", link: "/contact", icon: <Mail className="h-4 w-4" /> },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown) {
        const dropdownRef = dropdownRefs.current[activeDropdown]
        if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
          setActiveDropdown(null)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeDropdown])

  return (
    <>
      <motion.header
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300",
          scrolled ? "bg-white/90 backdrop-blur-md border-gray-200 shadow-sm" : "bg-[#e8f4fa] border-transparent",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center">
            <motion.div className="relative h-12 w-12" whileHover={{ rotate: 5 }} transition={{ duration: 0.2 }}>
              <Image src="/images/linsma-logo.png" alt="Linsma Impact Logo" width={48} height={48} />
            </motion.div>
            <motion.span
              className="ml-2 text-lg font-bold text-[#003763]"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              LINSMA IMPACT
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                ref={(el) => {
                  if (link.dropdown) {
                    dropdownRefs.current[link.name] = el
                  }
                }}
                onMouseEnter={() => link.dropdown && setHoveredDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setHoveredDropdown(null)}
              >
                {link.dropdown ? (
                  <div>
                    <button
                      className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-[#003763]"
                      onClick={() => toggleDropdown(link.name)}
                      aria-expanded={activeDropdown === link.name}
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "ml-1 h-4 w-4 transition-transform duration-200",
                          activeDropdown === link.name || hoveredDropdown === link.name ? "rotate-180" : "",
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {(activeDropdown === link.name || hoveredDropdown === link.name) && (
                        <motion.div
                          className="absolute left-0 top-full z-50 mt-1 w-56 rounded-md bg-white p-2 shadow-lg"
                          initial={{ opacity: 0, y: 10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: 10, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.dropdown.map((item) => (
                            <motion.div key={item.name} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                              <Link
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                onClick={() => {
                                  setActiveDropdown(null)
                                  setHoveredDropdown(null)
                                }}
                              >
                                {item.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-[#003763]",
                      pathname === link.href ? "bg-gray-100 text-[#003763]" : "text-gray-700",
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticButton strength={20}>
              <Button
                asChild
                className="bg-[#003763] hover:bg-[#002a4a] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle menu</span>
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="absolute left-0 right-0 top-16 z-50 bg-white md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.dropdown ? (
                        <>
                          <button
                            className="flex items-center justify-between w-full text-sm font-medium text-gray-700 transition-colors hover:text-[#003763]"
                            onClick={() => toggleDropdown(link.name)}
                            aria-expanded={activeDropdown === link.name}
                          >
                            {link.name}
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform duration-200",
                                activeDropdown === link.name ? "rotate-180" : "",
                              )}
                            />
                          </button>

                          <AnimatePresence>
                            {activeDropdown === link.name && (
                              <motion.div
                                className="mt-2 ml-4 space-y-2"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {link.dropdown.map((item, idx) => (
                                  <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                  >
                                    <Link
                                      href={item.href}
                                      className="block text-sm text-gray-600 hover:text-[#003763] transition-colors duration-200"
                                      onClick={() => {
                                        setMobileMenuOpen(false)
                                        setActiveDropdown(null)
                                      }}
                                    >
                                      {item.name}
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          className={cn(
                            "text-sm font-medium transition-colors hover:text-[#003763]",
                            pathname === link.href ? "text-[#003763]" : "text-gray-700",
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                  >
                    <Button
                      asChild
                      className="bg-[#003763] hover:bg-[#002a4a] w-full mt-4 transition-colors duration-300"
                    >
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Floating Navigation for Mobile */}
      <FloatingNavbar navItems={floatingNavItems} className="md:hidden" />
    </>
  )
}
