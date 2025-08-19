'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (<>
<section className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <motion.h1 
        className="text-6xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}

        Welcome to <span className="text-pink-500">HouseIL</span>
      </motion.div>
      <motion.p 
        className="text-xl mb-8 max-w-2xl text-center"
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}

        Elevating your luxury experience with cutting-edge technology solutions designed specifically for the modern traveler. 
      </motion.div>
      <div className="flex space-x-4">
        <motion.button 
          className="px-6 py-3 text-black bg-pink-500 rounded-lg hover:bg-pink-600 transition-all"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}

          Explore HouseIL
        </motion.div>
        <motion.button 
          className="px-6 py-3 text-white border-2 border-pink-500 rounded-lg hover:bg-pink-500 hover:text-black transition-all"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}

          Book Your Stay
        </motion.div>
      </div>
      <motion.div 
        className="mt-10 text-center opacity-70"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}

        <p>Your privacy and safety are our priority. Trust us to enhance your journey with premium technology services.</p>
      </motion.div>
    </section>
</>)
}
export default HeroSection
);