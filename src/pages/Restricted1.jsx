import { useState } from "react";
import { Send, User, Mail, Phone } from "lucide-react";
import Contact from "../components/Contact";
import { useEffect } from "react";

export default function Restricted1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
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
      setMessage("❌ Phone number must have exactly 10 digits");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      setMessage("❌ Invalid email");
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
      setFormData({ name: "", phone: "", email: "" });

      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } catch (error) {
      console.error(error);
      setMessage("❌ Something went wrong. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center pt-32 px-4">
      <div className="max-w-3xl w-full grid md:grid-cols-2 gap-12">
        {/* LEFT INFO */}
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Join <span className="text-[var(--main-color)]">AZNAK GYM</span>
          </h2>
          <p className="text-gray-700">
            Fill out the form to sign up and start your fitness journey today.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-[var(--main-color)]/20 p-4 rounded-xl">
              <User className="w-6 h-6 text-[var(--main-color)]" />
              <span className="text-gray-800 font-medium">Personalized Support</span>
            </div>
            <div className="flex items-center gap-3 bg-[var(--main-color)]/20 p-4 rounded-xl">
              <Phone className="w-6 h-6 text-[var(--main-color)]" />
              <span className="text-gray-800 font-medium">24/7 Availability</span>
            </div>
            <div className="flex items-center gap-3 bg-[var(--main-color)]/20 p-4 rounded-xl">
              <Mail className="w-6 h-6 text-[var(--main-color)]" />
              <span className="text-gray-800 font-medium">Fast Response</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white p-8 rounded-3xl shadow-2xl">
          {success && (
            <div className="bg-green-100 text-green-900 p-4 rounded-lg mb-6 text-center font-semibold">
              {message} Redirecting...
            </div>
          )}

          {!success && message && (
            <div className="bg-red-100 text-red-900 p-4 rounded-lg mb-6 text-center font-semibold">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--main-color)] outline-none"
              />
            </div>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--main-color)] outline-none"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--main-color)] outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[var(--main-color)] hover:bg-opacity-90 text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition"
            >
              <Send className="w-5 h-5" />
              {loading ? "Submitting..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>

      <Contact />
    </div>
  );
}
