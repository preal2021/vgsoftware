import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Smartphone,
  Zap,
  Layers,
  Shield,
  MousePointer,
  Code,
  Cloud,
  Repeat,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AppDevelopmentPage = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Cross-Platform Development",
      description:
        "Build once, deploy everywhere with our efficient cross-platform solutions.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Ensure your app runs smoothly and efficiently on all devices.",
    },
    {
      icon: Layers,
      title: "Intuitive UI/UX",
      description:
        "Create engaging and user-friendly interfaces for maximum user satisfaction.",
    },
    {
      icon: Shield,
      title: "Robust Security",
      description:
        "Implement strong security measures to protect user data and privacy.",
    },
  ];

  const whyChooseUs = [
    {
      icon: MousePointer,
      title: "User-Centric Approach",
      description:
        "We prioritize user experience in every app we develop, ensuring high engagement and retention rates.",
      benefits: [
        "Intuitive and user-friendly interfaces",
        "Seamless user journeys",
        "Higher user satisfaction and loyalty",
      ],
    },
    {
      icon: Code,
      title: "Cutting-Edge Technologies",
      description:
        "We leverage the latest technologies and frameworks to build future-proof applications.",
      benefits: [
        "High-performance apps",
        "Scalable architecture",
        "Easy maintenance and updates",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description:
        "Seamlessly integrate your app with cloud services for enhanced functionality and scalability.",
      benefits: [
        "Improved data management",
        "Real-time synchronization",
        "Reduced infrastructure costs",
      ],
    },
    {
      icon: Repeat,
      title: "Agile Development Process",
      description:
        "Our agile methodology ensures rapid development and continuous improvement of your app.",
      benefits: [
        "Faster time-to-market",
        "Regular updates and feature additions",
        "Flexibility to adapt to changing requirements",
      ],
    },
  ];

  const helpBusinessPoints = [
    "Expand your digital presence with custom mobile applications",
    "Increase customer engagement through personalized app experiences",
    "Streamline business processes with tailored enterprise apps",
    "Boost brand loyalty with feature-rich and user-friendly apps",
    "Leverage mobile technology for improved data collection and analysis",
    "Enable seamless communication between your team and customers",
  ];

  const testimonials = [
    {
      name: "Alex Rodriguez",
      company: "TechStart Inc.",
      quote:
        "VG Software delivered an exceptional app that exceeded our expectations. Their expertise in cross-platform development saved us time and resources!",
    },
    {
      name: "Emily Chang",
      company: "MobileFirst Solutions",
      quote:
        "The app developed by VG Software has significantly improved our customer engagement. Their attention to UI/UX details is commendable!",
    },
  ];

  const caseStudies = [
    {
      title: "E-commerce App Revamp",
      description:
        "Increased user engagement by 50% and boosted sales by 30% through an intuitive redesign and performance optimization.",
    },
    {
      title: "Healthcare Management App",
      description:
        "Developed a HIPAA-compliant app that improved patient care coordination by 40% and reduced administrative tasks by 25%.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          App Development Services - VG Software | Transforming Ideas into
          Powerful Mobile Solutions
        </title>
        <meta
          name="description"
          content="Turn your vision into reality with VG Software's expert app development services. We create powerful, user-friendly mobile applications for iOS, Android, and cross-platform environments."
        />
        <meta
          name="keywords"
          content="app development, mobile apps, iOS, Android, cross-platform, React Native, Flutter, mobile solutions"
        />
        <link
          rel="canonical"
          href="https://www.vgsoftware.com/services/app-development"
        />
        <meta
          property="og:title"
          content="App Development Services - VG Software"
        />
        <meta
          property="og:description"
          content="Transform your ideas into powerful mobile applications. Our expert app development services cover iOS, Android, and cross-platform solutions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.vgsoftware.com/services/app-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="App Development Services - VG Software"
        />
        <meta
          name="twitter:description"
          content="Bring your app ideas to life with our expert development team. Powerful, user-friendly mobile solutions for all platforms."
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
                  stroke="rgba(236,72,153,0.1)"
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
              App Development Services
            </motion.h1>
            <motion.p
              className="text-xl text-center mb-12 text-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transforming ideas into powerful, user-friendly mobile
              applications
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
              Our App Development Process
            </h2>
            <div className="flex flex-wrap justify-center">
              {[
                "Requirements Analysis",
                "UI/UX Design",
                "Development",
                "Testing",
                "Deployment",
                "Maintenance & Support",
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white text-orange-600 m-2 p-4 rounded-full font-semibold"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#FFF",
                    color: "#DB2777",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {step}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-600">
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
                  <p className="text-orange-700 mb-4">{item.description}</p>
                  <ul className="list-disc list-inside">
                    {item.benefits.map((benefit, i) => (
                      <li key={i} className="text-orange-700">
                        {benefit}
                      </li>
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
              How We Can Help Your Business Using APP Development?
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

        {/* <section className="relative z-10 py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-600">
              Client Testimonials
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
                  <p className="italic text-orange-600">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-bold text-red-600 mt-4">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-red-300 to-orange-200">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">
              Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-red-600">
                    {study.title}
                  </h3>
                  <p className="text-orange-700">{study.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">
              Ready to Transform Your Ideas into Powerful Apps?
            </h2>
            <p className="text-xl mb-12 text-white">
              Let’s build innovative mobile and web applications that elevate
              your business and deliver exceptional user experiences.
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
      </main>
      <Footer />
    </>
  );
};

export default AppDevelopmentPage;
