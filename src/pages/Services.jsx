import { motion } from "framer-motion";
import {
  Dumbbell,
  Users,
  Zap,
  Activity,
  Music,
  Heart,
  CheckCircle,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description:
        "Build strength and muscle with structured, professional training programs.",
      image:
        "https://images.unsplash.com/photo-1676989121400-63ba765d7f55?w=1200",
      features: [
        "Free weights & machines",
        "Personalized programs",
        "Guided progression",
        "Professional coaches",
      ],
    },
    {
      icon: Activity,
      title: "Fitness Classes",
      description:
        "High-energy group classes designed to keep you motivated and burn calories.",
      image:
        "https://images.unsplash.com/photo-1630415187908-39d6d209b15c?w=1200",
      features: [
        "All fitness levels",
        "Certified instructors",
        "Small group sessions",
        "Motivating atmosphere",
      ],
    },
    {
      icon: Zap,
      title: "Cross Training",
      description:
        "High-intensity functional training to improve performance and endurance.",
      image:
        "https://images.unsplash.com/photo-1639511205180-7b2865b2f467?w=1200",
      features: [
        "HIIT workouts",
        "Weightlifting",
        "Conditioning",
        "Team spirit",
      ],
    },
    {
      icon: Users,
      title: "Boxing",
      description:
        "Improve strength, speed, and confidence through professional boxing training.",
      image:
        "https://images.unsplash.com/photo-1716307043003-dbe6a5cc496e?w=1200",
      features: [
        "Technique & cardio",
        "Punching bags",
        "Agility training",
        "Sparring sessions",
      ],
    },
    {
      icon: Music,
      title: "Dance Fitness",
      description:
        "Burn calories while having fun with energetic dance-based workouts.",
      image:
        "https://images.unsplash.com/photo-1630415187908-39d6d209b15c?w=1200",
      features: [
        "Zumba classes",
        "Dance cardio",
        "High-energy music",
        "Full-body workout",
      ],
    },
    {
      icon: Heart,
      title: "Cardio Training",
      description:
        "Improve your endurance with a fully equipped, modern cardio zone.",
      image:
        "https://images.unsplash.com/photo-1761971976282-b2bb051a5474?w=1200",
      features: [
        "Treadmills & bikes",
        "HIIT cardio sessions",
        "Heart rate tracking",
        "Fat loss programs",
      ],
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* 🔥 SMALL HERO */}
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
            Our <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional training programs designed for all fitness levels
          </p>
        </motion.div>
      </section>

      {/* 🔥 SERVICES */}
      <section className="pt-24 pb-32 px-6">
        <div className="max-w-7xl mx-auto space-y-28">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* TEXT */}
              <div
                className={`${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="inline-flex items-center gap-3 bg-yellow-400 text-black px-4 py-2 rounded-full mb-6 font-bold">
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
                      <CheckCircle className="w-6 h-6 text-yellow-400 mt-1" />
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

      {/* 🔥 CTA */}
      <section className="py-24 bg-black border-t border-yellow-400/20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Get <span className="text-yellow-400">Started</span>?
          </h2>

          <p className="text-gray-300 text-lg mb-10">
            Join AZNAK GYM today and start your fitness transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-bold transition"
            >
              View Membership Plans
            </a>

            <a
              href="#contact"
              className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
