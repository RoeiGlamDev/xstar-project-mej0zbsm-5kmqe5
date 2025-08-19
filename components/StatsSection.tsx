'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface StatsSectionProps {
    achievements: {
        title: string
        count: number
    }[]
}

const StatsSection: React.FC<StatsSectionProps> = ({ achievements }) => {
    return (<>
<section className="bg-black text-pink-500 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">HouseIL Achievements</h2>
                <p className="text-lg mb-12">
                    At HouseIL, we pride ourselves on being at the forefront of the technology industry, 
                    delivering luxury stays with cutting-edge solutions.
                </p>
                <div className="flex justify-around flex-wrap">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}

                            <motion.h3 className="text-3xl font-bold mb-2">
                                {achievement.title}
                            </motion.div>
                            <motion.p className="text-5xl font-extrabold">
                                <AnimatedCounter count={achievement.count} />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
</>)
}
const AnimatedCounter: React.FC<{ count: number }> = ({ count }) => {
    const [animatedCount, setAnimatedCount] = React.useState(0)
    React.useEffect(() => {
        const interval = setInterval(() => {
            setAnimatedCount(prevCount => {
                if (prevCount < count) {
                    return prevCount + Math.ceil(count / 100)
                }
                clearInterval(interval)
                return count
            })
        }, 30)
        return () => clearInterval(interval)
    }, [count])
    return <span className="text-pink-300">{animatedCount}</span>
}
export default StatsSection
);