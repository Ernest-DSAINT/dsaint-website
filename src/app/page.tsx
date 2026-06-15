import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import Challenge from "../components/Challenge";
import Vision from "../components/Vision";
import Architecture from "../components/Architecture";
import Node01 from "../components/Node01";
import Technology from "../components/Technology";
import Sustainability from "../components/Sustainability";
import Roadmap from "../components/Roadmap";
import Partnerships from "../components/Partnerships";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      {/* DSAINT Metrics */}
      <Metrics />

      {/* Challenge */}
      <Challenge />

      {/* DSAINT Vision */}
      <Vision />

      {/* Four Layer Architecture */}
      <Architecture />

      {/* Demonstrator Node 01 */}
      <Node01 />

      {/* Technology */}
      <Technology />

      {/* Sustainability */}
      <Sustainability />

      {/* Roadmap */}
      <Roadmap />

      {/* Partnerships */}
      <Partnerships />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}
