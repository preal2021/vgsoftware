import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Monitor,
  Settings,
  Globe,
  Cloud,
  Terminal,
  Smartphone,
  Database,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WebDevelopmentPage = () => {
  const features = [
    {
      icon: Code,
      title: "Modern Technologies",
      description:
        "We leverage the latest frameworks and languages to build robust and scalable web solutions.",
    },
    {
      icon: Server,
      title: "Backend Expertise",
      description:
        "Our backend development ensures secure, efficient, and high-performing systems.",
    },
    {
      icon: Monitor,
      title: "Responsive Designs",
      description:
        "We create websites that adapt seamlessly to different screen sizes and devices.",
    },
    {
      icon: Settings,
      title: "Custom Development",
      description:
        "Tailored solutions to meet the unique needs of your business and users.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Globe,
      title: "Seamless User Experience",
      description:
        "Our web development services deliver fast-loading, accessible, and user-friendly websites.",
      benefits: [
        "Improved website performance",
        "Enhanced user engagement and satisfaction",
        "SEO-friendly design for better visibility",
      ],
    },
    {
      icon: Cloud,
      title: "Cutting-Edge Solutions",
      description:
        "We use cloud technologies, APIs, and integrations to power modern digital solutions.",
      benefits: [
        "Scalable infrastructure for future growth",
        "Faster time-to-market with cloud deployment",
        "Increased operational efficiency",
      ],
    },
    {
      icon: Terminal,
      title: "Optimized Codebase",
      description:
        "We write clean and optimized code, ensuring fast loading times and minimal technical debt.",
      benefits: [
        "Faster load times and better performance",
        "Easier maintenance and scalability",
        "Improved security with robust coding practices",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile-First Approach",
      description:
        "Our mobile-first development ensures your website delivers a consistent experience across devices.",
      benefits: [
        "Higher mobile engagement",
        "Improved accessibility on smartphones",
        "Future-proof designs ready for any device",
      ],
    },
  ];

  const helpBusinessPoints = [
    "Build scalable and high-performance web applications",
    "Enhance online presence with fast and secure websites",
    "Improve user retention with responsive and intuitive designs",
    "Reduce maintenance costs with clean, optimized code",
    "Stay ahead of trends with cloud-powered solutions",
    "Boost SEO and visibility through technical optimization",
  ];

  const testimonials = [
    {
      name: "Alice Johnson",
      company: "Startup Success",
      quote:
        "VG Software's web development services helped us launch our product in record time. Their work exceeded our expectations!",
    },
    {
      name: "Michael Lee",
      company: "Enterprise Tech Solutions",
      quote:
        "Thanks to VG Software, our website now performs twice as fast, and our customers love the new experience.",
    },
  ];

  const caseStudies = [
    {
      title: "E-Commerce Platform Development",
      description:
        "Developed a feature-rich e-commerce platform that boosted sales by 40% and reduced cart abandonment rates.",
    },
    {
      title: "SaaS Application Development",
      description:
        "Built a scalable SaaS platform with real-time analytics and seamless cloud integration.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Web Development Services - VG Software | Empowering Your Digital
          Presence
        </title>
        <meta
          name="description"
          content="Transform your digital presence with VG Software's expert web development services. We build fast, secure, and scalable websites tailored to your business needs."
        />
        <meta
          name="keywords"
          content="web development, web design, backend development, frontend development, cloud solutions, SaaS development"
        />
        <link
          rel="canonical"
          href="https://www.vgsoftware.com/services/web-development"
        />
        <meta
          property="og:title"
          content="Web Development Services - VG Software"
        />
        <meta
          property="og:description"
          content="Empower your digital presence with our expert web development services. Build fast, secure, and scalable websites with VG Software."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.vgsoftware.com/services/web-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Development Services - VG Software"
        />
        <meta
          name="twitter:description"
          content="Build fast, secure, and scalable websites with our expert web development services."
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
              Web Development Services
            </motion.h1>
            <motion.p
              className="text-xl text-center mb-12 text-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Building powerful web solutions for modern businesses
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

        <section className="relative z-10 py-20 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-600">
              How We Elevate Your Business with Cutting-Edge Web Development
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
              Ready to Build the Future of Your Online Presence?
            </h2>
            <p className="text-xl mb-12 text-white">
              Let’s create responsive, fast, and visually stunning websites that
              drive success.
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

export default WebDevelopmentPage;
