"use client"

import { useEffect, useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import EducationSection from "@/components/sections/education-section"
import SkillsSection from "@/components/sections/skills-section"
import ProjectsSection from "@/components/sections/projects-section"
import InternshipsSection from "@/components/sections/internships-section"
import CertificationsSection from "@/components/sections/certifications-section"
import AchievementsSection from "@/components/sections/achievements-section"
import HackathonSection from "@/components/sections/hackathon-section"
import BooksSection from "@/components/sections/books-section"
import EventsSection from "@/components/sections/events-section"
import HobbiesSection from "@/components/sections/hobbies-section"
import JanaAISection from "@/components/sections/jana-ai-section"
import ContactSection from "@/components/sections/contact-section"
import LoadingScreen from "@/components/loading-screen"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Optimize loading time for mobile
  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsLoading(false)
      },
      isMobile ? 1500 : 2000,
    ) // Shorter loading time on mobile

    return () => clearTimeout(timer)
  }, [isMobile])

  // Prevent body scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isLoading])

  // Handle viewport height for mobile browsers
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }

    setVh()
    window.addEventListener("resize", setVh)

    return () => {
      window.removeEventListener("resize", setVh)
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <main className="h-full w-full bg-white dark:bg-gray-900 transition-colors duration-300 prevent-horizontal-scroll">
      <Navigation />
      <div className="section-container">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <InternshipsSection />
        <CertificationsSection />
        <AchievementsSection />
        <HackathonSection />
        <BooksSection />
        <EventsSection />
        <HobbiesSection />
        <JanaAISection />
        <ContactSection />
      </div>
      <ScrollToTop />

      {/* Add mobile-specific styles */}
      <style jsx global>{`
        :root {
          --vh: 1vh;
        }
        
        .section-container > section {
          scroll-margin-top: 80px; /* Adjust for fixed header */
        }
        
        @media (max-width: 768px) {
          .section-container > section {
            scroll-margin-top: 70px;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          /* Use the custom vh variable for better mobile height handling */
          .min-h-screen {
            min-height: calc(100 * var(--vh));
          }
        }
      `}</style>
    </main>
  )
}
