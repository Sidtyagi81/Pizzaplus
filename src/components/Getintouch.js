import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const fadeInSmooth = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const locations = [
  {
    name: "Siyana",
    address: "Main Garh Bus Stand, Opp Jio Office, Siyana - 203412",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Pizza+Plus+Siyana"
  },
  {
    name: "Shikarpur",
    address:
      "Old Dibai Road, Chainpura, Near Swagat Garden Marriage Home, Shikarpur, Bulandshahr - 203395",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Pizza+Plus+Shikarpur"
  },
  {
    name: "Garhmukteshwar",
    address:
      "Railway Station Road, Opp. Dev Nandini Hospital, Garhmukteshwar - 245205",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Pizza+Plus+Garhmukteshwar"
  },
  {
    name: "Jhangirabad",
    address:
      "Old Hariyali Bazar, Opp. Naveen Anaz Mandi, Near R.C. Farm House, Jhangirabad - 203394",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Pizza+Plus+Jhangirabad"
  }
];

const Locations = () => {
  return (
    <section className="py-16 px-3 md:px-24 relative" id="locations">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/90 to-black blur-3xl"></div>
      <div className="max-w-5xl mx-auto relative">
        {/* Section Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInSmooth}
          className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-transparent bg-clip-text"
        >
          Our Locations
        </motion.h2>

        {/* Location Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8"
        >
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              variants={fadeInSmooth}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black/80 rounded-xl p-4 sm:p-6 md:p-8 border border-slate-800 backdrop-blur-xl h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-3">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mr-2 sm:mr-3" />
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {loc.name}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-snug">
                    {loc.address}
                  </p>
                </div>

                <div className="mt-4 sm:mt-6">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white font-bold py-2 px-3 sm:py-2 sm:px-5 rounded-lg text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
