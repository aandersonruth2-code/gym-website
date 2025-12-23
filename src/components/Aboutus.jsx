import { motion } from "framer-motion";
import aboutImg from "../assets/images/FM1.jpg"; // change image if needed

export default function Aboutus() {
  return (
    <section id="about" className="bg-black text-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -top-6 -left-6 w-full h-full border-4 border-yellow-400 rounded-xl"></div>
          <img
            src={aboutImg}
            alt="Gym Training"
            className="relative rounded-xl shadow-2xl object-cover w-full h-[400px]"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
        >
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-yellow-400 font-semibold tracking-widest uppercase mb-3"
          >
            About Our Gym
          </motion.h4>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.4 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
          >
            Train Hard. <br />
            <span className="text-yellow-400">Stay Strong.</span> <br />
            Live Better.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.6 }}
            className="text-gray-300 mb-6 leading-relaxed"
          >
            Our gym is designed for those who want more than just workouts.
            We offer professional equipment, expert trainers, and an
            environment that pushes you to be your best every single day.
          </motion.p>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.8 }}
            className="grid grid-cols-3 gap-6 mb-8"
          >
            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">10+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">25+</h3>
              <p className="text-gray-400 text-sm">Expert Trainers</p>
            </div>
            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">1k+</h3>
              <p className="text-gray-400 text-sm">Happy Members</p>
            </div>
          </motion.div>

          {/* BUTTON */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full transition"
          >
            Join Our Gym
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
