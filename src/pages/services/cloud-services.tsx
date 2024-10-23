import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  Shield,
  Activity,
  Database,
  Globe,
  Cpu,
  UploadCloud,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CloudServicesPage = () => {
  const services = [
    {
      icon: Cloud,
      title: "Scalable Cloud Infrastructure",
      description:
        "We provide cloud solutions that grow with your business, ensuring seamless scalability.",
    },
    {
      icon: Server,
      title: "Reliable Cloud Hosting",
      description:
        "Our cloud hosting services guarantee maximum uptime and high availability for your applications.",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description:
        "Protect your data with industry-standard encryption and cloud security protocols.",
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description:
        "Track the performance and health of your cloud systems in real-time with our monitoring tools.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Database,
      title: "Efficient Data Management",
      description:
        "Our cloud services include secure and efficient data storage solutions, helping businesses manage their data effortlessly.",
      benefits: [
        "Automated backups and disaster recovery",
        "Improved data accessibility and scalability",
        "Cost-effective storage solutions",
      ],
    },
    {
      icon: Cpu,
      title: "High-Performance Computing",
      description:
        "Leverage powerful cloud computing resources to run complex tasks and applications efficiently.",
      benefits: [
        "Faster processing and task execution",
        "Support for AI, ML, and big data applications",
        "Optimized resource allocation",
      ],
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description:
        "Our cloud solutions ensure fast and reliable access to your applications and services worldwide.",
      benefits: [
        "Reduced latency with global servers",
        "Better collaboration across regions",
        "Seamless integration with cloud ecosystems",
      ],
    },
    {
      icon: UploadCloud,
      title: "Seamless Migration",
      description:
        "We provide smooth cloud migration services to help businesses transition without disruption.",
      benefits: [
        "Minimal downtime during migration",
        "Expert support and consultation",
        "Preserving data integrity throughout the process",
      ],
    },
  ];

  const helpBusinessPoints = [
    "Reduce infrastructure costs with cloud solutions",
    "Enhance data security and compliance",
    "Improve business agility and scalability",
    "Ensure business continuity with reliable backups",
    "Boost performance with optimized computing power",
    "Enable remote work with cloud access anywhere",
  ];

  const testimonials = [
    {
      name: "Mark Johnson",
      company: "Innovate Solutions",
      quote:
        "VG Software's cloud infrastructure transformed our operations. We reduced costs by 30% and improved uptime.",
    },
    {
      name: "Lisa Taylor",
      company: "FinTech Leaders",
      quote:
        "Their cloud security services gave us peace of mind. Our clients trust us more, thanks to VG Software.",
    },
  ];

  const caseStudies = [
    {
      title: "Cloud Migration Success",
      description:
        "Successfully migrated a legacy system to the cloud, reducing operational costs by 40%.",
    },
    {
      title: "Improved Global Access",
      description:
        "Enabled global teams to collaborate seamlessly with cloud-hosted applications, boosting productivity by 25%.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Cloud Services - VG Software | Scalable, Secure Cloud Solutions
        </title>
        <meta
          name="description"
          content="Leverage VG Software's cloud services to scale your business, enhance security, and reduce costs with cutting-edge cloud solutions."
        />
        <meta
          name="keywords"
          content="cloud services, cloud computing, cloud hosting, cloud migration, cloud security"
        />
        <link
          rel="canonical"
          href="https://www.vgsoftware.com/services/cloud-services"
        />
        <meta property="og:title" content="Cloud Services - VG Software" />
        <meta
          property="og:description"
          content="Explore VG Software's cloud services for scalable and secure solutions that enhance business performance."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.vgsoftware.com/services/cloud-services"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cloud Services - VG Software" />
        <meta
          name="twitter:description"
          content="Optimize your business with scalable cloud services from VG Software. Enhance security and reduce costs today."
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
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-red-300 opacity-50"
          animate={{ scale: [1, 1.3, 1], rotate: [0, -180, -360] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />

        <section className="relative z-10 py-20 px-4">
          <div className="container mx-auto">
            <motion.h1
              className="text-5xl font-bold text-center mb-8 text-orange-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Cloud Services
            </motion.h1>
            <motion.p
              className="text-xl text-center mb-12 text-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Empower your business with scalable and secure cloud solutions
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <service.icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-red-600">
                    {service.title}
                  </h3>
                  <p className="text-orange-700">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Cloud Services Process
            </h2>
            <div className="flex flex-wrap justify-center">
              {[
                "Needs Assessment",
                "Cloud Architecture Design",
                "Deployment Planning",
                "Migration Strategy",
                "Ongoing Support",
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
              Why Choose Our Cloud Services?
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
              How We Can Help Your Business with Cloud Services
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
              Ready to Elevate Your Business with Cloud Solutions?
            </h2>
            <p className="text-xl mb-12 text-white">
              Let's implement scalable and secure cloud services that drive
              growth and efficiency for your organization.
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

export default CloudServicesPage;
