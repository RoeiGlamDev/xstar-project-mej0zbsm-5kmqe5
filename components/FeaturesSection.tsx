'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface Feature {
  title: string
  description: string
  icon: string
}

const features: Feature[] = [
  {
    title: 'Intelligent Automation',
    description: 'Transform your property management with cutting-edge AI technologies that streamline operations.',
    icon: 'automation',
  },
  {
    title: 'Smart Home Integration',
    description: 'Seamlessly integrate smart technology to enhance guest experiences and property security.',
    icon: 'smart-home',
  },
  {
    title: 'Data Analytics',
    description: 'Utilize our advanced analytics tools to gain insights and optimize your rental revenue.',
    icon: 'analytics',
  },
  {
    title: '24/7 Support',
    description: 'Dedicated support team providing assistance around the clock to ensure seamless property management.',
    icon: 'support',
  },
]
const FeaturesSection: React.FC = () => {
  return (<>
<section className="bg-black text-pink-500 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          Innovative Solutions at <span className="text-pink-400">HouseIL</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}

              <div className={feature-icon mb-4}>
                {/ Icon rendering can be done here based on the icon string /}
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
</>)
}
export default FeaturesSection
);