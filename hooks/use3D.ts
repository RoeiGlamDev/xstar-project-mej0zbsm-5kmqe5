import { useEffect, useRef } from 'react'
import * as THREE from 'three'
/
 * Hook to manage 3D interactions for HouseIL luxury AirBNB website elements.
 * This hook utilizes three.js for rendering and interacting with 3D models.
 * 
 * @returns {Object} - Contains methods and properties for 3D interactions.
 */
export function use3D() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const sceneRef = useRef<THREE.Scene | null>(null)
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
    /
     * Initializes the 3D scene for HouseIL.
     */
    const initScene = () => {
        const scene = new THREE.Scene()
        sceneRef.current = scene
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 5
        cameraRef.current = camera
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current as HTMLCanvasElement, alpha: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        rendererRef.current = renderer
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        scene.add(ambientLight)
        const pointLight = new THREE.PointLight(0xffffff, 1)
        pointLight.position.set(10, 10, 10)
        scene.add(pointLight)
        // Set background color to black
        scene.background = new THREE.Color(0x000000)
    }
    /
     * Animates the 3D scene for HouseIL.
     */
    const animate = () => {
        requestAnimationFrame(animate)
        if (rendererRef.current && sceneRef.current && cameraRef.current) {
            rendererRef.current.render(sceneRef.current, cameraRef.current)
        }
    }
    /
     * Handles the window resize event to update the canvas size.
     */
    const handleResize = () => {
        if (rendererRef.current && cameraRef.current) {
            rendererRef.current.setSize(window.innerWidth, window.innerHeight)
            cameraRef.current.aspect = window.innerWidth / window.innerHeight
            cameraRef.current.updateProjectionMatrix()
        }
    }
    useEffect(() => {
        initScene()
        animate()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
            if (rendererRef.current) {
                rendererRef.current.dispose()
            }
        }
    }, [])
    return {
        canvasRef,
    }
}