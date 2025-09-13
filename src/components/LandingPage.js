"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  DollarSign,
  Users,
  Building2,
  Award,
  Shield,
  Clock,
  Wallet,
  Mail,
  MapPin,
} from "lucide-react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const LandingPage = () => {
  const { scrollY } = useScroll();
  
  const stats = [
    { icon: DollarSign, value: "50+", label: "Pizza Varieties" },
    { icon: Users, value: "1000+", label: "Happy Customers" },
    { icon: Building2, value: "5+", label: "Years Experience" },
    { icon: Award, value: "98%", label: "Customer Satisfaction" },
  ];


  const trustBadges = [
    { icon: Shield, label: "Fresh Ingredients" },
    { icon: Clock, label: "Quick Delivery" },
    { icon: Wallet, label: "Best Prices" },
    { icon: Award, label: "Quality Assured" }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  
  return (
    <div className="min-h-screen bg-black text-slate-50 font-sans overflow-hidden" id="home">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-24 relative pt-20 md:pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/90 to-black blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-8"
              >
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                  <span className="block text-slate-300 text-lg sm:text-xl md:text-2xl">Welcome to</span>
                  <span className="block bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-transparent bg-clip-text">
                    Pizza Plus+
                  </span>
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-transparent bg-clip-text mb-6 sm:mb-8">
                  DELICIOUS PIZZAS
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed"
              >
                <p>
                  Experience the perfect blend of authentic flavors and premium ingredients in every bite.
                </p>
                
                <p>
                  From classic Margherita to exotic Tandoori varieties, we serve happiness on every plate.
                </p>
                
                <p>
                  Fresh ingredients, authentic recipes, and unbeatable prices — that&apos;s our promise to you.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-12"
              >
                <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-xl text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Order Now!
                </button>
              </motion.div>
            </div>

            {/* Right Side - Dynamic Pizza Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg h-64 sm:h-80 md:h-96 flex items-center justify-center">
                {/* Animated Pizza Base */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-yellow-200 to-orange-300 shadow-2xl border-4 border-orange-400"
                >
                  {/* Pizza Crust */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400"></div>
                  
                  {/* Animated Toppings */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="absolute inset-8 rounded-full"
                  >
                    {/* Cheese */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 opacity-80"></div>
                    
                    {/* Pepperoni */}
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: 0.5,
                        ease: "easeInOut" 
                      }}
                      className="absolute top-8 left-12 w-6 h-6 bg-red-500 rounded-full shadow-lg"
                    ></motion.div>
                    <motion.div
                      animate={{ 
                        y: [0, 10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2.5, 
                        repeat: Infinity, 
                        delay: 1,
                        ease: "easeInOut" 
                      }}
                      className="absolute top-16 right-16 w-5 h-5 bg-red-500 rounded-full shadow-lg"
                    ></motion.div>
                    <motion.div
                      animate={{ 
                        y: [0, -8, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2.2, 
                        repeat: Infinity, 
                        delay: 1.5,
                        ease: "easeInOut" 
                      }}
                      className="absolute bottom-20 left-20 w-4 h-4 bg-red-500 rounded-full shadow-lg"
                    ></motion.div>
                    
                    {/* Vegetables */}
                    <motion.div
                      animate={{ 
                        rotate: [0, 180, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="absolute top-12 right-8 w-3 h-3 bg-green-500 rounded-full shadow-lg"
                    ></motion.div>
                    <motion.div
                      animate={{ 
                        rotate: [360, 180, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 3.5, 
                        repeat: Infinity, 
                        delay: 0.8,
                        ease: "easeInOut" 
                      }}
                      className="absolute bottom-16 right-12 w-2 h-2 bg-green-400 rounded-full shadow-lg"
                    ></motion.div>
                    <motion.div
                      animate={{ 
                        rotate: [0, -180, -360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 3.8, 
                        repeat: Infinity, 
                        delay: 1.2,
                        ease: "easeInOut" 
                      }}
                      className="absolute bottom-8 left-16 w-3 h-3 bg-green-500 rounded-full shadow-lg"
                    ></motion.div>
                    
                    {/* Cheese Strings */}
                    <motion.div
                      animate={{ 
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2.8, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-300 rounded-full shadow-lg"
                    ></motion.div>
                  </motion.div>
                  
                  {/* Floating Steam Effect */}
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeOut" 
                    }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-white/30 rounded-full blur-sm"
                  ></motion.div>
                  <motion.div
                    animate={{ 
                      y: [0, -25, 0],
                      opacity: [0, 0.4, 0]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      delay: 0.5,
                      ease: "easeOut" 
                    }}
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-white/20 rounded-full blur-sm"
                  ></motion.div>
                </motion.div>
                
                {/* Floating Pizza Slices */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 md:-top-8 md:-right-8 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full shadow-lg border-2 border-orange-400"
                >
                  <div className="absolute inset-1 sm:inset-2 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200"></div>
                  <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-1 h-1 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
                  <div className="absolute bottom-1 right-1 sm:bottom-3 sm:right-3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-green-500 rounded-full"></div>
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, -8, 0]
                  }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity, 
                    delay: 1,
                    ease: "easeInOut" 
                  }}
                  className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full shadow-lg border-2 border-orange-400"
                >
                  <div className="absolute inset-0.5 sm:inset-1 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200"></div>
                  <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-red-500 rounded-full"></div>
                </motion.div>
                
                {/* Floating Ingredients */}
                <motion.div
                  animate={{ 
                    x: [0, 20, 0],
                    y: [0, -10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute top-4 left-4 w-4 h-4 bg-red-500 rounded-full shadow-lg"
                ></motion.div>
                
                <motion.div
                  animate={{ 
                    x: [0, -15, 0],
                    y: [0, -15, 0],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ 
                    duration: 3.8, 
                    repeat: Infinity, 
                    delay: 1.5,
                    ease: "easeInOut" 
                  }}
                  className="absolute bottom-4 right-4 w-3 h-3 bg-green-500 rounded-full shadow-lg"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 px-4 sm:px-6 md:px-24 relative" id="mission">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/90 to-black blur-3xl"></div>
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16 sm:mb-24 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-transparent bg-clip-text"
        >
          Our Menu
        </motion.h2>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 relative"
        >
          {[
            {
              title: "Fresh Ingredients",
              description:
                "We use only the freshest vegetables, premium cheese, and authentic spices to ensure every pizza is a masterpiece.",
              icon: "🥬",
            },
            {
              title: "Authentic Recipes",
              description:
                "Our traditional recipes passed down through generations bring you the authentic taste of Italian and Indian fusion.",
              icon: "👨‍🍳",
            },
            {
              title: "Best Prices",
              description:
                "Quality food at affordable prices. We believe everyone deserves great pizza without breaking the bank.",
              icon: "💰",
            },
          ].map((step, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="group relative h-full"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Consistent hover glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative h-full bg-black/80 rounded-xl p-6 sm:p-8 md:p-10 border border-slate-800 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between">
                <div>
                  <motion.div 
                    className="text-4xl sm:text-5xl mb-4 sm:mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-transparent bg-clip-text">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 sm:mt-16"
        >
          <p className="relative text-center text-base md:text-lg font-bold text-gray-400 mt-20 max-w-2xl mx-auto leading-relaxed">
            From classic favorites to exotic fusion, we serve happiness on every plate with authentic flavors and premium ingredients.
          </p>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section className="py-24 px-4 sm:px-6 md:px-24 relative" id="menu">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/90 to-black blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-transparent bg-clip-text"
          >
            Our Complete Menu
          </motion.h2>
          
          {/* Pizza Categories */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-16"
          >
            {/* Regular Pizzas */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-8 text-yellow-400 text-center">DELICIOUS PIZZAS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Swiss Pizza", desc: "Sweet Corn, Jalapeno, Green Chilli", price: "160/- | 270/-" },
                  { name: "Country In", desc: "Onion, Tomato, Sweet Corn, Capsicum", price: "160/- | 270/-" },
                  { name: "Max Pizza", desc: "Capsicum, Tomato, Red Paprika", price: "170/- | 280/-" },
                  { name: "Farm Fresh", desc: "Onion, Tomato, Capsicum, Mushroom", price: "170/- | 280/-" },
                  { name: "Deluxe Spicy Veggie", desc: "Onion, Capsicum, Sweet Corn, Paneer, Jalapeno, Green Chilli, Black Olives", price: "230/- | 340/-" },
                  { name: "Veggie Paradise", desc: "Capsicum, Tomato, Baby Corn, Black Olives, Paneer", price: "230/- | 340/-" },
                  { name: "Achari Pizza", desc: "Sweet Corn, Paneer, Capsicum", price: "180/- | 290/-" },
                  { name: "Makhni Pizza", desc: "Paneer, Capsicum, Jalapeno, Tomato", price: "180/- | 290/-" },
                  { name: "Kadai Paneer Pizza", desc: "Onion, Capsicum, Green Chilli, Paneer", price: "180/- | 290/-" },
                  { name: "Paper Paneer", desc: "Onion, Capsicum, Paneer", price: "180/- | 290/-" },
                  { name: "Tandoori Pizza", desc: "Onion, Capsicum, Tomato, Paneer", price: "180/- | 290/-" },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    className="group relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative bg-black/80 rounded-xl p-6 border border-slate-800 backdrop-blur-xl">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-white">{item.name}</h4>
                        <span className="text-yellow-400 font-bold">{item.price}</span>
                      </div>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Burgers */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-8 text-yellow-400 text-center">BURGERS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Veg Popular Burger", price: "50/-" },
                  { name: "Maxican Burger", price: "60/-" },
                  { name: "Cheese Burger", price: "60/-" },
                  { name: "Pizza Burger", price: "70/-" },
                  { name: "Tandoori Cheese Burger", price: "80/-" },
                  { name: "Cheese Paneer Burger", price: "80/-" },
                  { name: "Double Tikki Burger", price: "90/-" },
                  { name: "Add Extra Cheese", price: "15/-" },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    className="group relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative bg-black/80 rounded-xl p-6 border border-slate-800 backdrop-blur-xl">
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-bold text-white">{item.name}</h4>
                        <span className="text-yellow-400 font-bold">{item.price}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Garlic, Pocket & Sides */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-8 text-yellow-400 text-center">GARLIC, POCKET & SIDES</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Tandoori Garlic Bread", price: "120/-" },
                  { name: "Cheese Garlic Bread", price: "140/-" },
                  { name: "Calzone Pocket (2 Pcs.)", price: "100/-" },
                  { name: "Corn Stuff", price: "80/-" },
                  { name: "Paneer Stuff", price: "100/-" },
                  { name: "Cheese Tandoori Stuff", price: "130/-" },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    className="group relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative bg-black/80 rounded-xl p-6 border border-slate-800 backdrop-blur-xl">
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-bold text-white">{item.name}</h4>
                        <span className="text-yellow-400 font-bold">{item.price}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Coffee & Shakes */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-8 text-yellow-400 text-center">COFFEE & SHAKES</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Thick Cold Coffee", price: "90/-" },
                  { name: "Vanilla Shake", price: "90/-" },
                  { name: "Strawberry Shake", price: "90/-" },
                  { name: "Butter Scotch Shake", price: "90/-" },
                  { name: "Chocolate Shake", price: "100/-" },
                  { name: "Oreo Shake", price: "100/-" },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    className="group relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative bg-black/80 rounded-xl p-6 border border-slate-800 backdrop-blur-xl">
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-bold text-white">{item.name}</h4>
                        <span className="text-yellow-400 font-bold">{item.price}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Pasta */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-8 text-yellow-400 text-center">PASTA</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Creamy Red Sauce Pasta", desc: "Onion, Capsicum, Mix Sauce", price: "90/-" },
                  { name: "Paneer Cheese Pasta", desc: "Onion, Capsicum, Cheese, Paneer", price: "100/-" },
                  { name: "White Sauce Pasta", desc: "Onion, Capsicum, Sweet Corn, Cheese", price: "110/-" },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    className="group relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative bg-black/80 rounded-xl p-6 border border-slate-800 backdrop-blur-xl">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-white">{item.name}</h4>
                        <span className="text-yellow-400 font-bold">{item.price}</span>
                      </div>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Special Pizzas */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-8 text-yellow-400 text-center">SPECIAL PIZZAS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Single Topping Pizza", desc: "Choose Single (Onion, Tomato, Capsicum, Sweet Corn)", price: "80/-" },
                  { name: "Double Topping Pizza", desc: "Choose Double (Onion, Paneer, Sweet Corn, Green Chilli)", price: "90/-" },
                  { name: "Triple Topping Pizza", desc: "Choose Triple (Onion, Tomato, Capsicum, Green Chilli)", price: "99/-" },
                  { name: "Margherita (Double Cheese)", price: "160/-" },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    className="group relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative bg-black/80 rounded-xl p-6 border border-slate-800 backdrop-blur-xl">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-white">{item.name}</h4>
                        <span className="text-yellow-400 font-bold">{item.price}</span>
                      </div>
                      {item.desc && <p className="text-slate-400 text-sm">{item.desc}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Combos */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-8 text-yellow-400 text-center">COMBO&apos;S</h3>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { 
                    name: "Char Char Paneer Pizza Combo", 
                    desc: "1 Tandoori (P), 1 Achari (P), 1 Kadai (P), 1 Makhani (P) + Free Complimentary Drink", 
                    price: "699/-" 
                  },
                  { 
                    name: "Pizza Plus Special Combo", 
                    desc: "1 Swiss Pizza (P), 1 Country In (M), 1 Super Popular Burger, 1 Creamy Red Sauce Pasta + Cold Drink", 
                    price: "599/-" 
                  },
                  { 
                    name: "Party Special Combo", 
                    desc: "4 Set Double Topping Personal Pizza + 1 Ltr Cold Drink", 
                    price: "399/-" 
                  },
                  { 
                    name: "Family Halka Fulka", 
                    desc: "2 Set Personal Double Topping Pizza + 2 Set Super Popular Burger + 1 Ltr Cold Drink", 
                    price: "299/-" 
                  },
                  { 
                    name: "Set of 3 Triple Topping Pizza (P)", 
                    desc: "3 Set of Triple Topping Pizza (Onion, Tomato, Capsicum, Green Chilli)", 
                    price: "289/-" 
                  },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    className="group relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative bg-black/80 rounded-xl p-6 border border-slate-800 backdrop-blur-xl">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-white">{item.name}</h4>
                        <span className="text-yellow-400 font-bold">{item.price}</span>
                      </div>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Extras & Others */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-8 text-yellow-400 text-center">EXTRAS & MORE</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Extra Cheese (P)", price: "30/-" },
                  { name: "Extra Cheese (M)", price: "40/-" },
                  { name: "Cheese Burst (P)", price: "40/-" },
                  { name: "Cheese Burst (M)", price: "60/-" },
                  { name: "Extra Toppings (Small)", price: "30/-" },
                  { name: "Extra Toppings (Medium)", price: "40/-" },
                  { name: "Salted French Fries", price: "40/-" },
                  { name: "Cheese French Fries", price: "70/-" },
                  { name: "Cold Drinks (250ml Glass)", price: "25/-" },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    className="group relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative bg-black/80 rounded-xl p-6 border border-slate-800 backdrop-blur-xl">
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-bold text-white">{item.name}</h4>
                        <span className="text-yellow-400 font-bold">{item.price}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-black/60 rounded-xl border border-slate-800">
                <p className="text-slate-400 text-sm text-center">
                  <strong className="text-yellow-400">Extra Toppings:</strong> Onion, Capsicum, Mushroom, Tomato, Sweet Corn, Jalapeno, Paneer, Red Paprika
                </p>
                <p className="text-slate-400 text-sm text-center mt-2">
                  <strong className="text-yellow-400">✅ Offer Can Not Be Clubbed With Other OFFERS & DISCOUNTS</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
          
      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 md:px-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/90 to-black blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-transparent bg-clip-text"
          >
            Why Choose Us
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="group relative text-center"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-black/80 rounded-xl p-6 border border-slate-800 backdrop-blur-xl">
                  <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-xl md:text-2xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-xs">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 md:px-24 relative" id="contact">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/90 to-black blur-3xl"></div>
        <div className="max-w-4xl mx-auto relative">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-transparent bg-clip-text"
          >
            Get In Touch
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div 
              variants={fadeInUp}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black/80 rounded-xl p-8 border border-slate-800 backdrop-blur-xl">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-yellow-400 mr-3" />
                  <h3 className="text-lg font-bold text-white">Email</h3>
                </div>
                <p className="text-slate-300 text-base">order@pizzaplus.com</p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black/80 rounded-xl p-8 border border-slate-800 backdrop-blur-xl">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-yellow-400 mr-3" />
                  <h3 className="text-lg font-bold text-white">Address</h3>
                </div>
                <p className="text-slate-300 text-base">123 Pizza Street, Food City - 12345</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 text-center"
          >
            <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white font-bold py-3 px-6 rounded-xl text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Order Now!
            </button>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative py-16"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-24">
          <div className="flex justify-center space-x-8">
            {trustBadges.map((badge, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.1 }}
                className="flex items-center text-slate-400 group transition-all duration-300 hover:text-yellow-400"
              >
                <badge.icon className="w-5 h-5 mr-2 transition-all duration-300" />
                <span className="text-xs">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer/>
            
      
      
      {/* Parallax effect for background elements */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[-1]"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.05) 0%, rgba(245, 158, 11, 0.05) 50%, rgba(0, 0, 0, 0) 100%)",
          opacity: useTransform(scrollY, [0, 1000], [1, 0.3])
        }}
      />
      
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
      
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Reveal animations */
        .reveal {
          position: relative;
          opacity: 0;
          transition: all 1s ease;
        }
        
        .reveal.active {
          opacity: 1;
        }
        
        .reveal.from-bottom {
          transform: translateY(50px);
        }
        
        .reveal.from-bottom.active {
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default LandingPage;