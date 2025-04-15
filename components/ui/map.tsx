"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export const Map = ({
  address,
  zoom = 15,
  height = "400px",
  className,
}: {
  address: string
  zoom?: number
  height?: string
  className?: string
}) => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This is a placeholder for a real map implementation
    // In a real application, you would use a library like Google Maps, Mapbox, or Leaflet

    if (mapRef.current) {
      const mapElement = mapRef.current

      // Add a placeholder map with the address
      mapElement.innerHTML = `
        <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; flex-direction: column; background-color: #f0f0f0; color: #666;">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mb-4">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <div style="font-weight: 500; margin-bottom: 8px;">Map Placeholder</div>
          <div style="text-align: center; max-width: 80%;">${address}</div>
        </div>
      `
    }
  }, [address])

  return (
    <motion.div
      ref={mapRef}
      className={className}
      style={{ height, position: "relative" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  )
}
