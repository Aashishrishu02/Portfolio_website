'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import { Briefcase, Calendar, CheckCircle } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      role: 'Python Programmer Intern',
      company: 'YBI Foundation',
      period: 'Sep 2024 – Oct 2024',
      location: 'Remote',
      description:
        'Worked on Python programming projects and contributed to team-based development.',
      highlights: [
        'Demonstrated strong self-motivation and responsibility',
        'Communicated effectively in both written and verbal forms',
        'Quickly learned new tools and adapted to project requirements',
        'Worked efficiently both independently and in team environment',
      ],
    },
  ]

  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="My professional journey and work experiences"
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-6 md:px-8 py-6 border-b border-slate-700">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-slate-100 mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-2">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-3 text-slate-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <Briefcase
                    size={32}
                    className="text-blue-500 flex-shrink-0"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-6 md:px-8 py-6">
                <p className="text-slate-300 mb-6">{exp.description}</p>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-slate-200 uppercase tracking-wide">
                    Key Achievements
                  </p>
                  {exp.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 items-start"
                    >
                      <CheckCircle
                        size={20}
                        className="text-blue-400 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-slate-800/30 rounded-lg border border-slate-700"
        >
          <p className="text-slate-300">
            <span className="font-semibold text-blue-400">Looking for opportunities</span> to apply my programming knowledge in real-world projects and contribute to innovative teams.
          </p>
        </motion.div>
      </div>
    </Section>
  )
}
