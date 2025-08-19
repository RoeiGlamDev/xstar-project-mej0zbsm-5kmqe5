'use client'
import React from "react"
import { motion } from "framer-motion"
interface CTASectionProps {
  title: string
  subtitle: string
  buttonText: string
  onButtonClick: () => void
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (<>
<section className="flex flex-col items-center justify-center bg-black text-white py-20">
      <motion.h2
        className="text-4xl font-bold mb-4 text-pink-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}

        {title}
      </motion.div>
      <motion.p
        className="text-lg mb-8 text-gray-300 text-center max-w-md"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}

        {subtitle}
      </motion.div>
      <motion.button
        className="bg-pink-500 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        onClick={onButtonClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}

        {buttonText}
      </motion.div>
    </section>
</>)
}
export default CTASection
);