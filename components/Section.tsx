'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}

export default function Section({
  id,
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <section id={id} className="py-20 px-6 scroll-mt-20">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{title}</span>
          </h2>
          {subtitle && (
            <p className="text-slate-400 text-lg max-w-2xl">{subtitle}</p>
          )}
        </div>

        {/* Content */}
        {children}
      </motion.div>
    </section>
  )
}
