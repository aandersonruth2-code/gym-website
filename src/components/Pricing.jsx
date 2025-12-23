import { motion } from "framer-motion";

const plans = [
  {
    title: "1 Month",
    price: "250 MAD",
    note: "Flexible & Short Term",
    features: [
      "Full Gym Access",
      "Men / Women Schedule",
      "Locker Room",
      "Basic Support",
    ],
  },
  {
    title: "1 Year",
    price: "2200 MAD",
    note: "Maximum Results",
    popular: true,
    features: [
      "Unlimited Gym Access",
      "Men / Women Schedule",
      "Locker Room",
      "Personal Coach Guidance",
      "Nutrition Advice",
    ],
  },
  {
    title: "6 Months",
    price: "1200 MAD",
    note: "Best Value",
    features: [
      "Unlimited Gym Access",
      "Men / Women Schedule",
      "Locker Room",
      "Coach Assistance",
      "Free Fitness Assessment",
    ],
  },
];

export default function Pricing() {
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
          <h4 className="text-yellow-400 uppercase tracking-widest font-semibold mb-3">
            Membership Plans
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Choose Your <span className="text-yellow-400">Duration</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Simple and transparent pricing with no hidden fees.
          </p>
        </motion.div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: index * 0.2 }}
              className={`relative bg-zinc-900 rounded-2xl p-8 border 
                ${plan.popular ? "border-yellow-400" : "border-yellow-400/20"}
              `}
            >
              {/* POPULAR BADGE */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-sm font-semibold px-4 py-1 rounded-full">
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
                <span className="text-yellow-400 text-4xl font-extrabold">
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-3 text-gray-400 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-yellow-400">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
