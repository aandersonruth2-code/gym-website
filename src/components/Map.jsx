import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Notre Localisation</h2>
        <p className="text-gray-300 text-lg md:text-xl">
          Retrouvez-nous facilement grâce à la carte ci‑dessous.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl overflow-hidden shadow-2xl"
      >
        <iframe
          title="AZNAK GYM Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.123456789!2d-5.803407!3d35.736284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b817dd03c916b%3A0x926ba25e4250095f!2sAZNAK%20GYM%2C%20Tanger%2C%20Morocco!5e0!3m2!1sfr!2sma!4v1700000000000"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
}
