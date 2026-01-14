'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: 'Responsive Landing Page',
      description:
        'A fully responsive landing page designed and developed using HTML, CSS, and Bootstrap. Features cross-device compatibility and optimized layout.',
      technologies: ['HTML', 'CSS', 'Bootstrap'],
      highlights: [
        'Fully responsive design',
        'Mobile-first approach',
        'Performance optimized',
      ],
      links: {
        github: '#',
        live: '#',
      },
    },
    {
      title: 'Weather Report Website',
      description:
        'A dynamic weather reporting application built with JavaScript and integrated with weather APIs. Displays real-time weather data with error handling.',
      technologies: ['JavaScript', 'REST APIs', 'HTML/CSS'],
      highlights: [
        'Real-time weather data',
        'Location-based search',
        'Error handling for invalid searches',
      ],
      links: {
        github: '#',
        live: '#',
      },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Showcase of my recent work and accomplishments"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass rounded-xl overflow-hidden hover:border-blue-500/50 group cursor-pointer"
            whileHover={{ y: -5 }}
          >
            {/* Header with gradient */}
            <div className="h-40 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-b border-slate-700 p-6 flex items-end">
              <h3 className="text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-slate-300 mb-3">
                  Key Features
                </p>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-slate-400 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.links.github}
                  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github size={18} />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.links.live}
                  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label="View live demo"
                >
                  <ExternalLink size={18} />
                  <span className="text-sm">Live</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
