import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Coaching", route: "/coaches" },
    { name: "Plans", id: "pricing" },
    { name: "Contact", id: "contact" },
  ];

  const handleClick = (item) => {
    setOpen(false);

    if (item.route) {
      navigate(item.route);
    } else if (item.id) {
      if (location.pathname !== "/") {
        navigate("/", { replace: false });
        setTimeout(() => {
          const el = document.getElementById(item.id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      } else {
        const el = document.getElementById(item.id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Single button for Restricted1 page
  const goToRestricted = () => navigate("/restricted1"); // points to Restricted1.jsx

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 80 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleClick({ id: "hero" })}
        >
          <img
            src="/images/aznak_logo.jpg"
            alt="Aznak Gym Logo"
            className="w-16 h-16 object-contain rounded-full"
          />
          <h1 className="text-white text-2xl font-extrabold tracking-wide">
            AZNAK GYM
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-white text-lg font-semibold">
          {menuItems.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer group"
              onClick={() => handleClick(item)}
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}

          {/* Button to Restricted1.jsx */}
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="ml-4 px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg cursor-pointer shadow hover:bg-yellow-600 transition text-center"
            onClick={goToRestricted}
          >
            Accès Restreint
          </motion.li>
        </ul>

        {/* Mobile Burger */}
        <div className="md:hidden flex">
          <button onClick={() => setOpen(!open)}>
            <div className="space-y-2">
              <span className="block w-8 h-1 bg-white"></span>
              <span className="block w-8 h-1 bg-white"></span>
              <span className="block w-8 h-1 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4"
        >
          {menuItems.map((item, i) => (
            <div
              key={i}
              className="border-b border-white/20 pb-2 cursor-pointer hover:text-yellow-400 transition relative"
              onClick={() => handleClick(item)}
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}

          {/* Mobile button */}
          <div
            className="border-b border-white/20 pb-2 cursor-pointer hover:bg-red-500 hover:text-white rounded-lg px-2 py-1 text-center"
            onClick={goToRestricted}
          >
            Accès Restreint
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
