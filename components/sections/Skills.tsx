'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'

export default function Skills() {
  const skillCategories = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'C', level: 70 },
        { name: 'C++', level: 70 },
      ],
    },
    {
      name: 'Web Technologies',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Responsive Design', level: 88 },
      ],
    },
    {
      name: 'Frameworks & Tools',
      skills: [
        { name: 'Django', level: 75 },
        { name: 'Node.js', level: 78 },
        { name: 'GitHub', level: 82 },
        { name: 'VS Code', level: 90 },
      ],
    },
    {
      name: 'Databases',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL', level: 82 },
        { name: 'Database Design', level: 75 },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="Technologies and tools I work with"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            variants={itemVariants}
            className="glass rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-slate-100 mb-6">
              {category.name}
            </h3>

            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-blue-400 text-sm font-semibold">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1,
                        ease: 'easeOut',
                        delay: skillIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Skills */}
      <motion.div
        className="mt-12 glass rounded-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-slate-100 mb-4">
          Core Competencies
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            'Problem Solving',
            'Team Collaboration',
            'Quick Learner',
            'Self-Motivated',
            'Adaptable',
            'Communication',
            'Project Management',
            'Attention to Detail',
          ].map((competency, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 rounded-full text-sm border border-blue-500/30 cursor-pointer transition-colors"
            >
              {competency}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
