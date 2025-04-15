"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { motion } from "framer-motion"
import { ArrowRight, Heart, Globe, BookOpen, Shield } from "lucide-react"

export default function MissionPage() {
  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <section className="relative bg-[#002a4a] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200&text=Pattern')] bg-repeat opacity-5"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <TextReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">Our Mission & Vision</h1>
          </TextReveal>
          <ScrollReveal>
            <p className="text-xl text-center text-white/80 max-w-3xl mx-auto">
              Making education easy, affordable, and inspiring—no matter where you are in the world.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-[#e8f4fa] px-3 py-1 text-sm font-medium text-[#003763]">
                  Our Mission
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002a4a]">
                  Making Education Accessible Globally
                </h2>
                <p className="text-lg md:text-xl text-gray-700">
                  At <span className="font-semibold">Linsma</span>, our mission is to make education easy, affordable,
                  and inspiring—no matter where you are in the world. Whether in your home country or studying abroad,
                  we are dedicated to removing barriers and creating a clear, joyful path to academic and personal
                  growth.
                </p>
                <p className="text-lg text-gray-700">
                  We believe education should never be limited by geography, income, or confusion. That's why we offer
                  personalized guidance, strategic partnerships, and student-first services that open doors and expand
                  horizons.
                </p>

                <div className="mt-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#002a4a] mb-4">Our Core Values</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4fa]">
                        <Heart className="h-5 w-5 text-[#003763]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#002a4a]">Accessibility</h4>
                        <p className="text-gray-600">Making quality education available to all</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4fa]">
                        <BookOpen className="h-5 w-5 text-[#003763]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#002a4a]">Excellence</h4>
                        <p className="text-gray-600">Delivering the highest quality in all we do</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4fa]">
                        <Shield className="h-5 w-5 text-[#003763]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#002a4a]">Trust</h4>
                        <p className="text-gray-600">Building reliable relationships with students</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4fa]">
                        <Globe className="h-5 w-5 text-[#003763]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#002a4a]">Integrity</h4>
                        <p className="text-gray-600">Upholding ethical standards in all interactions</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mt-4">We are committed to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Making learning affordable without compromising on quality.</li>
                  <li>Offering transparent support and guidance through every step of the educational journey.</li>
                  <li>Cultivating cultural understanding and global competence.</li>
                  <li>Empowering students with tools to thrive academically, professionally, and personally.</li>
                </ul>

                <p className="text-lg font-semibold text-[#002a4a]">
                  We exist to make the dream of education simple, enjoyable, and achievable—locally and globally.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=700&text=Students+Learning"
                  alt="Students Learning"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Empowering Through Education</h3>
                  <p className="text-white/80">Creating pathways to success for students worldwide</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-[#e8f4fa]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <ScrollReveal direction="left">
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=500&width=700&text=Global+Education"
                  alt="Global Education"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Building Global Bridges</h3>
                  <p className="text-white/80">Connecting students with opportunities worldwide</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-[#003763]/10 px-3 py-1 text-sm font-medium text-[#003763]">
                  Our Vision
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002a4a]">
                  A Global Bridge in Education
                </h2>
                <p className="text-lg md:text-xl text-gray-700">
                  Our vision is to become a trusted <span className="font-semibold">global bridge in education</span>,
                  uniting students, institutions, and cultures in a shared pursuit of knowledge and opportunity.
                </p>
                <p className="text-lg text-gray-700">
                  We envision a world where <span className="font-semibold">every student</span>, regardless of
                  background or location, has equal access to{" "}
                  <span className="font-semibold">world-class education</span>,{" "}
                  <span className="font-semibold">seamless guidance</span>, and{" "}
                  <span className="font-semibold">life-changing experiences</span>.
                </p>
                <p className="text-lg text-gray-700">
                  Linsma seeks to stand at the forefront of educational advancement across{" "}
                  <span className="font-semibold">Africa, Asia, Europe, the Americas</span>, and beyond—
                  <span className="font-semibold">
                    fostering a generation of confident learners and visionary leaders.
                  </span>
                </p>

                <div className="mt-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#002a4a] mb-4">Driven by Our Values</h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li>
                      <span className="font-semibold">Equity:</span> making education fair and inclusive for all.
                    </li>
                    <li>
                      <span className="font-semibold">Excellence:</span> delivering top-tier service and academic
                      support.
                    </li>
                    <li>
                      <span className="font-semibold">Empowerment:</span> equipping students with knowledge, confidence,
                      and purpose.
                    </li>
                    <li>
                      <span className="font-semibold">Empathy:</span> understanding every student's unique story and
                      supporting them with heart.
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#003763] mt-6">
                  <p className="text-lg italic text-gray-700">
                    "We are not just shaping careers—we're building futures. We are not just an agency—we're a movement
                    to make education a right, not a privilege, and to ensure it's always an exciting, fulfilling
                    journey."
                  </p>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-4">
                  <Button asChild className="bg-[#003763] hover:bg-[#002a4a] transition-all duration-300">
                    <Link href="/contact" className="flex items-center">
                      Join Our Mission
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Educational Journey?</h2>
              <p className="mb-8 text-xl text-white/80">
                Take the first step towards achieving your educational goals. Our expert advisors are ready to guide you
                through every step of the process.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    className="bg-white text-[#003763] hover:bg-gray-100 transition-all duration-300 px-6 py-6 text-base"
                  >
                    <Link href="/contact">Contact Us Today</Link>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 transition-all duration-300 px-6 py-6 text-base"
                  >
                    <Link href="/services">Explore Our Services</Link>
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
