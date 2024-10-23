import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let's collaborate to create innovative software solutions tailored to your needs.
        </motion.p>
        <motion.button 
          className="bg-white text-orange-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Today
          <ArrowRight className="ml-2" />
        </motion.button>
      </div>
    </section>
  )
}

export default CTA