"use server"

import { createServerSupabaseClient } from "@/lib/supabase"
import { v4 as uuidv4 } from "uuid"

export async function uploadImage(file: File, folder = "general"): Promise<string | null> {
  try {
    const supabase = createServerSupabaseClient()

    // Generate a unique filename
    const fileExt = file.name.split(".").pop()
    const fileName = `${uuidv4()}.${fileExt}`
    const filePath = `${folder}/${fileName}`

    // Convert file to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer()

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage.from("images").upload(filePath, arrayBuffer, {
      contentType: file.type,
      upsert: false,
    })

    if (error) {
      console.error("Error uploading image:", error)
      return null
    }

    // Get public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from("images").getPublicUrl(data.path)

    return publicUrl
  } catch (error) {
    console.error("Error in uploadImage:", error)
    return null
  }
}

export async function deleteImage(url: string): Promise<boolean> {
  try {
    const supabase = createServerSupabaseClient()

    // Extract the path from the URL
    const urlObj = new URL(url)
    const pathParts = urlObj.pathname.split("/")
    const bucketName = pathParts[1]
    const filePath = pathParts.slice(2).join("/")

    const { error } = await supabase.storage.from(bucketName).remove([filePath])

    if (error) {
      console.error("Error deleting image:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error in deleteImage:", error)
    return false
  }
}
