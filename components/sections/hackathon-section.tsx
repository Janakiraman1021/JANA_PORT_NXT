import { useState, useEffect } from "react"
import { Trophy, Medal, Users, Calendar, MapPin, Star, Award, ChevronLeft, ChevronRight, Zap, Terminal, Code, Cpu, Shield, Rocket } from "lucide-react"

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
  const [matrixRain, setMatrixRain] = useState<Array<{
    id: number
    x: number
    delay: number
    chars: string[]
  }>>([])
  const [scanlinePosition, setScanlinePosition] = useState(0)
  const [glitchActive, setGlitchActive] = useState(false)
  const [particleCount] = useState(50)

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
    color: "from-indigo-400 to-cyan-500",
    stats: {
      "Teams": "120+",
      "Duration": "24h",
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
    color: "from-yellow-400 to-orange-500",
    stats: {
      "Teams": "80+",
      "Duration": "36h",
      "Prize Pool": "$3K",
    },
    prize: "Third Place - $500",
  },
  {
    title: "Hacktronix 2K24",
    type: "Participant",
    rank: "Attended",
    category: "Web2",
    date: "July 2024",
    description: "Created a social productivity app at Sairam Engineering College",
    participants: "500+",
    location: "Sairam Engineering College",
    icon: Users,
    color: "from-green-400 to-emerald-500",
    stats: {
      "Teams": "150+",
      "Duration": "24h",
      "Prize Pool": "$2K",
    },
    prize: "1st Prize ",
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
    color: "from-blue-500 to-teal-500",
    stats: {
      "Teams": "200+",
      "Duration": "48h",
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
    description: "Explored Web3 innovations at Bengaluru’s top startup expo",
    participants: "1000+",
    location: "Bangalore, India",
    icon: Award,
    color: "from-purple-400 to-pink-500",
    stats: {
      "Exhibitors": "300+",
      "Workshops": "50+",
      "Networking": "High",
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
    color: "from-fuchsia-500 to-violet-500",
    stats: {
      "Teams": "100+",
      "Duration": "48h",
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
    color: "from-blue-600 to-cyan-600",
    stats: {
      "Workshops": "10+",
      "Speakers": "20+",
      "Networking": "High",
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
    color: "from-orange-500 to-amber-600",
    stats: {
      "Teams": "50+",
      "Duration": "24h",
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
    color: "from-rose-400 to-red-500",
    stats: {
      "Teams": "90+",
      "Duration": "24h",
      "Prize Pool": "$1K",
    },
    prize: "Certificate of Participation",
  },
];

  // Matrix rain effect


  useEffect(() => {
    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01234567890"
    const newRain = []
    
    for (let i = 0; i < 20; i++) {
      newRain.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 2,
        chars: Array.from({ length: 10 }, () => chars[Math.floor(Math.random() * chars.length)])
      })
    }
    setMatrixRain(newRain)

    // Scanline animation
    const scanInterval = setInterval(() => {
      setScanlinePosition(prev => (prev + 1) % 100)
    }, 50)

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 5000)

    return () => {
      clearInterval(scanInterval)
      clearInterval(glitchInterval)
    }
  }, [])

  const nextHackathon = () => setActiveIndex((prev) => (prev + 1) % hackathons.length)
  const prevHackathon = () => setActiveIndex((prev) => (prev - 1 + hackathons.length) % hackathons.length)

  const currentHackathon = hackathons[activeIndex]

  return (
    <section id="hackathons" className="min-h-screen relative bg-black overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-30">
        {matrixRain.map((rain) => (
          <div
            key={rain.id}
            className="absolute top-0 text-green-400 text-xs font-mono leading-tight animate-pulse"
            style={{
              left: `${rain.x}%`,
              animationDelay: `${rain.delay}s`,
              animation: `matrixFall 8s linear infinite ${rain.delay}s`
            }}
          >
            {rain.chars.map((char, idx) => (
              <div key={idx} className="opacity-70">{char}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridPulse 4s ease-in-out infinite'
        }}
      />

      {/* Scanline Effect */}
      <div 
        className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 z-10"
        style={{
          top: `${scanlinePosition}%`,
          boxShadow: '0 0 20px cyan',
          transition: 'top 0.05s linear'
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: particleCount }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float 6s ease-in-out infinite ${Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 z-20">
        {/* Futuristic Header */}
        <div className="text-center mb-16">
          <div className={`text-8xl md:text-9xl font-black mb-8 ${glitchActive ? 'animate-pulse' : ''}`}>
            <div className="relative inline-block">
              <span 
                className={`absolute inset-0 text-red-500 ${glitchActive ? 'translate-x-1' : ''}`}
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
              >
                HACK:::MATRIX
              </span>
              <span 
                className={`absolute inset-0 text-blue-500 ${glitchActive ? '-translate-x-1' : ''}`}
                style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
              >
                HACK:::MATRIX
              </span>
              <span className={`relative text-transparent bg-clip-text bg-gradient-to-r ${currentHackathon.color}`}>
                HACK:::MATRIX
              </span>
            </div>
          </div>
          
          <div className="font-mono text-cyan-400 text-xl tracking-wider">
            <Terminal className="inline-block w-6 h-6 mr-2 animate-pulse" />
            SYSTEM_STATUS: [ONLINE] • THREAT_LEVEL: [MINIMAL] • ACCESS: [GRANTED]
          </div>
        </div>

        {/* Main Holographic Display */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl animate-pulse" />
          
          <div className="relative bg-black/70 backdrop-blur-xl rounded-3xl border-2 border-cyan-500/30 overflow-hidden">
            {/* Hologram Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />
            
            <div className="p-12">
              {/* Header Section */}
              <div className="flex items-start justify-between mb-12">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <Code className="w-8 h-8 text-cyan-400 animate-pulse" />                    <h3 className="text-5xl font-black text-white tracking-wide">
                      {currentHackathon.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono backdrop-blur-sm">
                      <Calendar className="w-4 h-4 inline-block mr-2" />
                      TIMESTAMP: {currentHackathon.date}
                    </div>
                    <div className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono backdrop-blur-sm">
                      <MapPin className="w-4 h-4 inline-block mr-2" />
                      LOCATION: {currentHackathon.location}
                    </div>
                  </div>
                </div>

                {/* 3D Floating Icon */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative p-8 rounded-2xl bg-black/40 border border-cyan-500/30 backdrop-blur-sm transform group-hover:scale-110 group-hover:rotate-y-12 transition-all duration-500">
                    <currentHackathon.icon className="w-16 h-16 text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Stats Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {Object.entries(currentHackathon.stats).map(([key, value], idx) => (
                  <div
                    key={key}
                    className="group relative transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 group-hover:border-cyan-500/50">
                      <div className="text-5xl font-black text-white mb-3 font-mono">{value}</div>
                      <div className="text-cyan-400 font-mono text-sm tracking-wider">{key}</div>
                      <div className="absolute top-4 right-4">
                        <Zap className="w-6 h-6 text-cyan-400 opacity-30 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-xl text-white/90 font-mono leading-relaxed tracking-wide">
                  {currentHackathon.description}
                </p>
              </div>

              {/* Prize Section */}
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30">
                <Award className="w-10 h-10 text-yellow-400 animate-bounce" />
                <div>
                  <div className="text-sm text-yellow-400 font-mono opacity-70">GRAND_PRIZE</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    {currentHackathon.prize}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-12">
            <button
              onClick={prevHackathon}
              className="group relative p-4 rounded-full bg-black/50 border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <ChevronLeft className="w-8 h-8 text-cyan-400 relative z-10" />
            </button>

            {/* Index Indicators */}
            <div className="flex gap-3">
              {hackathons.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === activeIndex 
                      ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextHackathon}
              className="group relative p-4 rounded-full bg-black/50 border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <ChevronRight className="w-8 h-8 text-cyan-400 relative z-10" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes matrixFall {
          to {
            transform: translateY(100vh);
          }
        }
        
        @keyframes gridPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
      `}</style>
    </section>
  )
}