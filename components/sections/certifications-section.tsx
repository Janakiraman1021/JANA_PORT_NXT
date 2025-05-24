"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Certification {
  id: string // Make id required, not optional
  title: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
  description?: string
  skills: string[]
  verified: boolean
}

export default function CertificationsSection() {
  const [certifications, setCertifications] = useState<Certification[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await fetch("https://port-backend-onv7.onrender.com/api/certifications")
        if (!response.ok) {
          throw new Error("Failed to fetch certifications data")
        }
        const data = await response.json()

        // Ensure data is an array
        if (Array.isArray(data)) {
          setCertifications(data)
        } else {
          throw new Error("Invalid data format received")
        }
      } catch (err) {
        setError("Failed to load certifications data")
        // Fallback data
        setCertifications([
          {
            id: "1",
            title: "JavaScript Algorithms and Data Structures",
            issuer: "freeCodeCamp",
            issueDate: "2023-08",
            credentialId: "fcc-js-cert-2023",
            credentialUrl: "#",
            description:
              "Comprehensive certification covering JavaScript fundamentals, algorithms, and data structures.",
            skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
            verified: true,
          },
          {
            id: "2",
            title: "React Developer Certification",
            issuer: "Meta",
            issueDate: "2023-09",
            credentialId: "meta-react-2023",
            credentialUrl: "#",
            description:
              "Professional certification in React development covering hooks, state management, and best practices.",
            skills: ["React", "JSX", "Hooks", "State Management"],
            verified: true,
          },
          {
            id: "3",
            title: "Full Stack Web Development",
            issuer: "Coursera",
            issueDate: "2023-07",
            expiryDate: "2025-07",
            credentialId: "coursera-fullstack-2023",
            credentialUrl: "#",
            description: "Complete full-stack development course covering frontend and backend technologies.",
            skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
            verified: true,
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchCertifications()
  }, [])

  // Ensure certifications is always an array before using array methods
  const safeCertifications = Array.isArray(certifications) ? certifications : []

  if (loading) {
    return (
      <section id="certifications" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
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
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safeCertifications.map((cert, index) => (
            <motion.div
              key={cert.id || `cert-${index}`} // Add fallback using index
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    {cert.verified && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center space-x-1 text-green-600 dark:text-green-400"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-xs font-medium">Verified</span>
                      </motion.div>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{cert.title}</h3>

                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{cert.issuer}</p>

                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>
                      Issued: {cert.issueDate}
                      {cert.expiryDate && ` • Expires: ${cert.expiryDate}`}
                    </span>
                  </div>

                  {cert.description && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow line-clamp-3">
                      {cert.description}
                    </p>
                  )}

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {/* Safely handle skills array */}
                      {Array.isArray(cert.skills) && cert.skills.length > 0 ? (
                        <>
                          {cert.skills.slice(0, 4).map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                          {cert.skills.length > 4 && (
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                              +{cert.skills.length - 4}
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-xs text-gray-500 dark:text-gray-400">No skills listed</span>
                      )}
                    </div>
                  </div>

                  <div className="mt-auto space-y-2">
                    {cert.credentialId && (
                      <p className="text-xs text-gray-500 dark:text-gray-400">ID: {cert.credentialId}</p>
                    )}
                    {cert.credentialUrl && (
                      <Button size="sm" className="w-full" onClick={() => window.open(cert.credentialUrl, "_blank")}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Credential
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {safeCertifications.length === 0 && !loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Certifications Listed</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Professional certifications will be displayed here as they are earned.
            </p>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg"
          >
            <p className="text-yellow-700 dark:text-yellow-300">{error}. Showing sample data.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
