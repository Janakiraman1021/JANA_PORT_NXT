"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun, Sparkles, ChevronRight, User } from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

const navItems = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Education", href: "#education" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Internships", href: "#internships" },
	{ name: "Certifications", href: "#certifications" },
	{ name: "Achievements", href: "#achievements" },
	{ name: "Books", href: "#books" },
	{ name: "Events", href: "#events" },
	{ name: "Hobbies", href: "#hobbies" },
	{ name: "Jana AI", href: "#jana-ai" },
	{ name: "Contact", href: "#contact" },
]

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false)
	const [activeSection, setActiveSection] = useState("home")
	const [scrolled, setScrolled] = useState(false)
	const { theme, setTheme } = useTheme()
	const router = useRouter()

	const handleScroll = () => {
		setScrolled(window.scrollY > 50)

		const sections = navItems.map((item) => item.href.substring(1))
		const currentSection = sections.find((section) => {
			const element = document.getElementById(section)
			if (element) {
				const rect = element.getBoundingClientRect()
				return rect.top <= 100 && rect.bottom >= 100
			}
			return false
		})

		if (currentSection) {
			setActiveSection(currentSection)
		}
	}

	useEffect(() => {
		handleScroll() // Initial check
		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, []) // Empty dependency array since handleScroll is defined outside

	const scrollToSection = (href: string) => {
		const elementId = href.substring(1)
		const element = document.getElementById(elementId)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
		setIsOpen(false)
	}

	const handleSignIn = () => {
		router.push("/signin")
	}

	return (
		<>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				className="fixed top-0 w-full z-50"
			>
				<div className="mx-auto px-6">
					<div className="relative backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 rounded-2xl mt-4 mx-4 p-4 shadow-lg border border-white/20">
						<div className="flex items-center justify-between">
							{/* Logo */}
							<motion.div
								className="relative z-10"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<div className="text-3xl font-bold relative">
									<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 animate-gradient">
										JR
									</span>
									<motion.div
										className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-25 group-hover:opacity-50 blur"
										animate={{
											scale: [1, 1.1, 1],
											opacity: [0.2, 0.3, 0.2],
										}}
										transition={{
											duration: 4,
											repeat: Infinity,
										}}
									/>
								</div>
							</motion.div>

							{/* Desktop Menu */}
							<div className="hidden lg:flex items-center space-x-1">
								{navItems.map((item) => (
									<motion.button
										key={item.name}
										onClick={() => scrollToSection(item.href)}
										className={`relative group px-4 py-2 rounded-xl overflow-hidden`}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										{/* Background animation */}
										<motion.div
											className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
											whileHover={{
												scale: 1.2,
												rotate: 5,
											}}
										/>

										{/* Text */}
										<span
											className={`relative z-10 text-sm font-medium ${
												activeSection === item.href.substring(1)
													? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
													: "text-gray-700 dark:text-gray-300"
											}`}
										>
											{item.name}
										</span>

										{/* Active indicator */}
										{activeSection === item.href.substring(1) && (
											<motion.div
												layoutId="activeSection"
												className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												exit={{ opacity: 0 }}
											>
												<div className="absolute top-0 left-0 w-full h-full bg-white blur-sm" />
											</motion.div>
										)}
									</motion.button>
								))}

								{/* Sign In Button */}
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="mr-4"
								>
									<Button
										onClick={handleSignIn}
										className="relative group bg-gradient-to-r from-purple-600 to-pink-600 p-[1px] rounded-xl"
										variant="ghost"
									>
										<span className="absolute inset-0 bg-white dark:bg-gray-900 rounded-xl group-hover:bg-opacity-0 transition-all duration-300" />
										<span className="relative flex items-center px-4 py-2 text-sm font-medium group-hover:text-white transition-colors duration-300">
											<User className="w-4 h-4 mr-2" />
											Sign In
											<Sparkles className="w-4 h-4 ml-2 animate-pulse" />
										</span>
									</Button>
								</motion.div>

								{/* Theme Toggle */}
								<motion.button
									onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
									className="relative p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
								>
									<motion.div
										animate={{
											rotate: theme === "dark" ? 0 : 360,
											scale: [1, 1.2, 1],
										}}
										transition={{ duration: 0.5 }}
									>
										{theme === "dark" ? (
											<Sun className="w-5 h-5 text-white" />
										) : (
											<Moon className="w-5 h-5 text-white" />
										)}
									</motion.div>
								</motion.button>
							</div>

							{/* Mobile Menu Button */}
							<motion.button
								onClick={() => setIsOpen(!isOpen)}
								className="lg:hidden relative p-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
							>
								<AnimatePresence mode="wait">
									{isOpen ? (
										<motion.div
											key="close"
											initial={{ rotate: -90, opacity: 0 }}
											animate={{ rotate: 0, opacity: 1 }}
											exit={{ rotate: 90, opacity: 0 }}
											transition={{ duration: 0.2 }}
										>
											<X className="w-6 h-6 text-white" />
										</motion.div>
									) : (
										<motion.div
											key="menu"
											initial={{ rotate: 90, opacity: 0 }}
											animate={{ rotate: 0, opacity: 1 }}
											exit={{ rotate: -90, opacity: 0 }}
											transition={{ duration: 0.2 }}
										>
											<Menu className="w-6 h-6 text-white" />
										</motion.div>
									)}
								</AnimatePresence>
							</motion.button>
						</div>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
						animate={{ opacity: 1, clipPath: "circle(130% at top right)" }}
						exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
						transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
						className="fixed inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md lg:hidden z-50"
					>
						<div className="flex flex-col space-y-2 p-6 mt-20">
							{navItems.map((item, index) => (
								<motion.button
									key={item.name}
									onClick={() => scrollToSection(item.href)}
									className="flex items-center space-x-2 w-full p-4 rounded-xl text-left"
									initial={{ opacity: 0, x: -20 }}
									animate={{
										opacity: 1,
										x: 0,
										transition: { delay: index * 0.1 },
									}}
									exit={{ opacity: 0, x: -20 }}
								>
									<span
										className={`font-medium text-base ${
											activeSection === item.href.substring(1)
												? "text-purple-600"
												: "text-gray-600 dark:text-gray-300"
										}`}
									>
										{item.name}
									</span>
								</motion.button>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}