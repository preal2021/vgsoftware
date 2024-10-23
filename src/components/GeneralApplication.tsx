import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const GeneralApplication: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-100 to-yellow-100">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-6 text-orange-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Don't see a role that <span className="text-red-500">suits you?</span>
        </motion.h2>
        <motion.p 
          className="text-xl mb-8 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We're always looking for talented individuals to join our team.
        </motion.p>
        <motion.button 
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-colors flex items-center mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
          <Send className="ml-2 h-5 w-5" />
        </motion.button>
      </div>
    </section>
  );
};

export default GeneralApplication;