'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface CardProps {
  title: string
  description: string
  imageUrl: string
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (<>
<motion.div
      className="bg-black bg-opacity-70 rounded-lg shadow-lg p-6 max-w-xs mx-auto transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      aria-label={HouseIL | ${title}}

      <img src={imageUrl} alt={title} className="rounded-lg mb-4 w-full h-40 object-cover" />
      <h2 className="text-pink-500 text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-300 text-base">{description}</p>
    </motion.div>
</>)
}
export default Card
);