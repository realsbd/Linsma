import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const newsArticles = [
  {
    id: 1,
    title: "Breaking News: Company Expansion",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "March 15, 2025",
  },
  {
    id: 2,
    title: "New Partnership Announcement",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "March 10, 2025",
  },
  {
    id: 3,
    title: "Industry Award Recognition",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "March 5, 2025",
  },
  {
    id: 4,
    title: "Product Launch Success",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "February 28, 2025",
  },
  {
    id: 5,
    title: "Community Outreach Program",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "February 20, 2025",
  },
  {
    id: 6,
    title: "Technology Innovation Showcase",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "February 15, 2025",
  },
]

export default function NewsPage() {
  return (
    <div className="flex flex-col">
      <section className="section bg-white">
        <div className="container mx-auto">
          <h1 className="mb-4 text-center">Latest News</h1>
          <p className="mx-auto mb-12 max-w-3xl text-center">
            Stay updated with the latest happenings, industry insights, and company news from Your Site Name.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => (
              <Card key={article.id} className="flex h-full flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Article ${article.id}`}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex-1 p-6">
                  <div className="mb-2 text-sm text-muted-foreground">{article.date}</div>
                  <h3 className="mb-2 text-xl font-semibold">{article.title}</h3>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/news/${article.id}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline">Load More</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
