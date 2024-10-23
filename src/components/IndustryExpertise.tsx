import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const IndustryExpertise = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Making a difference in different industries</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Industry expertise"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl text-gray-600 mb-6">
              At VG Software, we bring extensive expertise to a wide range of industries, including healthcare, finance, retail, manufacturing, and more. Our tailored solutions address the unique challenges and opportunities in each sector, driving innovation and efficiency across diverse business landscapes.
            </p>
            <motion.button 
              className="btn bg-secondary text-white hover:bg-secondary-dark"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Industries
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default IndustryExpertise