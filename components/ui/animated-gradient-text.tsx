"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export const AnimatedGradientText = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <motion.span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-[#003763] via-[#4ca3d8] to-[#003763] bg-[length:400%_100%]",
        className,
      )}
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    >
      {children}
    </motion.span>
  )
}
