'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface HeaderProps {
  logoUrl: string
}

const Header: React.FC<HeaderProps> = ({ logoUrl }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }
  return (<>
<header className="bg-black text-pink-500 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.1 }} className="flex items-center">
          <img src={logoUrl} alt="HouseIL Logo" className="h-12 w-auto" />
          <h1 className="ml-3 text-2xl font-bold">HouseIL</h1>
        </motion.div>
        <nav className="hidden md:flex md:space-x-8">
          <a href="#about" className="hover:text-pink-300 transition duration-300">About Us</a>
          <a href="#properties" className="hover:text-pink-300 transition duration-300">Properties</a>
          <a href="#services" className="hover:text-pink-300 transition duration-300">Services</a>
          <a href="#contact" className="hover:text-pink-300 transition duration-300">Contact</a>
        </nav>
        <button 
          className="md:hidden text-pink-500 focus:outline-none" 
          onClick={toggleMobileMenu}

          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.div 
          className="bg-black text-pink-500 md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}

          <nav className="flex flex-col p-4">
            <a href="#about" className="py-2 hover:text-pink-300 transition duration-300">About Us</a>
            <a href="#properties" className="py-2 hover:text-pink-300 transition duration-300">Properties</a>
            <a href="#services" className="py-2 hover:text-pink-300 transition duration-300">Services</a>
            <a href="#contact" className="py-2 hover:text-pink-300 transition duration-300">Contact</a>
          </nav>
        </motion.div>
      )}
    </header>
</>)
}
export default Header
);