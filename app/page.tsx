"use client"

import { useEffect, useState } from "react"
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
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
      <ScrollToTop />
    </main>
  )
}
