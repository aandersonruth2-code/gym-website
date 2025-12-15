import { useState } from "react";
import { motion } from "framer-motion";

export default function Restricted1() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    offer: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    // Allow only digits for phone
    if (e.target.name === "phone") {
      const digitsOnly = e.target.value.replace(/\D/g, "");
      setFormData({ ...formData, [e.target.name]: digitsOnly });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const validateForm = () => {
    const phoneRegex = /^\d{10}$/; // exactly 10 digits
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phoneRegex.test(formData.phone)) {
      setMessage("❌ Le numéro de téléphone doit contenir exactement 10 chiffres");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      setMessage("❌ Email invalide");
      return false;
    }
    if (!formData.offer) {
      setMessage("❌ Veuillez sélectionner une offre");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      const dataWithDate = { ...formData, submittedAt: new Date().toISOString() };

      await fetch(
        "https://script.google.com/macros/s/AKfycbyHfDFejG9MOxl9dg91zXvU3QeAAlgDpmX2ucgo9NX_ULSKbXnmUY86sePs_1js7421/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataWithDate),
        }
      );

      setSuccess(true);
      setMessage("✔ Votre demande a été soumise avec succès !");
      setFormData({ name: "", phone: "", email: "", offer: "" });

      // Redirect to homepage after 3 seconds
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } catch (error) {
      console.error(error);
      setMessage("❌ Une erreur est survenue. Réessayez.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 pt-32 pb-20 flex items-center justify-center">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl bg-gray-900 p-8 rounded-2xl shadow-lg space-y-4"
      >
        {success && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-green-500 text-black p-4 rounded-lg text-center font-bold mb-4 shadow-lg"
          >
            ✔ Formulaire envoyé avec succès !<br />
            Vous allez être redirigé vers la page d’accueil...
          </motion.div>
        )}

        <select
          name="offer"
          value={formData.offer}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none text-white"
          required
        >
          <option value="">-- Choisir une offre --</option>
          <option value="Basic Coaching">Basic Coaching</option>
          <option value="Advanced Coaching">Advanced Coaching</option>
          <option value="Full Transformation">Full Transformation</option>
        </select>

        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none text-white"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Téléphone (10 chiffres)"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none text-white"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
        >
          {loading ? "Envoi..." : "Valider"}
        </button>

        {message && !success && (
          <p className="mt-4 text-center font-medium text-red-500">{message}</p>
        )}
      </motion.form>
    </div>
  );
}
