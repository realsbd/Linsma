"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Card3D } from "@/components/ui/3d-card"
import { motion } from "framer-motion"
import { ArrowRight, GraduationCap, Briefcase, BookOpen, CheckCircle } from "lucide-react"

const services = [
  {
    id: "education",
    title: "Educational Services",
    description:
      "Comprehensive educational placement services for students seeking to study abroad at top institutions worldwide.",
    image: "/placeholder.svg?height=300&width=500&text=Educational+Services",
    link: "/services/education",
    features: [
      "University and college placement services",
      "Study abroad consulting and application assistance",
      "Scholarship and financial aid guidance",
      "Visa and student permit assistance",
    ],
    icon: <GraduationCap className="h-6 w-6 text-[#003763]" />,
  },
  {
    id: "consultancy",
    title: "Consultancy Services",
    description:
      "Expert guidance and strategic advice to help you make informed decisions about your educational and career path.",
    image: "/placeholder.svg?height=300&width=500&text=Consultancy+Services",
    link: "/services/consultancy",
    features: [
      "Academic and career counseling",
      "Business strategy and operations consulting",
      "Management and HR consulting",
      "Policy and governance advisory services",
    ],
    icon: <Briefcase className="h-6 w-6 text-[#003763]" />,
  },
  {
    id: "language",
    title: "Language Services",
    description:
      "Comprehensive language services to help you succeed in your international academic and professional endeavors.",
    image: "/placeholder.svg?height=300&width=500&text=Language+Services",
    link: "/services/language",
    features: [
      "Language proficiency test preparation",
      "Language courses for various purposes",
      "Translation and interpretation services",
      "Cross-cultural communication training",
    ],
    icon: <BookOpen className="h-6 w-6 text-[#003763]" />,
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <section className="relative bg-[#002a4a] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200&text=Pattern')] bg-repeat opacity-5"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <TextReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h1>
          </TextReveal>
          <ScrollReveal>
            <p className="text-xl text-center text-white/80 max-w-3xl mx-auto">
              Comprehensive support for your educational journey, from application to graduation and beyond.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-full bg-[#e8f4fa] px-3 py-1 text-sm font-medium text-[#003763] mb-4">
                What We Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002a4a] mb-4">
                Comprehensive Services for Your Success
              </h2>
              <p className="text-gray-600">
                We provide a range of services designed to support your educational and career goals, from study abroad
                assistance to language training and professional consultancy.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.1}>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
                  {index % 2 === 0 ? (
                    <>
                      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                          </div>
                          <h3 className="text-xl font-semibold">{service.title}</h3>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="flex items-center">
                          <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4fa]">
                            {service.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-[#002a4a]">{service.title}</h3>
                        </div>

                        <p className="text-gray-700">{service.description}</p>

                        <div className="space-y-3">
                          <h4 className="font-medium text-[#002a4a]">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <CheckCircle className="mr-2 h-5 w-5 text-[#003763] shrink-0 mt-0.5" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild className="bg-[#003763] hover:bg-[#002a4a] transition-all duration-300">
                            <Link href={service.link} className="flex items-center">
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-6">
                        <div className="flex items-center">
                          <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4fa]">
                            {service.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-[#002a4a]">{service.title}</h3>
                        </div>

                        <p className="text-gray-700">{service.description}</p>

                        <div className="space-y-3">
                          <h4 className="font-medium text-[#002a4a]">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <CheckCircle className="mr-2 h-5 w-5 text-[#003763] shrink-0 mt-0.5" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild className="bg-[#003763] hover:bg-[#002a4a] transition-all duration-300">
                            <Link href={service.link} className="flex items-center">
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </motion.div>
                      </div>

                      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                          </div>
                          <h3 className="text-xl font-semibold">{service.title}</h3>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-[#e8f4fa]">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-full bg-[#003763]/10 px-3 py-1 text-sm font-medium text-[#003763] mb-4">
                Our Approach
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002a4a] mb-4">Why Choose Our Services</h2>
              <p className="text-gray-600">
                We are committed to providing exceptional service and support to help you achieve your educational and
                career goals.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={0.1}>
              <Card3D>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4fa]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-[#003763]"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-[#002a4a]">Expert Team</h3>
                    <p className="text-gray-700">
                      Our team consists of experienced professionals with deep knowledge of international education,
                      language training, and consultancy services.
                    </p>
                  </CardContent>
                </Card>
              </Card3D>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <Card3D>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4fa]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-[#003763]"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-[#002a4a]">Personalized Approach</h3>
                    <p className="text-gray-700">
                      We understand that each client has unique needs and goals. Our services are tailored to your
                      specific requirements and aspirations.
                    </p>
                  </CardContent>
                </Card>
              </Card3D>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <Card3D>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4fa]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-[#003763]"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-[#002a4a]">Proven Track Record</h3>
                    <p className="text-gray-700">
                      We have a history of success in helping students and professionals achieve their educational and
                      career goals.
                    </p>
                  </CardContent>
                </Card>
              </Card3D>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <Card3D>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4fa]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-[#003763]"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-[#002a4a]">Timely Support</h3>
                    <p className="text-gray-700">
                      We provide prompt and efficient support throughout your journey, ensuring you meet important
                      deadlines and requirements.
                    </p>
                  </CardContent>
                </Card>
              </Card3D>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
              <Card3D>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4fa]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-[#003763]"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-[#002a4a]">Global Network</h3>
                    <p className="text-gray-700">
                      We have established relationships with educational institutions, language schools, and industry
                      partners worldwide.
                    </p>
                  </CardContent>
                </Card>
              </Card3D>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6}>
              <Card3D>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4fa]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-[#003763]"
                      >
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                        <line x1="6" y1="1" x2="6" y2="4"></line>
                        <line x1="10" y1="1" x2="10" y2="4"></line>
                        <line x1="14" y1="1" x2="14" y2="4"></line>
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-[#002a4a]">Comprehensive Solutions</h3>
                    <p className="text-gray-700">
                      We offer end-to-end services that address all aspects of your educational and professional
                      development needs.
                    </p>
                  </CardContent>
                </Card>
              </Card3D>
            </ScrollReveal>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="mb-8 text-xl text-white/80">
                Contact us today to learn more about our services and how we can help you achieve your educational and
                career goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    className="bg-white text-[#003763] hover:bg-gray-100 transition-all duration-300 px-6 py-6 text-base"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 transition-all duration-300 px-6 py-6 text-base"
                  >
                    <Link href="/About">Learn More About Us</Link>
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
