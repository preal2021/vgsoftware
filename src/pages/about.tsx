import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Mail, ChevronRight, CheckCircle } from "lucide-react";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us - VG Software</title>
        <meta
          name="description"
          content="Learn about VG Software's mission, vision, and our commitment to revolutionizing the software landscape through innovative digital solutions."
        />
      </Head>
      <Header />
      <main className="bg-gradient-to-b from-orange-50 to-yellow-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Software development team"
              layout="fill"
              objectFit="cover"
              className="opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-pink-600">
                  Innovating the Future of Software
                </h1>
                <p className="text-xl mb-8 text-gray-700">
                  At VG Software, we're not just building applications; we're
                  crafting digital experiences that transform businesses and
                  empower users.
                </p>
                <motion.button
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:from-orange-600 hover:to-pink-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
              <div className="relative">
                <motion.div
                  className="absolute top-0 left-0 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -90, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <Image
                    src="/about.avif"
                    alt="team work"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <ArrowRight className="w-8 h-8 text-orange-500 rotate-90" />
          </motion.div>
        </section>

        {/* Our Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
              Our Mission
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-500">
              <p className="text-lg text-gray-700 mb-4">
                At VG Software, our mission is to create scalable, efficient,
                and user-friendly software solutions that empower businesses to
                thrive in the digital age. We are dedicated to pushing
                technological boundaries and delivering exceptional value to our
                clients through innovative approaches and cutting-edge
                technologies.
              </p>
              <p className="text-lg text-gray-700">
                We strive to be at the forefront of software innovation,
                constantly exploring new technologies and methodologies to
                provide our clients with the most advanced and effective
                solutions possible.
              </p>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">
              Our Vision
            </h2>
            <div className="text-center">
              <p className="text-xl text-gray-700 mb-6">
                To become a global leader in software innovation, driving
                positive change through technology.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where our solutions contribute to the
                advancement of society, fostering continuous learning and
                pushing the boundaries of what's possible in the world of
                technology.
              </p>
            </div>
          </div>
        </section>

        {/* Together, We Find A Way Section */}
        <section className="py-20 bg-gradient-to-r from-orange-100 to-yellow-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
              Together, We Find A Way
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              At VG Software, we believe in the power of collaboration. Our
              approach to problem-solving is rooted in teamwork, creativity, and
              strong partnerships with our clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Who we are",
                  content:
                    "A team of experts in various programming languages and methodologies.",
                },
                {
                  title: "What we do",
                  content:
                    "Custom software development, cloud solutions, AI integration, and digital transformation consulting.",
                },
                {
                  title: "What we care about",
                  content:
                    "Innovation, integrity, client success, and continuous improvement.",
                },
                {
                  title: "Where we work",
                  content:
                    "Global reach with offices in key locations around the world.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-orange-500 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        {/* <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Sarah Allen", title: "Chief Technology Officer" },
                { name: "John Doe", title: "Lead Developer" },
                { name: "Emily Chen", title: "UX Designer" },
                { name: "Michael Brown", title: "Project Manager" },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-yellow-400">
                    <Image
                      src={`https://i.pravatar.cc/200?img=${index + 1}`}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Stay Connected Section */}
        {/* <section className="py-20 bg-gradient-to-r from-red-100 to-yellow-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-red-500 mb-8">
              Stay Connected
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Join the VG Software community for updates, insights, and the
              latest in tech news.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <motion.button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-2 rounded-r-full hover:bg-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
