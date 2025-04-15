"use client"

import { useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

export default function AnimatedCounter({
  value,
  direction = "up",
  formatValue = (value: number) => `${value.toLocaleString()}`,
  className,
}: {
  value: number
  direction?: "up" | "down"
  formatValue?: (value: number) => string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === "down" ? value : 0)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value)
    }
  }, [motionValue, isInView, value, direction])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = formatValue(direction === "down" ? value - Math.floor(latest) : Math.floor(latest))
      }
    })
  }, [springValue, formatValue, direction, value])

  return <span className={className} ref={ref} />
}
