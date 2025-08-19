const Hero: React.FC = () => {
  return (<>
<section className="flex items-center justify-center h-screen bg-black text-white">
      <div
        className="text-6xl font-bold text-pink-500"
       }
       }
       }

        Welcome to HouseIL
      </div>
    </section>
</>)
}
const Features: React.FC = () => {
  return (<>
<section className="py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center text-pink-500">Our Luxurious Features</h2>
      <div className="flex flex-col md:flex-row justify-around mt-10">
        <div
          className="bg-gray-800 p-5 rounded-lg shadow-lg flex-1 m-2 transition duration-300 hover:bg-pink-500"
         }
         }
         }

          <h3 className="text-xl font-semibold">Smart Home Integration</h3>
          <p className="mt-2">Experience complete control over your living environment with our state-of-the-art smart technology, designed for luxury and comfort.</p>
        </div>
        <div
          className="bg-gray-800 p-5 rounded-lg shadow-lg flex-1 m-2 transition duration-300 hover:bg-pink-500"
         }
         }
         }

          <h3 className="text-xl font-semibold">Exclusive Packages</h3>
          <p className="mt-2">Choose from our exclusive packages designed to provide unmatched experiences tailored to your luxury lifestyle.</p>
        </div>
        <div
          className="bg-gray-800 p-5 rounded-lg shadow-lg flex-1 m-2 transition duration-300 hover:bg-pink-500"
         }
         }
         }

          <h3 className="text-xl font-semibold">24/7 Concierge Service</h3>
          <p className="mt-2">Enjoy our dedicated concierge service that is ready to assist your every need, ensuring your stay is seamless and extraordinary.</p>
        </div>
      </div>
    </section>
</>)
}
const HomePage: React.FC = () => {
  return (<>
<div>
      <Hero />
      <Features />
    </div>
</>)
}
export default HomePage
)
