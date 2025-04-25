import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ConsultancyServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="container mx-auto text-center">
          <h1>Consultancy Services</h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-[#002a4a]">
              Linsma-Impact Limited Educational & Skills Placement Services
            </h2>
            <p className="mb-8 text-center text-gray-700">
              At Linsma-Impact Limited, we're dedicated to guiding individuals toward the best educational and career
              opportunities. Our agency offers comprehensive, personalized services to help you achieve your goals.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-[#002a4a] border-b border-gray-200 pb-2">Management Consulting</h3>
              <p className="mb-4 text-gray-700">
                Strategic Planning: Developing comprehensive business plans to help clients establish clear goals and
                strategies for long-term success.
              </p>
              <p className="mb-4 text-gray-700">
                Organizational Development: Enhancing workplace culture, leadership capabilities, and employee
                engagement to optimize productivity.
              </p>
              <p className="text-gray-700">
                Process Optimization: Streamlining workflows, eliminating inefficiencies, and implementing new
                technologies to improve operations.
              </p>
            </div>

            <div className="relative h-[250px]">
              <Image
                src="/images/Management consulting.jpg"
                alt="Management Consulting"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="relative h-[250px]">
              <Image
                src="/images/consultancy-services.jpg"
                alt="HR Consulting"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div>
              <h3 className="mb-4 text-[#002a4a] border-b border-gray-200 pb-2">Human Resources Consulting</h3>
              <p className="mb-4 text-gray-700">
                Talent Acquisition & Retention: Developing strategies to attract, select, and retain top talent for
                organizations.
              </p>
              <p className="mb-4 text-gray-700">
                Performance Management: Creating effective systems for evaluating and improving employee performance.
              </p>
              <p className="text-gray-700">
                Training & Development: Identifying skill gaps and designing custom training programs to upskill
                employees and enhance organizational effectiveness.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-[#002a4a] border-b border-gray-200 pb-2">Marketing and Sales Consulting</h3>
              <p className="mb-4 text-gray-700">
                Market Research and Analysis: Gathering in-depth information on market trends, customer preferences, and
                competitive landscapes.
              </p>
              <p className="mb-4 text-gray-700">
                Brand Development: Creating compelling brand identities and strategies to establish a strong market
                presence.
              </p>
              <p className="text-gray-700">
                Digital Marketing: Developing effective digital strategies, including social media, content marketing,
                SEO, and email campaigns.
              </p>
            </div>

            <div className="relative h-[250px]">
              <Image
                src="/images/marketing-sales.jpg"
                alt="Marketing Consulting"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-[#003763] hover:bg-[#002a4a]">
              <Link href="/contact">Contact Us for Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
