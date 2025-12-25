import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Dumbbell, Heart } from "lucide-react";
import Coaches from "../components/Coaches";

/* animation presets */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const facilities = [
    { icon: Dumbbell, title: "Premium Equipment", description: "Modern machines & free weights" },
    { icon: Users, title: "Group Classes", description: "Motivating group sessions" },
    { icon: Heart, title: "Cardio Zone", description: "High-end cardio machines" },
    { icon: Award, title: "Personal Coaching", description: "1-on-1 professional training" },
  ];

  return (
    <div id="about">

      {/* HERO SECTION */}
      <section className="relative h-[420px] flex items-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.2 }}
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920"
          alt="AZNAK GYM"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-full text-center px-6"
        >
          <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-4">
            ABOUT <span className="text-yellow-400">AZNAK GYM</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Your ultimate fitness destination in Tangier
          </p>
        </motion.div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Our <span className="text-yellow-500">Story</span>
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              AZNAK GYM was founded with a simple mission: to create a premium fitness space where everyone, regardless of their fitness level, can achieve their health and wellness goals in a supportive and motivating environment.
            </p>
            <p className="text-gray-700 text-lg">
              More than a gym — AZNAK is a lifestyle and a community.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07d?w=600"
              alt="Gym training"
              className="h-64 w-full object-cover rounded-xl"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600"
              alt="Fitness session"
              className="h-64 w-full object-cover rounded-xl mt-8"
            />
          </div>
        </motion.div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {[{
            icon: Target,
            title: "Our Mission",
            text: "To empower individuals to transform their lives through fitness by providing world-class facilities, expert guidance, and a supportive community. We believe that everyone deserves access to premium fitness experiences that inspire lasting change."
          },{
            icon: Eye,
            title: "Our Vision",
            text: "To be Morocco's leading fitness destination, recognized for our innovative approach to health and wellness. We aspire to create a movement where fitness is not just a routine, but a lifestyle that brings joy, confidence, and vitality to our members."
          }].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-lg"
            >
              <item.icon className="w-14 h-14 text-yellow-500 mb-6" />
              <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-700 text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-12"
          >
            Our <span className="text-yellow-400">Facilities</span>
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {facilities.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-gray-900 p-8 rounded-xl"
              >
                <f.icon className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COACHES COMPONENT */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="bg-white py-20"
      >
        
          <Coaches />
        
      </motion.section>

    </div>
  );
}
