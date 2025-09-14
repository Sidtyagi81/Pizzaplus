import { motion } from "framer-motion";
import { Gift } from "lucide-react";

const fadeInSmooth = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const OfferSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 relative bg-black overflow-hidden" id="offers">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-700/30 via-orange-700/20 to-black blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative text-center">
        {/* Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInSmooth}
          className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent"
        >
          Special Offer
        </motion.h2>

        {/* Offer Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInSmooth}
          className="relative bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl shadow-lg p-10 text-white max-w-2xl mx-auto"
        >
          <div className="flex justify-center mb-4">
            <Gift className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold">Buy One, Get One FREE!</h3>
          <p className="text-lg mt-4">
            On <span className="font-semibold">Medium Pizza</span>
          </p>
          <p className="mt-2 text-sm font-medium">
            Available <span className="text-black bg-white rounded-md px-2">Every Tuesday</span>
          </p>
          <p className="mt-6 text-sm opacity-80">*T&C Apply</p>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
