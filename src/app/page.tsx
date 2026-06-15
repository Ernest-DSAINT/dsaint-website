import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import Challenge from "../components/Challenge";
import InvestmentCase from "../components/InvestmentCase";
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
      <Navbar />

      <main>
        <Hero />

        <Metrics />

        <Challenge />

        <InvestmentCase />

        <Vision />

        <Architecture />

        <Node01 />

        <Technology />

        <Sustainability />

        <Roadmap />

        <Partnerships />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
