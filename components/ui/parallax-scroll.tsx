"use client"

import type React from "react"

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export const ParallaxScroll = ({
  children,
  className,
  baseVelocity = 5,
}: {
  children: React.ReactNode
  className?: string
  baseVelocity?: number
}) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -baseVelocity * 100])

  return (
    <div ref={scrollRef} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}
