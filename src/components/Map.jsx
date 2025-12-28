import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="relative py-24 px-6 md:px-16 bg-black text-white overflow-hidden">
      
      {/* Ambient Glows */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 blur-[140px] rounded-full"
        style={{ backgroundColor: "var(--main-color)", opacity: 0.3 }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 blur-[140px] rounded-full"
        style={{ backgroundColor: "var(--main-color)", opacity: 0.3 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-4">
            Our <span style={{ color: "var(--main-color)" }}>Location</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Easily find <span style={{ color: "var(--main-color)", fontWeight: 600 }}>AZNAK GYM</span> using the map below.
          </p>
        </motion.div>

        {/* MAP CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden border shadow-[0_0_80px_10px_rgba(250,204,21,0.25)]"
          style={{ borderColor: "var(--main-color)", boxShadow: `0 0 80px 10px var(--main-color, rgba(250,204,21,0.25))` }}
        >
          {/* Top bar */}
          <div
            className="absolute top-0 left-0 w-full h-12 bg-black/80 backdrop-blur flex items-center px-6 z-20 border-b"
            style={{ borderColor: "var(--main-color)" }}
          >
            <span style={{ color: "var(--main-color)", fontWeight: 700 }} className="tracking-wider uppercase">
              AZNAK GYM — Tangier
            </span>
          </div>

          {/* Map */}
          <iframe
            title="AZNAK GYM Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.123456789!2d-5.803407!3d35.736284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b817dd03c916b%3A0x926ba25e4250095f!2sAZNAK%20GYM%2C%20Tanger%2C%20Morocco!5e0!3m2!1sfr!2sma!4v1700000000000"
            className="w-full h-[450px] md:h-[520px]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

      </div>
    </section>
  );
}
