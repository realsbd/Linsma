import { neon } from "@neondatabase/serverless"

// Create a SQL client with the connection string from environment variables
export const sql = neon(process.env.DATABASE_URL!)

// Helper function to execute SQL queries with error handling
export async function query<T>(queryString: string, params: any[] = []): Promise<T> {
  try {
    // Convert to tagged template syntax
    const result = (await sql.query(queryString, params)) as T
    return result
  } catch (error) {
    console.error("Database query error:", error)
    throw new Error("Database query failed")
  }
}
