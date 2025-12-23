import Hero from "../components/Hero";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Aboutus from "../components/Aboutus";
import WhyTrainWithUs from "../components/WhyTrainWithUs";
import Map from "../components/Map";
import Contact from "../components/Contact";
import Subscribe from "../components/Subscribe";


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <Aboutus />
      <WhyTrainWithUs />
      <Map />
      <Contact />
      <Subscribe />
    </>
  );
}
