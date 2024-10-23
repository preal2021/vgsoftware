// import React, { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const SignUp: React.FC = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <>
//       <Head>
//         <title>Sign Up - VG Software</title>
//         <meta
//           name="description"
//           content="Join VG Software and begin your journey with us. Sign up now to access our innovative software solutions and services."
//         />
//       </Head>
//       <Header />
//       <main className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 py-12">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row items-center justify-between">
//             <motion.div
//               className="w-full lg:w-1/2 mb-8 lg:mb-0"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
//                 Begin Your <span className="text-red-500">Innovative</span>{' '}
//                 Journey
//               </h1>
//               <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-3xl shadow-2xl">
//                 <form>
//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div>
//                       <label
//                         htmlFor="firstName"
//                         className="block text-orange-600 font-semibold mb-2"
//                       >
//                         First Name
//                       </label>
//                       <input
//                         type="text"
//                         id="firstName"
//                         placeholder="John"
//                         className="w-full px-4 py-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-orange-50"
//                       />
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="lastName"
//                         className="block text-orange-600 font-semibold mb-2"
//                       >
//                         Last Name
//                       </label>
//                       <input
//                         type="text"
//                         id="lastName"
//                         placeholder="Doe"
//                         className="w-full px-4 py-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-orange-50"
//                       />
//                     </div>
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="email"
//                       className="block text-orange-600 font-semibold mb-2"
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       placeholder="john.doe@example.com"
//                       className="w-full px-4 py-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-orange-50"
//                     />
//                   </div>
//                   <div className="mb-6 relative">
//                     <label
//                       htmlFor="password"
//                       className="block text-orange-600 font-semibold mb-2"
//                     >
//                       Password
//                     </label>
//                     <input
//                       type={showPassword ? 'text' : 'password'}
//                       id="password"
//                       placeholder="Enter at least 8+ characters"
//                       className="w-full px-4 py-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-orange-50"
//                     />
//                     <button
//                       type="button"
//                       onClick={togglePasswordVisibility}
//                       className="absolute right-3 top-10 text-orange-500"
//                     >
//                       {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                     </button>
//                   </div>
//                   <div className="mb-6">
//                     <label className="flex items-center text-orange-700">
//                       <input type="checkbox" className="mr-2 text-orange-500" />
//                       I agree to the Terms of Use & Privacy Policy
//                     </label>
//                   </div>
//                   <motion.button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-colors"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Sign Up
//                   </motion.button>
//                 </form>

//                 <div className="mt-8">
//                   <p className="text-center text-gray-600 mb-4">
//                     Or sign up with
//                   </p>
//                   <div className="grid grid-cols-2 gap-4">
//                     <motion.button
//                       className="flex items-center justify-center px-4 py-2 border border-orange-300 rounded-xl bg-white text-orange-600 hover:bg-orange-50 transition-colors"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <img
//                         src="/google-icon.svg"
//                         alt="Google"
//                         className="w-5 h-5 mr-2"
//                       />
//                       Google
//                     </motion.button>
//                     <motion.button
//                       className="flex items-center justify-center px-4 py-2 border border-orange-300 rounded-xl bg-white text-orange-600 hover:bg-orange-50 transition-colors"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <img
//                         src="/github-icon.svg"
//                         alt="GitHub"
//                         className="w-5 h-5 mr-2"
//                       />
//                       GitHub
//                     </motion.button>
//                     <motion.button
//                       className="flex items-center justify-center px-4 py-2 border border-orange-300 rounded-xl bg-white text-orange-600 hover:bg-orange-50 transition-colors"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <img
//                         src="/linkedin-icon.svg"
//                         alt="LinkedIn"
//                         className="w-5 h-5 mr-2"
//                       />
//                       LinkedIn
//                     </motion.button>
//                     <motion.button
//                       className="flex items-center justify-center px-4 py-2 border border-orange-300 rounded-xl bg-white text-orange-600 hover:bg-orange-50 transition-colors"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <img
//                         src="/apple-icon.svg"
//                         alt="Apple"
//                         className="w-5 h-5 mr-2"
//                       />
//                       Apple
//                     </motion.button>
//                   </div>
//                 </div>

//                 <div className="mt-6 text-center">
//                   <span className="text-gray-600">
//                     Already have an account?
//                   </span>{' '}
//                   <Link
//                     href="/login"
//                     className="text-orange-600 font-semibold hover:text-orange-700"
//                   >
//                     Log In
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//             <motion.div
//               className="w-full lg:w-1/2 lg:pl-12"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <div className="relative w-full h-96">
//                 <Image
//                   src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//                   alt="Team Collaboration"
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-3xl shadow-2xl"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-red-500 opacity-20 rounded-3xl"></div>
//                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-b-3xl">
//                   <h2 className="text-2xl font-bold text-orange-600 mb-4">
//                     Why Join Us?
//                   </h2>
//                   <ul className="space-y-2">
//                     {[
//                       'Access to cutting-edge technologies',
//                       'Collaborative and innovative work environment',
//                       'Opportunities for professional growth',
//                       'Work on exciting and impactful projects',
//                     ].map((benefit, index) => (
//                       <motion.li
//                         key={index}
//                         className="flex items-start"
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
//                       >
//                         <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
//                         <span className="text-orange-800">{benefit}</span>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default SignUp;
