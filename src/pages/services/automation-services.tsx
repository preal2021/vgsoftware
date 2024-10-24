import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Zap,
  Clock,
  BarChart,
  Repeat,
  MousePointer,
  Eye,
  Target,
  ArrowRight,
  Cog,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AutomationServicesPage = () => {
  const features = [
    {
      icon: Zap,
      title: "Process Optimization",
      description:
        "Streamline workflows and eliminate bottlenecks for maximum efficiency.",
    },
    {
      icon: Clock,
      title: "Time Savings",
      description:
        "Automate repetitive tasks and free up your team for strategic work.",
    },
    {
      icon: BarChart,
      title: "Improved Accuracy",
      description:
        "Reduce human errors and ensure consistent, high-quality outputs.",
    },
    {
      icon: Repeat,
      title: "Scalable Solutions",
      description:
        "Easily scale your automation as your business grows and evolves.",
    },
  ];

  const whyChooseUs = [
    {
      icon: MousePointer,
      title: "Customized Automation",
      description:
        "We develop tailored automation solutions that perfectly fit your unique business processes and requirements.",
      benefits: [
        "Increased operational efficiency",
        "Reduced operational costs",
        "Improved customer satisfaction",
      ],
    },
    {
      icon: Eye,
      title: "Cutting-edge Technologies",
      description:
        "We leverage the latest automation technologies and tools to deliver robust and future-proof solutions.",
      benefits: [
        "Access to state-of-the-art automation technologies",
        "Integration with existing systems",
        "Continuous improvement and updates",
      ],
    },
    {
      icon: Target,
      title: "End-to-End Implementation",
      description:
        "From process analysis to deployment and support, we handle every aspect of your automation journey.",
      benefits: [
        "Seamless integration into your workflow",
        "Comprehensive training and support",
        "Ongoing optimization and maintenance",
      ],
    },
    {
      icon: Cog,
      title: "Measurable Results",
      description:
        "We focus on delivering quantifiable improvements to your business through our automation solutions.",
      benefits: [
        "Clear ROI on automation investments",
        "Performance metrics and KPI tracking",
        "Data-driven process improvements",
      ],
    },
  ];

  const helpBusinessPoints = [
    "Reduce manual data entry and processing time",
    "Streamline customer service with automated responses",
    "Automate inventory management and reordering processes",
    "Implement automated quality control checks",
    "Create automated reporting and analytics dashboards",
    "Develop custom automation for industry-specific processes",
  ];

  const testimonials = [
    {
      name: "David Thompson",
      company: "LogiTech Solutions",
      quote:
        "VG Software's automation services have transformed our operations. We've seen a 50% reduction in processing times and significantly improved accuracy!",
    },
    {
      name: "Emily Rodriguez",
      company: "HealthCare Innovations",
      quote:
        "The custom automation solutions provided by VG Software have streamlined our patient management system, allowing us to focus more on patient care.",
    },
  ];

  const caseStudies = [
    {
      title: "Supply Chain Automation",
      description:
        "Implemented an end-to-end supply chain automation system, reducing order processing time by 70% and improving inventory accuracy to 99.9%.",
    },
    {
      title: "Customer Service Automation",
      description:
        "Developed an AI-powered chatbot and ticket routing system, reducing response times by 60% and increasing customer satisfaction scores by 35%.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Automation Services - VG Software | Streamline Your Business Processes
        </title>
        <meta
          name="description"
          content="Empower your business with VG Software's intelligent automation solutions. Increase efficiency, reduce errors, and focus on what matters most."
        />
        <meta
          name="keywords"
          content="automation, business process automation, RPA, workflow optimization, AI automation, process efficiency"
        />
        <link
          rel="canonical"
          href="https://www.vgsoftware.tech/services/automation"
        />
        <meta property="og:title" content="Automation Services - VG Software" />
        <meta
          property="og:description"
          content="Transform your business operations with our cutting-edge automation services. Boost efficiency and reduce costs with intelligent solutions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.vgsoftware.tech/services/automation"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Automation Services - VG Software"
        />
        <meta
          name="twitter:description"
          content="Streamline your business with our expert automation services. Increase efficiency and reduce errors."
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
              Automation Services
            </motion.h1>
            <motion.p
              className="text-xl text-center mb-12 text-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Empower your business with intelligent automation solutions
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
              Our Automation Process
            </h2>
            <div className="flex flex-wrap justify-center">
              {[
                "Process Analysis",
                "Solution Design",
                "Development",
                "Testing",
                "Deployment",
                "Monitoring & Optimization",
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
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-600">
              Why Choose Our Automation Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <item.icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4 text-red-600">
                    {item.title}
                  </h3>
                  <p className="text-orange-700 mb-4">{item.description}</p>
                  <ul className="list-disc list-inside text-orange-600 space-y-2">
                    {item.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}>{benefit}</li>
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
              How We Can Help Your Business with Automation
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
              Ready to Streamline Your Business?
            </h2>
            <p className="text-xl mb-12 text-white">
              Let's create intelligent automation solutions that drive
              efficiency and growth for your business.
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
                    Learn More
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

export default AutomationServicesPage;
