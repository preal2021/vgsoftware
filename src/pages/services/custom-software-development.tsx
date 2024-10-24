import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Code,
  Settings,
  Users,
  Zap,
  Shield,
  FileText,
  Database,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CustomSoftwareDevelopmentPage = () => {
  const features = [
    {
      icon: Code,
      title: "Tailored Solutions",
      description:
        "We develop custom software solutions that meet your unique business needs and challenges.",
    },
    {
      icon: Settings,
      title: "Scalable Architecture",
      description:
        "Our software is designed to grow with your business, ensuring optimal performance at every stage.",
    },
    {
      icon: Users,
      title: "Collaborative Development",
      description:
        "We work closely with you to understand your vision and involve you in the development process.",
    },
    {
      icon: Zap,
      title: "Agile Methodology",
      description:
        "We utilize agile development practices to ensure flexibility and rapid delivery of software solutions.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Enhanced Security",
      description:
        "Our custom software solutions incorporate the latest security measures to protect your data and operations.",
      benefits: [
        "Robust data protection and compliance",
        "Reduced risk of cyber threats",
        "Peace of mind with secure applications",
      ],
    },
    {
      icon: FileText,
      title: "Comprehensive Documentation",
      description:
        "We provide thorough documentation and support, ensuring your team can easily understand and use the software.",
      benefits: [
        "Clear guidelines for usage and maintenance",
        "Streamlined onboarding for new users",
        "Efficient troubleshooting and support",
      ],
    },
    {
      icon: Database,
      title: "Data Integration",
      description:
        "Our solutions seamlessly integrate with your existing systems and databases for enhanced functionality.",
      benefits: [
        "Enhanced data accuracy and accessibility",
        "Improved workflow and efficiency",
        "Scalable solutions that adapt to your needs",
      ],
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Compatibility",
      description:
        "We ensure your custom software works flawlessly across various devices and platforms.",
      benefits: [
        "Consistent user experience on all devices",
        "Increased accessibility for users",
        "Streamlined development across platforms",
      ],
    },
  ];

  const helpBusinessPoints = [
    "Streamline processes with customized workflows",
    "Increase efficiency with tailored automation solutions",
    "Enhance data insights with advanced analytics",
    "Improve customer engagement through personalized experiences",
    "Stay ahead of competition with innovative software solutions",
    "Foster collaboration with integrated tools and platforms",
  ];

  const testimonials = [
    {
      name: "Alice Johnson",
      company: "Innovatech Solutions",
      quote:
        "VG Software's custom software development service revolutionized our operations. Our efficiency has improved significantly!",
    },
    {
      name: "Bob Williams",
      company: "Digital Ventures",
      quote:
        "The tailored software solutions provided by VG Software have transformed our workflow and enhanced our productivity!",
    },
  ];

  const caseStudies = [
    {
      title: "Inventory Management System",
      description:
        "Increased operational efficiency by 40% through a custom solution that streamlined inventory tracking and reporting.",
    },
    {
      title: "CRM Development",
      description:
        "Improved client management by 60% with a tailored CRM system that centralized all customer interactions and data.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Custom Software Development Services - VG Software | Tailored
          Solutions for Your Business
        </title>
        <meta
          name="description"
          content="Elevate your business operations with VG Software's custom software development services. We create tailored, scalable solutions that drive efficiency and growth."
        />
        <meta
          name="keywords"
          content="custom software development, tailored solutions, business software, enterprise applications"
        />
        <link
          rel="canonical"
          href="https://www.vgsoftware.tech/services/custom-software-development"
        />
        <meta
          property="og:title"
          content="Custom Software Development Services - VG Software"
        />
        <meta
          property="og:description"
          content="Craft tailored software solutions with VG Software. Boost your business efficiency and performance with custom development services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.vgsoftware.tech/services/custom-software-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom Software Development Services - VG Software"
        />
        <meta
          name="twitter:description"
          content="Elevate your business operations with our expert custom software development services. Tailored solutions that drive results."
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
              Custom Software Development Services
            </motion.h1>
            <motion.p
              className="text-xl text-center mb-12 text-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Tailored solutions that drive efficiency and growth
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
              Our Development Process
            </h2>
            <div className="flex flex-wrap justify-center">
              {[
                "Discovery",
                "Design",
                "Development",
                "Testing",
                "Deployment",
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white text-orange-600 m-2 p-4 rounded-full font-semibold"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#FFF",
                    color: "#f97316",
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
                  <ul className="mt-2 list-disc list-inside">
                    {item.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-orange-600">
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
              How We Can Enhance Your Business with Custom Software Development
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
              Ready to Elevate Your Business Operations?
            </h2>
            <p className="text-xl mb-12 text-white">
              Let's build robust and scalable software solutions that drive
              growth and efficiency for your business.
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
        </section> */}

        {/* <section className="relative z-10 py-20 px-4 bg-orange-50">
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
                      .replace(/\s+/g, '-')}`}
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

export default CustomSoftwareDevelopmentPage;
