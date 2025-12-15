import { motion } from "framer-motion";

const coaches = [
  {
    name: "John Smith",
    role: "Strength Coach",
    description: "Expert in weight training and bodybuilding, helping clients build strength and confidence.",
    image: "/images/coach1.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Cardio & HIIT Coach",
    description: "Specializes in cardio, HIIT, and endurance training to keep you in top shape.",
    image: "/images/coach2.jpg",
  },
  {
    name: "Michael Lee",
    role: "Flexibility & Yoga Coach",
    description: "Focuses on flexibility, mobility, and recovery techniques for a balanced body.",
    image: "/images/coach3.jpg",
  },
];

export default function Coaches() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
        Meet Our Coaches
      </h1>

      <div className="grid gap-12 md:grid-cols-3">
        {coaches.map((coach, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            {/* Square Image */}
            <div className="w-44 h-44 mb-6 overflow-hidden border-4 border-yellow-400 rounded-lg">
              <img
                src={coach.image}
                alt={coach.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mb-2">{coach.name}</h2>
            <p className="text-yellow-400 font-semibold mb-4">{coach.role}</p>
            <p className="text-gray-300">{coach.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
