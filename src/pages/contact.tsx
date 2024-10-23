import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      text: "Shivaji udyam Y P Powar Nagar, Jawahar Nagar, Kolhapur, Maharashtra 416012",
    },
    { icon: Mail, text: "vighnarajendrasoftware@gmail.com" },
    { icon: Phone, text: "(+91) 76206-79565" },
    { icon: Clock, text: "Monday - Friday: 9:00 AM - 6:00 PM IST" },
  ];

  const socialLinks = [
    {
      href: "https://facebook.com",
      icon: Facebook,
      label: "Facebook",
    },
    {
      href: "https://twitter.com",
      icon: Twitter,
      label: "Twitter",
    },
    {
      href: "https://linkedin.com",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://instagram.com",
      icon: Instagram,
      label: "Instagram",
    },
  ];

  return (
    <>
      <Head>
        <title>Contact Us - VG Software</title>
        <meta
          name="description"
          content="Get in touch with VG Software for innovative software solutions. We're here to answer your questions and discuss your project needs."
        />
      </Head>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-orange-100 via-red-100 to-yellow-200">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-orange-600 mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-xl text-center text-red-700 mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're here to help! Reach out to us for any inquiries or to
              discuss your project needs.
            </motion.p>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <motion.div
                className="w-full lg:w-2/3 bg-white rounded-3xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-gradient-to-r from-orange-400 to-red-500 p-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                  <p>We'll get back to you as soon as possible!</p>
                </div>
                <ContactForm />
              </motion.div>

              <motion.div
                className="w-full lg:w-1/3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="bg-white rounded-3xl shadow-xl p-8">
                  <h3 className="text-2xl font-semibold text-orange-600 mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <item.icon className="text-red-500 mr-4 flex-shrink-0 mt-1 w-6 h-6" />
                        <p className="text-gray-700">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">
                      Connect With Us
                    </h4>
                    <div className="flex space-x-4">
                      {socialLinks.map(({ href, icon: Icon, label }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-orange-100 p-3 rounded-full text-orange-500 hover:bg-orange-200 transition-colors"
                          aria-label={label}
                        >
                          <Icon className="w-6 h-6" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <FAQSection />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
