import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      setStatus("❌ Veuillez saisir votre nom");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      setStatus("❌ Email invalide");
      return false;
    }
    if (!formData.message.trim()) {
      setStatus("❌ Veuillez saisir un message");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      const payload = {
        ...formData,
        submittedAt: new Date().toLocaleString(),
      };

      await fetch(
        "https://script.google.com/macros/s/AKfycbyHfDFejG9MOxl9dg91zXvU3QeAAlgDpmX2ucgo9NX_ULSKbXnmUY86sePs_1js7421/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Redirect after 3s
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } catch (err) {
      console.error(err);
      setStatus("❌ Une erreur est survenue");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Contactez-nous
          </h2>
          <p className="text-gray-300 mb-6">
            Remplissez le formulaire ci-dessous pour toute question ou réservation.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {success && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-green-500 text-black p-4 rounded-lg text-center font-bold shadow-lg"
              >
                ✔ Message envoyé avec succès ! <br />
                Redirection vers l’accueil...
              </motion.div>
            )}

            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />

            <input
	controllerFile name="email"
              type="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />

            <textarea
              name="message"
              placeholder="Votre message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition disabled:opacity-50"
            >
              {loading ? "Envoi..." : "Envoyer"}
            </button>

            {!success && status && (
              <p className="text-center text-red-500 font-medium">{status}</p>
            )}
          </form>
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center gap-8"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold">
            Suivez-nous
          </h3>

          <div className="flex gap-6 text-4xl">
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

          <p className="text-gray-400 max-w-md">
            Contactez-nous via WhatsApp ou suivez-nous sur nos réseaux sociaux.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
