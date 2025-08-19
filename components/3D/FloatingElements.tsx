'use client'
import React, { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
interface FloatingElementProps {
  position: [number, number, number]
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position }) => {
  return (<>
<mesh position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#D5006D" />
    </mesh>
</>)
}
const FloatingElements: React.FC = () => {
  const ref = useRef<THREE.Group>(null)
  useEffect(() => {
    const animate = () => {
      if (ref.current) {
        ref.current.rotation.y += 0.01
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [])
  return (<>
<group ref={ref}>
      <FloatingElement position={[0, 1, 0]} />
      <FloatingElement position={[-1.5, 0, 0]} />
      <FloatingElement position={[1.5, 0, 0]} />
      <FloatingElement position={[0, -1.5, 0]} />
    </group>
</>)
}
const HouseIL: React.FC = () => {
  return (<>
<div className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-6 animate-pulse">Welcome to HouseIL</h1>
      <p className="text-lg mb-10">
        Experience luxurious accommodation with cutting-edge technology and an elegant atmosphere.
      </p>
      <Canvas className="w-full h-72">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingElements />
        <OrbitControls />
      </Canvas>
      <motion.button
        className="mt-4 px-6 py-2 bg-pink-600 text-white rounded shadow-lg transition-transform transform hover:scale-105"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}

        Explore Houses
      </motion.div>
    </div>
</>)
}
export default HouseIL
);