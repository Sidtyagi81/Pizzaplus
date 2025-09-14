import React from 'react';

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
        { name: 'Triple Topping Pizza', desc: 'Choose Triple (Onion, Tomato, Capsicum, Green Chilli)', price: '99/- | 160/-' },
        { name: 'Margherita', desc: '(Double Cheese)', price: '99/- | 160/-' },
      ],
    },
    {
      title: 'EXTRAS & ADD-ONS',
      items: [
        { name: 'Extra Cheese (P)', price: '30/-' },
        { name: 'Extra Cheese (M)', price: '40/-' },
        { name: 'Cheese Burst (P)', price: '40/-' },
        { name: 'Cheese Burst (M)', price: '60/-' },
        { name: 'Extra Toppings (Small)', desc: 'Onion, Capsicum, Mushroom, Tomato, SweetCorn, Paneer, Jalapeno, Red Paprika', price: '30/-' },
        { name: 'Extra Toppings (Medium)', desc: 'Onion, Capsicum, Mushroom, Tomato, SweetCorn, Paneer, Jalapeno, Red Paprika', price: '40/-' },
        { name: 'Salted French Fries', price: '40/-' },
        { name: 'Cheese French Fries', price: '70/-' },
        { name: 'Cold Drinks (250ml Glass)', price: '25/-' },
      ],
    },
  ];
  

  return (
    <section className="py-16 px-4 sm:px-6 md:px-16 relative" id="menu">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/90 to-black blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-transparent bg-clip-text">
          Our Complete Menu
        </h2>
  
        <div className="space-y-12 sm:space-y-16">
          {menuSections.map((section, idx) => (
            <div key={idx} className="relative">
              {/* Section Title with Connecting Line */}
              <div className="flex items-center mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 whitespace-nowrap pr-4">
                  {section.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-yellow-400/50 via-amber-500/30 to-transparent"></div>
              </div>
              
              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="relative bg-black/80 rounded-xl p-4 sm:p-6 border border-slate-800 backdrop-blur-xl hover:scale-105 transition-transform duration-200"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base sm:text-lg md:text-lg font-bold text-white">{item.name}</h4>
                      <span className="text-yellow-400 font-bold text-sm sm:text-base">{item.price}</span>
                    </div>
                    {item.desc && <p className="text-slate-400 text-xs sm:text-sm">{item.desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
