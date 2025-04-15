"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export const TextReveal = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once })

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ staggerChildren: 0.1, delayChildren: delay }}
    >
      {typeof children === "string"
        ? children.split(" ").map((word, i) => (
            <motion.span key={i} className="mr-1 inline-block" variants={childVariants}>
              {word}
            </motion.span>
          ))
        : children}
    </motion.div>
  )
}
