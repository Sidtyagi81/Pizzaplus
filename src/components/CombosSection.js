"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const combos = [
  {
    title: "Paneer Pizza Combo",
    items: ["1 Tandoori (P)", "1 Achari (P)", "1 Kadai (P)", "1 Makhani (P)"],
    extra: "Free Complimentary Drink",
    price: "₹699",
  },
  {
    title: "Pizza Plus Special Combo",
    items: [
      "1 Swiss Pizza (P)",
      "1 Country In (M)",
      "1 Super Popular Burger",
      "1 Creamy Red Sauce Pasta",
      "1 Cold Drink 1 Ltr.",
    ],
    price: "₹599",
  },
  {
    title: "Party Special Combo",
    items: ["4 Set Double Topping Personal Pizza", "1 Ltr Cold Drink"],
    price: "₹399",
  },
  {
    title: "Family Halka Fulka",
    items: [
      "2 Set Personal Double Topping Pizza",
      "2 Set Super Popular Burger",
      "1 Ltr Cold Drink",
    ],
    price: "₹299",
  },
  {
    title: "Set of 3 Triple Topping Pizza (P)",
    items: ["3 Set of Triple Topping Pizza (Onion, Tomato, Capsicum, Green Chilli)"],
    price: "₹289",
  },
];

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const CombosSection = () => {
  return (
    <section className="relative py-20 px-6 md:px-24 bg-black" id="combos">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/90 to-black blur-3xl"></div>

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn(0.2)}
        className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-14 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-transparent bg-clip-text"
      >
        Combo Deals
      </motion.h2>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {combos.map((combo, index) => (
          <motion.div
            key={index}
            variants={fadeIn(index * 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>

            <div className="relative h-full bg-black/80 rounded-xl p-6 border border-slate-800 backdrop-blur-xl flex flex-col justify-between">
              <h3 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-transparent bg-clip-text">
                {combo.title}
              </h3>
              <ul className="space-y-2 mb-4">
                {combo.items.map((item, i) => (
                  <li key={i} className="text-slate-300 text-sm sm:text-base">
                    • {item}
                  </li>
                ))}
              </ul>
              {combo.extra && (
                <p className="text-xs text-green-400 font-semibold mb-2">
                  {combo.extra}
                </p>
              )}
              <div className="text-right">
                <span className="text-xl font-bold text-yellow-400">
                  {combo.price}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CombosSection;
