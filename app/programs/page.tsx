import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <section className="relative h-[300px] w-full">
        <Image
          src="/placeholder.svg?height=300&width=1920&text=Programs Banner"
          alt="Programs Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Programs Overview */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <h1 className="mb-6 text-center">Study Abroad Programs</h1>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg">
            Explore our comprehensive study abroad programs designed to empower students with global experience and
            cultural insights. Whether you're interested in academic excellence or personal growth, our programs provide
            the opportunity to broaden your horizons.
          </p>
        </div>
      </section>

      {/* Program Details */}
      <section className="section bg-[#F5F5F5]">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4">Program Overview</h3>
                <p className="mb-4">
                  Our study abroad programs offer immersive experiences in various countries, with options for
                  semester-long or year-long stays. Programs are available for undergraduate and graduate students
                  across multiple disciplines.
                </p>
                <p>Each program is carefully designed to provide both academic rigor and cultural enrichment.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Immersive Cultural Experiences",
                    "Academic Rigor",
                    "Global Networking Opportunities",
                    "Language Acquisition",
                    "Personal Growth",
                    "Career Advancement",
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-[#003763]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4">How to Apply</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Review program requirements and eligibility criteria</li>
                  <li>Complete the online application form</li>
                  <li>Submit required documentation</li>
                  <li>Participate in an interview (if required)</li>
                  <li>Receive acceptance notification</li>
                  <li>Attend pre-departure orientation</li>
                </ol>
                <div className="mt-6">
                  <Button>Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center">Program Gallery</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=300&width=500&text=Program Image ${i}`}
                  alt={`Program Image ${i}`}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
