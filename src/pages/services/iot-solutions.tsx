import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Cloud,
  Smartphone,
  Shield,
  Link2,
  Settings,
  Target,
  Monitor,
  Globe,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IoTSolutionsPage = () => {
  const features = [
    {
      icon: Cloud,
      title: "Seamless Connectivity",
      description:
        "We provide solutions that ensure your devices are always connected and can communicate effortlessly.",
    },
    {
      icon: Smartphone,
      title: "Smart Device Integration",
      description:
        "Our services facilitate the integration of smart devices into your existing systems for enhanced functionality.",
    },
    {
      icon: Shield,
      title: "Robust Security",
      description:
        "We prioritize security in our IoT solutions to protect your data and devices from threats.",
    },
    {
      icon: Link2,
      title: "Real-Time Monitoring",
      description:
        "Gain insights into your operations with real-time monitoring and data analytics.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Settings,
      title: "Optimizing Efficiency",
      description:
        "Our IoT solutions are designed to optimize processes and enhance operational efficiency, enabling you to focus on growth.",
      benefits: [
        "Reduced operational costs",
        "Increased productivity and efficiency",
        "Streamlined processes and workflows",
      ],
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Our IoT solutions can be implemented across various geographical locations, ensuring a unified operation worldwide.",
      benefits: [
        "Consistent performance across regions",
        "Easier management of devices",
        "Improved customer experience globally",
      ],
    },
    {
      icon: Target,
      title: "Data-Driven Insights",
      description:
        "We leverage data collected from IoT devices to provide actionable insights that drive decision-making.",
      benefits: [
        "Enhanced data analysis and reporting",
        "Informed strategic planning",
        "Improved ROI on technology investments",
      ],
    },
    {
      icon: Monitor,
      title: "User-Friendly Interfaces",
      description:
        "Our solutions feature intuitive interfaces that make it easy to monitor and manage your devices.",
      benefits: [
        "Simplified user experience",
        "Customizable dashboards",
        "Accessible on multiple devices",
      ],
    },
  ];

  const helpBusinessPoints = [
    "Enhance operational efficiency through automation",
    "Gain real-time insights for better decision-making",
    "Improve customer satisfaction with smart solutions",
    "Reduce costs through optimized resource management",
    "Stay ahead of competitors with innovative IoT technologies",
    "Ensure security and compliance across devices",
  ];

  const testimonials = [
    {
      name: "Alice Johnson",
      company: "Smart Home Solutions",
      quote:
        "The IoT solutions provided by VG Software transformed our product line. We've seen a 50% increase in customer engagement!",
    },
    {
      name: "Robert Williams",
      company: "Industrial Innovations",
      quote:
        "VG Software helped us implement a smart monitoring system that has drastically reduced downtime in our operations.",
    },
  ];

  const caseStudies = [
    {
      title: "Smart City Initiative",
      description:
        "Improved traffic management and public safety through the implementation of IoT sensors and real-time data analytics.",
    },
    {
      title: "Connected Manufacturing",
      description:
        "Enhanced operational efficiency by 40% with a real-time monitoring system and automated controls.",
    },
  ];

  return (
    <>
      <Head>
        <title>IoT Solutions - VG Software | Transforming Your Business</title>
        <meta
          name="description"
          content="Elevate your operations with VG Software's IoT solutions. We create connected devices and systems that enhance efficiency and drive results."
        />
        <meta
          name="keywords"
          content="IoT solutions, Internet of Things, smart devices, connectivity, data analytics"
        />
        <link
          rel="canonical"
          href="https://www.vgsoftware.tech/services/iot-solutions"
        />
        <meta property="og:title" content="IoT Solutions - VG Software" />
        <meta
          property="og:description"
          content="Transform your business with our innovative IoT solutions. Enhance connectivity and efficiency with VG Software."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.vgsoftware.tech/services/iot-solutions"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IoT Solutions - VG Software" />
        <meta
          name="twitter:description"
          content="Explore VG Software's IoT solutions to enhance your operational efficiency and connectivity."
        />
      </Head>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(255,165,0,0.1)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-orange-300 opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-red-300 opacity-50"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <section className="relative z-10 py-20 px-4">
          <div className="container mx-auto">
            <motion.h1
              className="text-5xl font-bold text-center mb-8 text-orange-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              IoT Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-center mb-12 text-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transforming your business through connected devices
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-red-600">
                    {feature.title}
                  </h3>
                  <p className="text-orange-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our IoT Solutions Process
            </h2>
            <div className="flex flex-wrap justify-center">
              {[
                "Research",
                "Integration",
                "Testing",
                "Deployment",
                "Support",
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white text-orange-600 m-2 p-4 rounded-full font-semibold"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#FFF",
                    color: "#f97316",
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-red-600">
                    {item.title}
                  </h3>
                  <p className="text-orange-700">{item.description}</p>
                  <ul className="list-disc list-inside mt-4 text-orange-800">
                    {item.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-600">
              How IoT Solutions Can Help Your Business
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpBusinessPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-orange-100 p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-orange-700 font-semibold">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">
              Ready to Revolutionize Your Business with IoT?
            </h2>
            <p className="text-xl mb-12 text-white">
              Let's harness the power of connected devices to enhance your
              operations and drive growth.
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-orange-100 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <ArrowRight className="inline-block ml-2" />
            </motion.a>
          </div>
        </section>

        {/* <section className="relative z-10 py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-600">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-orange-700 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-red-600 font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-orange-500">{testimonial.company}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 px-4 bg-orange-50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-600">
              Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-red-600">
                    {study.title}
                  </h3>
                  <p className="text-orange-700">{study.description}</p>
                  <motion.a
                    href={`/case-studies/${study.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="inline-block mt-4 text-orange-600 font-semibold hover:text-red-600"
                    whileHover={{ x: 5 }}
                  >
                    Read More <ArrowRight className="inline-block ml-1" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
};

export default IoTSolutionsPage;
