import React from 'react';
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Menu = () => {
  const menuSections = [
    {
      title: 'DELICIOUS PIZZAS',
      items: [
        { name: 'Swiss Pizza', desc: 'Sweet Corn, Jalapeno, Green Chilli', price: '160/- | 270/-' },
        { name: 'Country In', desc: 'Onion, Tomato, Sweet Corn, Capsicum', price: '160/- | 270/-' },
        { name: 'Max Pizza', desc: 'Capsicum, Tomato, Red Paprika', price: '170/- | 280/-' },
        { name: 'Farm Fresh', desc: 'Onion, Tomato, Capsicum, Mushroom', price: '170/- | 280/-' },
        { name: 'Deluxe Spicy Veggie', desc: 'Onion, Capsicum, Sweet Corn, Paneer, Jalapeno, Green Chilli, Black Olives', price: '230/- | 340/-' },
        { name: 'Veggie Paradise', desc: 'Capsicum, Tomato, Baby Corn, Black Olives, Paneer', price: '230/- | 340/-' },
        { name: 'Achari Pizza', desc: 'Sweet Corn, Paneer, Capsicum', price: '180/- | 290/-' },
        { name: 'Makhni Pizza', desc: 'Paneer, Capsicum, Jalapeno, Tomato', price: '180/- | 290/-' },
        { name: 'Kadai Paneer Pizza', desc: 'Onion, Capsicum, Green Chilli, Paneer', price: '180/- | 290/-' },
        { name: 'Paper Paneer', desc: 'Onion, Capsicum, Paneer', price: '180/- | 290/-' },
        { name: 'Tandoori Pizza', desc: 'Onion, Capsicum, Tomato, Paneer', price: '180/- | 290/-' },
      ],
    },
    {
      title: 'BURGERS',
      items: [
        { name: 'Veg Popular Burger', price: '50/-' },
        { name: 'Maxican Burger', price: '60/-' },
        { name: 'Cheese Burger', price: '60/-' },
        { name: 'Pizza Burger', price: '70/-' },
        { name: 'Tandoori Cheese Burger', price: '80/-' },
        { name: 'Cheese Paneer Burger', price: '80/-' },
        { name: 'Double Tikki Burger', price: '90/-' },
        { name: 'Add Extra Cheese', price: '15/-' },
      ],
    },
    {
      title: 'GARLIC, POCKET & SIDES',
      items: [
        { name: 'Tandoori Garlic Bread', price: '120/-' },
        { name: 'Cheese Garlic Bread', price: '140/-' },
        { name: 'Calzone Pocket (2 Pcs.)', price: '100/-' },
        { name: 'Corn Stuff', price: '80/-' },
        { name: 'Paneer Stuff', price: '100/-' },
        { name: 'Cheese Tandoori Stuff', price: '130/-' },
      ],
    },
    {
      title: 'COFFEE & SHAKES',
      items: [
        { name: 'Thick Cold Coffee', price: '90/-' },
        { name: 'Vanilla Shake', price: '90/-' },
        { name: 'Strawberry Shake', price: '90/-' },
        { name: 'Butter Scotch Shake', price: '90/-' },
        { name: 'Chocolate Shake', price: '100/-' },
        { name: 'Oreo Shake', price: '100/-' },
      ],
    },
    {
      title: 'PASTA',
      items: [
        { name: 'Creamy Red Sauce Pasta', desc: 'Onion, Capsicum, Mix Sauce', price: '90/-' },
        { name: 'Paneer Cheese Pasta', desc: 'Onion, Capsicum, Cheese, Paneer', price: '100/-' },
        { name: 'White Sauce Pasta', desc: 'Onion, Capsicum, Sweet Corn, Cheese', price: '110/-' },
      ],
    },
    {
      title: 'SPECIAL PIZZAS',
      items: [
        { name: 'Single Topping Pizza', desc: 'Choose Single (Onion, Tomato, Capsicum, Sweet Corn)', price: '80/-' },
        { name: 'Double Topping Pizza', desc: 'Choose Double (Onion, Paneer, Sweet Corn, Green Chilli)', price: '90/-' },
        { name: 'Triple Topping Pizza', desc: 'Choose Triple (Onion, Tomato, Capsicum, Green Chilli)', price: '99/-' },
        { name: 'Margherita',desc: '(Double Cheese)', price: '160/-' },
      ],
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 md:px-24 relative" id="menu">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/90 to-black blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-transparent bg-clip-text"
        >
          Our Complete Menu
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          {menuSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl sm:text-2xl font-bold mb-8 text-yellow-400 text-center">{section.title}</h3>
              <div className={`grid grid-cols-1 ${section.title === "COMBO'S" ? '' : 'md:grid-cols-2'} gap-6`}>
                {section.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
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
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
