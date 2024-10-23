import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, Briefcase, Zap, Award } from "lucide-react";

const CareersHero: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const benefits = [
    {
      icon: Users,
      title: "Collaborative Team",
      description: "Work with passionate professionals",
    },
    {
      icon: Briefcase,
      title: "Growth Opportunities",
      description: "Advance your career with us",
    },
    {
      icon: Zap,
      title: "Innovative Projects",
      description: "Work on cutting-edge technologies",
    },
    {
      icon: Award,
      title: "Competitive Benefits",
      description: "Enjoy great perks and rewards",
    },
  ];

  const scrollToOpenPositions = () => {
    const openPositionsSection = document.getElementById("open-positions");
    if (openPositionsSection) {
      openPositionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 sm:py-32 lg:py-40 bg-gradient-to-br from-orange-50 to-red-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-orange-500">Shape</span>{" "}
              <span className="text-red-500">the Future</span>{" "}
              <span className="text-pink-500">with Us</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-700">
              Join a team of innovators and make a lasting impact in the world
              of technology.
            </p>
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg flex items-center justify-center mx-auto lg:mx-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToOpenPositions}
            >
              Explore Opportunities
              <ArrowRight className="ml-2" />
            </motion.button>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Yin and Yang Rotating Background Circles */}
              <motion.div
                className="absolute w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                style={{
                  top: "10%",
                  left: "20%",
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  x: [0, 100, 0, -100, 0],
                  y: [0, 100, 200, 100, 0],
                }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 2,
                }}
              />
              <motion.div
                className="absolute w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                style={{
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  x: [0, -100, 0, 100, 0],
                  y: [0, -100, -200, -100, 0],
                }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 2,
                }}
              />

              <div className="relative z-10 grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                    }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                  >
                    <benefit.icon className="text-orange-500 w-10 h-10 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-gray-600"
                        >
                          {benefit.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
