import React from "react";
import Link from "next/link";
import { Code2, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">VG Software</span>
            </Link>
            <p className="text-sm text-gray-400">
              Innovative software solutions for your business needs.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label="View Product Features" // aria-label for accessibility
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label="View Product Pricing" // aria-label for accessibility
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label="Read Case Studies" // aria-label for accessibility
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label="Learn About Us" // aria-label for accessibility
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label="View Careers" // aria-label for accessibility
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label="Contact Us" // aria-label for accessibility
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Stay Connected</h3>
            {/* <form className="mb-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-full w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded-r-full hover:bg-orange-600 transition-colors"
                aria-label="Subscribe to our newsletter" // aria-label for accessibility
              >
                Subscribe
              </button>
            </form> */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Follow us on Facebook" // aria-label for accessibility
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Follow us on Twitter" // aria-label for accessibility
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Follow us on LinkedIn" // aria-label for accessibility
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Follow us on Instagram" // aria-label for accessibility
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 VG Software. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
