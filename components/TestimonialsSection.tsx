'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface Testimonial {
  name: string
  photo: string
  review: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia Turner',
    photo: 'https://example.com/photo1.jpg',
    review: 'HouseIL transformed my vacation rental experience. The technology they provide is seamless and user-friendly, making management effortless.',
    rating: 5,
  },
  {
    name: 'Liam Smith',
    photo: 'https://example.com/photo2.jpg',
    review: 'With HouseIL, I can focus more on my guests rather than technical issues. Their support and services are unparalleled!',
    rating: 5,
  },
  {
    name: 'Olivia Johnson',
    photo: 'https://example.com/photo3.jpg',
    review: 'The analytics tools provided by HouseIL gave me insights I never knew I needed. It's like having a personal advisor for my properties.',
    rating: 5,
  },
]
const TestimonialsSection: React.FC = () => {
  return (<>
<section className="bg-black text-pink-500 py-10">
      <motion.h2
        className="text-3xl text-center mb-8 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}

        What Our Customers Say about HouseIL
      </motion.div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}

            <div className="flex items-center mb-4">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full border-2 border-pink-500 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <div className="flex">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <svg key={i} className="w-5 h-5 text-pink-500 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.121-6.537L0 6.237l6.617-.977L10 0l2.383 5.26L19 6.237l-5.243 5.316 1.121 6.537z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-300">{testimonial.review}</p>
          </motion.div>
        ))}
      </div>
    </section>
</>)
}
export default TestimonialsSection
);