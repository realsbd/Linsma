"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const mediaItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Media Item ${i + 1}`,
  caption: i % 2 === 0 ? "Event Highlights" : "Behind the Scenes",
}))

export default function MediaPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div className="flex flex-col">
      <section className="section bg-white">
        <div className="container mx-auto">
          <h1 className="mb-4 text-center">Media Gallery</h1>
          <p className="mx-auto mb-12 max-w-3xl text-center">
            Browse through our collection of images and videos that capture our journey, events, and milestones.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {mediaItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=Media ${item.id}`}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selectedImage !== null && (
            <div className="relative h-[70vh]">
              <Image
                src={`/placeholder.svg?height=800&width=1200&text=Media ${selectedImage}`}
                alt={`Media ${selectedImage}`}
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
