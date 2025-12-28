import { motion } from "framer-motion";
import { coachesData } from "../data/coachesData";

export default function Coaches() {
  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="text-center mb-16"
        >
          <h4 className="text-main uppercase tracking-widest font-semibold mb-3">
            {coachesData.title.small}
          </h4>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Meet Our <span className="text-main">Professional Team</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            {coachesData.title.description}
          </p>
        </motion.div>

        {/* COACHES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {coachesData.coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: index * 0.2 }}
              className="group bg-zinc-900 rounded-2xl overflow-hidden border border-main/20 hover:border-main transition"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-[320px] object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">
                  {coach.name}
                </h3>

                <p className="text-main font-semibold mb-2">
                  {coach.role}
                </p>

                <p className="text-gray-400 text-sm">
                  {coach.experience}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
