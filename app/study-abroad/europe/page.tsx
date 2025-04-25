"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Card3D } from "@/components/ui/3d-card"
import { FormInput, FormSelect, FormTextarea, SubmitButton } from "@/components/ui/form-elements"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, CheckCircle, GraduationCap, BookOpen, Award, Building, Users } from "lucide-react"

const europeanCountries = [
  {
    name: "United Kingdom",
    flag: "/placeholder.svg?height=40&width=40&text=UK",
    universities: ["University of Oxford", "University of Cambridge", "Imperial College London"],
    description: "The UK offers world-class education with a rich cultural heritage and diverse student community.",
    image: "/images/study-abroad-uk.jpg",
  },
  {
    name: "Germany",
    flag: "/placeholder.svg?height=40&width=40&text=DE",
    universities: ["Technical University of Munich", "Ludwig Maximilian University", "Heidelberg University"],
    description:
      "Germany provides tuition-free education at public universities with strong emphasis on research and innovation.",
    image: "/images/germany-school.jpg",
  },
  {
    name: "France",
    flag: "/placeholder.svg?height=40&width=40&text=FR",
    universities: ["Sorbonne University", "École Polytechnique", "Sciences Po"],
    description: "France combines academic excellence with rich cultural experiences in a vibrant European setting.",
    image: "/images/france-schools.jpg",
  },
  {
    name: "Netherlands",
    flag: "/placeholder.svg?height=40&width=40&text=NL",
    universities: ["University of Amsterdam", "Delft University of Technology", "Leiden University"],
    description:
      "The Netherlands offers numerous English-taught programs in an innovative and international environment.",
    image: "/images/netherland-schools.jpg",
  },
  {
    name: "Spain",
    flag: "/placeholder.svg?height=40&width=40&text=ES",
    universities: ["University of Barcelona", "Complutense University of Madrid", "University of Valencia"],
    description: "Spain provides a vibrant cultural experience alongside quality education in a Mediterranean setting.",
    image: "/images/spain-schools.jpg",
  },
  {
    name: "Italy",
    flag: "/placeholder.svg?height=40&width=40&text=IT",
    universities: ["University of Bologna", "Sapienza University of Rome", "Politecnico di Milano"],
    description: "Italy offers a unique blend of historical academic tradition and modern educational approaches.",
    image: "/placeholder.svg?height=300&width=500&text=Italy",
  },
]

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  education: string
  interest: string
  budget: string
  message: string
}

type FormErrors = {
  [key in keyof FormData]?: string
}

