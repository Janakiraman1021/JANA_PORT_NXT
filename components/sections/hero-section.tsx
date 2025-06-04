"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Download, Eye, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function HeroSection() {
  const [showResumeModal, setShowResumeModal] = useState(false)

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleResumeView = () => {
    setShowResumeModal(true)
  }

  const handleResumeDownload = () => {
    // Replace with your actual resume download link
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "JanakiRaman_K_Resume.pdf"
    link.click()
  }

  const closeModal = () => {
    setShowResumeModal(false)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1"
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">JR</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Name with Typewriter Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
          >
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
              JanakiRaman K
            </motion.span>
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6 font-medium"
          >
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Software Developer
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              className="absolute"
            >
              {" "}
              & Problem Solver
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate third-year IT undergraduate specializing in software development with a focus on creating
            intuitive solutions that make a difference.
          </motion.p>

          {/* CTA Buttons with Resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Resume Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12"
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">📄</span>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Resume</span>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={handleResumeView}
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-2 text-xs"
                >
                  <Eye size={14} />
                  View
                </Button>
                <Button
                  onClick={handleResumeDownload}
                  size="sm"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-xs"
                >
                  <Download size={14} />
                  Download
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:techie.jr21@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <ArrowDown size={32} />
          </motion.button>
        </div>
      </div>

      {/* Resume Modal */}
      {showResumeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">📄</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Resume</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">JanakiRaman K</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  onClick={handleResumeDownload}
                  size="sm"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                >
                  <Download size={16} />
                  Download
                </Button>
                <Button
                  onClick={closeModal}
                  size="sm"
                  variant="ghost"
                  className="p-2"
                >
                  <X size={20} />
                </Button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="p-6 flex-1 overflow-auto">
              <div className="w-full h-[70vh] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <iframe
                  src="/resume.pdf"
                  className="w-full h-full rounded-lg"
                  title="Resume"
                  frameBorder="0"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}