import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";

export default function GymInfoSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center justify-items-center">
        
        {/* Opening Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <Clock className="w-12 h-12 text-yellow-500 mx-auto" />
          <h3 className="text-2xl font-bold">Heures d’Ouverture</h3>
          <div className="text-gray-300 leading-relaxed space-y-2">
            <p className="font-semibold text-white">Hommes:</p>
            <p>Lundi – Jeudi : 06:00 → 22:00</p>
            <p className="font-semibold text-white mt-2">Femmes:</p>
            <p>Vendredi – Dimanche : 08:00 → 20:00</p>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <MapPin className="w-12 h-12 text-yellow-500 mx-auto" />
          <h3 className="text-2xl font-bold">Localisation</h3>
          <p className="text-gray-300 leading-relaxed">
            Av. Mohamed VI, Tanger<br />
            Maroc
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-4"
        >
          <Phone className="w-12 h-12 text-yellow-500 mx-auto" />
          <h3 className="text-2xl font-bold">Contact</h3>
          <p className="text-gray-300 leading-relaxed">
            +212 6 12 34 56 78<br />
            contact@gymmorocco.ma
          </p>
        </motion.div>

      </div>
    </section>
  );
}
