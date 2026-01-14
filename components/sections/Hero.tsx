'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const roles = ['Software Developer', 'Python Enthusiast', 'Web Developer']
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const text = roles[roleIndex]
    let index = 0

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1))
        index++
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setDisplayText('')
        index = 0
      }
    }, 100)

    return () => clearInterval(interval)
  }, [roleIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div variants={itemVariants}>
          <motion.div
            variants={itemVariants}
            className="mb-4 text-slate-400"
          >
            Welcome to my portfolio
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">
              Ashish <br /> Kumar
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-6">
            <div className="text-2xl md:text-3xl font-semibold text-blue-400 h-12">
              {displayText}
              <span className="animate-pulse">|</span>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg max-w-lg mb-8 leading-relaxed"
          >
            Aspiring software developer passionate about crafting efficient
            solutions. I specialize in Python, JavaScript, and modern web
            technologies. Let's build something amazing together!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-blue-400 rounded-lg font-semibold transition-colors"
            >
              View My Work
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6"
          >
            <a
              href="https://github.com/Aashishrishu02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:ashishkumarbhadai@gmail.com"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+917061460429"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Floating Cards */}
        <motion.div
          variants={itemVariants}
          className="hidden md:flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-full h-96"
          >
            {/* Glowing background sphere */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

            {/* Main card */}
            <motion.div
              className="glass rounded-2xl p-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl font-bold">
                    AK
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Ashish Kumar</h3>
                <p className="text-slate-400 text-sm">Full Stack Developer</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-slate-400" size={24} />
      </motion.div>
    </section>
  )
}
