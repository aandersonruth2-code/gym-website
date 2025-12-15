import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Découvrez Notre Gym
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl mb-8"
        >
          Regardez notre vidéo pour voir nos équipements et l'ambiance.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg"
        >
          Rejoindre Maintenant
        </motion.button>
      </div>

      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          src="/images/Vid.mp4" // <-- replace with your video path
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-40"
        />
      </div>
    </section>
  );
}
