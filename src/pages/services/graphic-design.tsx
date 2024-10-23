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

const GraphicDesignPage = () => {
  const features = [
    {
      icon: Palette,
      title: "Creative Visuals",
      description:
        "We create stunning visuals that capture attention and convey your brand message effectively.",
    },
    {
      icon: Layers,
      title: "Brand Identity",
      description:
        "Our designs help establish a strong and cohesive brand identity across all platforms.",
    },
    {
      icon: Users,
      title: "Audience Engagement",
      description:
        "Engage your audience with visually appealing graphics that resonate with them.",
    },
    {
      icon: Zap,
      title: "Quick Turnaround",
      description:
        "We deliver high-quality designs promptly, ensuring your project stays on track.",
    },
  ];

  const whyChooseUs = [
    {
      icon: MousePointer,
      title: "Enhancing Brand Identity",
      description:
        "Our graphic design services focus on creating unique and memorable visuals that align with your brand ethos, making a lasting impression on your audience.",
      benefits: [
        "Stronger brand recognition and loyalty",
        "Effective communication of brand values",
        "Increased audience engagement and interest",
      ],
    },
    {
      icon: Eye,
      title: "Innovative Designs",
      description:
        "We push creative boundaries to deliver innovative graphic solutions that not only look great but also serve a strategic purpose.",
      benefits: [
        "Stand out in a crowded marketplace",
        "Creative approaches tailored to your needs",
        "Improved visual storytelling and messaging",
      ],
    },
    {
      icon: Target,
      title: "Data-Driven Design",
      description:
        "Using analytics and market research, we create designs that meet your audience's preferences and behaviors, ensuring effectiveness.",
      benefits: [
        "Tailored designs based on audience insights",
        "Continuous improvement through feedback",
        "Maximized impact and reach of your visuals",
      ],
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Compatibility",
      description:
        "Our designs are adaptable to various platforms, ensuring consistency and coherence across digital and print media.",
      benefits: [
        "Unified brand experience across all channels",
        "Seamless integration with your marketing strategies",
        "Enhanced user engagement across different formats",
      ],
    },
  ];

  const helpBusinessPoints = [
    "Boost your marketing with visually compelling graphics",
    "Enhance your brand identity with cohesive design",
    "Improve audience retention through engaging visuals",
    "Reduce costs with efficient design processes",
    "Differentiate from competitors with unique graphics",
    "Promote accessibility and inclusivity in design",
  ];

  const testimonials = [
    {
      name: "John Doe",
      company: "Creative Minds Co.",
      quote:
        "VG Software's graphic design services elevated our brand image significantly. The visuals are stunning and effective!",
    },
    {
      name: "Jane Smith",
      company: "Brand Builders Inc.",
      quote:
        "The creativity and attention to detail in VG Software’s designs made a huge impact on our marketing efforts. Highly recommended!",
    },
  ];

  const caseStudies = [
    {
      title: "Brand Identity Overhaul",
      description:
        "Revamped brand visuals resulting in a 50% increase in customer recognition and loyalty.",
    },
    {
      title: "Marketing Campaign Graphics",
      description:
        "Designed promotional materials that boosted campaign engagement by 40%.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Graphic Design Services - VG Software | Crafting Visual Masterpieces
        </title>
        <meta
          name="description"
          content="Elevate your brand with VG Software's expert graphic design services. We create stunning visuals that engage and inspire."
        />
        <meta
          name="keywords"
          content="graphic design, visual identity, branding, digital design, marketing graphics"
        />
        <link
          rel="canonical"
          href="https://www.vgsoftware.com/services/graphic-design"
        />
        <meta
          property="og:title"
          content="Graphic Design Services - VG Software"
        />
        <meta
          property="og:description"
          content="Transform your visual identity with our expert graphic design services. Engage your audience and enhance brand recognition."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.vgsoftware.com/services/graphic-design"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Graphic Design Services - VG Software"
        />
        <meta
          name="twitter:description"
          content="Elevate your brand's visual presence with our professional graphic design services."
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
              Graphic Design Services
            </motion.h1>
            <motion.p
              className="text-xl text-center mb-12 text-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Crafting visuals that captivate and engage
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
                "Conceptualization",
                "Sketching",
                "Design Development",
                "Client Feedback",
                "Finalization",
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white text-orange-600 m-2 p-4 rounded-full font-semibold"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#FFF",
                    color: "#EA580C",
                  }}
                >
                  {step}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
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
                  <p className="text-orange-700 mb-2">{item.description}</p>
                  <ul className="list-disc pl-5">
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
              How We Can Help Your Business with Graphic Design
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
              Ready to Elevate Your Brand with Stunning Graphics?
            </h2>
            <p className="text-xl mb-12 text-white">
              Let’s create eye-catching designs that resonate with your audience
              and enhance your brand identity.
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

export default GraphicDesignPage;
