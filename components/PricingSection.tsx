'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface PricingTier {
  name: string
  price: string
  features: string[]
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic Tech Package',
    price: '$199/month',
    features: [
      '24/7 Customer Support',
      'Access to Exclusive HouseIL Tech Resources',
      'Basic AI Assistance',
      'Cloud Storage (50GB)',
    ],
  },
  {
    name: 'Pro Tech Package',
    price: '$399/month',
    features: [
      'All Basic Features',
      'Advanced AI Assistance',
      'Cloud Storage (200GB)',
      'Priority Support',
      'Monthly Tech Consultation',
    ],
  },
  {
    name: 'Ultimate Tech Package',
    price: '$599/month',
    features: [
      'All Pro Features',
      'Unlimited Cloud Storage',
      'Dedicated Tech Advisor',
      'Custom Integration Solutions',
      'Exclusive Access to Webinars',
    ],
  },
]
const PricingSection: React.FC = () => {
  return (<>
<section className="bg-black text-pink-500 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}

          Premium Pricing Plans for HouseIL
        </motion.div>
        <p className="text-lg mb-12">
          Discover our technology-focused solutions designed to elevate your experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}

              <h3 className="text-2xl font-semibold mb-4">{tier.name}</h3>
              <p className="text-xl font-bold mb-4">{tier.price}</p>
              <ul className="list-disc list-inside mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="mb-2">{feature}</li>
                ))}
              </ul>
              <a
                href="/contact"
                className="bg-pink-500 text-black py-2 px-4 rounded hover:bg-pink-600 transition-colors"

                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
</>)
}
export default PricingSection
);