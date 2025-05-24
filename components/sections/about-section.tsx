"use client"

import { motion } from "framer-motion"
import { Code, Heart, Lightbulb, Target } from "lucide-react"

export default function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Passionate about writing clean, efficient code and staying updated with latest technologies.",
    },
    {
      icon: Heart,
      title: "User-Centric Design",
      description: "Focused on creating intuitive solutions that provide exceptional user experiences.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Mindset",
      description: "Always exploring new ideas and approaches to solve complex problems creatively.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Committed to delivering high-quality results and continuous professional growth.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Driven by curiosity and powered by passion for technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey in Technology</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                As a second-year IT undergraduate, I've discovered my passion for software development and the
                incredible potential of technology to solve real-world problems. My journey began with curiosity about
                how applications work, which quickly evolved into a deep fascination with creating them.
              </p>
              <p>
                I specialize in developing intuitive solutions that bridge the gap between complex technology and user
                needs. Whether it's building responsive web applications, exploring AI technologies, or contributing to
                open-source projects, I approach every challenge with enthusiasm and a commitment to excellence.
              </p>
              <p>
                Beyond coding, I'm actively involved in tech communities, continuously learning new technologies, and
                sharing knowledge with fellow developers. I believe in the power of collaboration and the importance of
                staying curious in this ever-evolving field.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Facts</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                  <span className="font-medium text-blue-600 dark:text-blue-400">Location:</span>
                  <p className="text-gray-600 dark:text-gray-300">India</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                  <span className="font-medium text-blue-600 dark:text-blue-400">Education:</span>
                  <p className="text-gray-600 dark:text-gray-300">IT Undergraduate</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                  <span className="font-medium text-blue-600 dark:text-blue-400">Focus:</span>
                  <p className="text-gray-600 dark:text-gray-300">Software Development</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                  <span className="font-medium text-blue-600 dark:text-blue-400">Passion:</span>
                  <p className="text-gray-600 dark:text-gray-300">Problem Solving</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center"
                  >
                    <highlight.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{highlight.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
