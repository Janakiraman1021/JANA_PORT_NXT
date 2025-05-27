"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Hexagon, Zap, Moon, Sun, ChevronDown, User, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

// Group navigation items into categories
const navCategories = {
	main: ["Home", "About", "Contact"],
	professional: ["Education", "Skills", "Projects", "Internships"],
	achievements: ["Certifications", "Achievements", "Hackathons"],
	interests: ["Books", "Events", "Hobbies"],
	featured: ["Jana AI"],
}

const navItems = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Education", href: "#education" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Internships", href: "#internships" },
	{ name: "Certifications", href: "#certifications" },
	{ name: "Achievements", href: "#achievements" },
	{ name: "Hackathons", href: "#hackathons" },
	{ name: "Books", href: "#books" },
	{ name: "Events", href: "#events" },
	{ name: "Hobbies", href: "#hobbies" },
	{ name: "Jana AI", href: "#jana-ai" },
	{ name: "Contact", href: "#contact" },
]

export default function Navigation() {
	const [activeSection, setActiveSection] = useState("home")
	const [isOpen, setIsOpen] = useState(false)
	const [hoverEffect, setHoverEffect] = useState<string | null>(null)
	const [glitchEffect, setGlitchEffect] = useState("")
	const { theme, setTheme } = useTheme()
	const router = useRouter()

	const handleScroll = () => {
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

	useEffect(() => {
		// Random glitch effect
		const glitchInterval = setInterval(() => {
			const randomItem = navItems[Math.floor(Math.random() * navItems.length)].name
			setGlitchEffect(randomItem)
			setTimeout(() => setGlitchEffect(""), 150)
		}, 5000)

		return () => clearInterval(glitchInterval)
	}, [])

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
		<nav className="fixed top-0 w-full z-50">
			<motion.div
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
			>
				{/* Enhanced Cyberpunk Background */}
				<div className="absolute inset-0">
					{/* Animated grid background */}
					<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
					
					{/* Holographic glass effect */}
					<div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30 backdrop-blur-md" />
					
					{/* Glowing border */}
					<div className="absolute inset-0 border-b border-white/10">
						<div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
					</div>

					{/* Animated cyber circuits */}
					<div className="absolute inset-0 overflow-hidden opacity-10">
						{Array.from({ length: 5 }).map((_, i) => (
							<motion.div
								key={i}
								className="absolute h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
								style={{ top: `${i * 25}%`, left: '-100%', right: '-100%' }}
								animate={{
									x: ['0%', '100%'],
									opacity: [0, 1, 0],
								}}
								transition={{
									duration: 4,
									delay: i * 0.5,
									repeat: Infinity,
									ease: 'linear',
								}}
							/>
						))}
					</div>
				</div>

				{/* Scanner effect */}
				<motion.div 
					className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
					animate={{
						y: ['0%', '100%', '0%'],
					}}
					transition={{
						duration: 4,
						ease: 'linear',
						repeat: Infinity,
					}}
					style={{ clipPath: 'polygon(0 0, 100% 0, 100% 2px, 0 2px)' }}
				/>

				<div className="relative max-w-7xl mx-auto px-4">
					<div className="flex items-center justify-between h-20">
						{/* Enhanced Cyberpunk Logo */}
						<motion.div 
							className="relative group cursor-pointer"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							{/* Rotating outer ring */}
							<motion.div
								className="absolute -inset-1 rounded-full"
								style={{
									background: 'conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.4), transparent)',
								}}
								animate={{ rotate: 360 }}
								transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
							/>
							
							{/* Inner glow */}
							<motion.div
								className="absolute -inset-2 bg-gradient-to-r from-purple-500/40 to-cyan-500/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0, 0.5, 0],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							/>

							{/* Logo elements */}
							<div className="relative bg-black/50 backdrop-blur-sm p-2 rounded-full border border-white/10">
								<Hexagon className="w-10 h-10 text-purple-500" />
								<motion.div
									animate={{
										scale: [1, 1.2, 1],
										opacity: [0.5, 1, 0.5],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
								>
									<Zap className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
								</motion.div>
							</div>
						</motion.div>

						{/* Add this mobile menu button */}
						<div className="lg:hidden">
							<motion.button
								whileTap={{ scale: 0.9 }}
								onClick={() => setIsOpen(!isOpen)}
								className="relative z-50 p-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/10"
							>
								{isOpen ? (
									<X className="w-6 h-6 text-white" />
								) : (
									<Menu className="w-6 h-6 text-white" />
								)}
								<div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-sm" />
							</motion.button>
						</div>

						{/* Enhanced Desktop Navigation */}
						<div className="hidden lg:flex space-x-8">
							{Object.entries(navCategories).map(([category, items]) => (
								<motion.div
									key={category}
									className="relative"
									onHoverStart={() => setHoverEffect(category)}
									onHoverEnd={() => setHoverEffect(null)}
								>
									<button className="px-4 py-2 text-white/90 hover:text-white flex items-center gap-2 relative group">
										<span className={`transition-all duration-300 ${
											glitchEffect === category ? 'text-cyan-400 blur-[1px]' : ''
										}`}>
											{category.charAt(0).toUpperCase() + category.slice(1)}
										</span>
										<ChevronDown className="w-4 h-4 text-cyan-500 transition-transform group-hover:rotate-180" />
										
										{/* Enhanced Hover Effect */}
										{hoverEffect === category && (
											<motion.div
												layoutId="hoverEffect"
												className="absolute inset-0 rounded-lg -z-10 overflow-hidden"
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												exit={{ opacity: 0 }}
											>
												<div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10" />
												<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
											</motion.div>
										)}
									</button>

									{/* Futuristic Dropdown */}
									<AnimatePresence>
										{hoverEffect === category && (
											<motion.div
												initial={{ opacity: 0, y: 10, scale: 0.95 }}
												animate={{ opacity: 1, y: 0, scale: 1 }}
												exit={{ opacity: 0, y: 10, scale: 0.95 }}
												className="absolute top-full mt-2 w-56 rounded-lg overflow-hidden"
												style={{
													background: "linear-gradient(to bottom, rgba(23, 25, 35, 0.9), rgba(17, 19, 28, 0.95))",
													backdropFilter: "blur(12px)",
													border: "1px solid rgba(255, 255, 255, 0.1)",
													boxShadow: "0 0 20px rgba(147, 51, 234, 0.2), inset 0 0 20px rgba(147, 51, 234, 0.1)",
												}}
											>
												<div className="p-2 space-y-1">
													{items.map((item) => {
														const navItem = navItems.find(n => n.name === item)
														if (!navItem) return null

														return (
															<motion.button
																key={item}
																onClick={() => scrollToSection(navItem.href)}
																className={`w-full px-4 py-2 rounded-lg text-left text-sm transition-colors
																	${activeSection === navItem.href.substring(1)
																		? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white"
																		: "text-white/70 hover:text-white hover:bg-white/10"
																	}`}
																whileHover={{ x: 4 }}
															>
																{item}
															</motion.button>
														)
													})}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>
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
									</span>
								</Button>
							</motion.div>

							{/* Theme Toggle with Sci-fi Effect */}
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
								className="relative group"
							>
								<div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-50 blur transition-all duration-300" />
								<div className="relative bg-black/20 p-2 rounded-full">
									{theme === "dark" ? (
										<Sun className="w-5 h-5 text-yellow-300" />
									) : (
										<Moon className="w-5 h-5 text-blue-300" />
									)}
								</div>
							</motion.button>
						</div>
					</div>
				</div>

				{/* Enhanced Mobile Menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
							animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
							exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
							className="lg:hidden fixed inset-0 z-50"
						>
							{/* Cyberpunk mobile menu background */}
							<div className="absolute inset-0 bg-black/95 backdrop-blur-xl">
								<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
								<div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-cyan-900/20 to-purple-900/20" />
							</div>

							{/* Add this close button */}
							<motion.button
								className="absolute top-6 right-6 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 z-50"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								onClick={() => setIsOpen(false)}
							>
								<X className="w-6 h-6 text-white" />
								<div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-sm" />
							</motion.button>

							<div className="relative px-4 py-20 h-full overflow-auto scrollbar-none">
								{Object.entries(navCategories).map(([category, items], index) => (
									<motion.div 
										key={category} 
										className="mb-8"
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										<div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4 px-2 flex items-center">
											<div className="mr-2 h-px w-8 bg-gradient-to-r from-purple-500 to-transparent" />
											{category.toUpperCase()}
											<div className="ml-2 h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500" />
										</div>
										<div className="space-y-1">
											{items.map((item) => {
												const navItem = navItems.find((n) => n.name === item)
												if (!navItem) return null

												return (
													<motion.button
														key={item}
														onClick={() => {
															scrollToSection(navItem.href)
															setIsOpen(false)
														}}
														className={`block w-full text-left px-4 py-2 rounded-md text-sm ${
															activeSection === navItem.href.substring(1)
																? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white"
																: "text-white/70 hover:text-white hover:bg-white/10"
														}`}
														whileHover={{ x: 4 }}
													>
														{item}
													</motion.button>
												)
											})}
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Add new styles */}
				<style jsx global>{`
					@keyframes shimmer {
						0% { background-position: 200% 0; }
						100% { background-position: -200% 0; }
					}

					.animate-shimmer {
						animation: shimmer 8s linear infinite;
					}
				`}</style>
			</motion.div>
		</nav>
	)
}