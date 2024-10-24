import React, { useState, useEffect, memo, ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Service List
const services = [
  { icon: Code, title: "UI/UX Design" },
  { icon: Cpu, title: "Web Development" },
  { icon: Cloud, title: "Cloud Services" },
  { icon: Search, title: "SEO" },
  { icon: Smartphone, title: "App Development" },
  { icon: Zap, title: "Automation Services" },
  { icon: Brain, title: "AI/ML" },
  { icon: Settings, title: "Custom Software Development" },
  { icon: Palette, title: "Graphic Design" },
  { icon: Shield, title: "Cyber Security" },
  { icon: HelpCircle, title: "IT Consulting" },
];

// Define Props Type for Memoized Component
interface MotionDivProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

// Memoized Motion Div Component with Correct Typing
const OptimizedMotionDiv = memo(({ children, ...props }: MotionDivProps) => (
  <motion.div {...props}>{children}</motion.div>
));

const Hero: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false); // Track if component is mounted

  const iconVariants = {
    animate: {
      rotate: [0, 360],
      transition: { repeat: Infinity, duration: 10, ease: "linear" },
    },
  };

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    updateWidth(); // Initialize width on load

    // Indicate that the component has mounted
    setIsClient(true);

    return () => window.removeEventListener("resize", updateWidth); // Cleanup
  }, []);

  const getRadius = () =>
    windowWidth < 640 ? 120 : windowWidth < 768 ? 160 : 220;
  const getImageSize = () =>
    windowWidth < 640
      ? "w-32 h-32"
      : windowWidth < 768
      ? "w-48 h-48"
      : "w-64 h-64";
  const getCircleSizes = () =>
    windowWidth < 640
      ? [220, 180, 140]
      : windowWidth < 768
      ? [300, 260, 220]
      : [400, 360, 320];
  const getIconSize = () =>
    windowWidth < 640 ? "w-4 h-4" : windowWidth < 768 ? "w-5 h-5" : "w-6 h-6";
  const getIconCircleSize = () =>
    windowWidth < 640
      ? "w-8 h-8"
      : windowWidth < 768
      ? "w-10 h-10"
      : "w-14 h-14";

  const [outerCircleSize, middleCircleSize, innerCircleSize] = getCircleSizes();

  return (
    <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40 bg-gradient-to-br from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Animation Section */}
          <OptimizedMotionDiv
            className="flex justify-center relative mt-12 lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative flex justify-center items-center">
              {/* Center Image */}
              <Image
                src="/hero-image.avif"
                alt="VG Software Logo"
                width={300}
                height={300}
                className={`${getImageSize()} rounded-full shadow-lg object-cover`}
                priority
                quality={75} // Optimized quality setting
              />

              {/* Rotating Circles */}
              {isClient && ( // Render only on client
                <motion.div
                  className="absolute inset-0 w-full h-full flex justify-center items-center"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div
                    className="absolute border-[3px] border-orange-400 rounded-full"
                    style={{ width: outerCircleSize, height: outerCircleSize }}
                  />

                  <div
                    className="absolute border-[3px] border-dashed border-red-300 rounded-full"
                    style={{
                      width: middleCircleSize,
                      height: middleCircleSize,
                    }}
                  />

                  <div
                    className="absolute border-[3px] border-dotted border-pink-300 rounded-full"
                    style={{ width: innerCircleSize, height: innerCircleSize }}
                  />

                  {services.map((service, index) => {
                    const angle = (index / services.length) * 2 * Math.PI;
                    const radius = outerCircleSize / 2 - 20;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);
                    const IconComponent = service.icon;

                    return (
                      <motion.div
                        key={index}
                        className={`absolute ${getIconCircleSize()} bg-white rounded-full shadow-lg flex items-center justify-center`}
                        style={{
                          top: `calc(50% + ${y}px)`,
                          left: `calc(50% + ${x}px)`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <motion.div variants={iconVariants} animate="animate">
                          <IconComponent
                            className={`text-orange-500 ${getIconSize()}`}
                          />
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </div>
          </OptimizedMotionDiv>

          <OptimizedMotionDiv
            className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-orange-500">Innovate.</span>{" "}
              <span className="text-red-500">Create.</span>{" "}
              <span className="text-pink-500">Transform.</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-700">
              Empowering businesses with cutting-edge software solutions that
              drive growth and efficiency.
            </p>
            <Link href={"/contact"}>
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg flex items-center justify-center mx-auto lg:mx-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="ml-2" />
              </motion.button>
            </Link>
          </OptimizedMotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Hero;
