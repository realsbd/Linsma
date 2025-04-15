import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EducationalServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="container mx-auto text-center">
          <h1>Educational Services</h1>
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
              At Linsma-Impact Limited, we're dedicated to guiding individuals toward the best educational
              opportunities. Our agency offers comprehensive, personalized services to help you achieve your academic
              goals.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-[#002a4a] border-b border-gray-200 pb-2">
                Nursery, Kindergarten, Primary & High School Placement
              </h3>
              <p className="mb-4 text-gray-700">
                We provide comprehensive guidance to find the best educational institutions for your children by
                partnering with top schools.
              </p>

              <h4 className="mt-6 mb-2 font-semibold">Our Services:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-[#003763] mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>
                    School Selection — We guide parents in selecting the best schools for their children based on
                    academic reputation, primary, and high schools based on academic excellence.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-[#003763] mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>
                    Application & Admission Support — We handle the admission process, working with schools to ensure a
                    smooth experience.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-[#003763] mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>
                    School Transfers — Assistance in moving students between schools after relocation or other
                    circumstances.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-[#003763] mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>
                    Boarding & Day School Selection — Recommendations based on student's needs, preferences, and family
                    circumstances.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-[#003763] mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>
                    Scholarship & Financial Aid Guidance — Helping families access available scholarship opportunities.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-[#003763] mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>
                    International School Counseling — Personalized advice on the best schooling alternatives for
                    children.
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative h-[400px]">
              <Image
                src="/images/educational-services.png"
                alt="School Placement"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="relative h-[400px]">
              <Image
                src="/images/educational-services.png"
                alt="University Placement"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div>
              <h3 className="mb-4 text-[#002a4a] border-b border-gray-200 pb-2">
                University, College & College of Education Placement
              </h3>
              <p className="mb-4 text-gray-700">
                We help students find their ideal university or college, primarily ensuring they make informed choices
                that align with their academic and career aspirations.
              </p>

              <h4 className="mt-6 mb-2 font-semibold">Our Services:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-[#003763] mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>
                    University & College Admissions — Support in selecting and applying to universities, colleges, and
                    colleges of education locally and internationally.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-[#003763] mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>
                    Course Selection — Guidance in choosing courses that align with academic goals, and financial
                    considerations.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-[#003763] mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>
                    Application Assistance — Guidance on applications and more comprehensive application support for
                    international students.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-[#003763] mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>
                    Scholarship & Financial Aid — Identifying and applying for programs based on the student's strengths
                    and career goals.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-[#003763] mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>
                    Career Guidance — Support in aligning academic choices with career aspirations through a smooth
                    admission process.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-[#003763] mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>
                    International Student Support — Assistance with accommodations, settling in, and student
                    orientation.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-[#003763] hover:bg-[#002a4a]">
              <Link href="/contact">Contact Us for Educational Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
