import { motion } from "framer-motion";
import galleryData from "../data/galleryData"; // import your data

export default function GalleryPage() {
  return (
    <section className="bg-black text-white py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-16"
        >
          <h4 className="text-main uppercase tracking-widest font-semibold mb-3">
            Our Gallery
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Fitness <span className="text-main">Moments</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Watch, learn, and get inspired by our gym sessions and workouts.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item, index) => {
            const isVideo = item.src.endsWith(".mp4"); // check if it's a video
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.2 }}
                className="rounded-2xl overflow-hidden border border-main/20 bg-zinc-900 shadow-lg"
              >
                {isVideo ? (
                  <video
                    src={item.src}
                    controls
                    className="w-full h-64 object-cover rounded-xl bg-black"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
