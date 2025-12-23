import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import aznakLogo from "../assets/images/aznak_logo.jpg";

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
      return;
    }

    if (item.id) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-yellow-400/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleClick({ id: "hero" })}
        >
          <img
            src={aznakLogo}
            alt="Aznak Gym Logo"
            className="w-14 h-14 rounded-full object-cover"
          />
          <span className="text-white text-xl font-extrabold tracking-wide">
            AZNAK <span className="text-yellow-400">GYM</span>
          </span>
        </motion.div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-white font-semibold">
          {menuItems.map((item, i) => (
            <li
              key={i}
              onClick={() => handleClick(item)}
              className="relative cursor-pointer group"
            >
              <span className="transition group-hover:text-yellow-400">
                {item.name}
              </span>
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}

          {/* RESTRICTED BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/restricted1")}
            className="ml-4 bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-full font-bold transition"
          >
            Sign Up
          </motion.button>
        </ul>

        {/* MOBILE BURGER */}
        <button
          className="md:hidden flex flex-col gap-2"
          onClick={() => setOpen(!open)}
        >
          <span className="w-8 h-[3px] bg-white rounded"></span>
          <span className="w-8 h-[3px] bg-white rounded"></span>
          <span className="w-8 h-[3px] bg-white rounded"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-black border-t border-yellow-400/10"
          >
            <div className="flex flex-col px-6 py-6 space-y-5 text-white">
              {menuItems.map((item, i) => (
                <div
                  key={i}
                  onClick={() => handleClick(item)}
                  className="text-lg font-semibold border-b border-white/10 pb-2 hover:text-yellow-400 transition cursor-pointer"
                >
                  {item.name}
                </div>
              ))}

              <button
                onClick={() => navigate("/restricted1")}
                className="mt-4 bg-yellow-400 text-black py-3 rounded-full font-bold hover:bg-yellow-500 transition"
              >
                Accès Restreint
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
