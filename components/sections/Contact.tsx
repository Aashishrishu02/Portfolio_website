'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

// Initialize EmailJS
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY')

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  )
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current!,
        'YOUR_PUBLIC_KEY'
      )

      setSubmitStatus('success')
      setMessage('Message sent successfully! I will get back to you soon.')
      formRef.current?.reset()

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setMessage('')
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
      setMessage('Failed to send message. Please try again or contact me directly.')

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setMessage('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ashishkumarbhadai@gmail.com',
      href: 'mailto:ashishkumarbhadai@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-7061460429',
      href: 'tel:+917061460429',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Muzaffarpur, India',
      href: 'https://www.google.com/maps/search/Muzaffarpur,+India',
    },
  ]

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's connect and build something amazing together"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Contact Info Cards */}
        {contactInfo.map((info, index) => {
          const Icon = info.icon
          return (
            <motion.a
              key={index}
              href={info.href}
              target={info.label === 'Location' ? '_blank' : undefined}
              rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-6 text-center cursor-pointer group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Icon size={28} className="text-blue-400" />
                </div>
              </div>
              <h3 className="font-semibold text-slate-100 mb-2">{info.label}</h3>
              <p className="text-slate-400 text-sm break-all">{info.value}</p>
            </motion.a>
          )
        })}
      </div>

      {/* Contact Form */}
      <motion.div
        className="max-w-2xl mx-auto glass rounded-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              required
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              required
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-slate-300 font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              placeholder="What's this about?"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          {/* Status Message */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg text-sm ${
                submitStatus === 'success'
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}
            >
              {message}
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-blue-500/50 disabled:to-purple-600/50 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader size={18} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </motion.button>

          {/* Alternative Contact */}
          <p className="text-center text-slate-400 text-sm">
            Or email me directly at{' '}
            <a
              href="mailto:ashishkumarbhadai@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ashishkumarbhadai@gmail.com
            </a>
          </p>
        </form>
      </motion.div>
    </Section>
  )
}
