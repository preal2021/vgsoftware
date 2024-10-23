import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How do I contact VG Software for support?",
    answer: "You can reach our support team by emailing support@vgsoftware.tech or by calling our customer service line at (+91) 76206-79565. We also offer live chat support on our website during business hours."
  },
  {
    question: "What services does VG Software offer?",
    answer: "VG Software offers a wide range of services including custom software development, cloud solutions, AI/ML integration, UI/UX design, mobile app development, and IT consulting. Visit our Services page for a complete list of offerings."
  },
  {
    question: "How can I request a consultation?",
    answer: "To request a consultation, simply fill out the contact form on this page or call us directly. One of our representatives will get back to you within 24 hours to schedule a consultation at your convenience."
  },
  {
    question: "How do I join VG Software's newsletter?",
    answer: "You can join our newsletter by entering your email address in the subscription box located in the footer of our website. You'll receive updates on our latest services, industry insights, and exclusive offers."
  }
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b border-orange-200 py-4"
      initial={false}
      animate={{ backgroundColor: isOpen ? "rgba(255, 237, 213, 0.5)" : "transparent" }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-orange-700">{question}</span>
        {isOpen ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-orange-500" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mt-2 text-orange-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-100 to-red-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-orange-600 mb-12 text-center">Frequently Asked Questions</h2>
        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
