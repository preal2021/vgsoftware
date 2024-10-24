import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Search,
  TrendingUp,
  BarChart,
  Globe,
  Link2,
  PieChart,
  MousePointer,
  Target,
  Smartphone,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SEOPage = () => {
  const features = [
    {
      icon: Search,
      title: "Comprehensive Keyword Research",
      description:
        "We identify the most relevant keywords to boost your search engine ranking and attract the right audience.",
    },
    {
      icon: TrendingUp,
      title: "On-Page Optimization",
      description:
        "Our on-page SEO strategies enhance your website’s structure and content for better visibility.",
    },
    {
      icon: Link2,
      title: "Link Building & Authority",
      description:
        "We help build high-quality backlinks to improve your domain authority and search rankings.",
    },
    {
      icon: PieChart,
      title: "Performance Monitoring & Reporting",
      description:
        "We provide regular insights and track your site’s SEO performance to ensure continuous improvement.",
    },
  ];

  const whyChooseUs = [
    {
      icon: MousePointer,
      title: "Boost Organic Traffic",
      description:
        "Our SEO services are designed to drive organic traffic, increasing your online visibility and bringing in more leads.",
      benefits: [
        "Higher search engine rankings",
        "Increased website traffic",
        "Enhanced user engagement",
      ],
    },
    {
      icon: Globe,
      title: "Stay Ahead of Competitors",
      description:
        "We use advanced SEO tools and techniques to keep your website ahead of the competition in search results.",
      benefits: [
        "Improved brand authority",
        "Greater market share",
        "Increased conversion opportunities",
      ],
    },
    {
      icon: Target,
      title: "Data-Driven SEO Strategies",
      description:
        "Our SEO approach leverages analytics to tailor strategies based on market trends and user behavior.",
      benefits: [
        "Optimized keyword targeting",
        "Improved campaign effectiveness",
        "ROI-focused SEO strategies",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile SEO Optimization",
      description:
        "We ensure your site offers a seamless experience across all devices, enhancing mobile search performance.",
      benefits: [
        "Better mobile search rankings",
        "Improved user experience on all screens",
        "Increased mobile conversions",
      ],
    },
  ];

  const helpBusinessPoints = [
    "Increase visibility on search engines",
    "Drive more organic traffic to your site",
    "Boost brand credibility and authority",
    "Improve conversion rates with optimized content",
    "Lower customer acquisition costs with organic growth",
    "Stay competitive with evolving SEO practices",
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      company: "Tech Growth Solutions",
      quote:
        "VG Software's SEO strategies doubled our organic traffic within three months. Their data-driven approach works wonders!",
    },
    {
      name: "Emily Davis",
      company: "Online Retail Experts",
      quote:
        "The SEO campaign by VG Software has been a game-changer. Our site is ranking higher than ever, and conversions have significantly increased!",
    },
  ];

  const caseStudies = [
    {
      title: "E-commerce SEO Success",
      description:
        "Achieved a 40% increase in organic sales by optimizing product pages and category structures.",
    },
    {
      title: "SEO Campaign for Startups",
      description:
        "Boosted visibility by 60% through targeted keyword campaigns and effective link-building strategies.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          SEO Services - VG Software | Maximize Your Online Presence
        </title>
        <meta
          name="description"
          content="Elevate your search engine rankings with VG Software's expert SEO services. We specialize in keyword research, on-page optimization, and link-building strategies to grow your business."
        />
        <meta
          name="keywords"
          content="SEO, search engine optimization, keyword research, link building, on-page SEO, digital marketing"
        />
        <link rel="canonical" href="https://www.vgsoftware.tech/services/seo" />
        <meta property="og:title" content="SEO Services - VG Software" />
        <meta
          property="og:description"
          content="Maximize your online visibility with our expert SEO services. Drive traffic, increase conversions, and grow your business."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.vgsoftware.tech/services/seo"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO Services - VG Software" />
        <meta
          name="twitter:description"
          content="Achieve top search rankings with VG Software's data-driven SEO strategies. Grow your business with effective SEO solutions."
        />
      </Head>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 overflow-hidden">
        {/* Background animations */}
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
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-red-300 opacity-50"
          animate={{ scale: [1, 1.3, 1], rotate: [0, -180, -360] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Rest of the page sections */}
        <section className="relative z-10 py-20 px-4">
          <div className="container mx-auto">
            <motion.h1
              className="text-5xl font-bold text-center mb-8 text-orange-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              SEO Services
            </motion.h1>
            <motion.p
              className="text-xl text-center mb-12 text-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Empower your digital presence with results-driven SEO strategies.
            </motion.p>

            {/* Features */}
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
              Maximize Business Growth with Strategic SEO Services
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
              Unlock the full potential of your website with tailored SEO
              strategies that enhance visibility and deliver measurable results.
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

export default SEOPage;
