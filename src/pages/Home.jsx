import Hero from "../components/Hero";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Aboutus from "../components/Aboutus";
import Map from "../components/Map";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <Aboutus />
      <Map />
      <Contact />
    </>
  );
}
