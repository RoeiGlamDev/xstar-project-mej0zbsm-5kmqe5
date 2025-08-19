'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface PricingOption {
  id: number
  title: string
  price: string
  features: string[]
}

const pricingOptions: PricingOption[] = [
  {
    id: 1,
    title: 'Standard Package',
    price: '$200/night',
    features: ['High-speed Wi-Fi', 'Smart Home Integration', '24/7 Support'],
  },
  {
    id: 2,
    title: 'Deluxe Package',
    price: '$350/night',
    features: ['All Standard Features', 'Personal Concierge', 'Premium Streaming Services'],
  },
  {
    id: 3,
    title: 'Luxury Package',
    price: '$500/night',
    features: ['All Deluxe Features', 'Private Chef', 'Exclusive Access to Events'],
  },
]
const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
  <motion.div
    className="border-b border-gray-700 py-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}

    <h4 className="text-pink-500 font-semibold">{question}</h4>
    <p className="text-gray-300">{answer}</p>
  </motion.div>
)
const PricingPage: React.FC = () => {
  return (<>
<div className="bg-black text-white min-h-screen p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl text-pink-500 font-bold">HouseIL Pricing Plans</h1>
        <p className="text-gray-400">Explore our luxurious offers tailored for you.</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl text-pink-500 font-semibold text-center mb-6">Detailed Pricing</h2>
        <div className="flex flex-col md:flex-row justify-around">
          {pricingOptions.map(option => (
            <motion.div
              key={option.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 md:mb-0 flex-1 hover:bg-gray-700 transition duration-300"
              whileHover={{ scale: 1.05 }}

              <h3 className="text-xl text-pink-500 font-bold">{option.title}</h3>
              <p className="text-3xl text-pink-500">{option.price}</p>
              <ul className="mt-4">
                {option.features.map((feature, index) => (
                  <li key={index} className="text-gray-400">✔️ {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-pink-500 font-semibold text-center mb-6">Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left bg-gray-800 border border-gray-700 rounded-lg">
            <thead>
              <tr className="bg-gray-700 text-pink-500">
                <th className="p-4">Package</th>
                {pricingOptions.map(option => (
                  <th key={option.id} className="p-4">{option.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {['High-speed Wi-Fi', 'Smart Home Integration', '24/7 Support', 'Personal Concierge', 'Premium Streaming Services', 'Private Chef', 'Exclusive Access to Events'].map(feature => (
                <tr key={feature}>
                  <td className="p-4 text-gray-300">{feature}</td>
                  {pricingOptions.map(option => (
                    <td key={option.id} className="p-4 text-center">
                      <span>
                        {option.features.includes(feature) ? '✔️' : '❌'}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl text-pink-500 font-semibold text-center mb-6">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          <FAQItem question="What amenities are included?" answer="All packages include high-speed internet, smart home features, and 24/7 support." />
          <FAQItem question="Can I cancel my booking?" answer="Yes, cancellations can be made up to 24 hours before check-in for a full refund." />
          <FAQItem question="Is there a minimum stay requirement?" answer="The minimum stay requirement is 2 nights during peak seasons." />
        </div>
      </section>
    </div>
</>)
}
export default PricingPage
);