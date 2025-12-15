import { motion } from "framer-motion";
import gymImage from "../assets/images/gym-team.jpeg"; // your image path
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
    <section className="relative h-[80vh] flex items-center justify-center text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Image */}
      <motion.img
        src={gymImage}
        alt="Gym Team"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      {/* Content Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Column - Text */}
        <div className="space-y-6">
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

          <p className="text-sm text-gray-200 mt-4">
            (1) Élue marque préférée en France et en Espagne. Une communauté de plus de 700 000 adhérents
          </p>
        </div>
      </motion.div>
    </section>
  );
}
