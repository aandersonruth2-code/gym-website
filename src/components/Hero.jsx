import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export default function HeroBackground() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (target) => {
    if (target.route) {
      navigate(target.route); // navigate to a page
    } else if (target.id) {
      if (location.pathname !== "/") {
        navigate("/", { replace: false });
        setTimeout(() => {
          const el = document.getElementById(target.id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      } else {
        const el = document.getElementById(target.id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center text-white px-6 md:px-16 pt-32 pb-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/herro.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative max-w-xl space-y-4 z-10"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Transformez Votre Corps
        </h1>

        <p className="text-base md:text-lg text-gray-200">
          Rejoignez notre gym et profitez des équipements modernes et des coachs
          professionnels pour atteindre vos objectifs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {/* Button to restricted page */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg text-sm md:text-base"
            onClick={() => handleClick({ route: "/Restricted1" })}
          >
            Accès Restreint
          </motion.button>

          {/* Button to pricing section */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-white text-white font-bold rounded-lg shadow-lg hover:bg-yellow-500 hover:text-black transition text-sm md:text-base"
            onClick={() => handleClick({ id: "pricing" })}
          >
            En Savoir Plus
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
