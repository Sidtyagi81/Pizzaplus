import React from 'react'
import { motion } from 'framer-motion'

const fadeInUp = {
    hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
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

const Menu = () => {
  return (
    <div>
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
    </div>
  )
}

export default Menu