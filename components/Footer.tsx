'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface FooterProps {
  companyInfo: string
  socialLinks: {
    platform: string
    url: string
  }[]
}

const Footer: React.FC<FooterProps> = ({ companyInfo, socialLinks }) => {
  return (<>
<footer className="bg-black text-pink-500 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          className="text-center md:text-left"

          <h2 className="text-xl font-bold">HouseIL</h2>
          <p className="mt-2">{companyInfo}</p>
        </motion.div>
        
        <div className="mt-4 md:mt-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <motion.a 
                href="/about" 
                className="hover:text-pink-300 transition duration-200" 
                whileHover={{ scale: 1.05 }}

                About Us
              </motion.div>
            </li>
            <li>
              <motion.a 
                href="/services" 
                className="hover:text-pink-300 transition duration-200" 
                whileHover={{ scale: 1.05 }}

                Our Services
              </motion.div>
            </li>
            <li>
              <motion.a 
                href="/contact" 
                className="hover:text-pink-300 transition duration-200" 
                whileHover={{ scale: 1.05 }}

                Contact
              </motion.div>
            </li>
          </ul>
        </div>
        
        <div className="mt-4 md:mt-0">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <ul className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <motion.a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-pink-300 transition duration-200" 
                  whileHover={{ scale: 1.05 }}

                  {link.platform}
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center mt-4 border-t border-pink-500 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} HouseIL. All rights reserved.</p>
      </div>
    </footer>
</>)
}
export default Footer
);