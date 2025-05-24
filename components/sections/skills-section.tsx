"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Database, Globe, Smartphone, Brain, Settings } from "lucide-react"
import axios from "axios"

interface Skill {
  _id: string // Changed from id to _id to match API
  name: string
  level: number
  category: string
}

interface ApiResponse {
  success: boolean
  data: Skill[]
}

// Update categoryIcons to match your categories
const categoryIcons = {
  "Blockchain Development": Code,
  "Programming Languages": Globe,
  "Frameworks & Tools": Settings,
}

export default function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://port-backend-onv7.onrender.com/api/skills"
        )

        if (response.data?.success && Array.isArray(response.data.data)) {
          // Sort skills by level within each category
          const sortedSkills = response.data.data.sort((a, b) => b.level - a.level)
          setSkills(sortedSkills)
          setError(null) // Clear any existing errors
        } else {
          throw new Error("Invalid data format received")
        }
      } catch (err) {
        console.error("Skills fetch error:", err)
        if (axios.isAxiosError(err)) {
          setError(`Failed to load skills: ${err.message}`)
        } else {
          setError("Failed to load skills data")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  // Ensure skills is always an array before using array methods
  const safeSkills = Array.isArray(skills) ? skills : []
  const categories = ["All", ...Array.from(new Set(safeSkills.map((skill) => skill.category)))]
  const filteredSkills =
    selectedCategory === "All" ? safeSkills : safeSkills.filter((skill) => skill.category === selectedCategory)

  const skillsByCategory = safeSkills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>,
  )

  if (loading) {
    return (
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 dark:bg-gray-700 h-32 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My technical expertise and proficiency across various technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Code

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={selectedCategory !== "All" && selectedCategory !== category ? "hidden" : ""}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center"
                  >
                    <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill._id} // Changed from id to _id
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{skill.level}%</span>
                      </div>

                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

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
