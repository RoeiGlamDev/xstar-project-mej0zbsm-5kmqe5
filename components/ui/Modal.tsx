'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    content: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null
    return (<>
<div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-70">
            <motion.div
                className="bg-black rounded-lg shadow-lg max-w-md w-full p-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}

                <h2 className="text-pink-500 text-2xl font-bold mb-4 text-center">{title}</h2>
                <p className="text-white mb-4">{content}</p>
                <button
                    className="block w-full py-2 text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition duration-200 focus:outline-none"
                    onClick={onClose}

                    Close
                </button>
            </motion.div>
        </div>
</>)
}

export default Modal
);