import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 md:px-16 pt-20 pb-8 overflow-hidden">

      {/* Main color glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-main/20 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-wide mb-4">
            AZNAK <span className="text-main">GYM</span>
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-sm">
            Transform your body and mind with us. Strength, fitness, and motivation — all in one place.
          </p>

          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-main/30 flex items-center justify-center
                           text-main hover:bg-main hover:text-black transition-all duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-bold mb-5 uppercase tracking-wide">
            Quick <span className="text-main">Links</span>
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#hero" className="hover:text-main transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-main transition">
                About
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-main transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-main transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-bold mb-5 uppercase tracking-wide">
            Contact <span className="text-main">Info</span>
          </h3>
          <p className="text-gray-300 mb-3 flex items-center gap-2">
            📍 Tangier, Morocco
          </p>
          <p className="text-gray-300 mb-3 flex items-center gap-2">
            📞 +212 600 123 456
          </p>
          <p className="text-gray-300 flex items-center gap-2">
            ✉️ contact@aznakgym.com
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 border-t border-white/10 mt-14 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AZNAK GYM. All rights reserved.
      </div>
    </footer>
  );
}
