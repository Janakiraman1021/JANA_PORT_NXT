"use client"

import { useState } from "react"
import {
  Trophy,
  Users,
  Calendar,
  MapPin,
  Award,
  ChevronLeft,
  ChevronRight,
  Code,
  Zap,
  Star,
  ArrowRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Hackathon {
  title: string
  type: string
  rank: string
  category: string
  date: string
  description: string
  participants: string
  location: string
  icon: any
  color: string
  stats: {
    [key: string]: string
  }
  prize: string
}

export default function HackathonSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const hackathons: Hackathon[] = [
    {
      title: "SRM Hackverse 2024",
      type: "Participant",
      rank: "Attended",
      category: "Blockchain",
      date: "April 2024",
      description: "Showcased decentralized identity wallet at RMZ One Paramount",
      participants: "400+",
      location: "RMZ One Paramount, Chennai",
      icon: Users,
      color: "from-violet-500 to-purple-600",
      stats: {
        Teams: "120+",
        Duration: "24h",
        "Prize Pool": "$5K",
      },
      prize: "Certificate of Participation",
    },
    {
      title: "ByteVerse 2024",
      type: "Winner",
      rank: "3rd Place",
      category: "Open Innovation",
      date: "May 2024",
      description: "Built a cross-platform ML tool with cloud sync",
      participants: "300+",
      location: "SRM Institute of Science and Technology",
      icon: Trophy,
      color: "from-amber-500 to-orange-600",
      stats: {
        Teams: "80+",
        Duration: "36h",
        "Prize Pool": "$3K",
      },
      prize: "Third Place - $500",
    },
    {
      title: "Hacktronix 2K24",
      type: "Winner",
      rank: "1st Place",
      category: "Web2",
      date: "July 2024",
      description: "Created a social productivity app at Sairam Engineering College",
      participants: "500+",
      location: "Sairam Engineering College",
      icon: Trophy,
      color: "from-emerald-500 to-teal-600",
      stats: {
        Teams: "150+",
        Duration: "24h",
        "Prize Pool": "$2K",
      },
      prize: "1st Prize",
    },
    {
      title: "DUHacks 3.0",
      type: "Winner",
      rank: "1st Place",
      category: "Blockchain",
      date: "December 2024",
      description: "Built a decentralized freelance escrow platform",
      participants: "600+",
      location: "Delhi Technological University",
      icon: Trophy,
      color: "from-blue-500 to-cyan-600",
      stats: {
        Teams: "200+",
        Duration: "48h",
        "Prize Pool": "$10K",
      },
      prize: "Winner - $5000",
    },
    {
      title: "Unfold 2024",
      type: "Attendee",
      rank: "Attended",
      category: "Blockchain",
      date: "December 2024",
      description: "Explored Web3 innovations at Bengaluru's top startup expo",
      participants: "1000+",
      location: "Bangalore, India",
      icon: Award,
      color: "from-violet-500 to-purple-600",
      stats: {
        Exhibitors: "300+",
        Workshops: "50+",
        Networking: "High",
      },
      prize: "Certificate of Participation",
    },
    {
      title: "OpenHacks",
      type: "Attendee",
      rank: "Attended",
      category: "Web2 & Web3",
      date: "April 2025",
      description: "Participated in hybrid innovation challenge at Jaya Engineering College",
      participants: "350+",
      location: "Jaya Engineering College, Chennai",
      icon: Users,
      color: "from-pink-500 to-rose-600",
      stats: {
        Teams: "100+",
        Duration: "48h",
        "Prize Pool": "$4K",
      },
      prize: "Certificate of Participation",
    },
    {
      title: "Hackverse 5.0",
      type: "Attendee",
      rank: "Attended",
      category: "Web3",
      date: "January 2025",
      description: "Networked with Web3 builders at NITK Surathkal",
      participants: "500+",
      location: "NITK Surathkal, Karnataka",
      icon: Award,
      color: "from-indigo-500 to-blue-600",
      stats: {
        Workshops: "10+",
        Speakers: "20+",
        Networking: "High",
      },
      prize: "Certificate of Participation",
    },
    {
      title: "Hackverse 2025",
      type: "Special Mention",
      rank: "Top 5",
      category: "Web3",
      date: "April 2025",
      description: "Earned recognition for DAO-based knowledge sharing platform at Kanini Technologies",
      participants: "300+",
      location: "Kanini Technologies, Chennai",
      icon: Award,
      color: "from-orange-500 to-red-500",
      stats: {
        Teams: "50+",
        Duration: "24h",
        "Prize Pool": "$2K",
      },
      prize: "Special Mention",
    },
    {
      title: "Rotatech-X",
      type: "Attendee",
      rank: "Attended",
      category: "Web2 & Web3",
      date: "April 2025",
      description: "Explored real-time apps and blockchain integrations at Yuniq Technologies",
      participants: "400+",
      location: "Yuniq Technologies, Chennai",
      icon: Zap,
      color: "from-red-500 to-pink-600",
      stats: {
        Teams: "90+",
        Duration: "24h",
        "Prize Pool": "$1K",
      },
      prize: "Certificate of Participation",
    },
  ]

  const nextHackathon = () => setActiveIndex((prev) => (prev + 1) % hackathons.length)
  const prevHackathon = () => setActiveIndex((prev) => (prev - 1 + hackathons.length) % hackathons.length)

  const currentHackathon = hackathons[activeIndex]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Winner":
        return "bg-gradient-to-r from-amber-500 to-yellow-500 text-white"
      case "Special Mention":
        return "bg-gradient-to-r from-violet-500 to-purple-500 text-white"
      case "Participant":
      case "Attendee":
        return "bg-gradient-to-r from-violet-500 to-indigo-500 text-white"
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600 text-white"
    }
  }

  return (
    <section id="hackathons" className="py-20 bg-gradient-to-br from-white via-violet-50/30 to-white relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-violet-300/30 to-indigo-300/30 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-400/15 to-violet-400/15 rounded-full blur-2xl animate-pulse"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 69, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 69, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl blur-lg opacity-50"></div>
              <div className="relative p-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl">
                <Code className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Hackathons
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Exploring innovation through competitive programming and collaborative development
          </p>
        </div>

        {/* Main Featured Card */}
        <div className="relative max-w-6xl mx-auto mb-20">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-3xl blur-lg opacity-20 animate-pulse"></div>

          <Card className="relative bg-white/80 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              {/* Hero Section */}
              <div
                className={`relative p-8 md:p-12 bg-gradient-to-br ${currentHackathon.color} text-white overflow-hidden`}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] animate-pulse"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                          <currentHackathon.icon className="w-8 h-8" />
                        </div>
                        <Badge
                          className={`${getTypeColor(currentHackathon.type)} border-0 px-4 py-2 text-sm font-semibold shadow-lg`}
                        >
                          {currentHackathon.type}
                        </Badge>
                      </div>

                      <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{currentHackathon.title}</h3>

                      <div className="flex flex-wrap gap-6 text-white/90 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          <span className="font-medium">{currentHackathon.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5" />
                          <span className="font-medium">{currentHackathon.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          <span className="font-medium">{currentHackathon.participants} participants</span>
                        </div>
                      </div>

                      <p className="text-lg text-white/95 leading-relaxed">{currentHackathon.description}</p>
                    </div>

                    {/* Achievement Badge */}
                    <div className="flex-shrink-0">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                          <Star className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
                          <div className="text-2xl font-bold mb-1">{currentHackathon.rank}</div>
                          <div className="text-sm opacity-90">{currentHackathon.category}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats and Prize Section */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-white to-violet-50/50">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {Object.entries(currentHackathon.stats).map(([key, value], idx) => (
                    <div key={key} className="group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="relative text-center p-8 rounded-2xl bg-white border border-violet-100 group-hover:border-violet-200 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                        <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-3">
                          {value}
                        </div>
                        <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">{key}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Prize Section */}
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10"></div>
                  <div className="relative flex items-center justify-between p-6 bg-white/50 backdrop-blur-sm border border-amber-200/50 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl text-white shadow-lg">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-amber-700 mb-1">Achievement</div>
                        <div className="text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                          {currentHackathon.prize}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-amber-600" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevHackathon}
              className="w-14 h-14 rounded-full border-2 border-violet-200 hover:border-violet-400 hover:bg-violet-50 transition-all duration-200 group"
            >
              <ChevronLeft className="w-6 h-6 text-violet-600 group-hover:text-violet-700" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {hackathons.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "bg-gradient-to-r from-violet-500 to-purple-500 scale-125 shadow-lg"
                      : "bg-violet-200 hover:bg-violet-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextHackathon}
              className="w-14 h-14 rounded-full border-2 border-violet-200 hover:border-violet-400 hover:bg-violet-50 transition-all duration-200 group"
            >
              <ChevronRight className="w-6 h-6 text-violet-600 group-hover:text-violet-700" />
            </Button>
          </div>

          {/* Progress Indicator */}
          <div className="text-center mt-6">
            <span className="text-sm text-gray-500 font-medium">
              {activeIndex + 1} of {hackathons.length}
            </span>
          </div>
        </div>

        {/* Quick Overview Grid */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            All Hackathons Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hackathon, idx) => (
              <Card
                key={idx}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group border-0 bg-white/60 backdrop-blur-sm ${
                  idx === activeIndex ? "ring-2 ring-violet-400 shadow-xl scale-105" : "hover:bg-white/80"
                }`}
                onClick={() => setActiveIndex(idx)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${hackathon.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-200`}
                    >
                      <hackathon.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 truncate mb-1">{hackathon.title}</h4>
                      <p className="text-sm text-gray-600">{hackathon.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge className={`${getTypeColor(hackathon.type)} border-0 text-xs px-3 py-1`}>
                      {hackathon.rank}
                    </Badge>
                    <span className="text-xs text-gray-500 font-medium">{hackathon.category}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
