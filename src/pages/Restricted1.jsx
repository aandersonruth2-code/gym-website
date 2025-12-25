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
    if (e.target.name === "phone") {
      const digitsOnly = e.target.value.replace(/\D/g, "");
      setFormData({ ...formData, [e.target.name]: digitsOnly });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const validateForm = () => {
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phoneRegex.test(formData.phone)) {
      setMessage("❌ Phone must have exactly 10 digits");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      setMessage("❌ Invalid email");
      return false;
    }
    if (!formData.offer) {
      setMessage("❌ Please select an offer");
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
      setMessage("✔ Your request has been submitted successfully!");
      setFormData({ name: "", phone: "", email: "", offer: "" });

      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } catch (error) {
      console.error(error);
      setMessage("❌ An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 md:px-12 pt-32 pb-20 relative overflow-hidden">

      {/* Ambient yellow glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-yellow-400/20 blur-[140px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-400/20 blur-[140px] rounded-full" />

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-xl bg-gray-900 bg-opacity-90 p-10 md:p-12 rounded-3xl shadow-2xl space-y-6"
      >

        {success && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-yellow-400 text-black p-4 rounded-lg text-center font-bold mb-4 shadow-lg"
          >
            ✔ Form submitted successfully!<br />
            Redirecting to homepage...
          </motion.div>
        )}

        <h2 className="text-2xl md:text-3xl font-extrabold text-yellow-400 text-center mb-6">
          Sign Up for Coaching
        </h2>

        <select
          name="offer"
          value={formData.offer}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-yellow-400 outline-none text-white shadow-inner"
          required
        >
          <option value="">-- Select an offer --</option>
          <option value="Basic Coaching">Basic Coaching</option>
          <option value="Advanced Coaching">Advanced Coaching</option>
          <option value="Full Transformation">Full Transformation</option>
        </select>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-yellow-400 outline-none text-white shadow-inner"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone (10 digits)"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-yellow-400 outline-none text-white shadow-inner"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-yellow-400 outline-none text-white shadow-inner"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 text-black font-bold py-4 rounded-xl hover:bg-yellow-500 transition text-lg"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {message && !success && (
          <p className="mt-2 text-center font-medium text-red-500">{message}</p>
        )}
      </motion.form>
    </div>

    
  );
}
