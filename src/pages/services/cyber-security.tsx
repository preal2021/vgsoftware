import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Lock,
  Shield,
  UserCheck,
  Bug,
  ShieldOff,
  Key,
  Globe,
  FileText,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CyberSecurityPage = () => {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description:
        "We provide robust security measures to protect your digital assets and sensitive information.",
    },
    {
      icon: UserCheck,
      title: "Proactive Threat Detection",
      description:
        "Our systems monitor for potential threats in real time, ensuring swift responses to any breaches.",
    },
    {
      icon: Lock,
      title: "Data Privacy Assurance",
      description:
        "We prioritize the privacy of your data, implementing stringent protocols to prevent unauthorized access.",
    },
    {
      icon: Bug,
      title: "Vulnerability Assessments",
      description:
        "Our team regularly conducts assessments to identify and mitigate potential security weaknesses.",
    },
  ];

  const whyChooseUs = [
    {
      icon: ShieldOff,
      title: "24/7 Security Monitoring",
      description:
        "Our dedicated team continuously monitors your systems to detect and respond to threats before they escalate.",
      benefits: [
        "Minimized risk of data breaches",
        "Rapid incident response",
        "Enhanced peace of mind for your organization",
      ],
    },
    {
      icon: Globe,
      title: "Global Compliance",
      description:
        "We ensure your security practices comply with global standards and regulations, safeguarding your business's reputation.",
      benefits: [
        "Adherence to GDPR, HIPAA, and more",
        "Reduced risk of legal penalties",
        "Increased trust from clients and stakeholders",
      ],
    },
    {
      icon: Key,
      title: "Customized Security Solutions",
      description:
        "We tailor our security strategies to meet your specific needs and challenges, ensuring maximum effectiveness.",
      benefits: [
        "Flexibility to adapt to changing threats",
        "Alignment with your business goals",
        "Cost-effective security measures",
      ],
    },
    {
      icon: FileText,
      title: "Security Awareness Training",
      description:
        "We provide training for your staff to recognize and respond to security threats, creating a culture of security within your organization.",
      benefits: [
        "Reduced risk of human error",
        "Empowered employees who recognize threats",
        "Improved overall security posture",
      ],
    },
  ];

  const helpBusinessPoints = [
    "Mitigate risks through proactive security measures",
    "Protect sensitive data and customer information",
    "Ensure compliance with industry regulations",
    "Enhance business reputation and customer trust",
    "Reduce potential financial losses from breaches",
    "Implement effective incident response strategies",
  ];

  const testimonials = [
    {
      name: "Alice Johnson",
      company: "Finance Secure Corp.",
      quote:
        "The security solutions from VG Software have transformed our approach to cyber threats. We've seen a dramatic reduction in incidents!",
    },
    {
      name: "Mark Thompson",
      company: "Tech Solutions Ltd.",
      quote:
        "VG Software’s expertise in cyber security has provided us with confidence. Our systems are safer than ever before!",
    },
  ];

  const caseStudies = [
    {
      title: "Healthcare Data Protection",
      description:
        "Achieved 100% compliance with HIPAA regulations while safeguarding sensitive patient data from breaches.",
    },
    {
      title: "E-commerce Security Upgrade",
      description:
        "Enhanced transaction security, resulting in a 60% decrease in fraudulent activities on our platform.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Cyber Security Services - VG Software | Safeguarding Your Digital
          Assets
        </title>
        <meta
          name="description"
          content="Protect your business with VG Software's expert cyber security services. We ensure comprehensive protection against threats, keeping your data safe."
        />
        <meta
          name="keywords"
          content="cyber security, data protection, threat detection, security compliance, vulnerability assessment"
        />
        <link
          rel="canonical"
          href="https://www.vgsoftware.tech/services/cyber-security"
        />
        <meta
          property="og:title"
          content="Cyber Security Services - VG Software"
        />
        <meta
          property="og:description"
          content="Ensure your business's safety with VG Software's cyber security services. Protect your data and mitigate risks effectively."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.vgsoftware.tech/services/cyber-security"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cyber Security Services - VG Software"
        />
        <meta
          name="twitter:description"
          content="Protect your digital assets with our comprehensive cyber security services, tailored to meet your business needs."
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
              Cyber Security Services
            </motion.h1>
            <motion.p
              className="text-xl text-center mb-12 text-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Safeguarding your digital assets against evolving threats
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
              Our Cyber Security Process
            </h2>
            <div className="flex flex-wrap justify-center">
              {[
                "Risk Assessment",
                "Security Planning",
                "Implementation",
                "Monitoring",
                "Response Strategy",
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white text-orange-600 m-2 p-4 rounded-full font-semibold"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255, 165, 0, 0.1)",
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-orange-700 mb-4">{item.description}</p>
                  <h4 className="font-bold">Benefits:</h4>
                  <ul className="list-disc ml-5">
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

        <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-orange-100 to-red-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">
              How We Help Your Business
            </h2>
            <ul className="list-disc list-inside text-orange-700">
              {helpBusinessPoints.map((point, index) => (
                <li key={index} className="mb-2">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="relative z-10 py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">
              Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <blockquote className="italic mb-4 text-red-600">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-orange-600">{testimonial.company}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-orange-200 to-red-200">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">
              Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-orange-700">{caseStudy.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-4 text-orange-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get Started Today
            </motion.h2>
            <motion.p
              className="text-xl mb-8 text-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact us to discuss how we can help you enhance your cyber
              security.
            </motion.p>
            <motion.a
              href="/contact"
              className="bg-orange-600 text-white py-2 px-6 rounded hover:bg-orange-700 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Contact Us <ArrowRight className="inline ml-2" />
            </motion.a>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
};

export default CyberSecurityPage;
