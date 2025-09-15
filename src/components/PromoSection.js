"use client";
import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

const PromoSection = () => {
  return (
    <section className="relative py-20 px-6 md:px-24 bg-black">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/80 to-black blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-transparent bg-clip-text">
          Special Offer 🎉
        </h2>

        <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
          10% off for the <span className="text-yellow-400 font-semibold">first 100 customers</span>{" "}
          who follow and like our{" "}
          <span className="text-pink-500 font-semibold">Instagram</span> and{" "}
          <span className="text-blue-500 font-semibold">Facebook</span> page!
        </p>

        <div className="flex justify-center space-x-6">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.instagram.com/pizzaplus_120/" // replace with your Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Instagram
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.facebook.com/share/18vEgPzrR3/" // replace with your Facebook link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <Facebook className="w-5 h-5 mr-2" />
            Facebook
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default PromoSection;
