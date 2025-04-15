"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag, Facebook, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right University Abroad",
    excerpt:
      "Learn the key factors to consider when selecting a university in another country that aligns with your academic goals and career aspirations.",
    content: `
      <p>Choosing the right university abroad is one of the most important decisions you'll make in your educational journey. With thousands of institutions worldwide, the process can seem overwhelming. However, by focusing on key factors and understanding your priorities, you can find the perfect match for your academic and personal goals.</p>
      
      <h2>Academic Reputation and Program Quality</h2>
      <p>The academic reputation of a university and the quality of its programs should be your primary consideration. Research university rankings, but remember that different ranking systems use different methodologies. Look beyond overall rankings to program-specific rankings in your field of interest.</p>
      <p>Investigate the curriculum, teaching methods, and research opportunities. Are there internships or practical components? What is the faculty-to-student ratio? Are professors leaders in their fields? These factors significantly impact the quality of education you'll receive.</p>
      
      <h2>Location and Cultural Environment</h2>
      <p>The country and city where you study will shape your experience beyond the classroom. Consider the language, culture, climate, and lifestyle. Would you prefer a bustling metropolis or a quieter college town? Is the local language one you speak or want to learn?</p>
      <p>Research safety, transportation, and the general attitude toward international students. Some countries and cities are more welcoming and accommodating to foreign students than others.</p>
      
      <h2>Cost and Financial Considerations</h2>
      <p>Understanding the full cost of your education abroad is crucial. This includes tuition fees, living expenses, health insurance, travel costs, and visa fees. Remember that costs vary significantly between countries and even between cities within the same country.</p>
      <p>Research scholarship opportunities, work-study options, and financial aid available to international students. Some countries offer more affordable education or better financial support than others.</p>
      
      <h2>Career Opportunities and Post-Graduation Prospects</h2>
      <p>Consider how your chosen university and program will impact your career prospects. Does the university have strong connections with industry? What is the employment rate for graduates? Are there opportunities for internships or work experience during your studies?</p>
      <p>Research the post-graduation work visa policies of your host country. Some countries offer favorable conditions for international graduates to stay and work, which can be valuable for gaining international experience.</p>
      
      <h2>Student Support Services</h2>
      <p>The availability and quality of support services for international students can significantly impact your experience. Look for universities with comprehensive orientation programs, academic advising, career services, health services, and counseling.</p>
      <p>Check if there are specific services for international students, such as language support, cultural integration programs, and assistance with visa and immigration matters.</p>
      
      <h2>Campus Facilities and Student Life</h2>
      <p>The campus environment and student life contribute significantly to your overall experience. Research the quality of facilities such as libraries, laboratories, sports centers, and student housing.</p>
      <p>Look into student clubs, organizations, and activities. A vibrant campus life can enhance your educational experience and help you build a network of friends and contacts.</p>
      
      <h2>Conclusion</h2>
      <p>Choosing the right university abroad requires thorough research and careful consideration of multiple factors. Take your time, seek advice from current students and alumni, and if possible, visit the campuses you're considering. Remember that the "best" university is the one that best fits your individual needs, goals, and preferences.</p>
      <p>By making an informed decision, you'll set yourself up for a rewarding and successful international education experience that will benefit you for years to come.</p>
    `,
    date: "March 31, 2025",
    author: "Dr. Sarah Johnson",
    authorRole: "Education Consultant",
    readTime: "5 min read",
    category: "Study Advice",
    image: "/placeholder.svg?height=500&width=1000&text=University+Choice",
    authorImage: "/placeholder.svg?height=100&width=100&text=SJ",
    relatedPosts: [2, 3, 5],
  },
  {
    id: 2,
    title: "Scholarship Opportunities for International Students",
    excerpt:
      "Discover various scholarship programs available for students looking to study abroad, including application tips and deadlines.",
    content: `
      <p>Financing your international education can be challenging, but numerous scholarship opportunities are available specifically for international students. This guide will help you navigate the scholarship landscape and increase your chances of securing financial support for your studies abroad.</p>
      
      <h2>Types of Scholarships for International Students</h2>
      <p>International students can access various types of scholarships, each with different eligibility criteria and application processes:</p>
      <ul>
        <li><strong>Government-Funded Scholarships:</strong> Many countries offer scholarships to attract international talent. Examples include the Fulbright Program (USA), Chevening Scholarships (UK), and Australia Awards.</li>
        <li><strong>University Scholarships:</strong> Most universities offer merit-based or need-based scholarships specifically for international students.</li>
        <li><strong>Private Organization Scholarships:</strong> Foundations, corporations, and non-profit organizations often provide scholarships based on specific criteria such as field of study, nationality, or personal background.</li>
        <li><strong>Country-Specific Scholarships:</strong> Some scholarships are available only to students from certain countries or regions.</li>
      </ul>
      
      <h2>Finding Scholarship Opportunities</h2>
      <p>To maximize your chances of finding suitable scholarships, explore multiple sources:</p>
      <ul>
        <li>University websites and international student offices</li>
        <li>Government education departments and embassies</li>
        <li>Scholarship search engines and databases</li>
        <li>Educational advising centers</li>
        <li>Professional associations in your field of study</li>
      </ul>
      
      <h2>Application Tips for Scholarship Success</h2>
      <p>Applying for scholarships requires careful preparation and attention to detail. Here are some tips to increase your chances of success:</p>
      <ul>
        <li><strong>Start Early:</strong> Begin your scholarship search at least 12-18 months before your intended start date.</li>
        <li><strong>Meet All Requirements:</strong> Ensure you meet all eligibility criteria before applying.</li>
        <li><strong>Prepare Strong Documentation:</strong> Invest time in crafting compelling personal statements, research proposals, and recommendation letters.</li>
        <li><strong>Highlight Your Achievements:</strong> Emphasize your academic excellence, leadership experience, community service, and other relevant accomplishments.</li>
        <li><strong>Tailor Your Application:</strong> Customize each application to address the specific goals and values of the scholarship provider.</li>
        <li><strong>Meet Deadlines:</strong> Create a calendar of application deadlines and submit all materials well in advance.</li>
      </ul>
      
      <h2>Popular International Scholarship Programs</h2>
      <p>Here are some well-established scholarship programs for international students:</p>
      <ul>
        <li><strong>Fulbright Foreign Student Program:</strong> For graduate students, young professionals, and artists from abroad to study in the United States.</li>
        <li><strong>Chevening Scholarships:</strong> The UK government's international awards program for future leaders to study in the UK.</li>
        <li><strong>Erasmus+ Program:</strong> European Union's program to support education, training, youth, and sport in Europe.</li>
        <li><strong>DAAD Scholarships:</strong> German Academic Exchange Service offers scholarships for international students to study in Germany.</li>
        <li><strong>Australia Awards:</strong> International scholarships funded by the Australian government.</li>
        <li><strong>Commonwealth Scholarships:</strong> For students from Commonwealth countries to study in the UK.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>While the scholarship application process can be competitive and time-consuming, the financial benefits make it worthwhile. Be persistent, apply to multiple scholarships, and don't be discouraged by rejections. With careful research, preparation, and determination, you can find financial support for your international education journey.</p>
      <p>Remember that scholarship opportunities are constantly changing, so stay updated on new programs and deadlines. Consult with education advisors and university representatives for guidance specific to your situation and goals.</p>
    `,
    date: "March 25, 2025",
    author: "Michael Chen",
    authorRole: "Financial Aid Specialist",
    readTime: "7 min read",
    category: "Scholarships",
    image: "/placeholder.svg?height=500&width=1000&text=Scholarships",
    authorImage: "/placeholder.svg?height=100&width=100&text=MC",
    relatedPosts: [1, 4, 6],
  },
  {
    id: 3,
    title: "Navigating Student Visa Applications",
    excerpt:
      "A comprehensive guide to understanding and successfully completing student visa applications for different countries.",
    content: `
      <p>Securing a student visa is a critical step in your journey to study abroad. The process can be complex and varies significantly between countries, but with proper preparation and understanding, you can navigate it successfully. This guide provides essential information and tips for student visa applications across popular study destinations.</p>
      
      <h2>Understanding Student Visa Basics</h2>
      <p>A student visa is an official document issued by a government that permits a foreign national to study at an educational institution within that country. Most student visas are temporary and have specific conditions regarding duration of stay, work permissions, and travel restrictions.</p>
      <p>Before applying for a student visa, you typically need to have:</p>
      <ul>
        <li>An acceptance letter from a recognized educational institution</li>
        <li>Proof of sufficient financial resources to cover tuition and living expenses</li>
        <li>Health insurance coverage</li>
        <li>A valid passport</li>
        <li>A clean criminal record</li>
      </ul>
      
      <h2>Visa Application Process by Country</h2>
      <p><strong>United States (F-1 Visa):</strong></p>
      <ul>
        <li>Receive Form I-20 from your university after acceptance</li>
        <li>Pay the SEVIS fee</li>
        <li>Complete the DS-160 form online</li>
        <li>Schedule and attend a visa interview at a U.S. embassy or consulate</li>
        <li>Prepare financial documentation showing ability to cover expenses</li>
        <li>Demonstrate ties to your home country and intent to return after studies</li>
      </ul>
      
      <p><strong>United Kingdom (Student Visa):</strong></p>
      <ul>
        <li>Receive a Confirmation of Acceptance for Studies (CAS) from your institution</li>
        <li>Apply online and pay the visa fee and Immigration Health Surcharge</li>
        <li>Provide biometric information at a visa application center</li>
        <li>Demonstrate financial ability to cover tuition and living costs</li>
        <li>Prove English language proficiency</li>
      </ul>
      
      <p><strong>Canada (Study Permit):</strong></p>
      <ul>
        <li>Receive an acceptance letter from a Designated Learning Institution (DLI)</li>
        <li>Apply online or on paper through a Visa Application Centre</li>
        <li>Provide proof of financial support</li>
        <li>Submit a clean police certificate and medical examination results if required</li>
        <li>Demonstrate intent to leave Canada after studies</li>
      </ul>
      
      <p><strong>Australia (Student Visa - Subclass 500):</strong></p>
      <ul>
        <li>Receive a Confirmation of Enrollment (CoE) from your institution</li>
        <li>Apply online through the Department of Home Affairs website</li>
        <li>Meet the Genuine Temporary Entrant (GTE) requirement</li>
        <li>Provide evidence of financial capacity, health insurance, and English proficiency</li>
        <li>Meet health and character requirements</li>
      </ul>
      
      <h2>Common Challenges and How to Overcome Them</h2>
      <p><strong>Demonstrating Financial Capacity:</strong> Provide bank statements, scholarship letters, loan approvals, or sponsorship documents that clearly show you can cover your expenses.</p>
      <p><strong>Proving Ties to Home Country:</strong> Show evidence of property ownership, family ties, job prospects after graduation, or other reasons you plan to return home after completing your studies.</p>
      <p><strong>Language Proficiency:</strong> Take required language tests (IELTS, TOEFL, etc.) well in advance and prepare thoroughly.</p>
      <p><strong>Interview Preparation:</strong> Practice answering questions about your study plans, career goals, and why you chose that specific institution and country.</p>
      
      <h2>Tips for a Successful Visa Application</h2>
      <ul>
        <li><strong>Apply Early:</strong> Start the visa application process at least 3-6 months before your program begins.</li>
        <li><strong>Be Thorough:</strong> Complete all forms accurately and provide all required documentation.</li>
        <li><strong>Be Honest:</strong> Never provide false information or documents, as this can lead to visa denial and future immigration problems.</li>
        <li><strong>Organize Documents:</strong> Arrange your documents logically and include a cover letter explaining your application.</li>
        <li><strong>Follow Up:</strong> Keep track of your application status and respond promptly to any requests for additional information.</li>
        <li><strong>Seek Professional Help:</strong> Consider consulting with an immigration advisor or your university's international student office if you have complex circumstances.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>While the student visa application process can seem daunting, approaching it with organization, preparation, and attention to detail will increase your chances of success. Remember that visa requirements and processes change frequently, so always check the official website of the embassy or immigration department of your destination country for the most up-to-date information.</p>
      <p>With your visa secured, you'll be one step closer to beginning your international education journey and experiencing the many benefits of studying abroad.</p>
    `,
    date: "March 20, 2025",
    author: "Priya Sharma",
    authorRole: "Immigration Consultant",
    readTime: "8 min read",
    category: "Visa Guide",
    image: "/placeholder.svg?height=500&width=1000&text=Visa+Applications",
    authorImage: "/placeholder.svg?height=100&width=100&text=PS",
    relatedPosts: [1, 2, 9],
  },
]

export default function BlogPostPage() {
  const params = useParams()
  const postId = typeof params.id === "string" ? Number.parseInt(params.id) : 1

  // Find the blog post with the matching ID
  const post = blogPosts.find((post) => post.id === postId) || blogPosts[0]

  // Find related posts
  const relatedPosts = post.relatedPosts
    ? post.relatedPosts.map((id) => blogPosts.find((post) => post.id === id)).filter(Boolean)
    : []

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
                    An experienced education professional with expertise in international education and student
                    mobility.
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
