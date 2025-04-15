"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export const LoadingDots = ({
  color = "currentColor",
  size = "1rem",
  className,
}: {
  color?: string
  size?: string
  className?: string
}) => {
  return (
    <div className={cn("flex items-center space-x-1", className)}>
      {[0, 1, 2].map((dot) => (
        <motion.div
          key={dot}
          style={{
            width: size,
            height: size,
            backgroundColor: color,
          }}
          className="rounded-full"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: dot * 0.1,
          }}
        />
      ))}
    </div>
  )
}
