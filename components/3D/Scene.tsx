'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
interface SceneProps {}

const Scene: React.FC<SceneProps> = () => {
  return (<>
<div className="min-h-screen bg-black text-white flex items-center justify-center">
      <motion.h1
        className="text-4xl font-bold mb-5 text-pink-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}

        Welcome to HouseIL
      </motion.div>
      <motion.div
        className="w-full h-full"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}

        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          {/ Add 3D models or interactive elements here /}
          {/ Example: <Model /> /}
          {/ For now, just a simple box /}
          <mesh>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={0xff69b4} />
          </mesh>
        </Canvas>
      </motion.div>
    </div>
</>)
}
export default Scene
);