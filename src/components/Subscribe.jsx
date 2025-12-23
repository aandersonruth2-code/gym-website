import { motion } from "framer-motion";
import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // later: connect to backend or email service
    console.log("Unsubscribe email:", email);
    setEmail("");
  };

  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="text-center mb-12"
        >
          
          <h2 className="text-4xl md:text-5xl font-extrabold">
             <span className="text-yellow-400">Subscribe</span>
          </h2>
         
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="bg-zinc-900 border border-yellow-400/30 rounded-2xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-4 rounded-full bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
            />

            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full transition"
            >
              Subscribe
            </button>
          </div>

          
        </motion.form>

      </div>
    </section>
  );
}
