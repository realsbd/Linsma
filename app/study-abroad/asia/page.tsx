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

const asianCountries = [
  {
    name: "Japan",
    flag: "/placeholder.svg?height=40&width=40&text=JP",
    universities: ["University of Tokyo", "Kyoto University", "Osaka University"],
    description:
      "Japan offers a unique blend of traditional culture and cutting-edge technology with high academic standards.",
    image: "/images/japan-university.jpg",
  },
  {
    name: "Singapore",
    flag: "/placeholder.svg?height=40&width=40&text=SG",
    universities: [
      "National University of Singapore",
      "Nanyang Technological University",
      "Singapore Management University",
    ],
    description:
      "Singapore provides world-class education in a multicultural, English-speaking environment with strong industry connections.",
    image: "/images/singapore-university.jpg",
  },
  {
    name: "South Korea",
    flag: "/placeholder.svg?height=40&width=40&text=KR",
    universities: [
      "Seoul National University",
      "Korea Advanced Institute of Science and Technology",
      "Yonsei University",
    ],
    description: "South Korea combines academic excellence with a vibrant cultural scene and technological innovation.",
    image: "/images/korea-university.jpg",
  },
  {
    name: "China",
    flag: "/placeholder.svg?height=40&width=40&text=CN",
    universities: ["Tsinghua University", "Peking University", "Fudan University"],
    description:
      "China offers diverse academic programs with increasing international recognition and affordable tuition.",
    image: "/images/china-university.jpg",
  },
  {
    name: "Malaysia",
    flag: "/placeholder.svg?height=40&width=40&text=MY",
    universities: ["University of Malaya", "Universiti Putra Malaysia", "Universiti Sains Malaysia"],
    description:
      "Malaysia provides quality education at affordable costs in a multicultural environment with English-taught programs.",
    image: "/images/malaysia-university.jpg",
  },
  {
    name: "Australia",
    flag: "/placeholder.svg?height=40&width=40&text=AU",
    universities: ["University of Melbourne", "Australian National University", "University of Sydney"],
    description:
      "Australia offers high-quality education with a relaxed lifestyle and strong support for international students.",
    image: "/images/australia-university.jpg",
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

export default function StudyInAsiaPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Study in Asia & Pacific</h1>
          </TextReveal>
          <ScrollReveal>
            <p className="text-xl text-center text-white/80 max-w-3xl mx-auto">
              Explore prestigious universities in Japan, Singapore, South Korea, China, Malaysia, Australia and more.
              Experience world-class education in culturally rich and diverse environments.
            </p>
          </ScrollReveal>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {asianCountries.map((country, index) => (
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
                  Asian & Pacific Education
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#002a4a]">Why study in Asia & Pacific?</h2>
                <p className="text-gray-700">
                  The Asia-Pacific region has emerged as a global education hub, offering world-class universities with
                  innovative programs and cutting-edge research facilities. Many countries in the region have invested
                  heavily in education, creating institutions that compete with the best in the world while maintaining
                  affordable tuition fees.
                </p>
                <p className="text-gray-700">
                  Studying in Asia and the Pacific offers a unique opportunity to immerse yourself in diverse cultures,
                  learn new languages, and gain a global perspective that is highly valued by employers. The region's
                  rapid economic growth also provides excellent networking and career opportunities for international
                  students.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4fa]">
                      <GraduationCap className="h-5 w-5 text-[#003763]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#002a4a]">Academic Excellence</h3>
                      <p className="text-sm text-gray-600">World-class universities with innovative programs</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4fa]">
                      <Building className="h-5 w-5 text-[#003763]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#002a4a]">Cultural Immersion</h3>
                      <p className="text-sm text-gray-600">Experience diverse Asian cultures and traditions</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4fa]">
                      <Users className="h-5 w-5 text-[#003763]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#002a4a]">Global Perspective</h3>
                      <p className="text-sm text-gray-600">Gain insights into the world's fastest-growing region</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4fa]">
                      <Award className="h-5 w-5 text-[#003763]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#002a4a]">Affordable Education</h3>
                      <p className="text-sm text-gray-600">Quality education at competitive tuition rates</p>
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
                  src="/images/modern-university-asia.jpg"
                  alt="Modern campus with open courtyard design"
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
                  <h3 className="text-xl font-semibold mb-1">Modern Campuses</h3>
                  <p className="text-white/80">State-of-the-art facilities in vibrant Asian cities</p>
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
                    <span className="text-sm font-medium text-[#002a4a]">Rising Global Rankings</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#002a4a] mb-4">
                Benefits of Studying in Asia & Pacific
              </h2>
              <p className="text-gray-600">
                Discover the many advantages that make Asia and the Pacific an increasingly popular destination for
                international students.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                title: "1. Academic Excellence",
                description:
                  "Many universities in Asia and the Pacific are rapidly climbing global rankings, offering world-class education across various disciplines.",
              },
              {
                title: "2. Affordable Education",
                description:
                  "Compared to Western countries, many Asian destinations offer quality education at significantly lower tuition fees and living costs.",
              },
              {
                title: "3. Cultural Experience",
                description:
                  "Immerse yourself in rich and diverse cultures, traditions, and languages that will broaden your perspective and enhance your global competence.",
              },
              {
                title: "4. Technological Innovation",
                description:
                  "Many Asian countries are at the forefront of technological innovation, providing students with exposure to cutting-edge developments.",
              },
              {
                title: "5. English-Taught Programs",
                description:
                  "An increasing number of universities offer programs taught entirely in English, making education accessible to international students.",
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
                title: "6. Career Opportunities",
                description:
                  "Gain a competitive edge in the job market with experience in the world's fastest-growing economic region.",
              },
              {
                title: "7. Scholarships and Financial Aid",
                description:
                  "Many Asian countries offer generous scholarships specifically designed to attract international students.",
              },
              {
                title: "8. Safe and Welcoming Environment",
                description:
                  "Most countries in the region are known for their safety, hospitality, and welcoming attitude toward international students.",
              },
              {
                title: "9. Modern Infrastructure",
                description:
                  "Enjoy state-of-the-art campus facilities, excellent public transportation, and modern amenities in major Asian cities.",
              },
              {
                title: "10. Travel Opportunities",
                description:
                  "The strategic location of many Asian countries makes it easy to explore neighboring countries and experience diverse cultures.",
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
                Popular Study Destinations in Asia & Pacific
              </h2>
              <p className="text-gray-600">
                Explore some of the most popular countries for international students in the Asia-Pacific region.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {asianCountries.map((country, index) => (
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
                <h2 className="text-3xl font-bold text-[#002a4a] mb-4">Interested in studying in Asia & Pacific?</h2>
                <p className="text-gray-700">
                  Fill out the form and our education consultants will contact you to discuss your options for studying
                  in the Asia-Pacific region. We'll help you navigate the application process, visa requirements, and
                  scholarship opportunities.
                </p>

                <div className="mt-8 space-y-6">
                  <motion.div
                    className="bg-white p-6 rounded-lg shadow-sm"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-medium text-[#003763] mb-4">Popular Destinations</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Japan",
                        "Singapore",
                        "South Korea",
                        "China",
                        "Malaysia",
                        "Australia",
                        "New Zealand",
                        "Hong Kong",
                      ].map((country) => (
                        <span
                          key={country}
                          className="inline-block px-3 py-1 bg-[#e8f4fa] text-[#003763] text-sm rounded-full"
                        >
                          {country}
                        </span>
                      ))}
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
                        "Engineering",
                        "Business",
                        "Computer Science",
                        "Medicine",
                        "Arts",
                        "Hospitality",
                        "Technology",
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
                    <p>We'll get back to you as soon as possible with information about studying in Asia & Pacific.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Asian Education Journey?</h2>
              <p className="mb-8 text-xl text-white/80">
                Take the first step towards studying in Asia & Pacific. Our expert advisors are ready to guide you
                through every step of the process.
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
