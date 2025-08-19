'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface SlideUpProps {
  children: React.ReactNode
  delay?: number
}

const SlideUp: React.FC<SlideUpProps> = ({ children, delay = 0 }) => {
  const slideUpVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  }
  return (<>
<motion.div
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
      className="bg-black p-6 rounded-lg shadow-lg transition-all duration-300"

      {children}
    </motion.div>
</>)
}
const HouseILSlideUp: React.FC = () => {
  return (<>
<SlideUp>
      <h2 className="text-pink-500 text-3xl font-bold">Welcome to HouseIL</h2>
      <p className="text-gray-300 mt-2">
        Experience luxury living with our state-of-the-art technology solutions for Airbnb hosts and guests. 
        HouseIL integrates smart home technology, ensuring a seamless and elegant stay. 
      </p>
      <p className="text-gray-400 mt-2">
        Our mission is to redefine luxury accommodations through innovative tech. 
        Enjoy high-speed internet, automated climate control, and advanced security systems that elevate your experience.
      </p>
      <button className="mt-4 bg-pink-500 text-black font-semibold py-2 px-4 rounded hover:bg-pink-400 transition duration-200">
        Discover More
      </button>
    </SlideUp>
</>)
}
export default HouseILSlideUp
);