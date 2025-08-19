'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface ContactFormData {
  name: string
  email: string
  message: string
  reason: string
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: 'General Inquiry'
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [submitted, setSubmitted] = useState<boolean>(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid'
    }
    if (!formData.message) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Simulate form submission
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', message: '', reason: 'General Inquiry' })
      }, 2000)
    }
  }
  return (<>
<section className="bg-black text-white p-10">
      <motion.h2 
        className="text-3xl mb-6 text-pink-500"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}

        Contact HouseIL
      </motion.div>
      <p className="mb-4">For technology inquiries, reach us using the form below:</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-pink-500">Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-pink-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            required 
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </div>
        <div>
          <label className="block text-pink-500">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-pink-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            required 
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        <div>
          <label className="block text-pink-500">Reason for Contact</label>
          <select 
            name="reason" 
            value={formData.reason}
            onChange={handleChange}
            className="w-full p-2 border border-pink-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"

            <option value="General Inquiry">General Inquiry</option>
            <option value="Partnership Opportunities">Partnership Opportunities</option>
            <option value="Technical Support">Technical Support</option>
          </select>
        </div>
        <div>
          <label className="block text-pink-500">Message</label>
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-pink-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            rows={4} 
            required 
          />
          {errors.message && <span className="text-red-500">{errors.message}</span>}
        </div>
        <button 
          type="submit" 
          className="w-full bg-pink-500 hover:bg-pink-600 text-white p-2 transition rounded focus:outline-none focus:ring-2 focus:ring-pink-500"

          {submitted ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <div className="mt-10">
        <h3 className="text-pink-500">HouseIL Business Information</h3>
        <p>Location: 123 Tech St, Innovation City, CA 90001</p>
        <p>Business Hours: Mon-Fri: 9 AM - 6 PM</p>
      </div>
    </section>
</>)
}
export default ContactSection
);