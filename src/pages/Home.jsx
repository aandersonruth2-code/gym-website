import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/Hero";
import Opentime from "../components/Opentime";
import Pricing from "../components/Pricing";
import Aboutus from "../components/Aboutus";
import Coaches from "../components/Coaches";
import Map from "../components/Map";
import Contact from "../components/Contact";
import Subscribe from "../components/Subscribe";

const NAVBAR_HEIGHT = 96; // must match navbar height

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        const y =
          el.getBoundingClientRect().top +
          window.pageYOffset -
          NAVBAR_HEIGHT;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      // Home / logo click
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      {/* HERO */}
      <section id="hero">
        <Hero />
      </section>

      <Opentime />

      {/* PRICING */}
      <section id="pricing">
        <Pricing />
      </section>

      <Aboutus />
      <Coaches />
      <Map />
      <Contact />
      <Subscribe />
    </>
  );
}
