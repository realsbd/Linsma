"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Card3D } from "@/components/ui/3d-card"
import { motion } from "framer-motion"
import { ArrowRight, GraduationCap, Globe, BookOpen, Award, CheckCircle } from "lucide-react"

const regions = [
  {
    name: "Europe",
    description: "Study in prestigious universities across the UK, Germany, France, and more.",
    image: "/images/europe-university.jpeg",
    link: "/study-abroad/europe",
    countries: ["UK", "Germany", "France", "Spain", "Italy", "Netherlands"],
  },
  {
    name: "North America",
    description: "Experience world-class education in the United States and Canada.",
    image: "/images/harvard-university.jpeg",
    link: "/study-abroad/america",
    countries: ["USA", "Canada"],
  },
  {
    name: "Asia & Pacific",
    description: "Discover educational opportunities in Japan, Australia, Singapore, and more.",
    image: "/images/mediterranean-campus.jpeg",
    link: "/study-abroad/asia",
    countries: ["Japan", "Australia", "Singapore", "South Korea", "China", "Malaysia"],
  },
]

export default function StudyAbroadPage() {
  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <section className="relative bg-[#002a4a] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200&text=Pattern')] bg-repeat opacity-5"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <TextReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Study Abroad Destinations</h1>
          </TextReveal>
          <ScrollReveal>
            <p className="text-xl text-center text-white/80 max-w-3xl mx-auto">
              Explore educational opportunities around the world. Find the perfect destination for your international
              education journey.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-full bg-[#e8f4fa] px-3 py-1 text-sm font-medium text-[#003763] mb-4">
                Global Opportunities
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002a4a] mb-4">
                Explore Study Destinations by Region
              </h2>
              <p className="text-gray-600">
                Discover educational opportunities in different regions around the world. Each region offers unique
                academic, cultural, and career advantages.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <ScrollReveal key={region.name} direction="up" delay={index * 0.1}>
                <Card3D>
                  <Card className="overflow-hidden h-full">
                    <div className="relative h-48 w-full">
                      <Image
                        src={region.image || "/placeholder.svg"}
                        alt={region.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-xl font-semibold">{region.name}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="mb-4 text-gray-700">{region.description}</p>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-[#002a4a] mb-2">Popular Destinations:</h4>
                        <div className="flex flex-wrap gap-2">
                          {region.countries.map((country) => (
                            <span
                              key={country}
                              className="inline-block px-3 py-1 bg-[#e8f4fa] text-[#003763] text-xs rounded-full"
                            >
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Button asChild className="w-full bg-[#003763] hover:bg-[#002a4a] transition-all duration-300">
                          <Link href={region.link} className="flex items-center justify-center">
                            Explore {region.name}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-[#e8f4fa]">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-full bg-[#003763]/10 px-3 py-1 text-sm font-medium text-[#003763] mb-4">
                Why Study Abroad
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002a4a] mb-4">
                Benefits of International Education
              </h2>
              <p className="text-gray-600">
                Studying abroad offers numerous advantages that extend beyond academic knowledge, shaping your personal
                and professional development.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal direction="up" delay={0.1}>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4fa]">
                  <GraduationCap className="h-6 w-6 text-[#003763]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#002a4a]">Academic Excellence</h3>
                <p className="text-gray-700">
                  Access world-class education and specialized programs that may not be available in your home country.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4fa]">
                  <Globe className="h-6 w-6 text-[#003763]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#002a4a]">Cultural Immersion</h3>
                <p className="text-gray-700">
                  Experience different cultures, traditions, and perspectives, broadening your worldview and enhancing
                  your global competence.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4fa]">
                  <BookOpen className="h-6 w-6 text-[#003763]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#002a4a]">Language Skills</h3>
                <p className="text-gray-700">
                  Develop proficiency in foreign languages through immersion, enhancing your communication abilities and
                  career prospects.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4fa]">
                  <Award className="h-6 w-6 text-[#003763]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#002a4a]">Career Advancement</h3>
                <p className="text-gray-700">
                  Gain a competitive edge in the job market with international experience, cross-cultural skills, and a
                  global network.
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-[#e8f4fa] px-3 py-1 text-sm font-medium text-[#003763]">
                  Our Services
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#002a4a]">How We Can Help You</h2>
                <p className="text-gray-700">
                  We provide comprehensive support throughout your study abroad journey, from choosing the right
                  destination to settling into your new academic environment.
                </p>

                <ul className="space-y-4 mt-6">
                  <li className="flex items-start">
                    <CheckCircle className="mr-3 h-5 w-5 text-[#003763] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-[#002a4a]">University Selection</h3>
                      <p className="text-gray-600">
                        We help you find the perfect university based on your academic goals, budget, and preferences.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <CheckCircle className="mr-3 h-5 w-5 text-[#003763] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-[#002a4a]">Application Assistance</h3>
                      <p className="text-gray-600">
                        Our experts guide you through the entire application process, from documentation to submission.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <CheckCircle className="mr-3 h-5 w-5 text-[#003763] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-[#002a4a]">Visa Guidance</h3>
                      <p className="text-gray-600">
                        We provide comprehensive support for student visa applications to ensure a smooth process.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <CheckCircle className="mr-3 h-5 w-5 text-[#003763] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-[#002a4a]">Pre-Departure Orientation</h3>
                      <p className="text-gray-600">
                        Prepare for your journey with our comprehensive pre-departure guidance and orientation.
                      </p>
                    </div>
                  </li>
                </ul>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-4">
                  <Button asChild className="bg-[#003763] hover:bg-[#002a4a] transition-all duration-300">
                    <Link href="/services" className="flex items-center">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Study+Abroad+Services"
                  alt="Study Abroad Services"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Support</h3>
                  <p className="text-white/80">From application to graduation, we're with you every step of the way</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-[#e8f4fa]">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-full bg-[#003763]/10 px-3 py-1 text-sm font-medium text-[#003763] mb-4">
                Success Stories
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002a4a] mb-4">What Our Students Say</h2>
              <p className="text-gray-600">
                Hear from students who have successfully achieved their study abroad dreams with our help.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                university: "Oxford University",
                country: "United Kingdom",
                testimonial:
                  "The guidance I received throughout my application process was invaluable. From selecting the right program to securing a scholarship, Linsma was with me every step of the way.",
                image: "/placeholder.svg?height=100&width=100&text=SJ",
              },
              {
                name: "Michael Chen",
                university: "University of Toronto",
                country: "Canada",
                testimonial:
                  "The language preparation program really helped me improve my English skills before starting my studies in Canada. I felt confident and prepared from day one.",
                image: "/placeholder.svg?height=100&width=100&text=MC",
              },
              {
                name: "Priya Sharma",
                university: "Technical University of Munich",
                country: "Germany",
                testimonial:
                  "I never thought studying in Germany would be possible, but with Linsma's help, I navigated the application process and secured a place at my dream university.",
                image: "/placeholder.svg?height=100&width=100&text=PS",
              },
            ].map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} direction="up" delay={index * 0.1}>
                <Card3D>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-full mr-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#002a4a]">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500">
                            {testimonial.university}, {testimonial.country}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
                    </CardContent>
                  </Card>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                className="border-[#003763] text-[#003763] hover:bg-[#003763] hover:text-white transition-all duration-300"
              >
                <Link href="/testimonials" className="flex items-center">
                  View More Success Stories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#003763] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200&text=Pattern')] bg-repeat opacity-5"></div>
          <div className="absolute -top-[10%] -right-[10%] h-[500px] w-[500px] rounded-full bg-[#4ca3d8]/10 blur-3xl"></div>
          <div className="absolute -bottom-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Global Education Journey?</h2>
              <p className="mb-8 text-xl text-white/80">
                Take the first step towards your international education goals. Our expert advisors are ready to guide
                you through every step of the process.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    className="bg-white text-[#003763] hover:bg-gray-100 transition-all duration-300 px-6 py-6 text-base"
                  >
                    <Link href="/contact">Get Started Today</Link>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 transition-all duration-300 px-6 py-6 text-base"
                  >
                    <Link href="/about">Learn More</Link>
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
