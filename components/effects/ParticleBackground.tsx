'use client'
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'
const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    if (!canvasRef.current) return
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.position.z = 5
    const particles: THREE.Points[] = []
    const particleCount = 500
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      positions[i  3] = (Math.random() - 0.5)  10
      positions[i  3 + 1] = (Math.random() - 0.5)  10
      positions[i  3 + 2] = (Math.random() - 0.5)  10
      const color = new THREE.Color(Math.random() < 0.5 ? 0xff69b4 : 0x000000); // pink or black
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    const material = new THREE.PointsMaterial({ size: 0.2, vertexColors: true })
    const particlesMesh = new THREE.Points(geometry, material)
    scene.add(particlesMesh)
    const animate = () => {
      requestAnimationFrame(animate)
      particlesMesh.rotation.x += 0.001
      particlesMesh.rotation.y += 0.001
      renderer.render(scene, camera)
    }
    animate()
    return () => {
      renderer.dispose()
    }
  }, [])
  return (<>
<div className="fixed inset-0 z-0">
      <canvas ref={canvasRef} />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
        <motion.h1 
          className="text-5xl font-bold mb-4 hover:text-pink-400 transition duration-300"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}

          Welcome to HouseIL
        </motion.div>
        <motion.p 
          className="text-lg max-w-lg text-center"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}

          Experience luxury technology solutions that redefine your stay. HouseIL – your premium destination for exquisite Airbnb accommodations.
        </motion.div>
      </div>
    </div>
</>)
}
export default ParticleBackground
);