'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
interface FadeInProps {
  children: React.ReactNode
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, translateY: 0 })
    } else {
      controls.start({ opacity: 0, translateY: 20 })
    }
  }, [controls, inView])
  return (<>
<motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, translateY: 20 }}
      transition={{ duration: 0.5 }}
      className="dark:bg-black bg-[#1A1A1A] p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      aria-label="Fade-in animation container"

      {children}
    </motion.div>
</>)
}
export default FadeIn
);