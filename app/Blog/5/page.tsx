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
  const postId = typeof params.id === "string" ? Number.parseInt(params.id) : 5

  // Blog post content
  const post = {
    id: 5,
    title: "Top Universities in Europe for International Students",
    excerpt:
      "An overview of the best universities in Europe that offer excellent programs and support services for international students.",
    content: `
      <p>Europe has long been a premier destination for international students seeking world-class education. With its rich academic traditions, diverse cultures, and innovative research opportunities, European universities offer exceptional educational experiences. This guide highlights some of the top European universities that are particularly welcoming to international students.</p>
      
      <h2>United Kingdom</h2>
      <p>Despite Brexit, the UK remains one of the most popular destinations for international students, with universities that consistently rank among the world's best:</p>
      
      <h3>University of Oxford</h3>
      <p>One of the oldest and most prestigious universities in the world, Oxford offers exceptional teaching across all disciplines. International students make up approximately 45% of the student body.</p>
      <ul>
        <li><strong>Strengths:</strong> Humanities, social sciences, medicine, and natural sciences</li>
        <li><strong>International Student Support:</strong> Dedicated international student advisory service, college-based support systems, and numerous cultural societies</li>
        <li><strong>Scholarships:</strong> Offers various scholarships specifically for international students, including the Clarendon Scholarships and Rhodes Scholarships</li>
      </ul>
      
      <h3>Imperial College London</h3>
      <p>Specializing in science, engineering, medicine, and business, Imperial is known for its cutting-edge research and innovation.</p>
      <ul>
        <li><strong>Strengths:</strong> Engineering, medicine, natural sciences, and business</li>
        <li><strong>International Student Support:</strong> Comprehensive orientation programs, English language support, and visa advice services</li>
        <li><strong>Scholarships:</strong> Offers President's Undergraduate Scholarships and various departmental scholarships for international students</li>
      </ul>
      
      <h2>Germany</h2>
      <p>Germany has become increasingly popular among international students, particularly due to its tuition-free public universities and strong emphasis on research:</p>
      
      <h3>Technical University of Munich (TUM)</h3>
      <p>A leading technical university with a strong focus on innovation and entrepreneurship.</p>
      <ul>
        <li><strong>Strengths:</strong> Engineering, computer science, natural sciences, and medicine</li>
        <li><strong>International Student Support:</strong> TUM International Center provides comprehensive support services, including buddy programs and language courses</li>
        <li><strong>Scholarships:</strong> Deutschlandstipendium and various external scholarships through DAAD (German Academic Exchange Service)</li>
      </ul>
      
      <h3>Heidelberg University</h3>
      <p>Germany's oldest university, Heidelberg combines tradition with cutting-edge research.</p>
      <ul>
        <li><strong>Strengths:</strong> Medicine, natural sciences, humanities, and social sciences</li>
        <li><strong>International Student Support:</strong> International Relations Office offers orientation programs, language courses, and cultural integration activities</li>
        <li><strong>Scholarships:</strong> Heidelberg University offers merit-based scholarships for international students</li>
      </ul>
      
      <h2>Netherlands</h2>
      <p>The Netherlands offers numerous English-taught programs and a welcoming environment for international students:</p>
      
      <h3>University of Amsterdam</h3>
      <p>Located in one of Europe's most vibrant cities, the University of Amsterdam offers a wide range of programs taught in English.</p>
      <ul>
        <li><strong>Strengths:</strong> Social sciences, humanities, economics, and science</li>
        <li><strong>International Student Support:</strong> International Student Network, buddy system, and comprehensive orientation programs</li>
        <li><strong>Scholarships:</strong> Amsterdam Excellence Scholarships and Amsterdam Merit Scholarships</li>
      </ul>
      
      <h3>Delft University of Technology</h3>
      <p>A leading technical university known for its innovative approach to engineering and design.</p>
      <ul>
        <li><strong>Strengths:</strong> Engineering, architecture, and technical sciences</li>
        <li><strong>International Student Support:</strong> X Student Association for international students, career services, and housing assistance</li>
        <li><strong>Scholarships:</strong> Justus & Louise van Effen Excellence Scholarships and faculty-specific scholarships</li>
      </ul>
      
      <h2>Switzerland</h2>
      <p>Switzerland offers world-class education with a strong emphasis on research and innovation:</p>
      
      <h3>ETH Zurich (Swiss Federal Institute of Technology)</h3>
      <p>Consistently ranked among the top universities in the world, ETH Zurich is known for its excellence in science and technology.</p>
      <ul>
        <li><strong>Strengths:</strong> Engineering, architecture, mathematics, natural sciences, and computer science</li>
        <li><strong>International Student Support:</strong> International Student Office, language center, and career services</li>
        <li><strong>Scholarships:</strong> ETH Excellence Scholarships and various external scholarships</li>
      </ul>
      
      <h2>Sweden</h2>
      <p>Sweden offers innovative education with a strong focus on sustainability and student independence:</p>
      
      <h3>Karolinska Institute</h3>
      <p>One of the world's leading medical universities, Karolinska Institute is renowned for its research and education in the medical and health sciences.</p>
      <ul>
        <li><strong>Strengths:</strong> Medicine, biomedical sciences, and public health</li>
        <li><strong>International Student Support:</strong> International Student Office, mentorship programs, and career guidance</li>
        <li><strong>Scholarships:</strong> Karolinska Institutet Global Master's Scholarships and various external funding opportunities</li>
      </ul>
      
      <h3>Lund University</h3>
      <p>One of Scandinavia's oldest and most prestigious universities, offering a wide range of programs taught in English.</p>
      <ul>
        <li><strong>Strengths:</strong> Social sciences, humanities, law, economics, and sciences</li>
        <li><strong>International Student Support:</strong> International Desk, mentor program, and extensive orientation activities</li>
        <li><strong>Scholarships:</strong> Lund University Global Scholarship Programme and country-specific scholarships</li>
      </ul>
      
      <h2>France</h2>
      <p>France combines academic excellence with rich cultural experiences:</p>
      
      <h3>Sorbonne University</h3>
      <p>A historic institution in the heart of Paris, offering programs across various disciplines.</p>
      <ul>
        <li><strong>Strengths:</strong> Arts, humanities, sciences, and medicine</li>
        <li><strong>International Student Support:</strong> International Relations Office, French language courses, and cultural integration programs</li>
        <li><strong>Scholarships:</strong> Eiffel Excellence Scholarship Programme and various government scholarships</li>
      </ul>
      
      <h3>Sciences Po</h3>
      <p>Specializing in social sciences, Sciences Po is known for its international outlook and diverse student body.</p>
      <ul>
        <li><strong>Strengths:</strong> Political science, international relations, economics, and law</li>
        <li><strong>International Student Support:</strong> Welcome Programme, buddy system, and career services</li>
        <li><strong>Scholarships:</strong> Émile Boutmy Scholarships specifically for international students</li>
      </ul>
      
      <h2>Spain</h2>
      <p>Spain offers quality education in a vibrant cultural setting:</p>
      
      <h3>University of Barcelona</h3>
      <p>The highest-ranked university in Spain, offering a wide range of programs in a beautiful Mediterranean city.</p>
      <ul>
        <li><strong>Strengths:</strong> Medicine, economics, law, and humanities</li>
        <li><strong>International Student Support:</strong> International Student Office, language courses, and cultural activities</li>
        <li><strong>Scholarships:</strong> Various university-specific and regional government scholarships</li>
      </ul>
      
      <h2>Factors to Consider When Choosing a European University</h2>
      <p>When selecting a university in Europe, consider these important factors:</p>
      <ul>
        <li><strong>Language of Instruction:</strong> While many programs are offered in English, some may require proficiency in the local language</li>
        <li><strong>Tuition Fees:</strong> These vary significantly across countries (from free in Germany to substantial fees in the UK)</li>
        <li><strong>Cost of Living:</strong> Consider housing, food, transportation, and other living expenses in your budget planning</li>
        <li><strong>Visa Requirements:</strong> Research the student visa process for your chosen country well in advance</li>
        <li><strong>Post-Graduation Opportunities:</strong> Look into work visa options after graduation if you're interested in gaining international work experience</li>
      </ul>
      
      <h2>Application Tips for European Universities</h2>
      <p>To increase your chances of admission to top European universities:</p>
      <ul>
        <li>Start your application process early, ideally 12-18 months before your intended start date</li>
        <li>Research specific admission requirements for each university and program</li>
        <li>Prepare for standardized tests that may be required (IELTS/TOEFL for English proficiency, GRE/GMAT for some graduate programs)</li>
        <li>Craft a compelling personal statement that demonstrates your academic interests and career goals</li>
        <li>Secure strong letters of recommendation from academic or professional references</li>
        <li>Apply for scholarships simultaneously with your university applications</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Europe offers a wealth of opportunities for international students seeking high-quality education in diverse and culturally rich environments. Each country and university has its unique strengths and characteristics, so it's important to research thoroughly to find the best fit for your academic goals, budget, and personal preferences.</p>
      <p>Many European universities have dedicated international offices that can provide specific information about programs, admission requirements, and support services. Don't hesitate to contact them directly with questions as you navigate the application process.</p>
      <p>With careful planning and preparation, studying at a top European university can be a transformative experience that enhances your academic knowledge, cultural understanding, and career prospects.</p>
    `,
    date: "March 10, 2025",
    author: "Dr. Thomas Weber",
    authorRole: "International Education Advisor",
    readTime: "9 min read",
    category: "University Guide",
    image: "/placeholder.svg?height=500&width=1000&text=European+Universities",
    authorImage: "/placeholder.svg?height=100&width=100&text=TW",
    relatedPosts: [1, 2, 3],
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
      id: 2,
      title: "Scholarship Opportunities for International Students",
      excerpt:
        "Discover various scholarship programs available for students looking to study abroad, including application tips and deadlines.",
      date: "March 25, 2025",
      image: "/placeholder.svg?height=300&width=500&text=Scholarships",
    },
    {
      id: 3,
      title: "Navigating Student Visa Applications",
      excerpt:
        "A comprehensive guide to understanding and successfully completing student visa applications for different countries.",
      date: "March 20, 2025",
      image: "/placeholder.svg?height=300&width=500&text=Visa+Applications",
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
                    An experienced education advisor specializing in European higher education systems and international
                    student mobility across the continent.
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
