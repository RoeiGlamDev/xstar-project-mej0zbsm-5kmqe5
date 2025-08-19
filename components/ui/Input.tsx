'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface InputProps {
  label: string
  type: string
  placeholder: string
  required?: boolean
  validationMessage?: string
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, required = false, validationMessage }) => {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (required && e.target.value.trim() === '') {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }
  const handleFocus = () => {
    setIsFocused(true)
  }
  const handleBlur = () => {
    setIsFocused(false)
    if (required && value.trim() === '') {
      setIsValid(false)
    }
  }
  return (<>
<div className={flex flex-col mb-5}>
      <label className={text-lg text-pink-500 mb-1 ${isFocused ? 'animate-pulse' : ''}} htmlFor={label}>
        {label}
      </label>
      <motion.input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={p-3 rounded-lg bg-black border-2 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200 ease-in-out ${
          !isValid ? 'border-red-500' : 'border-transparent'
        }}
        whileHover={{ scale: 1.02 }}
      />
      {!isValid && <span className="text-red-500 text-sm mt-1">{validationMessage || 'This field is required.'}</span>}
    </div>
</>)
}
export default Input
);