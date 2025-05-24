"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Eye, Code, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import axios from "axios"

interface Project {
  _id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string // Updated to match API response
  category: string
  featured: boolean
  startDate?: string
  endDate?: string
}

interface ApiResponse {
  success: boolean
  data: Project[]
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<ApiResponse>('https://port-backend-onv7.onrender.com/api/projects')
        if (response.data?.success) {
          setProjects(response.data.data)
        } else {
          throw new Error('Invalid data format received')
        }
      } catch (err) {
        setError('Failed to load projects data')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // Ensure projects is always an array before using array methods
  const safeProjects = Array.isArray(projects) ? projects : []
  const categories = ["All", ...Array.from(new Set(safeProjects.map((project) => project.category)))].map(
    (category, index) => ({
      id: `category-${index}`,
      name: category
    })
  )
  const filteredProjects = selectedCategory === "All" 
    ? safeProjects 
    : safeProjects.filter((project) => project.category === selectedCategory)
  const featuredProjects = safeProjects.filter((project) => project.featured)

  if (loading) {
    return (
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 dark:bg-gray-700 h-80 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter with unique keys */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.name
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={project.image || "/placeholder.png"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className="bg-white text-black hover:bg-gray-100"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-black"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                      className="w-full"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h3>
                    <Button variant="outline" size="sm" onClick={() => setSelectedProject(null)}>
                      ×
                    </Button>
                  </div>

                  <div className="relative aspect-video mb-6">
                    <Image
                      src={selectedProject.image || "/placeholder.png"}
                      alt={selectedProject.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {selectedProject.longDescription || selectedProject.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.technologies?.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="space-y-4">
                        {selectedProject.liveUrl && (
                          <Button
                            className="w-full"
                            onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Live Demo
                          </Button>
                        )}
                        {selectedProject.githubUrl && (
                          <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Source Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
