"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"
import { motion } from "framer-motion"
import AnimatedCounter from "@/components/ui/animated-counter"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="container mx-auto text-center">
          <h1>About Us</h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <FadeIn>
            <h2 className="mb-8 text-center text-[#002a4a]">Our Mission</h2>
            <p className="mx-auto mb-8 max-w-3xl text-center text-lg">
              We help students who want to study in other countries by giving them clear and precise information. Our
              goal is to make the process easy by guiding them through every step—choosing the right country, finding a
              school, applying for a visa, and getting scholarships. We want every student to feel confident and
              supported on their journey to studying abroad and navigating the student visa application process.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section bg-[#e8f4fa]">
        <div className="container mx-auto">
          <FadeIn>
            <h2 className="mb-8 text-center text-[#002a4a]">Our Vision</h2>
            <p className="mx-auto mb-8 max-w-3xl text-center text-lg">
              We want to make studying in another country easy and possible for students everywhere. Our vision is to
              create a trusted website where students can find all the information they need, get the right help, and
              achieve their study goals without stress or confusion.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-[#002a4a] text-white">
        <div className="container mx-auto">
          <FadeIn>
            <h2 className="mb-12 text-center">Why Choose Us?</h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FadeIn direction="up" delay={0.1}>
              <motion.div
                className="flex flex-col items-center text-center"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 rounded-full bg-white/10 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="mb-2">Wide Network of Partner Institutions</h3>
                <p className="text-white/80">
                  We work with top schools, universities, and educational institutions worldwide.
                </p>
              </motion.div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <motion.div
                className="flex flex-col items-center text-center"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 rounded-full bg-white/10 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="mb-2">Expert Guidance & Personalized Support</h3>
                <p className="text-white/80">
                  Our advisors provide the best education and career guidance tailored to your specific needs.
                </p>
              </motion.div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <motion.div
                className="flex flex-col items-center text-center"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 rounded-full bg-white/10 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="mb-2">Proven Track Record</h3>
                <p className="text-white/80">
                  Our process consistently helps students achieve their study abroad goals successfully.
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <FadeIn>
            <h2 className="mb-12 text-center text-[#002a4a]">Our Impact</h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <FadeIn direction="up" delay={0.1}>
              <motion.div
                className="text-center p-6 rounded-lg bg-[#e8f4fa]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-bold text-[#003763] mb-2">
                  <AnimatedCounter value={5000} formatValue={(value) => `${value}+`} />
                </div>
                <p className="text-gray-600">Students Placed</p>
              </motion.div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <motion.div
                className="text-center p-6 rounded-lg bg-[#e8f4fa]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-bold text-[#003763] mb-2">
                  <AnimatedCounter value={50} formatValue={(value) => `${value}+`} />
                </div>
                <p className="text-gray-600">Countries</p>
              </motion.div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <motion.div
                className="text-center p-6 rounded-lg bg-[#e8f4fa]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-bold text-[#003763] mb-2">
                  <AnimatedCounter value={200} formatValue={(value) => `${value}+`} />
                </div>
                <p className="text-gray-600">Universities</p>
              </motion.div>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <motion.div
                className="text-center p-6 rounded-lg bg-[#e8f4fa]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-bold text-[#003763] mb-2">
                  <AnimatedCounter value={98} formatValue={(value) => `${value}%`} />
                </div>
                <p className="text-gray-600">Success Rate</p>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section bg-[#f9f9f9]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <FadeIn direction="left">
              <div className="relative h-[400px]">
                <Image
                  src="/images/our approach.jpg"
                  alt="Student studying"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <h2 className="mb-4 text-[#002a4a]">
                Our Approach:
                <br />
                Simple and Helpful
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                We make studying abroad easy by guiding students every step of the way. From choosing the right country
                and school to applying for a visa, we provide clear and simple information.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Button className="bg-[#003763] hover:bg-[#002a4a] transition-colors duration-300">Get Started</Button>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="section bg-white">
        <div className="container mx-auto">
          <FadeIn>
            <h2 className="mb-12 text-center text-[#002a4a]">Meet Our Team</h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Jane Doe", role: "Founder & CEO" },
              { name: "John Smith", role: "Education Director" },
              { name: "Emily Johnson", role: "Student Advisor" },
              { name: "Michael Brown", role: "Visa Specialist" },
            ].map((member, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  className="bg-white rounded-lg overflow-hidden shadow-sm"
                  whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=${member.name}`}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                    <div className="mt-3 flex justify-center space-x-3">
                      <a href="#" className="text-gray-400 hover:text-[#003763] transition-colors duration-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-[#003763] transition-colors duration-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-[#003763] transition-colors duration-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section bg-[#003763] text-white">
        <div className="container mx-auto">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4">Ready to Start Your Journey?</h2>
              <p className="mb-6 text-white/80">
                Contact us today to learn more about our services and how we can help you achieve your study abroad
                dreams.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Button asChild className="bg-white text-[#003763] hover:bg-gray-100 transition-colors duration-300">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
