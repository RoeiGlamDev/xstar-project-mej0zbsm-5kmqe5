'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
    name: string
    role: string
    image: string
    bio: string
}

const teamMembers: TeamMember[] = [
    {
        name: 'Alice Johnson',
        role: 'Co-Founder & CEO',
        image: '/images/alice.jpg',
        bio: 'Alice is a visionary leader with over 10 years of experience in tech innovation and strategic development.'
    },
    {
        name: 'Bob Smith',
        role: 'Chief Technology Officer',
        image: '/images/bob.jpg',
        bio: 'Bob has a profound knowledge of software engineering and leads our technology advancements.'
    },
    {
        name: 'Catherine Lee',
        role: 'Head of Marketing',
        image: '/images/catherine.jpg',
        bio: 'Catherine specializes in luxury branding and digital marketing strategies tailored for the tech industry.'
    }
]
const aboutHistory: string =
    "Founded in 2023, HouseIL emerged from a passion for creating sophisticated and luxurious technology experiences. " +
    "Our mission is to redefine the way luxury living is perceived through innovative technology solutions that cater to an affluent clientele. " +
    "From smart home systems to automated services, HouseIL ensures that luxury meets the digital age."
const values: string[] = [
    "Innovation: Constantly pushing the boundaries of technology.",
    "Excellence: Striving for the highest quality in every endeavor.",
    "Luxury: Creating experiences that resonate with opulence and sophistication.",
    "Integrity: Committing to transparent and sustainable business practices."
]
const AboutPage: React.FC = () => {
    return (<>
<div className="bg-black text-pink-500 min-h-screen flex flex-col items-center p-10">
            <motion.h1 
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}

                About HouseIL
            </motion.div>
            <motion.p 
                className="text-lg mb-10"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.7 }}

                {aboutHistory}
            </motion.div>
            <motion.h2 
                className="text-2xl font-semibold mb-4"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.9 }}

                Our Values
            </motion.div>
            <ul className="list-disc list-inside mb-10">
                {values.map((value, index) => (
                    <li className="mb-2 hover:text-pink-300 transition-all duration-300" key={index}>
                        {value}
                    </li>
                ))}
            </ul>
            <motion.h2 
                className="text-2xl font-semibold mb-4"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1.1 }}

                Meet the Team
            </motion.div>
            <div className="flex flex-wrap justify-center">
                {teamMembers.map((member, index) => (
                    <motion.div 
                        className="bg-gray-900 rounded-lg shadow-lg m-4 p-4 w-60 hover:scale-105 transition-transform duration-300"
                        key={index}
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.5 + index * 0.2 }}

                        <img src={member.image} alt={member.name} className="rounded-full mb-4 w-24 h-24 mx-auto" />
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-md">{member.role}</p>
                        <p className="text-sm mt-2">{member.bio}</p>
                    </motion.div>
                ))}
            </div>
        </div>
</>)
}
export default AboutPage
);