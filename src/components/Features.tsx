import React, { useState } from "react";
import Link from "next/link";
import {
  Code,
  Cpu,
  Cloud,
  Smartphone,
  Zap,
  Shield,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: Cpu,
      title: "AI/ML",
      description:
        "Harnessing the power of Artificial Intelligence and Machine Learning for intelligent solutions.",
      link: "/services/ai-ml",
      ariaLabel: "Explore AI and ML Solutions", // aria-label for accessibility
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Designing mobile applications that deliver exceptional user experience on all platforms.",
      link: "/services/app-development",
      ariaLabel: "Discover Our App Development Services", // aria-label for accessibility
    },
    {
      icon: Zap,
      title: "Automation Services",
      description:
        "Optimizing workflows and improving efficiency through automation.",
      link: "/services/automation-services",
      ariaLabel: "Learn About Our Automation Services", // aria-label for accessibility
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description:
        "Providing comprehensive security solutions to protect your business from threats.",
      link: "/services/cyber-security",
      ariaLabel: "Find Out More About Cyber Security", // aria-label for accessibility
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description:
        "Offering secure, scalable, and reliable cloud-based solutions for businesses.",
      link: "/services/cloud-services",
      ariaLabel: "Get to Know Our Cloud Services", // aria-label for accessibility
    },
    {
      icon: Code,
      title: "UI/UX Design",
      description:
        "Creating intuitive and user-friendly designs that enhance user experience.",
      link: "/services/ui-ux-design",
      ariaLabel: "View Our UI/UX Design Offerings", // aria-label for accessibility
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center text-amber-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-br from-amber-100 to-orange-200 p-8 rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(255,165,0,0.3)",
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 opacity-20 pointer-events-none"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="100%"
                    height="100%"
                    fill="none"
                    stroke="rgba(255,165,0,0.3)"
                    strokeWidth="20"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="100"
                    fill="none"
                    stroke="rgba(255,69,0,0.2)"
                    strokeWidth="30"
                  />
                  <path
                    d="M0,0 L100,100 M100,0 L0,100"
                    stroke="rgba(255,140,0,0.2)"
                    strokeWidth="15"
                  />
                </svg>
              </motion.div>

              <div className="relative z-10 flex flex-col items-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="bg-amber-500 p-4 rounded-full mb-4"
                >
                  <feature.icon className="h-10 w-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-amber-800 text-center">
                  {feature.title}
                </h3>
              </div>
              <p className="relative z-10 text-amber-700 mb-6 text-center">
                {feature.description}
              </p>

              {/* Learn More Button */}
              <div className="relative z-10 flex justify-center">
                <Link href={feature.link} passHref>
                  <motion.span
                    className="group flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-300 cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 0px 15px rgb(255,165,0)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={feature.ariaLabel} // aria-label for accessibility
                  >
                    Learn More
                  </motion.span>
                </Link>
              </div>

              {/* Floating particles */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-amber-300 rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0.7, 0],
                          scale: [0, 1.5],
                          x: Math.random() * 100 - 50,
                          y: Math.random() * 100 - 50,
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* See More Offerings Button */}
        <div className="mt-16 flex justify-center">
          <motion.a
            href="/services"
            className="flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            whileTap={{ scale: 0.95 }}
            aria-label="See more of our services" // aria-label for accessibility
          >
            See More Our Offerings
            <ChevronRight className="ml-2" size={24} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Features;
