"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Camera,
  Music,
  BookOpen,
  Gamepad2,
  Plane,
  Coffee,
  Code,
  Palette,
  Mountain,
  Film,
  Headphones,
  Dumbbell,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Hobby {
  id: string
  name: string
  description: string
  category: string
  icon: string
  level: string
  timeSpent: string
  achievements?: string[]
  images?: string[]
  favoriteAspect: string
}

const hobbyIcons = {
  photography: Camera,
  music: Music,
  reading: BookOpen,
  gaming: Gamepad2,
  travel: Plane,
  coffee: Coffee,
  coding: Code,
  art: Palette,
  hiking: Mountain,
  movies: Film,
  podcasts: Headphones,
  fitness: Dumbbell,
  writing: BookOpen,
  poetry: Palette,
}

export default function HobbiesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  // Define hobbies directly instead of using state and API fetch
  const hobbies: Hobby[] = [
    {
      id: "0",
      name: "Writing & Authorship",
      description:
        "Published author of multiple books in Tamil literature, focusing on contemporary themes and emotional storytelling. Creating works that blend modern perspectives with traditional Tamil literary elements.",
      category: "Creative",
      icon: "writing",
      level: "Advanced",
      timeSpent: "5+ years",
      achievements: [
        "Published author of 'என் இதயத்தின் ஓசை' (Sound of My Heart)",
        "Co-authored multiple books including 'மழலையும் நானும்', 'விரும்பிய வரிகள்'",
        "Contributing writer to various Tamil literary publications",
      ],
      favoriteAspect:
        "The ability to touch hearts and inspire minds through storytelling in my mother tongue",
    },
    {
      id: "00",
      name: "Tamil Poetry",
      description:
        "Crafting contemporary Tamil poetry that explores themes of love, technology, and modern life while preserving the rich traditions of Tamil poetic forms.",
      category: "Creative",
      icon: "poetry",
      level: "Advanced",
      timeSpent: "4+ years",
      achievements: [
        "Published collection of poems in various anthologies",
        "Featured poet in Tamil Literary Review",
        "Combining traditional Tamil poetry styles with modern themes",
      ],
      favoriteAspect:
        "Expressing complex emotions and contemporary experiences through the beautiful medium of Tamil poetry",
    },
    {
      id: "1",
      name: "Photography",
      description:
        "Capturing moments and exploring the world through the lens of creativity and technical precision.",
      category: "Creative",
      icon: "photography",
      level: "Intermediate",
      timeSpent: "3+ years",
      achievements: [
        "Featured in local photography exhibition",
        "500+ photos in personal portfolio",
        "Landscape and street photography specialist",
      ],
      favoriteAspect: "The ability to freeze time and tell stories through visual composition",
    },
    {
      id: "2",
      name: "Music Production",
      description:
        "Creating and mixing electronic music, exploring different genres and sound design techniques.",
      category: "Creative",
      icon: "music",
      level: "Beginner",
      timeSpent: "1+ years",
      achievements: [
        "Released 5 original tracks",
        "Learning FL Studio and Ableton Live",
        "Experimenting with ambient and lo-fi genres",
      ],
      favoriteAspect: "The mathematical precision combined with creative expression in sound",
    },
    {
      id: "3",
      name: "Gaming",
      description:
        "Passionate about strategy games, indie titles, and exploring virtual worlds with compelling narratives.",
      category: "Entertainment",
      icon: "gaming",
      level: "Advanced",
      timeSpent: "10+ years",
      achievements: [
        "Completed 100+ games across various genres",
        "Active in gaming communities",
        "Preference for puzzle and strategy games",
      ],
      favoriteAspect: "The problem-solving aspects and immersive storytelling in modern games",
    },
    {
      id: "4",
      name: "Travel & Exploration",
      description:
        "Exploring new places, cultures, and cuisines while documenting experiences through photography.",
      category: "Adventure",
      icon: "travel",
      level: "Enthusiast",
      timeSpent: "5+ years",
      achievements: [
        "Visited 15+ cities across India",
        "Cultural photography collection",
        "Local cuisine exploration",
      ],
      favoriteAspect: "Meeting new people and experiencing diverse cultures and perspectives",
    },
    {
      id: "5",
      name: "Coffee Brewing",
      description: "Exploring different brewing methods, bean origins, and the science behind the perfect cup.",
      category: "Lifestyle",
      icon: "coffee",
      level: "Intermediate",
      timeSpent: "2+ years",
      achievements: [
        "Mastered pour-over and French press techniques",
        "Tried beans from 10+ different regions",
        "Home brewing setup with precision equipment",
      ],
      favoriteAspect: "The ritual and precision that goes into crafting the perfect cup",
    },
    {
      id: "6",
      name: "Coding Side Projects",
      description:
        "Building experimental applications, contributing to open source, and learning new technologies.",
      category: "Technical",
      icon: "coding",
      level: "Advanced",
      timeSpent: "4+ years",
      achievements: [
        "20+ personal projects on GitHub",
        "Contributions to open source projects",
        "Experimenting with new frameworks and languages",
      ],
      favoriteAspect: "The satisfaction of solving complex problems and building useful tools",
    },
    {
      id: "7",
      name: "Fitness & Hiking",
      description:
        "Maintaining physical health through regular workouts and exploring nature through hiking trails.",
      category: "Health",
      icon: "fitness",
      level: "Intermediate",
      timeSpent: "3+ years",
      achievements: [
        "Regular gym routine for 3+ years",
        "Completed several challenging hiking trails",
        "Focus on strength training and cardio",
      ],
      favoriteAspect: "The mental clarity and stress relief that comes from physical activity",
    },
    {
      id: "8",
      name: "Tech Podcasts",
      description:
        "Staying updated with technology trends, startup stories, and developer insights through podcasts.",
      category: "Learning",
      icon: "podcasts",
      level: "Enthusiast",
      timeSpent: "2+ years",
      achievements: [
        "Regular listener of 10+ tech podcasts",
        "Covers topics from AI to entrepreneurship",
        "Favorite shows include Syntax, The Changelog, and a16z",
      ],
      favoriteAspect: "Learning from industry experts and staying current with tech trends",
    },
  ]

  const categories = ["All", ...Array.from(new Set(hobbies.map((hobby) => hobby.category)))]
  const filteredHobbies =
    selectedCategory === "All" ? hobbies : hobbies.filter((hobby) => hobby.category === selectedCategory)

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
      case "intermediate":
        return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
      case "advanced":
        return "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
      case "enthusiast":
        return "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
    }
  }

  return (
    <section id="hobbies" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Hobbies & Interests</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Beyond coding, I'm passionate about various activities that fuel creativity and personal growth
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

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHobbies.map((hobby, index) => {
            const IconComponent = hobbyIcons[hobby.icon as keyof typeof hobbyIcons] || Code

            return (
              <motion.div
                key={hobby.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center"
                      >
                        <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </motion.div>

                      <div className="flex flex-col items-end space-y-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(hobby.level)}`}>
                          {hobby.level}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                          {hobby.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{hobby.name}</h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{hobby.description}</p>

                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <span>Experience:</span>
                        <span className="font-medium">{hobby.timeSpent}</span>
                      </div>
                    </div>

                    {hobby.achievements && hobby.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Highlights:</h4>
                        <ul className="space-y-1">
                          {hobby.achievements.slice(0, 3).map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2 text-xs text-gray-600 dark:text-gray-300">
                              <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">What I Love Most:</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300 italic">"{hobby.favoriteAspect}"</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Life Beyond Code</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                >
                  8+
                </motion.div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Active Hobbies</p>
              </div>

              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2"
                >
                  15+
                </motion.div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Cities Visited</p>
              </div>

              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2"
                >
                  500+
                </motion.div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Photos Taken</p>
              </div>

              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                  className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2"
                >
                  100+
                </motion.div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Games Completed</p>
              </div>
            </div>
          </div>
        </motion.div>

        {filteredHobbies.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Hobbies Found</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {selectedCategory === "All"
                ? "Hobbies and interests will be displayed here."
                : `No hobbies found in the ${selectedCategory} category.`}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
