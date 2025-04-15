"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useRef, useState } from "react"
import { motion } from "framer-motion"

export const Card3D = ({
  children,
  className,
  containerClassName,
  cardClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  cardClassName?: string
}) => {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [scale, setScale] = useState(1)

  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const { left, top, width, height } = card.getBoundingClientRect()

    const x = (e.clientX - left - width / 2) / 25
    const y = (e.clientY - top - height / 2) / 25

    setRotateX(-y)
    setRotateY(x)
  }

  const handleMouseEnter = () => {
    setScale(1.05)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setScale(1)
  }

  return (
    <div
      className={cn("relative", containerClassName)}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={cn("relative h-full w-full", className)}
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX,
          rotateY,
          scale,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 1,
        }}
      >
        <div className={cn("h-full w-full rounded-xl", cardClassName)}>{children}</div>
      </motion.div>
    </div>
  )
}
