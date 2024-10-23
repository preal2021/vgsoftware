import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const About = () => {
  const benefits = [
    "Cutting-edge technology integration",
    "Scalable and efficient solutions",
    "Expert team of developers",
    "Tailored approach for each client",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/about.avif"
              alt="team working image"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              priority
              quality={75} // Optimized quality setting
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              About VG Software
            </h2>
            <p className="text-xl mb-6 text-gray-600">
              VG Software is a leading provider of innovative software
              solutions. We specialize in custom software development, AI
              integration, and cybersecurity services, delivering high-quality,
              scalable solutions that drive business growth and efficiency.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-gray-700"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <CheckCircle className="text-green-500 mr-2" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
