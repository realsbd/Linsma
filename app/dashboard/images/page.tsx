"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ImageUploader } from "@/components/dashboard/image-uploader"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createServerSupabaseClient } from "@/lib/supabase"
import { deleteImage } from "@/actions/image-actions"
import { toast } from "@/hooks/use-toast"
import { Folder, Search, Trash2, RefreshCw } from "lucide-react"
import Image from "next/image"

export default function ImagesPage() {
  const [images, setImages] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const fetchImages = async () => {
    setIsLoading(true)
    try {
      const supabase = createServerSupabaseClient()

      // Fetch all images from storage
      const { data, error } = await supabase.storage.from("images").list(activeTab === "all" ? "" : activeTab, {
        limit: 100,
        offset: 0,
        sortBy: { column: "created_at", order: "desc" },
      })

      if (error) {
        console.error("Error fetching images:", error)
        toast({
          title: "Error",
          description: "Failed to fetch images",
          variant: "destructive",
        })
        return
      }

      // Get public URLs for all images
      const imagesWithUrls = await Promise.all(
        data.map(async (file) => {
          const {
            data: { publicUrl },
          } = supabase.storage.from("images").getPublicUrl(`${activeTab === "all" ? "" : activeTab}/${file.name}`)

          return {
            ...file,
            url: publicUrl,
            folder: activeTab === "all" ? "general" : activeTab,
          }
        }),
      )

      setImages(imagesWithUrls)
    } catch (error) {
      console.error("Error in fetchImages:", error)
      toast({
        title: "Error",
        description: "Failed to fetch images",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [activeTab])

  const handleImageUploaded = (url: string) => {
    if (url) {
      fetchImages()
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      })
    }
  }

  const handleDeleteImage = async (url: string) => {
    if (confirm("Are you sure you want to delete this image?")) {
      try {
        const success = await deleteImage(url)
        if (success) {
          setImages(images.filter((img) => img.url !== url))
          toast({
            title: "Success",
            description: "Image deleted successfully",
          })
        } else {
          throw new Error("Failed to delete image")
        }
      } catch (error) {
        console.error("Error deleting image:", error)
        toast({
          title: "Error",
          description: "Failed to delete image",
          variant: "destructive",
        })
      }
    }
  }

  const filteredImages = images.filter((img) => img.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Image Management</h1>
        <Button onClick={fetchImages} variant="outline" size="sm">
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upload New Image</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="general" className="w-full">
            <TabsList>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="banners">Banners</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="blog">Blog</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <ImageUploader onImageUploaded={handleImageUploaded} folder="general" />
            </TabsContent>
            <TabsContent value="banners">
              <ImageUploader onImageUploaded={handleImageUploaded} folder="banners" aspectRatio="16/9" />
            </TabsContent>
            <TabsContent value="testimonials">
              <ImageUploader onImageUploaded={handleImageUploaded} folder="testimonials" aspectRatio="1/1" />
            </TabsContent>
            <TabsContent value="services">
              <ImageUploader onImageUploaded={handleImageUploaded} folder="services" />
            </TabsContent>
            <TabsContent value="blog">
              <ImageUploader onImageUploaded={handleImageUploaded} folder="blog" aspectRatio="16/9" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Image Library</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="banners">Banners</TabsTrigger>
                <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="blog">Blog</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex h-64 items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#003763] border-t-transparent"></div>
            </div>
          ) : filteredImages.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {filteredImages.map((image) => (
                <div key={image.url} className="group relative">
                  <div className="relative aspect-square overflow-hidden rounded-md border">
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={image.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button
                      variant="destructive"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleDeleteImage(image.url)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="ml-2"
                      onClick={() => {
                        navigator.clipboard.writeText(image.url)
                        toast({
                          title: "Copied",
                          description: "Image URL copied to clipboard",
                        })
                      }}
                    >
                      Copy URL
                    </Button>
                  </div>
                  <div className="mt-1 flex items-center text-xs">
                    <Folder className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span className="truncate text-muted-foreground">{image.folder}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-64 flex-col items-center justify-center">
              <p className="text-muted-foreground">No images found</p>
              {searchQuery && (
                <Button variant="link" onClick={() => setSearchQuery("")} className="mt-2">
                  Clear search
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
