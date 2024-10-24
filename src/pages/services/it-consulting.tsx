import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Code,
  ShieldCheck,
  Globe,
  Cloud,
  Users,
  CheckSquare,
  Target,
  Monitor,
  Info,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ITConsultingPage = () => {
  const features = [
    {
      icon: Code,
      title: "Tailored IT Solutions",
      description:
        "We provide customized IT strategies that align with your business objectives and needs.",
    },
    {
      icon: ShieldCheck,
      title: "Risk Management",
      description:
        "Our team identifies and mitigates potential IT risks to ensure business continuity.",
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description:
        "Leverage our international experience to drive innovation and efficiency in your operations.",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description:
        "We help businesses transition to the cloud, ensuring scalability and flexibility.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Enhancing Business Efficiency",
      description:
        "Our IT consulting services are designed to streamline your operations and enhance productivity. We leverage technology to create systems that are both effective and easy to use.",
      benefits: [
        "Increased operational efficiency",
        "Improved project delivery timelines",
        "Reduced IT costs and overheads",
      ],
    },
    {
      icon: CheckSquare,
      title: "Driving Innovation",
      description:
        "Stay ahead of the curve with our forward-thinking IT strategies. We focus on innovative solutions that drive business growth and improve competitiveness.",
      benefits: [
        "Access to cutting-edge technologies",
        "Enhanced product offerings",
        "Improved market positioning",
      ],
    },
    {
      icon: Target,
      title: "Data-Driven Decision Making",
      description:
        "Our consultants use data analytics to guide your IT strategies, ensuring that every decision is informed and aligned with your goals.",
      benefits: [
        "Enhanced insights into operations",
        "Continuous performance improvement",
        "Measurable impact on business outcomes",
      ],
    },
    {
      icon: Monitor,
      title: "Comprehensive IT Support",
      description:
        "From strategy to implementation, we provide end-to-end IT consulting services to ensure your technology supports your business effectively.",
      benefits: [
        "Holistic approach to IT management",
        "Streamlined processes across departments",
        "Robust support and maintenance",
      ],
    },
  ];

  const helpBusinessPoints = [
    "Optimize processes for improved efficiency",
    "Enhance security measures for data protection",
    "Increase productivity through technology integration",
    "Reduce costs with strategic IT investments",
    "Stay competitive with innovative IT solutions",
    "Support remote work with scalable cloud solutions",
  ];

  const testimonials = [
    {
      name: "Alice Johnson",
      company: "FinTech Solutions Ltd.",
      quote:
        "The IT consulting services provided by VG Software helped us streamline our operations. We saw a 30% increase in efficiency!",
    },
    {
      name: "Mark Thompson",
      company: "Retail Enterprises Inc.",
      quote:
        "VG Software transformed our IT infrastructure, leading to significant cost savings and improved service delivery.",
    },
  ];

  const caseStudies = [
    {
      title: "Cloud Migration Project",
      description:
        "Successfully migrated a major enterprise system to the cloud, enhancing accessibility and collaboration among teams.",
    },
    {
      title: "Risk Assessment and Mitigation",
      description:
        "Conducted a comprehensive risk assessment for a healthcare provider, implementing strategies that reduced risks by 50%.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          IT Consulting Services - VG Software | Empowering Your Business
        </title>
        <meta
          name="description"
          content="Enhance your business operations with VG Software's expert IT consulting services. We provide tailored solutions that drive efficiency and innovation."
        />
        <meta
          name="keywords"
          content="IT consulting, technology solutions, business efficiency, cloud services, risk management"
        />
        <link
          rel="canonical"
          href="https://www.vgsoftware.tech/services/it-consulting"
        />
        <meta
          property="og:title"
          content="IT Consulting Services - VG Software"
        />
        <meta
          property="og:description"
          content="Transform your business operations with our expert IT consulting services. Tailored solutions for enhanced efficiency and innovation."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.vgsoftware.tech/services/it-consulting"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="IT Consulting Services - VG Software"
        />
        <meta
          name="twitter:description"
          content="Enhance your business operations with our expert IT consulting services. Tailored solutions for efficiency and growth."
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
              IT Consulting Services
            </motion.h1>
            <motion.p
              className="text-xl text-center mb-12 text-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Empowering your business with tailored IT solutions
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
              Our Consulting Process
            </h2>
            <div className="flex flex-wrap justify-center">
              {[
                "Assessment",
                "Strategy Development",
                "Implementation",
                "Support",
                "Review",
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
              Why Choose Us?
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
              How We Can Enhance Your Business Through IT Consulting
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
              Ready to Elevate Your Business with Expert IT Consulting?
            </h2>
            <p className="text-xl mb-12 text-white">
              Let’s work together to implement innovative IT solutions that
              drive success for your organization.
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

export default ITConsultingPage;
