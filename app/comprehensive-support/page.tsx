"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Card3D } from "@/components/ui/3d-card"
import { motion } from "framer-motion"
import { ArrowRight, GraduationCap, BookOpen, Award, Briefcase } from "lucide-react"

export default function ComprehensiveSupportPage() {
  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <section className="relative bg-[#002a4a] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200&text=Pattern')] bg-repeat opacity-5"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <TextReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">Comprehensive Support</h1>
          </TextReveal>
          <ScrollReveal>
            <p className="text-xl text-center text-white/80 max-w-3xl mx-auto">
              Expert guidance and support for your entire educational journey, from kindergarten to professional
              development.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="inline-block rounded-full bg-[#e8f4fa] px-3 py-1 text-sm font-medium text-[#003763] mb-4">
                By Linsma Impact
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002a4a] mb-6">
                Comprehensive Support for Your Educational Journey
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                At <span className="font-semibold">Linsma Impact</span>, we understand that education is a lifelong
                journey that begins as early as kindergarten and extends through every stage of learning—whether it's
                primary, secondary, vocational, or higher education. Whether you are just starting your journey,
                transitioning between school levels, or seeking technical and vocational skills, we provide expert
                support every step of the way.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-16 md:py-24 bg-[#f9f9f9]">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002a4a] mb-6">
                1. Expert Guidance for All Educational Pathways
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We guide students through all levels of education, ensuring a smooth path from early childhood to
                professional and vocational training. Our services include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card3D>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4fa]">
                        <GraduationCap className="h-6 w-6 text-[#003763]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#002a4a] mb-3">Kindergarten Education</h3>
                      <p className="text-gray-700">
                        Choosing the right early childhood education for your child's growth and development.
                      </p>
                    </CardContent>
                  </Card>
                </Card3D>

                <Card3D>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4fa]">
                        <BookOpen className="h-6 w-6 text-[#003763]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#002a4a] mb-3">Primary and Secondary School</h3>
                      <p className="text-gray-700">
                        Assistance with selecting and applying to the best primary and secondary schools.
                      </p>
                    </CardContent>
                  </Card>
                </Card3D>

                <Card3D>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4fa]">
                        <Award className="h-6 w-6 text-[#003763]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#002a4a] mb-3">University and Certification</h3>
                      <p className="text-gray-700">
                        Support for higher education and specialized technical skills, including vocational training
                        programs.
                      </p>
                    </CardContent>
                  </Card>
                </Card3D>

                <Card3D>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4fa]">
                        <Briefcase className="h-6 w-6 text-[#003763]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#002a4a] mb-3">Skilled Trades and Apprenticeships</h3>
                      <p className="text-gray-700">
                        Guidance on training programs for hands-on professions like welding, auto mechanics, and more.
                      </p>
                    </CardContent>
                  </Card>
                </Card3D>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002a4a] mb-6">
                2. Application Assistance and Document Preparation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We offer professional help for applications at all educational levels:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">Kindergarten to Secondary School Applications:</span> Personalized
                    support with selecting the best schools and preparing application materials, including essays and
                    documents.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">University and Vocational Training Applications:</span> Assistance
                    with preparing application forms, personal statements, recommendation letters, and transcripts.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">Skilled Trade Programs:</span> Help with applying for
                    apprenticeships and technical training certifications, ensuring you're ready to start your trade
                    career.
                  </p>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002a4a] mb-6">3. Visa and Immigration Support</h2>
              <p className="text-lg text-gray-700 mb-6">
                For international students, Linsma Impact provides comprehensive visa and immigration assistance for all
                educational levels, including:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">Student Visas for Primary, Secondary, and Higher Education:</span>{" "}
                    Support with gathering documents, completing visa applications, and preparing for interviews.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">Vocational and Trade School Visa Applications:</span> Assistance
                    with student visas for technical and trade programs abroad.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">Travel and Accommodation Support:</span> Help with arranging travel
                    logistics and finding appropriate housing, no matter your educational level.
                  </p>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002a4a] mb-6">
                4. Scholarships, Grants, and Financial Aid
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Education is an investment, and we help make it affordable for all students:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">Scholarships for All Educational Levels:</span> Finding and applying
                    for scholarships for children in kindergarten, primary and secondary school students, university
                    students, and those in vocational training.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">Financial Aid for Vocational Programs and Skilled Trades:</span>{" "}
                    Identifying grants and sponsorships that help reduce the cost of trade school programs.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">Education-Related Financial Planning:</span> Providing advice on how
                    to manage your educational expenses across all stages of learning.
                  </p>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002a4a] mb-6">
                5. Pre-Departure and Orientation Assistance
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Linsma Impact offers thorough pre-departure and orientation services:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">Kindergarten to Secondary School Transition:</span> Support for
                    parents and children transitioning between school levels, including advice on adapting to a new
                    academic environment.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">International Students:</span> Pre-departure briefings, cultural
                    orientation, and logistical support for students moving abroad for any educational program.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">Acclimatizing to New Environments:</span> Guidance on understanding
                    different education systems, cultural integration, and adjusting to a new way of life.
                  </p>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002a4a] mb-6">6. In-Country Support</h2>
              <p className="text-lg text-gray-700 mb-6">
                Once students have arrived at their schools or training centres, Linsma Impact continues to provide:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">
                      Support for Primary, Secondary, and Higher Education Students:
                    </span>{" "}
                    Academic help, social integration, and ongoing guidance.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">Vocational Training and Skilled Trades Support:</span> Mentoring,
                    hands-on training support, and career guidance.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">Safety and Well-Being:</span> Ensuring access to health services,
                    emergency contacts, and rights awareness.
                  </p>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002a4a] mb-6">
                7. Career Guidance, Internships, and Apprenticeships
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We help students gain work experience and align with career goals:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">Career Counseling for School Students:</span> Guiding early
                    educational decisions based on interests.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">Internship and Apprenticeship Opportunities:</span> Matching
                    vocational and university students with real-world experience.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">Job Placement Assistance:</span> Helping graduates secure employment
                    in their fields.
                  </p>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002a4a] mb-6">8. Health and Safety Support</h2>
              <p className="text-lg text-gray-700 mb-6">We prioritize student safety:</p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">Health Insurance and Safety Resources:</span> Help securing health
                    insurance and safety education.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4fa] mt-1">
                    <ArrowRight className="h-3 w-3 text-[#003763]" />
                  </div>
                  <p>
                    <span className="font-semibold">Emergency Assistance:</span> 24/7 support in case of personal or
                    medical emergencies abroad or domestically.
                  </p>
                </li>
              </ul>
            </div>
          </ScrollReveal>
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
