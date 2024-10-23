import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Database,
  Zap,
  MousePointer,
  Eye,
  Target,
  BarChart,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AIMLPage = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Algorithms",
      description:
        "We implement cutting-edge AI algorithms to solve complex business problems.",
    },
    {
      icon: Cpu,
      title: "Machine Learning Solutions",
      description:
        "Our ML models learn and adapt to your data, providing intelligent insights.",
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description:
        "Turn your big data into actionable intelligence with our analytics solutions.",
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description:
        "Process and analyze data in real-time for immediate decision-making.",
    },
  ];

  const whyChooseUs = [
    {
      icon: MousePointer,
      title: "Transforming Business Operations",
      description:
        "Our AI/ML services focus on revolutionizing your business processes, automating tasks, and uncovering hidden insights in your data.",
      benefits: [
        "Increased operational efficiency",
        "Data-driven decision making",
        "Predictive analytics for proactive strategies",
      ],
    },
    {
      icon: Eye,
      title: "Cutting-edge Innovation",
      description:
        "We stay at the forefront of AI/ML advancements, incorporating the latest technologies to give your business a competitive edge.",
      benefits: [
        "Access to state-of-the-art AI/ML technologies",
        "Custom solutions tailored to your specific needs",
        "Continuous improvement through AI-driven insights",
      ],
    },
    {
      icon: Target,
      title: "Scalable and Adaptable Solutions",
      description:
        "Our AI/ML solutions are designed to grow with your business, adapting to changing needs and increasing data volumes.",
      benefits: [
        "Seamless scalability for growing businesses",
        "Flexible integration with existing systems",
        "Future-proof technology investments",
      ],
    },
    {
      icon: BarChart,
      title: "Measurable Results",
      description:
        "We focus on delivering quantifiable improvements to your business through our AI/ML solutions.",
      benefits: [
        "Clear ROI on AI/ML investments",
        "Performance metrics and KPI tracking",
        "Continuous optimization based on results",
      ],
    },
  ];

  const helpBusinessPoints = [
    "Automate repetitive tasks to increase efficiency",
    "Uncover valuable insights from complex datasets",
    "Enhance customer experiences with personalized recommendations",
    "Optimize supply chains and inventory management",
    "Improve fraud detection and risk management",
    "Develop predictive maintenance solutions for equipment",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "DataDriven Corp.",
      quote:
        "VG Software's AI/ML solutions have revolutionized our data analysis processes. We've seen a 30% increase in operational efficiency!",
    },
    {
      name: "Michael Chen",
      company: "InnovateTech Solutions",
      quote:
        "The predictive models developed by VG Software have significantly improved our decision-making capabilities. A game-changer for our business!",
    },
  ];

  const caseStudies = [
    {
      title: "Predictive Maintenance System",
      description:
        "Reduced equipment downtime by 40% for a manufacturing client using IoT sensors and machine learning algorithms.",
    },
    {
      title: "Customer Churn Prediction",
      description:
        "Helped a telecom company reduce customer churn by 25% through advanced predictive analytics and personalized retention strategies.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          AI/ML Services - VG Software | Transforming Businesses with
          Intelligent Solutions
        </title>
        <meta
          name="description"
          content="Harness the power of AI and Machine Learning with VG Software's expert services. We deliver cutting-edge solutions that drive innovation, efficiency, and growth for your business."
        />
        <meta
          name="keywords"
          content="AI, Machine Learning, data analytics, predictive modeling, business intelligence, artificial intelligence"
        />
        <link
          rel="canonical"
          href="https://www.vgsoftware.com/services/ai-ml"
        />
        <meta property="og:title" content="AI/ML Services - VG Software" />
        <meta
          property="og:description"
          content="Transform your business with our advanced AI and Machine Learning solutions. Drive innovation and efficiency with data-driven insights."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.vgsoftware.com/services/ai-ml"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI/ML Services - VG Software" />
        <meta
          name="twitter:description"
          content="Elevate your business with our expert AI and Machine Learning services. Unlock the power of your data."
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
              AI/ML Services
            </motion.h1>
            <motion.p
              className="text-xl text-center mb-12 text-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transforming businesses with intelligent solutions and data-driven
              insights
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
              Our AI/ML Process
            </h2>
            <div className="flex flex-wrap justify-center">
              {[
                "Data Collection",
                "Preprocessing",
                "Model Development",
                "Training & Validation",
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
              Why Choose Our?
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
              How We Can Help Your Business Using AI/ML?
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
              Ready to Harness the Power of AI & Machine Learning?
            </h2>
            <p className="text-xl mb-12 text-white">
              Let's build innovative AI solutions that drive efficiency and
              unlock new opportunities for your business.
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

export default AIMLPage;
