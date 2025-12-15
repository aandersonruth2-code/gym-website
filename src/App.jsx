import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Coaches from "./pages/Coaches";
import Restricted1 from "./pages/Restricted1"; // import Restricted.jsx

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/restricted1" element={<Restricted1 />} /> {/* route to Restricted page */}
      </Routes>

      <Footer />
    </Router>
  );
}
