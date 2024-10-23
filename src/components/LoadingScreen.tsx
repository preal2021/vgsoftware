import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          onLoadingComplete();
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-yellow-500 flex items-center justify-center z-50">
      <div className="relative w-64 h-64">
        {/* Background pattern */}
        <svg className="absolute inset-0" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Animated circles */}
        <motion.div
          className="absolute inset-0"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 border-4 border-white rounded-full"
              style={{
                borderColor: `rgba(255,255,255,${0.2 + index * 0.2})`,
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.4,
              }}
            />
          ))}
        </motion.div>

        {/* Logo */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          VG
        </motion.div>

        {/* Progress bar */}
        <svg className="absolute inset-0" viewBox="0 0 100 100">
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="8"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#ffffff"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress / 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              rotate: '-90deg',
              transformOrigin: 'center',
            }}
          />
        </svg>
      </div>
      <div className="absolute bottom-10 left-0 right-0 text-center text-white text-xl font-semibold">
        Loading... {Math.round(progress)}%
      </div>
    </div>
  );
};

export default LoadingScreen;