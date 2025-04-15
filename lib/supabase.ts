// import { createClient } from "@supabase/supabase-js"

// // For client-side usage (browser)
// let supabaseClient: ReturnType<typeof createClient> | null = null

// export const getSupabaseClient = () => {
//   // Create the client only once to avoid multiple instances
//   if (!supabaseClient) {
//     const supabaseUrl = process.env.SUPABASE_NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_NEXT_PUBLIC_SUPABASE_URL
//     const supabaseAnonKey =
//       proSUPABASE_NEXT_PUBLIC_SUPABASE_ANON_KEY_ANON_KEY || process.env.SUPABASE_NEXT_PUBLIC_SUPABASE_ANON_KEY

//     if (!supabaseUrl || !supabaseAnonKey) {
//       throw new Error("Supabase URL and anon key are required")
//     }

//     supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
//   }

//   return supabaseClient
// }

// // Create a server-side client (for server components and server actions)
// export const createServerSupabaseClient = () => {
//   const supabaseUrl = process.env.SUPABASE_SUPABASE_URL
//   const supabaseServiceKey = process.env.SUPABASE_SUPABASE_SERVICE_ROLE_KEY

//   if (!supabaseUrl || !supabaseServiceKey) {
//     throw new Error("Supabase URL and service role key are required for server operations")
//   }

//   return createClient(supabaseUrl, supabaseServiceKey)
// }
