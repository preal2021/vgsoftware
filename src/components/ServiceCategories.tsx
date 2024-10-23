import React, { useState } from "react";
import Link from "next/link";
import {
  Code,
  Cpu,
  Cloud,
  Search,
  Smartphone,
  Zap,
  Brain,
  Settings,
  Palette,
  Shield,
  HelpCircle,
  Wifi,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    icon: Cpu,
    title: "AI/ML",
    description:
      "Harnessing the power of Artificial Intelligence and Machine Learning for intelligent solutions.",
    link: "/services/ai-ml",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Designing mobile applications that deliver exceptional user experience on all platforms.",
    link: "/services/app-development",
  },
  {
    icon: Zap,
    title: "Automation Services",
    description:
      "Optimizing workflows and improving efficiency through automation.",
    link: "/services/automation-services",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description:
      "Providing comprehensive security solutions to protect your business from threats.",
    link: "/services/cyber-security",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Offering secure, scalable, and reliable cloud-based solutions for businesses.",
    link: "/services/cloud-services",
  },
  {
    icon: Settings,
    title: "Custom Software Development",
    description:
      "Developing tailored software solutions to meet unique business needs.",
    link: "/services/custom-software-development",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Designing creative visuals that communicate your brand's story effectively.",
    link: "/services/graphic-design",
  },
  {
    icon: HelpCircle,
    title: "IT Consulting",
    description:
      "Offering expert guidance to optimize IT infrastructure and strategy.",
    link: "/services/it-consulting",
  },
  {
    icon: Wifi,
    title: "IoT Solutions",
    description:
      "Connecting devices and systems to create smart, data-driven environments.",
    link: "/services/iot-solutions",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Boosting online visibility and driving traffic through search engine optimization.",
    link: "/services/seo",
  },
  {
    icon: Code,
    title: "UI/UX Design",
    description:
      "Creating intuitive and user-friendly designs that enhance user experience.",
    link: "/services/ui-ux-design",
  },
  {
    icon: Cpu,
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable websites with modern technologies.",
    link: "/services/web-development",
  },
];

const ServiceCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="explore-offerings"
      className="py-20 bg-gradient-to-br from-amber-50 to-orange-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-amber-800 mb-16 text-center">
          Explore Our Offerings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
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
                  <service.icon className="h-10 w-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-amber-800 text-center">
                  {service.title}
                </h3>
              </div>
              <p className="relative z-10 text-amber-700 mb-6 text-center">
                {service.description}
              </p>

              {/* Learn More Button */}
              <div className="relative z-10 flex justify-center">
                <Link href={service.link} passHref>
                  <motion.span
                    className="group flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-300 cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 0px 15px rgb(255,165,0)",
                    }}
                    whileTap={{ scale: 0.95 }}
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
      </div>
    </section>
  );
};

export default ServiceCategories;
