import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LanguageServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="container mx-auto text-center">
          <h1>Language Services</h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center text-[#002a4a]">Services</h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-[#002a4a] border-b border-gray-200 pb-2">Language Courses</h3>
              <p className="mb-6 text-gray-700">
                Offering instruction in various languages tailored to different proficiency levels and purposes, such as
                academic, business, or travel.
              </p>

              <h3 className="mb-4 text-[#002a4a] border-b border-gray-200 pb-2">Language Proficiency Testing</h3>
              <p className="mb-6 text-gray-700">
                Conducting assessments to evaluate and certify language proficiency levels.
              </p>

              <h3 className="mb-4 text-[#002a4a] border-b border-gray-200 pb-2">
                Translation and Interpretation Services
              </h3>
              <p className="mb-6 text-gray-700">
                Providing professional document translation services with certified translators and interpreters trained
                in the language of study.
              </p>

              <h3 className="mb-4 text-[#002a4a] border-b border-gray-200 pb-2">Cultural Integration Programs</h3>
              <p className="mb-6 text-gray-700">
                Offering programs that facilitate cross-cultural communication skills, especially for those preparing
                for international experiences.
              </p>
            </div>

            <div className="relative h-[400px]">
              <Image
                src="/images/language-services.png"
                alt="Language Services"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-[#003763] hover:bg-[#002a4a]">
              <Link href="/contact">Inquire About Language Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
