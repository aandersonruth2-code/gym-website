import { motion } from "framer-motion"; 

// Replace images with your real coach photos
import coach1 from "../assets/images/FM.jpg";
import coach2 from "../assets/images/FM.jpg";
import coach3 from "../assets/images/FM.jpg";

const coaches = [
  {
    name: "Ahmed Benali",
    role: "Strength Coach",
    image: coach1,
    experience: "8+ Years Experience",
  },
  {
    name: "Sara El Amrani",
    role: "Fitness Trainer",
    image: coach2,
    experience: "6+ Years Experience",
  },
  {
    name: "Youssef Ait Ali",
    role: "Bodybuilding Coach",
    image: coach3,
    experience: "10+ Years Experience",
  },
];

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
          <h4
            className="uppercase tracking-widest font-semibold mb-3"
            style={{ color: "var(--main-color)" }}
          >
            Our Coaches
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Meet Our <span style={{ color: "var(--main-color)" }}>Professional Team</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Certified trainers dedicated to helping you reach your fitness goals.
          </p>
        </motion.div>

        {/* COACHES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: index * 0.2 }}
              className="bg-zinc-900 rounded-2xl overflow-hidden border transition"
              style={{ borderColor: "var(--main-color, rgba(255, 255, 0, 0.2))" }}
            >
              {/* IMAGE */}
              <div className="relative group">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-[320px] object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">
                  {coach.name}
                </h3>
                <p
                  className="font-semibold mb-2"
                  style={{ color: "var(--main-color)" }}
                >
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
