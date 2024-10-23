import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Puzzle, GraduationCap } from 'lucide-react';

const WhoWeAre: React.FC = () => {
  const points = [
    { icon: Lightbulb, title: 'Innovative work culture', description: 'Encourage creativity and problem-solving' },
    { icon: Puzzle, title: 'Diverse team', description: 'Inclusive and talented professionals' },
    { icon: GraduationCap, title: 'Focus on learning', description: 'Promote professional growth and development' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-orange-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Who we <span className="text-red-500">are?</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="mb-6 inline-block"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                {React.createElement(point.icon, { className: "w-16 h-16 text-orange-500" })}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 text-red-600">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;