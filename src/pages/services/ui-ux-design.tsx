import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Palette,
  Layers,
  Users,
  Zap,
  MousePointer,
  Eye,
  Target,
  Smartphone,
  Headphones,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UIUXDesignPage = () => {
  const features = [
    {
      icon: Palette,
      title: "Intuitive Interfaces",
      description:
        "We design user interfaces that are easy to navigate and visually appealing.",
    },
    {
      icon: Layers,
      title: "User-Centric Approach",
      description:
        "Our designs are based on thorough research and understanding of user needs.",
    },
    {
      icon: Users,
      title: "Improved User Engagement",
      description:
        "Enhance user satisfaction and increase conversion rates with our designs.",
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description:
        "We quickly iterate and refine designs based on user feedback and testing.",
    },
  ];

  const whyChooseUs = [
    {
      icon: MousePointer,
      title: "Enhancing User Experience",
      description:
        "Our UI/UX design services focus on creating intuitive and engaging interfaces that resonate with your target audience. We ensure that your digital products are not just visually appealing but also highly functional and easy to use.",
      benefits: [
        "Increased user satisfaction and loyalty",
        "Higher conversion rates and sales",
        "Reduced bounce rates and increased time on site",
      ],
    },
    {
      icon: Eye,
      title: "Driving Innovation",
      description:
        "We don't just follow trends; we set them. Our UI/UX design team stays at the forefront of design innovation, incorporating cutting-edge techniques and technologies to give your business a competitive edge.",
      benefits: [
        "Unique and memorable user experiences",
        "Differentiation from competitors",
        "Improved brand perception and recognition",
      ],
    },
    {
      icon: Target,
      title: "Data-Driven Design Decisions",
      description:
        "We leverage analytics and user data to make informed design decisions. This approach ensures that our designs not only look good but also perform well in real-world scenarios.",
      benefits: [
        "Optimized user flows based on actual user behavior",
        "Continuous improvement through data analysis",
        "Measurable ROI on design investments",
      ],
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Consistency",
      description:
        "Our designs maintain consistency across various devices and platforms, ensuring a seamless user experience whether on desktop, mobile, or tablet.",
      benefits: [
        "Unified brand experience across all touchpoints",
        "Improved user adoption and retention",
        "Streamlined development process",
      ],
    },
  ];

  const helpBusinessPoints = [
    "Increase conversions through optimized user journeys",
    "Enhance brand perception with visually stunning interfaces",
    "Improve user satisfaction and loyalty",
    "Reduce development costs through efficient design processes",
    "Stay ahead of competitors with innovative design solutions",
    "Boost accessibility and inclusivity for a wider audience",
  ];

  const testimonials = [
    {
      name: "John Doe",
      company: "Tech Innovators Inc.",
      quote:
        "VG Software's UI/UX design services transformed our app. User engagement skyrocketed, and our conversion rates improved by 40%!",
    },
    {
      name: "Jane Smith",
      company: "E-commerce Giants",
      quote:
        "The intuitive design provided by VG Software made our online store a pleasure to use. Our customers love the new experience!",
    },
  ];

  const caseStudies = [
    {
      title: "E-commerce Redesign",
      description:
        "Increased conversion rates by 35% through an intuitive checkout process and personalized product recommendations.",
    },
    {
      title: "Mobile App Overhaul",
      description:
        "Improved user retention by 50% with a sleek, user-friendly interface and streamlined navigation.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          UI/UX Design Services - VG Software | Enhancing Digital Experiences
        </title>
        <meta
          name="description"
          content="Elevate your digital presence with VG Software's expert UI/UX design services. We create intuitive, engaging, and user-centric designs that drive results and improve user satisfaction."
        />
        <meta
          name="keywords"
          content="UI/UX design, user experience, user interface, digital design, web design, mobile app design"
        />
        <link
          rel="canonical"
          href="https://www.vgsoftware.com/services/ui-ux-design"
        />
        <meta
          property="og:title"
          content="UI/UX Design Services - VG Software"
        />
        <meta
          property="og:description"
          content="Craft captivating digital experiences with our expert UI/UX design services. Boost engagement and conversions with user-centric designs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.vgsoftware.com/services/ui-ux-design"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="UI/UX Design Services - VG Software"
        />
        <meta
          name="twitter:description"
          content="Elevate your digital presence with our expert UI/UX design services. Create intuitive and engaging user experiences."
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
              UI/UX Design Services
            </motion.h1>
            <motion.p
              className="text-xl text-center mb-12 text-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Crafting digital experiences that captivate and convert
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
              Our Design Process
            </h2>
            <div className="flex flex-wrap justify-center">
              {[
                "Research",
                "Wireframing",
                "Prototyping",
                "User Testing",
                "Implementation",
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
              Why Choose Our UI/UX Design Services?
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
              How We Can Help Your Business Using UI/UX Design
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
              Ready to Transform Your Digital Experience?
            </h2>
            <p className="text-xl mb-12 text-white">
              Let's create intuitive and engaging designs that drive results for
              your business.
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

export default UIUXDesignPage;
