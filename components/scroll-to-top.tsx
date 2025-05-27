"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, Rocket } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          {/* Outer ring animation */}
          <motion.div
            className="absolute -inset-4 rounded-full opacity-20"
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.4), transparent)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />

          {/* Hover effect container */}
          <motion.button
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={scrollToTop}
            className="relative group"
          >
            {/* Particle effects */}
            <AnimatePresence>
              {isHovered && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        y: -20,
                        x: Math.sin(i) * 10,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.05,
                        repeat: Infinity,
                      }}
                      className="absolute bottom-0 left-1/2 w-1 h-1 rounded-full bg-cyan-400"
                    />
                  ))}
                </>
              )}
            </AnimatePresence>

            {/* Main button */}
            <motion.div
              className="relative p-4 rounded-full bg-black/30 backdrop-blur-xl border border-white/10 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Button content */}
              <div className="relative">
                <motion.div
                  animate={isHovered ? {
                    y: [-2, 2, -2],
                    rotate: [0, 5, -5, 0]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Rocket className="w-6 h-6 text-white transform -rotate-45" />
                </motion.div>
              </div>

              {/* Glowing ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent"
                style={{
                  background: 'linear-gradient(45deg, #7928CA, #FF0080) border-box',
                  WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'destination-out',
                  maskComposite: 'exclude',
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.button>

          {/* Text indicator */}
          
        </motion.div>
      )}
    </AnimatePresence>
  )
}