import { motion } from "framer-motion";

export default function AboutUsSplit() {
  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">

        {/* Text Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex flex-col"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            À Propos de Nous
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-6">
            Notre gym est dédié à vous aider à atteindre vos objectifs fitness grâce à des coachs expérimentés et des équipements modernes.
            Rejoignez-nous pour transformer votre corps et votre esprit!
          </p>

          {/* Two Images Under Text */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/FM.jpg"
              alt="Gym equipment"
              className="w-full h-40 object-cover rounded-lg shadow-lg"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/FM1.jpg"
              alt="Gym members training"
              className="w-full h-40 object-cover rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Video Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:w-1/2 rounded-2xl overflow-hidden shadow-2xl flex justify-center"
        >
          <video
            src="/images/vid2.mp4"
            autoPlay
            muted
            loop
            className="w-80 h-60 md:w-110 md:h-95 object-cover rounded-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
