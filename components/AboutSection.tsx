'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
  name: string
  role: string
  expertise: string
}

const teamMembers: TeamMember[] = [
  { name: 'Jane Doe', role: 'CEO & Founder', expertise: 'AI & Machine Learning' },
  { name: 'John Smith', role: 'CTO', expertise: 'Full Stack Development' },
  { name: 'Alice Johnson', role: 'Product Manager', expertise: 'UX/UI Design' },
  { name: 'Bob Brown', role: 'Lead Developer', expertise: 'Cloud Computing' },
]
const AboutSection: React.FC = () => {
  return (<>
<section className="bg-black text-pink-500 py-10 px-5">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}

        <h1 className="text-4xl font-bold mb-4">About HouseIL</h1>
        <p className="mb-6">
          At HouseIL, we transform the way people experience luxury living. 
          Founded in the heart of innovation, HouseIL leverages cutting-edge 
          technology to create breathtaking, high-end Airbnb experiences that 
          cater to discerning travelers seeking elegance and comfort.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="mb-6">
          Our mission at HouseIL is to redefine luxury short-term rentals through 
          transformative technology solutions, providing guests with seamless 
          experiences that blend sophistication and convenience. We aspire to 
          set new standards for the Airbnb industry by integrating smart home 
          features with high-end amenities, ensuring that each stay is truly 
          exceptional.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 p-4 rounded-lg transform transition-transform hover:scale-105" 
              whileHover={{ scale: 1.05 }}

              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-pink-400">{member.role}</p>
              <p className="text-xs">{member.expertise}</p>
            </motion.div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Our Values</h2>
        <p>
          At HouseIL, we pride ourselves on our commitment to sustainability, 
          innovation, and exceptional service. Our achievements include pioneering 
          the integration of IoT for a truly connected living experience in 
          luxury rentals.
        </p>
      </motion.div>
    </section>
</>)
}
export default AboutSection
);