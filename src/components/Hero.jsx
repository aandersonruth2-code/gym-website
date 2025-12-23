import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import manImage from "../assets/images/man_women.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center overflow-hidden pt-28"
    >
      {/* AMBIENT GLOWS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400/60 blur-[140px] rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-400/60 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="text-white text-center md:text-left"
        >
          <h1 className="font-extrabold uppercase italic leading-[1.05] tracking-tight">
            <span className="block text-3xl sm:text-4xl md:text-5xl">
              Unleash Your
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl">
              Power At
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.6)]">
              AZNAK GYM
            </span>
          </h1>

          {/* CTA — FIXED */}
          <motion.button
            type="button"
            onClick={() => navigate("/restricted1")}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 bg-yellow-400 hover:bg-yellow-300 text-black px-12 py-4 font-extrabold uppercase tracking-wider rounded-full shadow-[0_0_30px_rgba(250,204,21,0.6)] transition"
          >
            Sign Up
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1.2 }}
            className="mt-6 text-sm uppercase tracking-widest text-gray-300"
          >
            Your fitness journey starts here
          </motion.p>
        </motion.div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] rounded-full flex items-center justify-center"
          >
            {/* OUTER RING */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full border-4 border-yellow-400/70 shadow-[0_0_80px_20px_rgba(250,204,21,0.5)]"
            />

            {/* INNER */}
            <div className="absolute inset-6 rounded-full bg-black" />

            {/* IMAGE */}
            <motion.img
              src={manImage}
              alt="Aznak Gym Athlete"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1.6 }}
              className="relative z-10 w-[95%] object-contain -translate-y-6"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
