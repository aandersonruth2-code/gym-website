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
    { name: "About", route: "/aboutus" },
    { name: "Services", route: "/services" },
    { name: "Plans", id: "pricing" },
    { name: "Contact", route: "/Restricted1" },
    { name: "Gallery", route: "/gallery" }
  ];

  const handleClick = (item) => {
    setOpen(false);

    // PAGE NAVIGATION
    if (item.route) {
      navigate(item.route);
      return;
    }

    // SCROLL SECTIONS (HOME ONLY)
    if (item.id) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document
            .getElementById(item.id)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document
          .getElementById(item.id)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-yellow-400/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleClick({ id: "hero" })}
        >
          <img
            src={aznakLogo}
            alt="Aznak Gym"
            className="w-14 h-14 rounded-full object-cover"
          />
          <span className="text-white font-extrabold text-xl">
            AZNAK <span className="text-yellow-400">GYM</span>
          </span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-white font-semibold">
          {menuItems.map((item, i) => (
            <li
              key={i}
              onClick={() => handleClick(item)}
              className="relative cursor-pointer group"
            >
              <span className="group-hover:text-yellow-400 transition">
                {item.name}
              </span>
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}

          {/* RESTRICTED */}
          <button
            onClick={() => navigate("/restricted1")}
            className="ml-4 bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-full font-bold transition"
          >
            Sign up
          </button>
        </ul>

        {/* MOBILE */}
        <button
          className="md:hidden flex flex-col gap-2"
          onClick={() => setOpen(!open)}
        >
          <span className="w-8 h-[3px] bg-white rounded" />
          <span className="w-8 h-[3px] bg-white rounded" />
          <span className="w-8 h-[3px] bg-white rounded" />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black"
          >
            <div className="flex flex-col px-6 py-6 space-y-5 text-white">
              {menuItems.map((item, i) => (
                <div
                  key={i}
                  onClick={() => handleClick(item)}
                  className="border-b border-white/10 pb-2 hover:text-yellow-400 cursor-pointer"
                >
                  {item.name}
                </div>
              ))}

              <button
                onClick={() => navigate("/restricted1")}
                className="bg-yellow-400 text-black py-3 rounded-full font-bold"
              >
                Sign up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
