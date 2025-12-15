import { motion } from "framer-motion";

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-gray-900 text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Nos Abonnements</h2>
        <p className="text-gray-300 text-lg md:text-xl">
          Choisissez le plan qui vous convient le mieux et commencez votre transformation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">

        {/* 1 Month Plan */}
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.7)" }}
          className="bg-black rounded-2xl p-8 shadow-lg transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold mb-4">1 Mois</h3>
          <p className="text-gray-300 mb-6">Accès complet aux installations et cours.</p>
          <p className="text-4xl font-extrabold mb-6">200 MAD</p>
          <button className="w-full py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition">
            S'inscrire
          </button>
        </motion.div>

        {/* 1 Year Plan - Special Offer */}
        <motion.div
          whileHover={{ scale: 1.08, boxShadow: "0 15px 30px rgba(255, 255, 0, 0.7)" }}
          className="bg-yellow-500 rounded-2xl p-10 shadow-2xl transform scale-105 relative transition-transform duration-300"
        >
          {/* Badge */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-black text-yellow-500 font-bold px-4 py-1 rounded-full text-sm shadow-lg">
            Meilleur Choix
          </div>

          <h3 className="text-3xl font-bold mb-4 text-black">1 An</h3>
          <p className="text-black mb-6">Plan annuel pour maximiser vos résultats.</p>
          <p className="text-5xl font-extrabold mb-6 text-black">2,000 MAD</p>
          <button className="w-full py-3 bg-black text-yellow-500 font-bold rounded-lg hover:bg-gray-900 transition">
            S'inscrire
          </button>
        </motion.div>

        {/* 6 Months Plan */}
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.7)" }}
          className="bg-black rounded-2xl p-8 shadow-lg transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold mb-4">6 Mois</h3>
          <p className="text-gray-300 mb-6">Plan semi-annuel pour des résultats plus durables.</p>
          <p className="text-4xl font-extrabold mb-6">1,100 MAD</p>
          <button className="w-full py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition">
            S'inscrire
          </button>
        </motion.div>

      </div>
    </section>
  );
}
