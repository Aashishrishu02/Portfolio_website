'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import { GraduationCap, Calendar } from 'lucide-react'

export default function Education() {
  const educationData = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      institution: 'KCC Institute of Technology & Management, Greater Noida',
      period: 'Expected June 2027',
      description: 'Pursuing degree in Computer Science and Engineering',
    },
    {
      degree: 'Senior Secondary School',
      institution: 'Oxford Senior Secondary School, Muzaffarpur',
      period: '2023',
      description: 'Completed senior secondary education with distinction',
    },
    {
      degree: 'Secondary School',
      institution: 'Acme Public School, Muzaffarpur',
      period: '2021',
      description: 'Completed secondary education with excellent grades',
    },
  ]

  return (
    <Section
      id="education"
      title="Education"
      subtitle="My academic journey and learning milestones"
    >
      <div className="max-w-4xl mx-auto">
        {/* Timeline */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 md:p-8 border-l-4 border-blue-500 hover:border-blue-400 transition-colors"
            >
              <div className="flex gap-4 md:gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500/20 border border-blue-500/40">
                    <GraduationCap size={24} className="text-blue-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-slate-100 mb-1">
                    {edu.degree}
                  </h3>

                  <p className="text-slate-300 font-medium mb-2">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>

                  <p className="text-slate-400">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
