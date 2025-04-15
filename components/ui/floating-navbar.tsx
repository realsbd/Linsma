"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: React.ReactNode
  }[]
  className?: string
}) => {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isScrolled ? 1 : 0,
        y: isScrolled ? 0 : -20,
        pointerEvents: isScrolled ? "auto" : "none",
      }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full border border-white/20 bg-black/70 px-4 py-2 backdrop-blur-md",
        className,
      )}
    >
      <nav className="flex items-center gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.link

          return (
            <Link
              key={item.name}
              href={item.link}
              className={cn(
                "relative flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-white transition-colors hover:text-white/80",
                isActive && "text-white",
              )}
            >
              {item.icon && <span className="h-4 w-4">{item.icon}</span>}
              <span>{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          )
        })}
      </nav>
    </motion.div>
  )
}
