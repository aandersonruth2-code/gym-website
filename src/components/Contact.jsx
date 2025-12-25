import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function SocialMediaFixed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-4 bg-black bg-opacity-80 p-4 rounded-lg shadow-lg"
    >
      <h3 className="text-white font-bold text-center text-sm">Contact us</h3>
      <div className="flex gap-4 text-2xl justify-center">
        <a
          href="https://wa.me/212600123456"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:scale-110 transition"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://www.instagram.com/your_instagram_username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:scale-110 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.facebook.com/your_facebook_page"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:scale-110 transition"
        >
          <FaFacebook />
        </a>

        <a
          href="mailto:contact@aznakgym.com"
          className="text-yellow-500 hover:scale-110 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </motion.div>
  );
}
