import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
// import Clients from './components/Clients'
// import Blog from './components/Blog'
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Features />
      {/* <Clients /> */}
      {/* <Blog /> */}
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
