import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const resources = [
  {
    title: "Financial Planning and Support",
    content:
      "Get expert advice on managing budgets for IT projects, optimizing costs, and securing funding. Plan financial roadmaps for software development, cloud infrastructure, and other IT services to ensure long-term stability and growth.",
  },
  {
    title: "Expert Insights and Industry Trends",
    content:
      "Stay ahead of the curve by accessing the latest trends and innovations in the IT sector, including AI, cloud computing, and cybersecurity. Use expert recommendations to keep your business aligned with market demands and industry best practices.",
  },
  {
    title: "Leadership Development and Communication Skills",
    content:
      "Equip your team with leadership tools for project management, agile practices, and technical collaboration. Enhance communication strategies to foster seamless interactions between developers, stakeholders, and clients.",
  },
  {
    title: "Networking Opportunities and Strategic Partnerships",
    content:
      "Expand your business reach by building relationships with technology providers, software vendors, and industry leaders. Participate in conferences, webinars, and networking events to form meaningful partnerships.",
  },
  {
    title: "Sales Enablement and Marketing Support",
    content:
      "Receive guidance on crafting targeted marketing campaigns for IT services such as cloud solutions, consulting, and software development. Leverage digital tools and best practices to generate leads, increase visibility, and grow revenue.",
  },
];

const ResourcesSupport = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">
          Resources and Support
        </h2>
        <div className="max-w-3xl mx-auto">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full p-4 bg-white rounded-lg shadow-md focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-semibold text-primary">
                  {resource.title}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary" />
                ) : (
                  <ChevronDown className="text-primary" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="p-4 bg-white border-t border-gray-200"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600">{resource.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSupport;
