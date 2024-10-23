import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
// import Showcase from "../components/Showcase";
// import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>VG Software - Innovative Software Solutions</title>
        <meta
          name="description"
          content="VG Software provides cutting-edge software solutions to empower businesses. Discover our custom development, AI integration, cybersecurity, and performance optimization services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />
        <Hero />
        <About />
        <Features />
        {/* <Showcase /> */}
        {/* <Testimonials /> */}
        <CTA />
        <Footer />
      </main>
    </>
  );
}
