"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { type ReactNode, useRef } from "react"

export const MagneticButton = ({
  children,
  className,
  strength = 30,
}: {
  children: ReactNode
  className?: string
  strength?: number
}) => {
  const ref = useRef<HTMLButtonElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    const moveX = ((e.clientX - centerX) / (width / 2)) * strength
    const moveY = ((e.clientY - centerY) / (height / 2)) * strength

    x.set(moveX)
    y.set(moveY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const rotateX = useTransform(springY, [-strength, strength], [5, -5])
  const rotateY = useTransform(springX, [-strength, strength], [-5, 5])

  return (
    <motion.button
      ref={ref}
      className={cn("relative", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}
