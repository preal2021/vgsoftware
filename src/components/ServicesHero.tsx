import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Smile,
  Zap,
  Shield,
  BarChart,
  Link,
  PhoneCall,
} from "lucide-react";

const ServicesHero = () => {
  const values = [
    { icon: BarChart, title: "Data-Driven Insights" },
    { icon: Smile, title: "Enhanced User Experience" },
    { icon: Zap, title: "Increased Efficiency" },
    { icon: Link, title: "Seamless Integration" },
    { icon: Shield, title: "Robust Solutions" },
    { icon: PhoneCall, title: "24/7 Support" },
  ];

  const scrollToOfferings = () => {
    const offeringsSection = document.getElementById("explore-offerings");
    if (offeringsSection) {
      offeringsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 sm:py-32 lg:py-40 bg-gradient-to-br from-orange-50 to-red-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-orange-500">Innovative</span>{" "}
              <span className="text-red-500">Solutions</span>{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
                for Your Business
              </span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-700">
              Empowering your business with cutting-edge technology and expert
              services tailored to your needs.
            </p>
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg flex items-center justify-center mx-auto lg:mx-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToOfferings}
            >
              Explore Services
              <ArrowRight className="ml-2" />
            </motion.button>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 lg:pl-12 relative z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-red-300 rounded-full opacity-20 blur-3xl z-0"></div>
              <div className="relative z-10">
                <motion.div
                  className="grid grid-cols-2 gap-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                >
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg flex flex-col items-center justify-center"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <value.icon className="text-orange-500 w-12 h-12 mb-4" />
                      <h3 className="text-lg font-semibold text-gray-800 text-center">
                        {value.title}
                      </h3>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      {/* Large Circle for Desktop View */}
      <motion.div
        className="absolute top-[15%] left-[2%] w-32 h-32 bg-orange-300 rounded-full opacity-50 hidden md:block" // Medium size for medium screens
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-[10%] right-[2%] w-48 h-48 bg-red-300 rounded-full opacity-50 hidden md:block" // Medium size for medium screens
        animate={{ scale: [1, 1.3, 1], rotate: [0, -180, -360] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      {/* Small Circles for Smaller Screens */}
      <motion.div
        className="absolute top-[36%] left-[4%] w-24 h-24 bg-orange-300 rounded-full opacity-50 block sm:hidden" // Increased size for small screens
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-[5%] right-[5%] w-32 h-32 bg-red-300 rounded-full opacity-50 block sm:hidden" // Increased size for small screens
        animate={{ scale: [1, 1.3, 1], rotate: [0, -180, -360] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
    </section>
  );
};

export default ServicesHero;
