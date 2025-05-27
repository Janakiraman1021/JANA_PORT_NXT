"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { GraduationCap, Calendar, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import axios from "axios"

interface Education {
  _id: string
  degree: string
  institution: string
  period: string
  score: string
}

export default function EducationSection() {
  const [educationData, setEducationData] = useState<Education[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axios.get('https://port-backend-onv7.onrender.com/api/educations')
        if (Array.isArray(response.data)) {
          setEducationData(response.data)
        } else {
          setError('Invalid data format received')
        }
      } catch (err) {
        setError('Failed to fetch education data')
        setEducationData([
          {
            _id: "1",
            institution: "University/College Name",
            degree: "Bachelor of Technology",
            period: "2022-2026",
            score: "8.5 CGPA",
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchEducation()
  }, [])

  if (loading) {
    return (
      <section id="education" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-b-4"></div>
        </div>
      </section>
    )
  }

  return (
    <section id="education" className="relative py-32 overflow-hidden bg-background text-foreground">
      {/* Gradient Background with Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 4
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-center text-6xl md:text-8xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Education
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu._id}
              className="group relative rounded-3xl p-1 backdrop-blur-xl bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 hover:from-primary/20 hover:via-secondary/20 hover:to-primary/20 transition-all duration-700 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                filter: "brightness(1.1)",
              }}
              whileTap={{ 
                scale: 0.98,
              }}
            >
              {/* Animated border glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <Card className="bg-card/30 backdrop-blur rounded-3xl border-0 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                <CardContent className="p-8 relative z-10">
                  <motion.div 
                    className="flex items-center gap-6 mb-6"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="bg-gradient-to-br from-primary/20 to-secondary/20 p-4 rounded-full shadow-[0_0_15px_var(--primary)] group-hover:shadow-[0_0_25px_var(--primary)] transition-shadow duration-500"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                      }}
                      transition={{ 
                        duration: 0.6,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <GraduationCap className="text-primary w-10 h-10 group-hover:animate-bounce" />
                    </motion.div>
                    
                    <div>
                      <motion.h3 
                        className="text-3xl font-bold text-foreground"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {edu.degree}
                      </motion.h3>
                      <p className="text-xl text-muted-foreground">
                        {edu.institution}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="grid grid-cols-2 gap-6 text-muted-foreground"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Calendar className="text-secondary w-5 h-5" />
                      <span>{edu.period}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Award className="text-primary w-5 h-5" />
                      <span>{edu.score}</span>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}