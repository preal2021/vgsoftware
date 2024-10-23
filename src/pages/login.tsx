// import React, { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Eye, EyeOff, ArrowRight } from 'lucide-react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const Login: React.FC = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <>
//       <Head>
//         <title>Login - VG Software</title>
//         <meta
//           name="description"
//           content="Log in to your VG Software account to access our innovative software solutions and services."
//         />
//       </Head>
//       <Header />
//       <main className="min-h-screen bg-gradient-to-br from-orange-100 via-red-100 to-yellow-200 py-12">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row items-center justify-between">
//             <motion.div
//               className="w-full lg:w-1/2 mb-8 lg:mb-0"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
//                 Welcome Back, Innovator!
//               </h1>
//               <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-3xl shadow-2xl">
//                 <form>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="email"
//                       className="block text-orange-600 font-semibold mb-2"
//                     >
//                       Business Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       placeholder="yourbusiness@example.com"
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
//                       placeholder="Enter your password"
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
//                   <div className="mb-6 text-right">
//                     <Link
//                       href="/forgot-password"
//                       className="text-orange-600 hover:text-orange-700"
//                     >
//                       Forgot Password?
//                     </Link>
//                   </div>
//                   <motion.button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-colors"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Log In
//                   </motion.button>
//                 </form>

//                 <div className="mt-8">
//                   <p className="text-center text-gray-600 mb-4">
//                     Or log in with
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
//                   <span className="text-gray-600">New here?</span>{' '}
//                   <Link
//                     href="/signup"
//                     className="text-orange-600 font-semibold hover:text-orange-700"
//                   >
//                     Create an Account
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
//               <div className="relative w-full h-[400px] lg:h-[450px]">
//                 <Image
//                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//                   alt="Team Collaboration"
//                   layout="fill" // Ensure image fills the container
//                   objectFit="cover" // Maintain aspect ratio while covering the container
//                   className="rounded-3xl shadow-2xl"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-20 rounded-3xl"></div>
//                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-b-3xl">
//                   <h2 className="text-2xl font-bold text-orange-600 mb-2">
//                     Join Our Innovative Community
//                   </h2>
//                   <p className="text-orange-800">
//                     Unlock the potential of your business and enhance your
//                     development skills.{' '}
//                     <span className="font-semibold">
//                       Together, let's innovate!
//                     </span>
//                   </p>
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

// export default Login;
