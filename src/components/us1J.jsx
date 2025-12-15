import { motion } from "framer-motion";
import gymImage from "../assets/images/gym-team.jpeg"; // replace with your image path
import { FaCheck } from "react-icons/fa";

export default function WhyTrainWithUs() {
  const benefitsLeft = [
    "Fitness Park, la marque de fitness préférée des adhérents",
    "Accès à nos salles 7j/7 et 365 jours/an à partir de 190 DHS",
    "Accès à tout le réseau Fitness Park au Maroc",
    "Espaces Cardio Training, musculation libre et guidée",
    "Une communauté de passionnés !",
  ];

  const benefitsRight = [
    "Cage de Cross Training et accessoires complets",
    "Matériel haut de gamme et connecté",
    "Cours collectifs vidéo exclusifs",
    "Wifi gratuit",
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            POURQUOI S’ENTRAÎNER <br /> CHEZ NOUS ?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Left Benefits */}
            <ul className="space-y-3">
              {benefitsLeft.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-lg md:text-xl">
                  <FaCheck className="text-green-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Right Benefits */}
            <ul className="space-y-3">
              {benefitsRight.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-lg md:text-xl">
                  <FaCheck className="text-green-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-gray-400 mt-4">
            (1) Élue marque préférée en France et en Espagne. Une communauté de plus de 700 000 adhérents
          </p>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={gymImage}
            alt="Gym Team"
            className="w-full h-auto rounded-2xl shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
