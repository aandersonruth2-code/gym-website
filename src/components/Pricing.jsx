import { motion } from "framer-motion";
import { pricingData } from "../data/pricingdata";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const handleSignup = (planTitle) => {
    navigate(`/restricted1?offer=${encodeURIComponent(planTitle)}`);
  };

  return (
    <section id="pricing" className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="text-center mb-16"
        >
          <h4
            className="uppercase tracking-widest font-semibold mb-3"
            style={{ color: "var(--main-color)" }}
          >
            {pricingData.title.small}
          </h4>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Choose Your <span style={{ color: "var(--main-color)" }}>Duration</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            {pricingData.title.description}
          </p>
        </motion.div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {pricingData.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: index * 0.2 }}
              className="relative bg-zinc-900 rounded-2xl p-8"
              style={{
                border: plan.popular
                  ? `1px solid var(--main-color)`
                  : `1px solid var(--main-color, 0.2)`,
              }}
            >
              {/* MOST POPULAR */}
              {plan.popular && (
                <span
                  className="absolute -top-4 left-1/2 -translate-x-1/2 text-black text-sm font-semibold px-4 py-1 rounded-full"
                  style={{ backgroundColor: "var(--main-color)" }}
                >
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold text-center mb-2">
                {plan.title}
              </h3>

              <p className="text-center text-gray-400 text-sm mb-6">
                {plan.note}
              </p>

              <div className="text-center mb-6">
                <span
                  className="text-4xl font-extrabold"
                  style={{ color: "var(--main-color)" }}
                >
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-3 text-gray-400 text-sm mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span style={{ color: "var(--main-color)" }}>✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* SIGN UP BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSignup(plan.title)}
                className={`w-full py-3 rounded-xl font-extrabold transition`}
                style={{
                  backgroundColor: plan.popular ? "var(--main-color)" : "transparent",
                  color: plan.popular ? "black" : "var(--main-color)",
                  border: plan.popular ? "none" : `1px solid var(--main-color)`,
                }}
              >
                Sign Up
              </motion.button>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
