import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import { z } from "zod";
import { Toaster, toast } from "react-hot-toast";

const serviceTypes = [
  "UI/UX Design",
  "Web Development",
  "Cloud Services",
  "SEO",
  "App Development",
  "Automation Services",
  "AI/ML",
  "Custom Software Development",
  "Graphic Design",
  "Cyber Security",
  "IT Consulting",
  "IoT Solutions",
  "Just Inquiries",
  "Discuss Project Needs",
  "Other",
] as const;

const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name (minimum 2 characters)"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^\+?[\d\s-]{10,}$/, "Please enter a valid phone number"),
  serviceType: z.enum(serviceTypes),
  message: z.string().min(150, "Message must be at least 150 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "Just Inquiries",
    message: "",
  });

  const [touched, setTouched] = useState<
    Record<keyof ContactFormData, boolean>
  >({
    name: false,
    email: false,
    phone: false,
    serviceType: false,
    message: false,
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const validateField = useCallback(
    (name: keyof ContactFormData, value: string): boolean => {
      try {
        if (name === "serviceType") {
          contactFormSchema.shape.serviceType.parse(value);
        } else {
          contactFormSchema.shape[name].parse(value);
        }
        setErrors((prev) => ({ ...prev, [name]: undefined }));
        return true;
      } catch (error) {
        if (error instanceof z.ZodError) {
          setErrors((prev) => ({ ...prev, [name]: error.errors[0].message }));
          return false;
        }
        return false;
      }
    },
    []
  );

  const validateAllFields = useCallback((): boolean => {
    try {
      contactFormSchema.parse(formData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  }, [formData]);

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (touched[name as keyof ContactFormData]) {
        validateField(name as keyof ContactFormData, value);
      }
    },
    [validateField, touched]
  );

  const handleBlur = useCallback(
    (name: keyof ContactFormData) => {
      setTouched((prev) => ({ ...prev, [name]: true }));
      validateField(name, formData[name]);
    },
    [formData, validateField]
  );

  React.useEffect(() => {
    const formIsValid = validateAllFields();
    setIsValid(formIsValid);
  }, [formData, validateAllFields]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) {
      // Show all validation errors
      setTouched({
        name: true,
        email: true,
        phone: true,
        serviceType: true,
        message: true,
      });
      validateAllFields();
      toast.error("Please fix the validation errors", {
        position: "bottom-left",
        duration: 3000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "Just Inquiries",
        message: "",
      });
      setTouched({
        name: false,
        email: false,
        phone: false,
        serviceType: false,
        message: false,
      });
      toast.success("Message sent successfully!", {
        position: "bottom-right",
        duration: 3000,
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, {
          position: "bottom-left",
          duration: 3000,
        });
      } else {
        toast.error("Failed to send message. Please try again.", {
          position: "bottom-left",
          duration: 3000,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit} className="p-8">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-orange-600 font-semibold mb-2"
          >
            Your Name *
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400" />
            <motion.div
              animate={
                errors.name && touched.name ? { x: [-10, 10, -10, 10, 0] } : {}
              }
              transition={{ duration: 0.4 }}
            >
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur("name")}
                className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.name && touched.name
                    ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200"
                    : "border-orange-300 bg-orange-50 focus:border-orange-500 focus:ring-orange-200"
                }`}
                placeholder="John Doe"
              />
            </motion.div>
            <AnimatePresence>
              {errors.name && touched.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-orange-600 font-semibold mb-2"
          >
            Your Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400" />
            <motion.div
              animate={
                errors.email && touched.email
                  ? { x: [-10, 10, -10, 10, 0] }
                  : {}
              }
              transition={{ duration: 0.4 }}
            >
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.email && touched.email
                    ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200"
                    : "border-orange-300 bg-orange-50 focus:border-orange-500 focus:ring-orange-200"
                }`}
                placeholder="john@example.com"
              />
            </motion.div>
            <AnimatePresence>
              {errors.email && touched.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block text-orange-600 font-semibold mb-2"
          >
            Your Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400" />
            <motion.div
              animate={
                errors.phone && touched.phone
                  ? { x: [-10, 10, -10, 10, 0] }
                  : {}
              }
              transition={{ duration: 0.4 }}
            >
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur("phone")}
                className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.phone && touched.phone
                    ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200"
                    : "border-orange-300 bg-orange-50 focus:border-orange-500 focus:ring-orange-200"
                }`}
                placeholder="+1 (123) 456-7890"
              />
            </motion.div>
            <AnimatePresence>
              {errors.phone && touched.phone && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.phone}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="serviceType"
            className="block text-orange-600 font-semibold mb-2"
          >
            Service Type *
          </label>
          <div className="relative">
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              onBlur={() => handleBlur("serviceType")}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 appearance-none cursor-pointer ${
                errors.serviceType && touched.serviceType
                  ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200"
                  : "border-orange-300 bg-orange-50 focus:border-orange-500 focus:ring-orange-200"
              }`}
            >
              {serviceTypes.map((service) => (
                <option key={service} value={service} className="py-2">
                  {service}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-5 h-5 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-orange-600 font-semibold mb-2"
          >
            Your Message *{" "}
            <span className="text-sm text-orange-400">
              (minimum 150 characters)
            </span>
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 text-orange-400" />
            <motion.div
              animate={
                errors.message && touched.message
                  ? { x: [-10, 10, -10, 10, 0] }
                  : {}
              }
              transition={{ duration: 0.4 }}
            >
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={() => handleBlur("message")}
                rows={4}
                className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                  errors.message && touched.message
                    ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200"
                    : "border-orange-300 bg-orange-50 focus:border-orange-500 focus:ring-orange-200"
                }`}
                placeholder="Tell us about your project or inquiry... (minimum 150 characters)"
              />
            </motion.div>
            <AnimatePresence>
              {errors.message && touched.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.button
          type="submit"
          className={`w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center ${
            !isValid || isSubmitting
              ? "opacity-50 cursor-not-allowed"
              : "hover:from-orange-600 hover:to-red-600 hover:shadow-lg"
          }`}
          disabled={!isValid || isSubmitting}
          whileHover={isValid && !isSubmitting ? { scale: 1.02 } : {}}
          whileTap={isValid && !isSubmitting ? { scale: 0.98 } : {}}
        >
          <span className="mr-2">
            {isSubmitting ? "Sending..." : "Send Message"}
          </span>
          <Send className="h-5 w-5" />
        </motion.button>
      </form>
    </>
  );
};

export default ContactForm;
