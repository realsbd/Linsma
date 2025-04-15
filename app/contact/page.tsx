"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Clock } from "lucide-react"
import { FormInput, FormSelect, FormTextarea, SubmitButton } from "@/components/ui/form-elements"
import { submitContactForm } from "@/actions/contact-actions"

type FormData = {
  fullName: string
  email: string
  subject: string
  message: string
  phone: string
  education: string
  interest: string
  budget: string
}

type FormErrors = {
  [key in keyof FormData]?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
    education: "",
    interest: "",
    budget: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState<string>("item-1")
  const [serverError, setServerError] = useState<string | null>(null)

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
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
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
    setServerError(null)

    try {
      // Submit to database using server action
      const result = await submitContactForm(formData)

      if (result.success) {
        setIsSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            fullName: "",
            email: "",
            subject: "",
            message: "",
            phone: "",
            education: "",
            interest: "",
            budget: "",
          })
          setIsSubmitted(false)
        }, 3000)
      } else {
        setServerError(result.message)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setServerError("There was an error submitting your message. Please try again.")
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
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Contact Us</h1>
          </TextReveal>
          <ScrollReveal>
            <p className="text-xl text-center text-white/80 max-w-2xl mx-auto">
              Have questions about studying abroad? Our team is here to help you every step of the way.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal direction="up" delay={0.2}>
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Email Us{" "}
                  <span role="img" aria-label="Email">
                    📧
                  </span>
                </h3>
                <p className="mb-4 text-white/80">Send us an email and we'll get back to you</p>
                <a href="mailto:linsmaimpact@gmail.com" className="inline-block text-lg font-medium hover:underline">
                  linsmaimpact@gmail.com
                </a>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Office Hours{" "}
                  <span role="img" aria-label="Clock">
                    🕒
                  </span>
                </h3>
                <p className="mb-4 text-white/80">Our working hours</p>
                <p className="text-lg font-medium">
                  Monday - Friday
                  <br />
                  9:00 AM - 5:00 PM
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#002a4a] mb-4">Get in Touch</h2>
                  <p className="text-gray-600">
                    Fill out the form, and our team will get back to you as soon as possible. We're here to answer any
                    questions you have about studying abroad.
                  </p>
                </div>

                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-[#e8f4fa] flex items-center justify-center text-9xl">
                    <span role="img" aria-label="Student with questions">
                      👨‍🎓
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Your Journey Begins Here</h3>
                    <p className="text-white/80">Let us help you navigate the path to international education</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#002a4a]">Connect With Us</h3>
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
                      <Instagram size={20} />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4fa] text-[#003763] hover:bg-[#003763] hover:text-white transition-colors duration-300"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-[#f9f9f9] p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-6 text-[#002a4a]">Send Us a Message</h3>

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
                    <p className="font-medium">Thank you for your message!</p>
                    <p>We'll get back to you as soon as possible.</p>
                  </motion.div>
                )}

                {serverError && (
                  <motion.div
                    className="mb-6 rounded-md bg-red-50 p-4 text-red-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{serverError}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <FormInput
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    error={errors.fullName}
                  />

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
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    error={errors.subject}
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        { value: "consultancy", label: "Consultancy Services" },
                      ]}
                      placeholder="Select your interest"
                    />
                  </div>

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
                    placeholder="Please provide details about your inquiry..."
                    required
                    error={errors.message}
                    rows={5}
                  />

                  <SubmitButton isSubmitting={isSubmitting} isSubmitted={isSubmitted}>
                    Send Message
                  </SubmitButton>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#e8f4fa]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#002a4a]">Frequently Asked Questions</h2>
                <p className="text-gray-600">
                  Find answers to common questions about studying abroad, visas, and applications.
                </p>

                <div className="relative mt-8 h-[300px] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-[#e8f4fa] flex items-center justify-center text-9xl">
                    <span role="img" aria-label="FAQ">
                      ❓
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Still Have Questions?</h3>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button asChild className="mt-2 bg-white text-[#003763] hover:bg-gray-100">
                        <a href="#contact-form">Contact Us</a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                value={activeAccordion}
                onValueChange={setActiveAccordion}
              >
                <AccordionItem value="item-1" className="border-b border-gray-200 overflow-hidden">
                  <AccordionTrigger className="py-4 transition-all hover:text-[#003763]">
                    How do I choose the right country and university for me?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 animate-in slide-in-from-top duration-300">
                    We help you evaluate factors like academic programs, cost of living, culture, and career
                    opportunities to find the best fit for your goals and preferences. Our advisors will conduct a
                    personalized assessment to match you with universities that align with your academic background,
                    career aspirations, and budget constraints.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-gray-200 overflow-hidden">
                  <AccordionTrigger className="py-4 transition-all hover:text-[#003763]">
                    Can I get a scholarship to study abroad?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 animate-in slide-in-from-top duration-300">
                    Yes, many universities offer scholarships for international students. We can help you identify and
                    apply for scholarships from universities, government programs, and non-profit organizations that fit
                    your profile. Our team stays updated on the latest scholarship opportunities and can guide you
                    through the application process to maximize your chances of receiving financial aid.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-gray-200 overflow-hidden">
                  <AccordionTrigger className="py-4 transition-all hover:text-[#003763]">
                    Do you assist with visa applications?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 animate-in slide-in-from-top duration-300">
                    Yes, we provide comprehensive guidance through the visa application process, helping you prepare the
                    necessary documentation and understand the requirements for your destination country. Our visa
                    specialists will review your application materials, conduct mock interviews if needed, and ensure
                    that you're well-prepared for each step of the visa process.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-gray-200 overflow-hidden">
                  <AccordionTrigger className="py-4 transition-all hover:text-[#003763]">
                    How long does the application process take?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 animate-in slide-in-from-top duration-300">
                    The timeline varies depending on the country and institution, but generally, you should start the
                    process 6-12 months before your intended start date. Our advisors will create a personalized
                    timeline for your specific situation, taking into account application deadlines, visa processing
                    times, and any additional requirements for your chosen programs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-gray-200 overflow-hidden">
                  <AccordionTrigger className="py-4 transition-all hover:text-[#003763]">
                    What services do you offer after I've been accepted?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 animate-in slide-in-from-top duration-300">
                    We provide pre-departure orientation, accommodation assistance, airport pickup arrangements, and
                    ongoing support throughout your study abroad experience. Our goal is to ensure you have a smooth
                    transition and successful academic journey. We also offer cultural integration programs, language
                    support, and networking opportunities with other international students.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center text-[#002a4a] mb-12">Visit Our Office</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg bg-[#e8f4fa] flex items-center justify-center">
                <span role="img" aria-label="Office Location" className="text-9xl">
                  🏢
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-[#e8f4fa] p-8 rounded-lg h-full border border-[#003763]/20 shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-[#002a4a] border-b border-[#003763]/20 pb-3">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#003763]/10">
                      <Mail className="h-5 w-5 text-[#003763]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#002a4a]">Email</h4>
                      <p className="text-gray-600">linsmaimpact@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#003763]/10">
                      <Clock className="h-5 w-5 text-[#003763]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#002a4a]">Office Hours</h4>
                      <p className="text-gray-600">Monday to Friday, 9 AM to 5 PM</p>
                      <p className="text-gray-600">We typically respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-[#003763]/20 pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#002a4a]">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#003763]/10 text-[#003763] hover:bg-[#003763] hover:text-white transition-colors duration-300"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Facebook size={20} />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#003763]/10 text-[#003763] hover:bg-[#003763] hover:text-white transition-colors duration-300"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Twitter size={20} />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#003763]/10 text-[#003763] hover:bg-[#003763] hover:text-white transition-colors duration-300"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Instagram size={20} />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#003763]/10 text-[#003763] hover:bg-[#003763] hover:text-white transition-colors duration-300"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                  </div>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Global Education Journey?</h2>
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
                    <a href="#contact-form">Contact Us Today</a>
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
