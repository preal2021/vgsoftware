import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const OurOffice: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-100 to-yellow-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-orange-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="text-red-500">Office</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((src, index) => (
            <motion.div 
              key={index} 
              className="relative h-64 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={src}
                alt={`Office image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOffice;