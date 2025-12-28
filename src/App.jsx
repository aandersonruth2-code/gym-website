import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Restricted1 from "./pages/Restricted1"; // import Restricted.jsx
import GalleryPage from "./pages/GalleryPage";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/restricted1" element={<Restricted1 />} /> {/* route to Restricted page */}
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}
