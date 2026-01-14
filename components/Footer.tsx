'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Aashishrishu02',
      color: 'hover:text-slate-300',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:ashishkumarbhadai@gmail.com',
      color: 'hover:text-blue-400',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/aashish-singh-4298482b2?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      color: 'hover:text-blue-500',
    },
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Footer */}
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">Ashish Kumar</h3>
            <p className="text-slate-400 text-sm">
              Full Stack Developer crafting beautiful and functional web
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold text-slate-100 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-md font-semibold text-slate-100 mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-400 ${social.color} transition-colors`}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-slate-500 text-sm">
            © {currentYear} Ashish Kumar. All rights reserved. | Built with
            Next.js & Tailwind CSS
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
