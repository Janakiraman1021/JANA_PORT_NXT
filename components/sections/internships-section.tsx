"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import axios from "axios"

interface Internship {
  _id: string
  company: string
  position: string
  duration: string
  location: string
  description: string
  responsibilities: string[]
  technologies: string[]
  achievements?: string[]
  companyUrl?: string
  certificateUrl?: string
}

interface ApiResponse {
  success: boolean
  data: Internship[]
}

export default function InternshipsSection() {
  const [internships, setInternships] = useState<Internship[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://port-backend-onv7.onrender.com/api/internships"
        )
        if (response.data?.success) {
          setInternships(response.data.data)
        } else {
          throw new Error("Invalid data format received")
        }
      } catch (err) {
        setError("Failed to load internships data")
        // Fallback data
        setInternships([
          {
            _id: "1",
            company: "Monetrix Technologies Pvt Ltd",
            position: "Full Stack Development Intern",
            duration: "January 2024 - Present",
            location: "Remote",
            description:
              "Working on developing full-stack applications using modern web technologies and best practices.",
            responsibilities: [
              "Developing responsive web applications using React and Node.js",
              "Building RESTful APIs and implementing backend services",
              "Working with databases and implementing data models",
              "Participating in code reviews and agile development",
            ],
            technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Express", "Git"],
            achievements: [
              "Implemented key features for client projects",
              "Contributed to improving development workflows",
              "Learned and applied new technologies effectively",
            ],
            companyUrl: "https://monetrix.com",
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchInternships()
  }, [])

  // Ensure internships is always an array before using array methods
  const safeInternships = Array.isArray(internships) ? internships : []

  if (loading) {
    return (
      <section id="internships" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience
            </h2>
          </div>
          <div className="space-y-8">
            {[1, 2].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="internships" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional experience and internships that shaped my career
          </p>
        </motion.div>

        <div className="space-y-8">
          {safeInternships.map((internship, index) => (
            <motion.div
              key={internship._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start space-x-4 mb-6">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center"
                        >
                          <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </motion.div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {internship.position}
                          </h3>
                          <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                            {internship.company}
                          </p>

                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{internship.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span>{internship.location}</span>
                            </div>
                          </div>

                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            {internship.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Key Responsibilities:
                          </h4>
                          <ul className="space-y-2">
                            {/* Safely handle responsibilities array */}
                            {Array.isArray(internship.responsibilities) &&
                            internship.responsibilities.length > 0 ? (
                              internship.responsibilities.map((responsibility, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start space-x-2 text-gray-600 dark:text-gray-300"
                                >
                                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                  <span>{responsibility}</span>
                                </motion.li>
                              ))
                            ) : (
                              <li className="text-gray-500 dark:text-gray-400 text-sm">
                                No responsibilities listed
                              </li>
                            )}
                          </ul>
                        </div>

                        {internship.achievements &&
                          Array.isArray(internship.achievements) &&
                          internship.achievements.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                                Key Achievements:
                              </h4>
                              <ul className="space-y-2">
                                {internship.achievements.map((achievement, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start space-x-2 text-gray-600 dark:text-gray-300"
                                  >
                                    <span className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>{achievement}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          )}
                      </div>

                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {/* Safely handle technologies array */}
                          {Array.isArray(internship.technologies) &&
                          internship.technologies.length > 0 ? (
                            internship.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                              >
                                {tech}
                              </span>
                            ))
                          ) : (
                            <span className="text-gray-500 dark:text-gray-400 text-sm">
                              No technologies listed
                            </span>
                          )}
                        </div>
                      </div>

                      {(internship.companyUrl || internship.certificateUrl) && (
                        <div className="mt-6 flex flex-wrap gap-4">
                          {internship.companyUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(internship.companyUrl, "_blank")}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Company Website
                            </Button>
                          )}
                          {internship.certificateUrl && (
                            <Button size="sm" onClick={() => window.open(internship.certificateUrl, "_blank")}>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Certificate
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {safeInternships.length === 0 && !loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No Experience Listed
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Professional experience will be displayed here as it becomes available.
            </p>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg"
          >
            <p className="text-yellow-700 dark:text-yellow-300">
              {error}. Showing sample data.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
