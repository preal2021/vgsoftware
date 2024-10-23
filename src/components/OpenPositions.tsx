import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const positions = [
  { department: 'Development', title: 'Front-End Developer' },
  { department: 'Development', title: 'Back-End Developer' },
  { department: 'Design', title: 'UI/UX Designer' },
  { department: 'Marketing', title: 'SEO Specialist' },
  { department: 'Sales', title: 'Account Executive' },
  { department: 'HR', title: 'Talent Acquisition Specialist' },
];

const OpenPositions: React.FC = () => {
  return (
    <section id="open-positions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-orange-500">Open Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((position, index) => (
            <motion.div 
              key={index}
              className="relative overflow-hidden bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-xl shadow-lg border-l-4 border-orange-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1.5" fill="#ef4444" />
                  </pattern>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-red-600">{position.title}</h3>
                <p className="text-gray-700 mb-4">{position.department}</p>
                <motion.button 
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full hover:from-orange-600 hover:to-red-600 transition-colors flex items-center space-x-2 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Apply Now</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-orange-300 rounded-bl-full opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-red-300 rounded-tr-full opacity-20"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;