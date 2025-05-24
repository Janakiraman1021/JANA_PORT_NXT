"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Event {
  id: string
  title: string
  description: string
  type: string
  date: string
  location: string
  attendees?: number
  role: string
  organization?: string
  eventUrl?: string
  image?: string
  highlights?: string[]
}

const eventData: Event[] = [{
  id: "1",
  title: "International Conference on Innovative Technologies and Engineering",
  description: "A comprehensive international conference featuring keynote speakers, technical presentations, and hands-on workshops exploring cutting-edge innovations in engineering and technology. The conference is organized into 6 specialized tracks including Artificial Intelligence & Machine Learning – covering AI applications, ML, deep learning, NLP, robotics, and computer.",
  type: "Conference",
  date: "2025-05-09",
  location: "Jaya Engineering College, Chennai & Online",
  attendees: 800,
  role: "Host & Organizer",
  organization: "Jaya Engineering College, Chennai",
  eventUrl: "https://icite-25.vercel.app/",
  image: "/assets/events/icite.png",
  highlights: [
    "Keynote Sessions by leading industry experts and academic pioneers",
    "Technical Presentations spanning 6 specialized tracks",
    "Focus Track on AI & ML, including: Artificial Intelligence applications, Machine Learning & Deep Learning, Natural Language Processing, Robotics, and Computer Vision",
    "Hands-on Workshops for practical skill-building",
    "Hybrid Mode: Enabled both offline (Chennai) and online participation for global reach",
    "International Collaboration fostering innovation and interdisciplinary networking",
    "Event Scale: Successfully managed and delivered a high-impact event with 800+ attendees"
  ]
}]

export default function EventsSection() {
  const [events] = useState<Event[]>(eventData)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "host & organizer":
        return "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
    }
  }

  return (
    <section id="events" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Events & Activities</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Community involvement and professional development activities
          </p>
        </motion.div>

        {/* Events Timeline */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Line */}
              {index < events.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-16 bg-blue-200 dark:bg-blue-800 z-0"></div>
              )}

              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative z-10">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center relative z-10">
                      <div className="w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-2">{event.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 sm:ml-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(event.role)}`}>
                            {event.role}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                            {event.type}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div>
                          <span className="font-medium">Date:</span>
                          <p>{formatDate(event.date)}</p>
                        </div>
                        <div>
                          <span className="font-medium">Location:</span>
                          <p>{event.location}</p>
                        </div>
                        {event.attendees && (
                          <div>
                            <span className="font-medium">Attendees:</span>
                            <p>{event.attendees}+</p>
                          </div>
                        )}
                      </div>

                      {event.organization && (
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                          Organized by: {event.organization}
                        </p>
                      )}

                      {event.highlights && event.highlights.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Highlights:</h4>
                          <ul className="space-y-1">
                            {event.highlights.map((highlight, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start space-x-2 text-gray-600 dark:text-gray-300"
                              >
                                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                <span>{highlight}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {events.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Events Found</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {`No events found. Please check back later.`}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
