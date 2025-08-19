'use client'
import React from 'react'
import { motion } from 'framer-motion'
const ContactPage: React.FC = () => {
    return (<>
<div className="bg-black text-pink-500 min-h-screen flex flex-col items-center justify-center p-8">
            <motion.h1 
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: -30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}

                Contact HouseIL
            </motion.div>
            <motion.p 
                className="text-lg mb-4"
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.1 }}

                We're here to assist you with your luxury technology needs.
            </motion.div>
            <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="block w-full p-2 rounded bg-gray-700 border border-gray-600 text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="block w-full p-2 rounded bg-gray-700 border border-gray-600 text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                    <textarea 
                        id="message" 
                        className="block w-full p-2 rounded bg-gray-700 border border-gray-600 text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500" 
                        rows={4} 
                        required 
                    />
                </div>
                <motion.button 
                    type="submit" 
                    className="w-full bg-pink-500 text-black font-bold py-2 rounded hover:bg-pink-600 transition duration-300 ease-in-out"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}

                    Send Message
                </motion.div>
            </form>
            <div className="mt-8 text-center">
                <motion.h2 
                    className="text-2xl font-semibold mb-2"
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.2 }}

                    Our Location
                </motion.div>
                <p className="text-lg">HouseIL Headquarters</p>
                <p className="text-lg">123 Tech Lane, Silicon Valley, CA 94043</p>

                <motion.h3 
                    className="text-xl font-medium mt-4"
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.3 }}

                    Business Hours
                </motion.div>
                <p className="text-lg">Monday - Friday: 9 AM - 6 PM</p>
                <p className="text-lg">Saturday - Sunday: Closed</p>
            </div>
        </div>
</>)
}

export default ContactPage
);