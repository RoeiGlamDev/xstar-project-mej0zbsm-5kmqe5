'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface ButtonProps {
  label: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  disabled?: boolean
}

const buttonStyles = {
  base: 'flex items-center justify-center font-semibold py-3 px-6 rounded-md transition-all duration-300',
  primary: 'bg-pink-600 text-black hover:bg-pink-500 shadow-lg',
  secondary: 'bg-black text-pink-600 hover:bg-gray-800 shadow',
}
const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', onClick, disabled }) => {
  const buttonClass = ${buttonStyles.base} ${buttonStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  return (<>
<motion.button
      className={buttonClass}
      onClick={!disabled ? onClick : undefined}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={disabled}
      aria-label={label}

      {label}
    </motion.div>
</>)
}
export default Button
);