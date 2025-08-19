'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface NewsletterSectionProps {
    className?: string
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ className }) => {
    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you can add logic to process the email subscription
        setIsSubscribed(true)
        setEmail('')
        // Optionally, you can call an API to save the email
    }
    return (<>
<section className={bg-black text-pink-500 p-10 rounded-lg ${className}}>
            <motion.h2
                className="text-3xl font-bold mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}

                Join the HouseIL Community
            </motion.div>
            <motion.p
                className="mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}

                Stay updated with the latest luxury trends and innovations in home technology. Sign up for our exclusive newsletter tailored for the discerning traveler and tech enthusiast.
            </motion.div>
            {isSubscribed ? (
                <motion.p
                    className="text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}

                    Thank you for subscribing to the HouseIL newsletter!
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 p-3 rounded-lg bg-gray-800 border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
                        required
                    />
                    <motion.button
                        type="submit"
                        className="mt-4 md:mt-0 md:ml-3 px-5 py-3 bg-pink-500 text-black rounded-lg hover:bg-pink-600 transition-all duration-300 focus:outline-none"
                        whileHover={{ scale: 1.05 }}

                        Subscribe
                    </motion.div>
                </form>
            )}
        </section>
</>)
}
export default NewsletterSection
);