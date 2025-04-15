"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, ImageIcon, Check } from "lucide-react"
import Image from "next/image"
import { uploadImage } from "@/actions/image-actions"
import { toast } from "@/hooks/use-toast"

interface ImageUploaderProps {
  onImageUploaded: (url: string) => void
  currentImageUrl?: string
  folder?: string
  maxSizeMB?: number
  aspectRatio?: string
  className?: string
}

export function ImageUploader({
  onImageUploaded,
  currentImageUrl,
  folder = "general",
  maxSizeMB = 5,
  aspectRatio,
  className,
}: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentImageUrl || null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const maxSizeBytes = maxSizeMB * 1024 * 1024 // Convert MB to bytes

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file size
    if (file.size > maxSizeBytes) {
      toast({
        title: "File too large",
        description: `Maximum file size is ${maxSizeMB}MB`,
        variant: "destructive",
      })
      return
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive",
      })
      return
    }

    // Create preview
    const objectUrl = URL.createObjectURL(file)
    setPreviewUrl(objectUrl)

    // Upload file
    setIsUploading(true)
    setUploadProgress(0)

    try {
      // Simulate progress (in a real app, you might get this from your upload library)
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          const newProgress = prev + 10
          if (newProgress >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return newProgress
        })
      }, 300)

      const imageUrl = await uploadImage(file, folder)

      clearInterval(progressInterval)
      setUploadProgress(100)

      if (imageUrl) {
        onImageUploaded(imageUrl)
        toast({
          title: "Image uploaded",
          description: "Your image has been uploaded successfully",
        })
      } else {
        throw new Error("Failed to upload image")
      }
    } catch (error) {
      console.error("Upload error:", error)
      toast({
        title: "Upload failed",
        description: "There was an error uploading your image",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
      setUploadProgress(0)
    }
  }

  const handleRemoveImage = () => {
    setPreviewUrl(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    onImageUploaded("")
  }

  return (
    <Card className={className}>
      <CardContent className="p-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
          disabled={isUploading}
        />

        {previewUrl ? (
          <div className="relative">
            <div className="relative aspect-square w-full overflow-hidden rounded-md">
              <Image
                src={previewUrl || "/placeholder.svg"}
                alt="Preview"
                fill
                className="object-cover"
                style={{ aspectRatio: aspectRatio }}
              />
            </div>
            <Button
              variant="destructive"
              size="icon"
              className="absolute right-2 top-2 h-8 w-8 rounded-full"
              onClick={handleRemoveImage}
              disabled={isUploading}
            >
              <X className="h-4 w-4" />
            </Button>
            {isUploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="w-3/4 rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-[#003763] transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-white">{uploadProgress}%</span>
              </div>
            )}
            {uploadProgress === 100 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <Check className="h-12 w-12 text-green-500" />
              </div>
            )}
          </div>
        ) : (
          <Button
            variant="outline"
            className="relative h-32 w-full border-dashed"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
          >
            <div className="flex flex-col items-center justify-center">
              {isUploading ? (
                <>
                  <div className="mb-2 h-10 w-10 animate-spin rounded-full border-4 border-[#003763] border-t-transparent"></div>
                  <span>Uploading...</span>
                </>
              ) : (
                <>
                  <ImageIcon className="mb-2 h-10 w-10 text-gray-400" />
                  <span>Click to upload image</span>
                  <span className="mt-1 text-xs text-gray-500">Max size: {maxSizeMB}MB</span>
                </>
              )}
            </div>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
