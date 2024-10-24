import React from "react";
import Link from "next/link";
import { Code2, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Logo and Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">VG Software</span>
            </Link>
            <p className="text-sm text-gray-400">
              Innovative software solutions for your business needs.
            </p>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label="Learn About Us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label="View Careers"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label="Contact Us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected Section (Right Aligned) */}
          <div className="md:col-start-4">
            <h3 className="font-semibold mb-4">Stay Connected</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 VG Software. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
