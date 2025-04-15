"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag, Facebook, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react"

export default function BlogPostPage() {
  const params = useParams()
  const postId = typeof params.id === "string" ? Number.parseInt(params.id) : 4

  // Blog post content
  const post = {
    id: 4,
    title: "Cultural Adaptation: Thriving in a New Country",
    excerpt:
      "Tips and strategies for adapting to a new culture, making friends, and creating a fulfilling experience while studying abroad.",
    content: `
      <p>Moving to a new country for education is an exciting adventure, but it also comes with significant cultural adjustments. Successfully adapting to a new culture is essential for both academic success and personal well-being. This guide offers practical strategies to help international students navigate cultural differences and create a fulfilling experience abroad.</p>
      
      <h2>Understanding Culture Shock</h2>
      <p>Culture shock is a natural response to a new environment and typically follows predictable stages:</p>
      <ul>
        <li><strong>Honeymoon Phase:</strong> Initial excitement and fascination with the new culture.</li>
        <li><strong>Crisis Phase:</strong> Frustration and anxiety as cultural differences become more apparent.</li>
        <li><strong>Adjustment Phase:</strong> Gradually developing strategies to cope with cultural differences.</li>
        <li><strong>Adaptation Phase:</strong> Feeling comfortable and functioning effectively in the new culture.</li>
      </ul>
      <p>Recognizing these stages can help you understand your emotional responses and remind you that feelings of disorientation are temporary and normal.</p>
      
      <h2>Language and Communication</h2>
      <p>Even if you're proficient in the local language, cultural nuances in communication can be challenging:</p>
      <ul>
        <li>Take language classes or join language exchange programs to improve your skills.</li>
        <li>Learn about non-verbal communication norms in your host country.</li>
        <li>Practice active listening and don't be afraid to ask for clarification.</li>
        <li>Use language learning apps and watch local TV shows or movies to improve comprehension.</li>
      </ul>
      <p>Remember that making mistakes is part of the learning process. Most locals will appreciate your efforts to communicate in their language.</p>
      
      <h2>Building a Social Network</h2>
      <p>Creating meaningful connections is crucial for combating homesickness and enhancing your cultural experience:</p>
      <ul>
        <li><strong>Join Student Organizations:</strong> Campus clubs related to your interests provide natural opportunities to meet like-minded people.</li>
        <li><strong>Attend International Student Events:</strong> These gatherings connect you with others who understand the challenges of studying abroad.</li>
        <li><strong>Engage with Local Students:</strong> Make an effort to form friendships beyond the international student community.</li>
        <li><strong>Volunteer:</strong> Community service offers meaningful ways to connect with locals and understand the culture.</li>
        <li><strong>Use Social Apps:</strong> Platforms like Meetup can help you find groups with shared interests.</li>
      </ul>
      <p>Building relationships takes time, so be patient and persistent in your social efforts.</p>
      
      <h2>Maintaining Well-being</h2>
      <p>Taking care of your physical and mental health is essential during cultural transition:</p>
      <ul>
        <li>Establish routines that include regular exercise, adequate sleep, and nutritious meals.</li>
        <li>Stay connected with family and friends from home while building new relationships.</li>
        <li>Practice mindfulness and stress-reduction techniques.</li>
        <li>Familiarize yourself with mental health resources at your institution.</li>
        <li>Give yourself permission to take breaks from cultural immersion when needed.</li>
      </ul>
      <p>Remember that adjustment takes time, and it's normal to have both good and challenging days.</p>
      
      <h2>Embracing Cultural Learning</h2>
      <p>Approach cultural differences with curiosity rather than judgment:</p>
      <ul>
        <li>Research your host country's history, values, and customs before and during your stay.</li>
        <li>Observe how locals interact and follow their social cues.</li>
        <li>Participate in local traditions, holidays, and cultural events.</li>
        <li>Try local cuisine and learn about food customs.</li>
        <li>Ask respectful questions when you encounter unfamiliar practices.</li>
      </ul>
      <p>Cultural learning is a two-way process—share aspects of your own culture while learning about your host country.</p>
      
      <h2>Practical Adaptation Strategies</h2>
      <p>These everyday approaches can help ease your transition:</p>
      <ul>
        <li>Find familiar comforts (foods from home, international stores, etc.) for times when you need them.</li>
        <li>Develop local navigation skills using maps and public transportation.</li>
        <li>Learn about local etiquette regarding tipping, punctuality, and social interactions.</li>
        <li>Identify cultural mentors who can help explain confusing situations.</li>
        <li>Keep a journal to reflect on your experiences and track your adaptation progress.</li>
      </ul>
      
      <h2>Balancing Cultural Adaptation and Personal Identity</h2>
      <p>While adapting to a new culture, it's important to maintain your core identity:</p>
      <ul>
        <li>Decide which aspects of the new culture you want to adopt and which personal values you want to preserve.</li>
        <li>Find ways to celebrate your own cultural traditions while abroad.</li>
        <li>Connect with others from your home country or region when you need familiar cultural context.</li>
        <li>Recognize that becoming bicultural—able to function effectively in both your home and host cultures—is a valuable skill.</li>
      </ul>
      <p>The most successful international students develop a bicultural identity that integrates elements of both cultures.</p>
      
      <h2>Conclusion</h2>
      <p>Cultural adaptation is a gradual process that requires patience, openness, and resilience. The challenges you overcome will contribute to your personal growth and intercultural competence—skills that are increasingly valuable in our globalized world. By actively engaging with your host culture while maintaining connections to your roots, you can create a rich and fulfilling international education experience.</p>
      <p>Remember that your university's international student office is an excellent resource for specific cultural adaptation support. Don't hesitate to reach out when you need guidance during your adjustment process.</p>
    `,
    date: "March 15, 2025",
    author: "Dr. Maya Rodriguez",
    authorRole: "Cultural Integration Specialist",
    readTime: "6 min read",
    category: "Student Life",
    image: "/placeholder.svg?height=500&width=1000&text=Cultural+Adaptation",
    authorImage: "/placeholder.svg?height=100&width=100&text=MR",
    relatedPosts: [1, 3, 7],
  }

  // Find related posts (this would normally come from a database)
  const relatedPosts = [
    {
      id: 1,
      title: "How to Choose the Right University Abroad",
      excerpt:
        "Learn the key factors to consider when selecting a university in another country that aligns with your academic goals and career aspirations.",
      date: "March 31, 2025",
      image: "/placeholder.svg?height=300&width=500&text=University+Choice",
    },
    {
      id: 3,
      title: "Navigating Student Visa Applications",
      excerpt:
        "A comprehensive guide to understanding and successfully completing student visa applications for different countries.",
      date: "March 20, 2025",
      image: "/placeholder.svg?height=300&width=500&text=Visa+Applications",
    },
    {
      id: 7,
      title: "Language Learning Tips for International Students",
      excerpt: "Effective strategies to improve your language skills before and during your study abroad experience.",
      date: "February 28, 2025",
      image: "/placeholder.svg?height=300&width=500&text=Language+Learning",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <section className="relative bg-[#002a4a] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200&text=Pattern')] bg-repeat opacity-5"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <TextReveal>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          </TextReveal>

          <div className="flex flex-wrap items-center gap-4 text-white/80 mt-6">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              <span className="text-sm">{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span className="text-sm">{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <Tag className="mr-1 h-4 w-4" />
              <span className="text-sm">{post.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden mb-8">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="mt-12 border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4fa] text-[#003763] hover:bg-[#003763] hover:text-white transition-colors duration-300"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Facebook size={20} />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4fa] text-[#003763] hover:bg-[#003763] hover:text-white transition-colors duration-300"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Twitter size={20} />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4fa] text-[#003763] hover:bg-[#003763] hover:text-white transition-colors duration-300"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                      href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: ${post.title}`)}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4fa] text-[#003763] hover:bg-[#003763] hover:text-white transition-colors duration-300"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail size={20} />
                    </motion.a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal direction="right">
                <div className="bg-[#e8f4fa] rounded-lg p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full mr-4">
                      <Image
                        src={post.authorImage || "/placeholder.svg"}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#002a4a]">{post.author}</h3>
                      <p className="text-sm text-gray-600">{post.authorRole}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    An experienced cultural integration specialist with expertise in helping international students
                    adapt to new environments and thrive in cross-cultural settings.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.1}>
                <div className="bg-[#f9f9f9] rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-[#002a4a] mb-4">Table of Contents</h3>
                  <ul className="space-y-2">
                    {post.content.match(/<h2>(.*?)<\/h2>/g)?.map((match, index) => {
                      const title = match.replace(/<h2>|<\/h2>/g, "")
                      return (
                        <li key={index}>
                          <a
                            href={`#${title.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-[#003763] hover:underline flex items-center"
                          >
                            <ArrowRight className="mr-2 h-3 w-3" />
                            {title}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </ScrollReveal>

              {relatedPosts.length > 0 && (
                <ScrollReveal direction="right" delay={0.2}>
                  <div className="bg-[#f9f9f9] rounded-lg p-6">
                    <h3 className="font-semibold text-[#002a4a] mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <motion.div
                          key={relatedPost?.id}
                          className="group"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link href={`/blog/${relatedPost?.id}`} className="flex items-start">
                            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md mr-3">
                              <Image
                                src={relatedPost?.image || "/placeholder.svg"}
                                alt={relatedPost?.title || ""}
                                fill
                                className="object-cover transition-transform group-hover:scale-110"
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-[#002a4a] group-hover:text-[#003763] transition-colors duration-200">
                                {relatedPost?.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">{relatedPost?.date}</p>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#e8f4fa]">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-[#002a4a] mb-6">Ready to Start Your Study Abroad Journey?</h2>
              <p className="mb-8 text-lg text-gray-700">
                Contact our education consultants today to learn more about studying abroad and how we can help you
                achieve your academic goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild className="bg-[#003763] hover:bg-[#002a4a] transition-all duration-300">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#003763] text-[#003763] hover:bg-[#003763] hover:text-white transition-all duration-300"
                  >
                    <Link href="/blog">Explore More Articles</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