export default function StudyInEuropePage() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0])

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    interest: "",
    budget: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user selects
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Required fields validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call to Flask backend
      // In production, this would be a real API call

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          education: "",
          interest: "",
          budget: "",
          message: "",
        })
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrors((prev) => ({
        ...prev,
        form: "There was an error submitting your inquiry. Please try again.",
      }))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <section className="relative bg-[#002a4a] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200&text=Pattern')] bg-repeat opacity-5"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <TextReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Study in Europe</h1>
          </TextReveal>
          <ScrollReveal>
            <p className="text-xl text-center text-white/80 max-w-3xl mx-auto">
              Explore prestigious universities in the UK, Germany, France, Spain, Italy, and more. Experience
              world-class education in culturally rich environments.
            </p>
          </ScrollReveal>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {europeanCountries.map((country, index) => (
              <ScrollReveal key={country.name} direction="up" delay={index * 0.1}>
                <motion.div
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative h-6 w-6 overflow-hidden rounded-full">
                    <Image
                      src={country.flag || "/placeholder.svg"}
                      alt={`${country.name} flag`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">{country.name}</span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study Section */}
      <section className="py-16 md:py-24 bg-white" ref={targetRef}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <motion.div style={{ opacity, y }}>
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-[#e8f4fa] px-3 py-1 text-sm font-medium text-[#003763]">
                  European Education
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#002a4a]">Why study in Europe?</h2>
                <p className="text-gray-700">
                  For many years, universities in Europe have consistently ranked among the highest in the world. The
                  continent offers a rich cultural heritage and diverse study options. Many of the world's leading
                  academics are part of the faculty of European universities, making it an ideal destination for
                  students seeking a high-quality education with a global perspective.
                </p>
                <p className="text-gray-700">
                  European universities are known for their innovative teaching methods, research opportunities, and
                  international outlook. Many programs are taught in English, making them accessible to international
                  students from around the world.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4fa]">
                      <GraduationCap className="h-5 w-5 text-[#003763]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#002a4a]">Academic Excellence</h3>
                      <p className="text-sm text-gray-600">World-renowned universities with centuries of tradition</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4fa]">
                      <Building className="h-5 w-5 text-[#003763]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#002a4a]">Cultural Experience</h3>
                      <p className="text-sm text-gray-600">Rich history, diverse cultures, and vibrant city life</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4fa]">
                      <Users className="h-5 w-5 text-[#003763]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#002a4a]">Global Network</h3>
                      <p className="text-sm text-gray-600">
                        Connect with students and professionals from around the world
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4fa]">
                      <Award className="h-5 w-5 text-[#003763]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#002a4a]">Career Opportunities</h3>
                      <p className="text-sm text-gray-600">Enhanced employability and international work prospects</p>
                    </div>
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-4">
                  <Button asChild className="bg-[#003763] hover:bg-[#002a4a] transition-all duration-300">
                    <a href="#inquiry-form" className="flex items-center">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <ScrollReveal direction="right">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/europe-university.jpeg"
                  alt="Historic European University with cobblestone streets"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-2 w-2 rounded-full bg-white" />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Historic Universities</h3>
                  <p className="text-white/80">Many European universities have centuries of academic tradition</p>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 rounded-lg bg-white/90 backdrop-blur-sm p-3 shadow-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-[#003763] mr-2" />
                    <span className="text-sm font-medium text-[#002a4a]">Top 100 Universities</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-24 left-4 rounded-lg bg-white/90 backdrop-blur-sm p-3 shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-[#003763] mr-2" />
                    <span className="text-sm font-medium text-[#002a4a]">English-Taught Programs</span>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-[#e8f4fa]">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-full bg-[#003763]/10 px-3 py-1 text-sm font-medium text-[#003763] mb-4">
                Advantages
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002a4a] mb-4">Benefits of Studying in Europe</h2>
              <p className="text-gray-600">
                Discover the many advantages that make Europe one of the most popular destinations for international
                students.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                title: "1. World-Class Education",
                description:
                  "Universities in Europe consistently rank among the best globally, offering high-quality education and research opportunities.",
              },
              {
                title: "2. Internationally Recognized Degrees",
                description:
                  "A degree from a university in Europe is widely respected by employers, universities, and governments worldwide.",
              },
              {
                title: "3. Diverse Range of Study Programs",
                description:
                  "European universities offer a wide selection of academic programs across various fields, allowing students to tailor their studies to their career goals.",
              },
              {
                title: "4. Shorter Course Duration",
                description:
                  "Undergraduate and graduate degrees typically take fewer years to complete in Europe, making education more time-efficient compared to other countries.",
              },
              {
                title: "5. Strong Research Focus",
                description:
                  "Europe is known for cutting-edge research, with significant investment in scientific and technological advancements.",
              },
            ].map((benefit, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <Card3D>
                  <motion.div
                    className="bg-white p-6 rounded-lg shadow-sm"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="mb-2 text-xl font-semibold text-[#002a4a]">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </motion.div>
                </Card3D>
              </ScrollReveal>
            ))}

            {[
              {
                title: "6. Multicultural Environment",
                description: "Studying in a European country provides a culturally diverse and inclusive atmosphere.",
              },
              {
                title: "7. Work Opportunities",
                description:
                  "International students can gain part-time work while studying and may have opportunities for post-study work visas after graduation.",
              },
              {
                title: "8. High Employability",
                description:
                  "Graduates from universities in Europe are in high demand, with employers valuing their international experience and diverse skill sets.",
              },
              {
                title: "9. Access to Scholarships and Financial Aid",
                description:
                  "Many universities in Europe offer scholarships and funding options to help international students with tuition fees.",
              },
              {
                title: "10. Rich Cultural and Social Life",
                description:
                  "Europe offers a vibrant student life with famous landmarks, arts, music, and numerous extracurricular activities.",
              },
            ].map((benefit, index) => (
              <ScrollReveal key={index} direction="up" delay={(index + 5) * 0.1}>
                <Card3D>
                  <motion.div
                    className="bg-white p-6 rounded-lg shadow-sm"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="mb-2 text-xl font-semibold text-[#002a4a]">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </motion.div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-right">
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              <Link href="/contact" className="text-[#003763] hover:underline inline-flex items-center font-medium">
                Learn more about applying here
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-full bg-[#e8f4fa] px-3 py-1 text-sm font-medium text-[#003763] mb-4">
                Destinations
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002a4a] mb-4">
                Popular European Study Destinations
              </h2>
              <p className="text-gray-600">
                Explore some of the most popular countries for international students in Europe.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {europeanCountries.map((country, index) => (
              <ScrollReveal key={country.name} direction="up" delay={index * 0.1}>
                <Card3D>
                  <Card className="overflow-hidden h-full">
                    <div className="relative h-48 w-full">
                      <Image
                        src={country.image || "/placeholder.svg"}
                        alt={country.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <div className="relative h-5 w-5 overflow-hidden rounded-full">
                          <Image
                            src={country.flag || "/placeholder.svg"}
                            alt={`${country.name} flag`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium text-[#002a4a]">{country.name}</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="mb-4 text-gray-700">{country.description}</p>
                      <h3 className="text-lg font-semibold text-[#002a4a] mb-2">Top Universities:</h3>
                      <ul className="space-y-2">
                        {country.universities.map((university, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-[#003763] shrink-0 mt-0.5" />
                            <span className="text-gray-700">{university}</span>
                          </li>
                        ))}
                      </ul>
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-6">
                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-[#003763] text-[#003763] hover:bg-[#003763] hover:text-white transition-all duration-300"
                        >
                          <Link
                            href={`/study-abroad/${country.name.toLowerCase().replace(/\s+/g, "-")}`}
                            className="flex items-center justify-center"
                          >
                            Learn More
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

      {/* Contact Form Section */}
      <section id="inquiry-form" className="py-16 md:py-24 bg-[#e8f4fa]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#002a4a] mb-4">Interested in studying in Europe?</h2>
                <p className="text-gray-700">
                  Fill out the form and our education consultants will contact you to discuss your options for studying
                  in Europe. We'll help you navigate the application process, visa requirements, and scholarship
                  opportunities.
                </p>

                <div className="mt-8 space-y-6">
                  <motion.div
                    className="bg-white p-6 rounded-lg shadow-sm"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-medium text-[#003763] mb-4">Popular Destinations</h3>
                    <div className="flex flex-wrap gap-2">
                      {["UK", "Germany", "France", "Spain", "Italy", "Netherlands", "Sweden", "Denmark"].map(
                        (country) => (
                          <span
                            key={country}
                            className="inline-block px-3 py-1 bg-[#e8f4fa] text-[#003763] text-sm rounded-full"
                          >
                            {country}
                          </span>
                        ),
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white p-6 rounded-lg shadow-sm"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-medium text-[#003763] mb-4">Top Fields of Study</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Business",
                        "Engineering",
                        "Medicine",
                        "Arts",
                        "Computer Science",
                        "Law",
                        "Social Sciences",
                      ].map((field) => (
                        <span
                          key={field}
                          className="inline-block px-3 py-1 bg-[#e8f4fa] text-[#003763] text-sm rounded-full"
                        >
                          {field}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white p-6 rounded-lg shadow-sm"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-medium text-[#003763] mb-4">Why Choose Us?</h3>
                    <ul className="space-y-2">
                      {[
                        "Expert guidance from experienced consultants",
                        "Comprehensive support throughout the application process",
                        "Assistance with visa applications and documentation",
                        "Scholarship and financial aid guidance",
                        "Pre-departure orientation and support",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-[#003763] shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-6 text-[#002a4a]">Contact Us</h3>

                {errors.form && (
                  <motion.div
                    className="mb-6 rounded-md bg-red-50 p-4 text-red-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{errors.form}</p>
                  </motion.div>
                )}

                {isSubmitted && (
                  <motion.div
                    className="mb-6 rounded-md bg-green-50 p-4 text-green-600"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-medium">Thank you for your inquiry!</p>
                    <p>We'll get back to you as soon as possible with information about studying in Europe.</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      error={errors.firstName}
                    />

                    <FormInput
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      error={errors.lastName}
                    />
                  </div>

                  <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    required
                    error={errors.email}
                  />

                  <FormInput
                    label="Phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-8900"
                    error={errors.phone}
                  />

                  <FormSelect
                    label="Education Level"
                    name="education"
                    value={formData.education}
                    onChange={(value) => handleSelectChange("education", value)}
                    options={[
                      { value: "high-school", label: "High School" },
                      { value: "bachelors", label: "Bachelor's Degree" },
                      { value: "masters", label: "Master's Degree" },
                      { value: "phd", label: "PhD" },
                    ]}
                    placeholder="Select your education"
                  />

                  <FormSelect
                    label="Area of Interest"
                    name="interest"
                    value={formData.interest}
                    onChange={(value) => handleSelectChange("interest", value)}
                    options={[
                      { value: "undergraduate", label: "Undergraduate Studies" },
                      { value: "postgraduate", label: "Postgraduate Studies" },
                      { value: "language", label: "Language Programs" },
                      { value: "research", label: "Research Opportunities" },
                    ]}
                    placeholder="Select your interest"
                  />

                  <FormSelect
                    label="Budget Range"
                    name="budget"
                    value={formData.budget}
                    onChange={(value) => handleSelectChange("budget", value)}
                    options={[
                      { value: "10000-20000", label: "$10,000 - $20,000" },
                      { value: "20000-30000", label: "$20,000 - $30,000" },
                      { value: "30000-50000", label: "$30,000 - $50,000" },
                      { value: "50000+", label: "$50,000+" },
                    ]}
                    placeholder="Select your budget"
                  />

                  <FormTextarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide any additional information about your study abroad plans..."
                    rows={4}
                  />

                  <SubmitButton isSubmitting={isSubmitting} isSubmitted={isSubmitted}>
                    Submit Inquiry
                  </SubmitButton>
                </form>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your European Education Journey?</h2>
              <p className="mb-8 text-xl text-white/80">
                Take the first step towards studying in Europe. Our expert advisors are ready to guide you through every
                step of the process.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    className="bg-white text-[#003763] hover:bg-gray-100 transition-all duration-300 px-6 py-6 text-base"
                  >
                    <a href="#inquiry-form">Get Started Today</a>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 transition-all duration-300 px-6 py-6 text-base"
                  >
                    <Link href="/contact">Contact Us</Link>
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
