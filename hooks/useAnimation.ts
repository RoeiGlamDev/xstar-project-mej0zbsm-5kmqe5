import { useEffect, useState } from 'react'
/
 * Custom hook for animations specific to the HouseIL brand.
 * This hook provides a smooth user experience with stunning animations
 * fitting the luxury and technology feel of the HouseIL brand.
 * 
 * @returns {object} - Animation state and control functions
 */
export const useAnimation = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const [animationClass, setAnimationClass] = useState<string>('')
  /
   * Triggers the animation with the specified class name.
   * 
   * @param {string} animationType - The type of animation to apply (fade, slide, etc.)
   */
  const triggerAnimation = (animationType: string) => {
    setIsAnimating(true)
    setAnimationClass(animationType)
    // Remove animation class after animation duration
    setTimeout(() => {
      setIsAnimating(false)
      setAnimationClass('')
    }, 500); // Duration should match the CSS animation duration
  }
  /
   * A hook to initiate fade-in animations for elements, enhancing the luxury feel of HouseIL.
   */
  useEffect(() => {
    if (isAnimating) {
      document.body.style.backgroundColor = 'black'
    } else {
      document.body.style.backgroundColor = 'pink'
    }
  }, [isAnimating])
  return {
    isAnimating,
    animationClass,
    triggerAnimation,
  }
};