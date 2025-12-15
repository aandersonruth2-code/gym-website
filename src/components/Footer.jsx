import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">AZNAK GYM</h2>
          <p className="text-gray-400">
            Transformez votre corps et votre esprit avec nous. Fitness, force et motivation.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-yellow-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-500"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-500"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#hero" className="hover:text-yellow-500">Accueil</a></li>
            <li><a href="#about" className="hover:text-yellow-500">À Propos</a></li>
            <li><a href="#pricing" className="hover:text-yellow-500">Tarifs</a></li>
            <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="flex items-center gap-2 text-gray-300 mb-2">
            <span>📍</span> Tanger, Maroc
          </p>
          <p className="flex items-center gap-2 text-gray-300 mb-2">
            <span>📞</span> +212 600 123 456
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <span>✉️</span> contact@aznakgym.com
          </p>
        </div>

      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} AZNAK GYM. Tous droits réservés.
      </div>
    </footer>
  );
}
