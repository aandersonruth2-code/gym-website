import { motion } from "framer-motion";
import { openTimeData } from "../data/opentimedata";
import { useEffect } from "react"; // <-- added

export default function GymSchedule() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-black text-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h4 className="text-yellow-400 uppercase tracking-widest font-semibold mb-3">
            {openTimeData.title.small}
          </h4>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Opening <span className="text-yellow-400">Schedule</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            {openTimeData.title.description}
          </p>
        </motion.div>

        {/* SCHEDULE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* MEN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="bg-zinc-900 border border-yellow-400/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
              {openTimeData.men.label}
            </h3>

            <p className="text-gray-300 mb-6">
              {openTimeData.men.daysCount}
            </p>

            <ul className="space-y-3 text-gray-400">
              {openTimeData.men.days.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between border-b border-gray-700 pb-2 last:border-none"
                >
                  <span>{item.day}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* WOMEN */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="bg-zinc-900 border border-yellow-400/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
              {openTimeData.women.label}
            </h3>

            <p className="text-gray-300 mb-6">
              {openTimeData.women.daysCount}
            </p>

            <ul className="space-y-3 text-gray-400">
              {openTimeData.women.days.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between border-b border-gray-700 pb-2 last:border-none"
                >
                  <span>{item.day}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
