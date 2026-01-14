'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import { Code2 } from 'lucide-react'

export default function About() {
  const skills = [
    'Problem Solving',
    'Team Collaboration',
    'Quick Learner',
    'Self-Motivated',
    'Adaptable',
  ]

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Learn more about who I am and what drives me"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            I&apos;m an aspiring software developer from Muzaffarpur, India, with a
            passion for building efficient and scalable solutions. Currently
            pursuing a B.Tech degree, I&apos;ve been honing my skills in both
            frontend and backend technologies.
          </p>

          <p className="text-slate-400 text-base leading-relaxed mb-6">
            My journey into tech started with curiosity about how things work
            under the hood. I&apos;ve worked on multiple projects that challenged me
            to think creatively and solve complex problems. I believe in
            continuous learning and staying updated with the latest trends in
            the tech industry.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-slate-100">
              Key Strengths
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-lg"
                >
                  <Code2 size={16} className="text-blue-400" />
                  <span className="text-slate-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Location Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass rounded-xl p-6 cursor-pointer"
          >
            <h4 className="text-lg font-semibold text-blue-400 mb-2">
              Location
            </h4>
            <p className="text-slate-300">Muzaffarpur, India</p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass rounded-xl p-6 cursor-pointer"
          >
            <h4 className="text-lg font-semibold text-blue-400 mb-2">
              Education
            </h4>
            <p className="text-slate-300">
              B.Tech (Expected 2027)
              <br />
              <span className="text-sm text-slate-400">
                KCC Institute of Technology & Management
              </span>
            </p>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass rounded-xl p-6 cursor-pointer"
          >
            <h4 className="text-lg font-semibold text-blue-400 mb-2">
              Languages
            </h4>
            <p className="text-slate-300">
              English, Hindi
              <br />
              <span className="text-sm text-slate-400">Native Speaker</span>
            </p>
          </motion.div>

          {/* Status Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass rounded-xl p-6 cursor-pointer border border-blue-500/50"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <h4 className="text-lg font-semibold text-blue-400">
                Status
              </h4>
            </div>
            <p className="text-slate-300">Open to Opportunities</p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
