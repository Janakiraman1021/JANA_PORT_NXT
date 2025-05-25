"use client"

import { useState, Suspense } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Sparkles, Lock, Mail, Eye, EyeOff } from "lucide-react"
import toast, { Toaster } from "react-hot-toast"
import SignInScene from "@/components/3d/SignInScene"
import axios from 'axios'

export default function SignIn() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      email: '',
      password: ''
    }

    if (!formData.email) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
      isValid = false
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
      isValid = false
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    
    axios.post('https://port-backend-onv7.onrender.com/api/auth/login', {
      email: formData.email,
      password: formData.password
    })
      .then(response => {
        // Store the token
        localStorage.setItem('token', response.data.token)
        
        // Show success message
        toast.success('Successfully signed in!')
        
        // Redirect to port updater website
        window.location.href = 'https://port-updater.vercel.app/'
      })
      .catch(error => {
        // Handle different types of errors
        const errorMessage = error.response?.data?.message || 
                           error.message || 
                           'Failed to sign in. Please try again.'
        toast.error(errorMessage)
        
        console.error('Login error:', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <SignInScene />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 backdrop-blur-[2px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="bg-white/5 dark:bg-gray-900/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 relative overflow-hidden border border-white/10"
          whileHover={{ boxShadow: "0 0 40px rgba(168, 85, 247, 0.2)" }}
        >
          {/* Add a floating gradient orb */}
          <motion.div
            className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="text-center mb-8 relative">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient">
              Welcome Back
            </h1>
            <p className="text-gray-200 mt-2">
              Sign in to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="text-sm font-medium text-gray-200">
                Email
              </label>
              <div className="relative mt-1 group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value })
                    if (errors.email) setErrors({ ...errors, email: '' })
                  }}
                  placeholder="Enter your email"
                  className={`pl-10 bg-white/5 border-white/10 focus:border-purple-500 text-white ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  required
                />
                {errors.email && (
                  <span className="text-xs text-red-500 mt-1 block">
                    {errors.email}
                  </span>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="text-sm font-medium text-gray-200">
                Password
              </label>
              <div className="relative mt-1 group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
                <Input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value })
                    if (errors.password) setErrors({ ...errors, password: '' })
                  }}
                  placeholder="Enter your password"
                  className={`pl-10 pr-10 bg-white/5 border-white/10 focus:border-purple-500 text-white ${
                    errors.password ? 'border-red-500' : ''
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-500 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                type="submit"
                className="w-full relative group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"
                disabled={isLoading}
              >
                <span className="relative flex items-center justify-center">
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      Sign In
                      <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
                    </>
                  )}
                </span>
              </Button>
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="w-full backdrop-blur-sm bg-white/50 dark:bg-gray-800/50">
                  <Github className="w-4 h-4 mr-2" />
                  Github
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="w-full backdrop-blur-sm bg-white/50 dark:bg-gray-800/50">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Toast Container */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1a1a1a',
            color: '#fff',
            borderRadius: '0.5rem',
            border: '1px solid rgba(255,255,255,0.1)',
          },
        }}
      />
    </div>
  )
}