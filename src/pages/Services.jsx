import { motion } from "framer-motion";
import Contact from "../components/Contact";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import servicesData from "../data/servicesData";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative h-[280px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600"
            alt="Aznak Gym Services"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Our <span className="text-[var(--main-color)]">Services</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional training programs designed for all fitness levels
          </p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="pt-24 pb-32 px-6">
        <div className="max-w-7xl mx-auto space-y-28">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* TEXT */}
              <div className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                <div className="inline-flex items-center gap-3 bg-[var(--main-color)] text-black px-4 py-2 rounded-full mb-6 font-bold">
                  <service.icon className="w-5 h-5" />
                  AZNAK GYM
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                  {service.title}
                </h2>

                <p className="text-gray-300 text-lg mb-8">
                  {service.description}
                </p>

                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[var(--main-color)] mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMAGE */}
              <div
                className={`relative h-[460px] rounded-2xl overflow-hidden shadow-2xl ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black border-t border-[var(--main-color)]/20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Get{" "}
            <span className="text-[var(--main-color)]">Started</span>?
          </h2>

          <p className="text-gray-300 text-lg mb-10">
            Join AZNAK GYM today and start your fitness transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* GO TO PRICING SECTION */}
            <button
              onClick={() =>
                navigate("/", { state: { scrollTo: "pricing" } })
              }
              className="bg-[var(--main-color)] hover:bg-opacity-90 text-black px-8 py-4 rounded-full font-bold transition"
            >
              View Membership Plans
            </button>

            {/* GO TO RESTRICTED PAGE */}
            <button
              onClick={() => navigate("/restricted1")}
              className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold transition"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </section>

      <Contact />
    </div>
  );
}
