import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ArrowRight, RefreshCcw } from 'lucide-react';

const Custom404 = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById('backgroundCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Particle[] = [];
    const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 20000));

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `rgba(${255 * Math.random()}, ${100 * Math.random()}, 0, 0.5)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        if (ctx) {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();
        }
        requestAnimationFrame(animate);
      }
    };

    init();
    animate();
    setIsLoaded(true);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <Head>
        <title>404 - Page Not Found | VG Software</title>
        <meta name="description" content="Oops! The page you're looking for doesn't exist." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <canvas id="backgroundCanvas" className="absolute inset-0" />
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              className="z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4"
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                404
              </motion.h1>
              <motion.p 
                className="text-xl sm:text-2xl mb-8"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Oops! Looks like this page took an unexpected vacation.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/" className="bg-white text-orange-500 px-6 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-orange-100 transition-colors">
                    <Home className="mr-2" />
                    Go Home
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button onClick={() => window.history.back()} className="bg-orange-700 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-orange-800 transition-colors">
                    <ArrowRight className="mr-2" />
                    Go Back
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div 
          className="absolute bottom-0 left-0 right-0 mb-8 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm opacity-75 text-center mb-2">
            Lost? Try refreshing your perspective (and maybe the page).
          </p>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <RefreshCcw className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Custom404;