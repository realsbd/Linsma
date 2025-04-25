"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { Card3D } from "@/components/ui/3d-card"
import AnimatedCounter from "@/components/ui/animated-counter"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, CheckCircle, GraduationCap, Globe, BookOpen, Award } from "lucide-react"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#e8f4fa] to-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[10%] -right-[10%] h-[500px] w-[500px] rounded-full bg-[#4ca3d8]/10 blur-3xl"></div>
          <div className="absolute -bottom-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-[#003763]/10 blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-[#003763]/10 px-3 py-1 text-sm font-medium text-[#003763]">
                Your Global Education Partner
              </div>

              <TextReveal>
                <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-[#002a4a]">
                  Study Without <span className="text-[#4ca3d8]">Borders</span>
                </h1>
              </TextReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg text-gray-700 md:text-xl">
                  Explore world-class education opportunities in the US, UK, Europe, Asia, and beyond with expert
                  guidance. Dream it, plan it, achieve it.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      asChild
                      className="bg-[#003763] hover:bg-[#002a4a] transition-all duration-300 px-6 py-6 text-base"
                    >
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      asChild
                      variant="outline"
                      className="border-[#003763] text-[#003763] hover:bg-[#003763] hover:text-white transition-all duration-300 px-6 py-6 text-base"
                    >
                      <Link href="/about">Learn More</Link>
                    </Button>
                  </motion.div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex -space-x-2">
                    {[
                      { emoji: "👨‍🎓", alt: "Graduate Student" },
                      { emoji: "👩‍🎓", alt: "Graduate Student" },
                      { emoji: "🧑‍🎓", alt: "Graduate Student" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="relative h-10 w-10 rounded-full border-2 border-white bg-[#e8f4fa] flex items-center justify-center text-lg"
                      >
                        <span role="img" aria-label={item.alt}>
                          {item.emoji}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-[#003763]">
                      5,000+ Students{" "}
                      <span role="img" aria-label="Graduation Cap">
                        🎓
                      </span>
                    </span>
                    <div className="flex items-center text-yellow-500">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-1 text-gray-600">
                        4.9/5{" "}
                        <span role="img" aria-label="Trophy">
                          🏆
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/classical-education.jpg"
                    alt="Student studying abroad in a prestigious university"
                    fill
                    className="object-cover"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Sarah Johnson</p>
                        <p className="text-xs opacity-80">Studying at Oxford University</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                        <span className="text-xs">Currently Online</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Country Icons */}
                <motion.div
                  className="absolute -top-5 -right-5 h-16 w-16 rounded-full shadow-lg bg-white p-1 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                >
                  <span role="img" aria-label="Canada" className="text-2xl">
                    🇨🇦
                  </span>
                </motion.div>

                <motion.div
                  className="absolute top-1/4 -left-5 h-14 w-14 rounded-full shadow-lg bg-white p-1 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
                >
                  <span role="img" aria-label="United Kingdom" className="text-2xl">
                    🇬🇧
                  </span>
                </motion.div>

                <motion.div
                  className="absolute bottom-10 -right-5 h-12 w-12 rounded-full shadow-lg bg-white p-1 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
                >
                  <span role="img" aria-label="United States" className="text-xl">
                    🇺🇸
                  </span>
                </motion.div>

                {/* Floating Stats Card */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-3 w-48"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4fa]">
                      <GraduationCap className="h-5 w-5 text-[#003763]" />
                    </div>
                    <div className="ml-3">
                      <p className="text-xs text-gray-500">Success Rate</p>
                      <p className="text-lg font-bold text-[#003763]">
                        98%{" "}
                        <span role="img" aria-label="Check Mark">
                          ✅
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#003763] text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200&text=Pattern')] bg-repeat opacity-5"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  <AnimatedCounter value={5000} formatValue={(value) => `${value}+`} />
                </div>
                <p className="text-sm md:text-base text-white/80">
                  Students Placed{" "}
                  <span role="img" aria-label="Students">
                    👨‍🎓👩‍🎓
                  </span>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  <AnimatedCounter value={50} formatValue={(value) => `${value}+`} />
                </div>
                <p className="text-sm md:text-base text-white/80">
                  Countries{" "}
                  <span role="img" aria-label="Globe">
                    🌎
                  </span>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  <AnimatedCounter value={200} formatValue={(value) => `${value}+`} />
                </div>
                <p className="text-sm md:text-base text-white/80">
                  Universities{" "}
                  <span role="img" aria-label="School">
                    🏫
                  </span>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  <AnimatedCounter value={98} formatValue={(value) => `${value}%`} />
                </div>
                <p className="text-sm md:text-base text-white/80">
                  Success Rate{" "}
                  <span role="img" aria-label="Trophy">
                    🏆
                  </span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white" ref={targetRef}>
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-full bg-[#e8f4fa] px-3 py-1 text-sm font-medium text-[#003763] mb-4">
                Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002a4a] mb-4">
                Comprehensive Support for Your Educational Journey
              </h2>
              <p className="text-gray-600">
                We provide a range of services designed to make your study abroad experience seamless and successful.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <ScrollReveal direction="up" delay={0.1}>
              <Card3D cardClassName="border-t-4 border-t-[#003763]">
                <Card className="h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="mb-4 flex items-center">
                      <div className="mr-3 rounded-full bg-[#e8f4fa] p-3">
                        <GraduationCap className="h-6 w-6 text-[#003763]" />
                      </div>
                      <h3 className="text-xl font-semibold">
                        Education{" "}
                        <span role="img" aria-label="Books">
                          📚
                        </span>
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6">
                      Comprehensive educational placement services for students seeking to study abroad at top
                      institutions worldwide.
                    </p>

                    <ul className="mb-6 space-y-3 text-gray-600 flex-grow">
                      {[
                        "University and college placement services",
                        "Study abroad consulting and application assistance",
                        "Scholarship and financial aid guidance",
                        "Visa and student permit assistance",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-[#003763] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-auto">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-[#003763] text-[#003763] hover:bg-[#003763] hover:text-white transition-all duration-300"
                      >
                        <Link href="/services/education" className="flex items-center justify-center">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </Card3D>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <Card3D cardClassName="border-t-4 border-t-[#003763]">
                <Card className="h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="mb-4 flex items-center">
                      <div className="mr-3 rounded-full bg-[#e8f4fa] p-3">
                        <Globe className="h-6 w-6 text-[#003763]" />
                      </div>
                      <h3 className="text-xl font-semibold">
                        Consultancy{" "}
                        <span role="img" aria-label="Briefcase">
                          💼
                        </span>
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6">
                      Expert guidance and strategic advice to help you make informed decisions about your educational
                      and career path.
                    </p>

                    <ul className="mb-6 space-y-3 text-gray-600 flex-grow">
                      {[
                        "Academic and career counseling",
                        "Business strategy and operations consulting",
                        "Management and HR consulting",
                        "Policy and governance advisory services",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-[#003763] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-auto">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-[#003763] text-[#003763] hover:bg-[#003763] hover:text-white transition-all duration-300"
                      >
                        <Link href="/services/consultancy" className="flex items-center justify-center">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </Card3D>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <Card3D cardClassName="border-t-4 border-t-[#003763]">
                <Card className="h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="mb-4 flex items-center">
                      <div className="mr-3 rounded-full bg-[#e8f4fa] p-3">
                        <BookOpen className="h-6 w-6 text-[#003763]" />
                      </div>
                      <h3 className="text-xl font-semibold">
                        Language{" "}
                        <span role="img" aria-label="Speech">
                          🗣️
                        </span>
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6">
                      Comprehensive language services to help you succeed in your international academic and
                      professional endeavors.
                    </p>

                    <ul className="mb-6 space-y-3 text-gray-600 flex-grow">
                      {[
                        "Language proficiency test preparation",
                        "Language courses for various purposes",
                        "Translation and interpretation services",
                        "Cross-cultural communication training",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-[#003763] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-auto">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-[#003763] text-[#003763] hover:bg-[#003763] hover:text-white transition-all duration-300"
                      >
                        <Link href="/services/language" className="flex items-center justify-center">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 md:py-24 bg-[#e8f4fa]">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-full bg-[#003763]/10 px-3 py-1 text-sm font-medium text-[#003763] mb-4">
                Global Opportunities
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002a4a] mb-4">Explore Study Destinations</h2>
              <p className="text-gray-600">Discover educational opportunities in top destinations around the world.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              {
                name: "United States",
                code: "US",
                image: "/images/harvard-university.jpeg",
                href: "/study-abroad/america",
                emoji: "🇺🇸",
              },
              {
                name: "United Kingdom",
                code: "UK",
                image: "/images/europe-university.jpeg",
                href: "/study-abroad/europe",
                emoji: "🇬🇧",
              },
              {
                name: "Canada",
                code: "CA",
                image: "/images/modern-university.jpeg",
                href: "/study-abroad/america",
                emoji: "🇨🇦",
              },
              {
                name: "Australia",
                code: "AU",
                image: "/images/mediterranean-campus.jpeg",
                href: "/study-abroad/asia",
                emoji: "🇦🇺",
              },
            ].map((country, index) => (
              <ScrollReveal key={country.code} direction="up" delay={index * 0.1}>
                <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                  <Link href={country.href} className="group block">
                    <div className="overflow-hidden rounded-xl bg-white shadow-md">
                      <div className="relative h-48 w-full">
                        <Image
                          src={country.image || "/placeholder.svg"}
                          alt={country.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                          <p className="font-medium">Explore {country.name}</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">
                          {country.name}{" "}
                          <span role="img" aria-label={country.name}>
                            {country.emoji}
                          </span>
                        </h3>
                        <div className="mt-2 flex items-center text-sm text-gray-600">
                          <Award className="mr-1 h-4 w-4" />
                          <span>Top Universities</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                className="border-[#003763] text-[#003763] hover:bg-[#003763] hover:text-white transition-all duration-300"
              >
                <Link href="/study-abroad" className="flex items-center">
                  View All Destinations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection featured={true} />

      {/* Blog Section */}
      <section className="py-16 md:py-24 bg-[#e8f4fa]">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-full bg-[#003763]/10 px-3 py-1 text-sm font-medium text-[#003763] mb-4">
                Latest Insights
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002a4a] mb-4">Our Blog</h2>
              <p className="text-lg text-gray-700 font-medium">
                Insights, tips, and stories about studying abroad and international education
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "How to Choose the Right University Abroad",
                description:
                  "Learn the key factors to consider when selecting a university in another country that aligns with your academic goals and career aspirations.",
                date: "March 31, 2025",
                image: "/placeholder.svg?height=200&width=300&text=Blog+1",
                emoji: "🏫",
                category: "Study Tips",
              },
              {
                title: "Scholarship Opportunities for International Students",
                description:
                  "Discover various scholarship programs available for students looking to study abroad, including application tips and deadlines.",
                date: "March 25, 2025",
                image: "/placeholder.svg?height=200&width=300&text=Blog+2",
                emoji: "💰",
                category: "Scholarships",
              },
              {
                title: "Navigating Student Visa Applications",
                description:
                  "A comprehensive guide to understanding and successfully completing student visa applications for different countries.",
                date: "March 20, 2025",
                image: "/placeholder.svg?height=200&width=300&text=Blog+3",
                emoji: "🛂",
                category: "Visa Guide",
              },
              {
                title: "Cultural Adaptation: Thriving in a New Country",
                description:
                  "Tips and strategies for adapting to a new culture, making friends, and creating a fulfilling experience while studying abroad.",
                date: "March 15, 2025",
                image: "/placeholder.svg?height=200&width=300&text=Blog+4",
                emoji: "🌍",
                category: "Student Life",
              },
            ].map((post, index) => (
              <ScrollReveal key={post.title} direction="up" delay={index * 0.1}>
                <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                  <Card className="overflow-hidden h-full">
                    <div className="relative h-48 w-full">
                      <div className="absolute inset-0 bg-[#e8f4fa] flex items-center justify-center text-6xl">
                        <span role="img" aria-label={post.category}>
                          {post.emoji}
                        </span>
                      </div>
                      <div className="absolute top-2 left-2">
                        <span className="inline-block rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-[#003763]">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="mb-2 text-lg font-semibold line-clamp-2">{post.title}</h3>
                      <p className="mb-4 text-sm text-gray-600 line-clamp-3">{post.description}</p>
                      <div className="flex items-center justify-between">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="text-xs transition-all duration-300 hover:bg-[#003763] hover:text-white"
                        >
                          <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>Read more</Link>
                        </Button>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                className="border-[#003763] text-[#003763] hover:bg-[#003763] hover:text-white transition-all duration-300"
              >
                <Link href="/blog" className="flex items-center">
                  View All Posts
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Global Education Journey?</h2>
                <p className="text-white/80 text-lg">
                  Take the first step towards your international education goals. Our expert advisors are ready to guide
                  you through every step of the process.
                </p>
                <div className="flex flex-wrap gap-4">
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

            <ScrollReveal direction="right">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Quick Inquiry</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-2 text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none focus:ring-0"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-2 text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none focus:ring-0"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-2 text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none focus:ring-0"
                      required
                    />
                  </div>
                  <div>
                    <select className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-2 text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none focus:ring-0">
                      <option value="" className="bg-[#003763]">
                        I'm interested in...
                      </option>
                      <option value="undergraduate" className="bg-[#003763]">
                        Undergraduate Studies
                      </option>
                      <option value="postgraduate" className="bg-[#003763]">
                        Postgraduate Studies
                      </option>
                      <option value="language" className="bg-[#003763]">
                        Language Programs
                      </option>
                      <option value="consultancy" className="bg-[#003763]">
                        Consultancy Services
                      </option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={3}
                      className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-2 text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none focus:ring-0"
                    ></textarea>
                  </div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      type="submit"
                      className="w-full bg-white text-[#003763] hover:bg-gray-100 transition-all duration-300"
                    >
                      Submit Inquiry
                    </Button>
                  </motion.div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="mb-8 text-center text-[#002a4a]">Our Mission</h2>
            <p className="mx-auto mb-8 max-w-3xl text-center text-lg">
              At <span className="font-semibold">Linsma</span>, our mission is to make education easy, affordable, and
              inspiring—no matter where you are in the world. Whether in your home country or studying abroad, we are
              dedicated to removing barriers and creating a clear, joyful path to academic and personal growth.
            </p>
            <div className="flex justify-center mt-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="bg-[#003763] hover:bg-[#002a4a] transition-all duration-300">
                  <Link href="/mission">Learn More About Our Mission</Link>
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section bg-[#e8f4fa]">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="mb-8 text-center text-[#002a4a]">Our Vision</h2>
            <p className="mx-auto mb-8 max-w-3xl text-center text-lg">
              Our vision is to become a trusted <span className="font-semibold">global bridge in education</span>,
              uniting students, institutions, and cultures in a shared pursuit of knowledge and opportunity. We envision
              a world where <span className="font-semibold">every student</span>, regardless of background or location,
              has equal access to <span className="font-semibold">world-class education</span>.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
