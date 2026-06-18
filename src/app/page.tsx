import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import Challenge from "../components/Challenge";
import InvestmentCase from "../components/InvestmentCase";
import Vision from "../components/Vision";
import Ecosystem from "../components/Ecosystem";
import Architecture from "../components/Architecture";
import Technology from "../components/Technology";
import Sustainability from "../components/Sustainability";
import Node01 from "../components/Node01";
import Governance from "../components/Governance";
import Roadmap from "../components/Roadmap";
import NetworkVision from "../components/NetworkVision";
import Partnerships from "../components/Partnerships";
import Resources from "../components/Resources";
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

        <Ecosystem />

        <Architecture />

        <Technology />

        <Sustainability />

        <Node01 />

        <Governance />

        <Roadmap />

        <NetworkVision />

        <Partnerships />

        <Resources />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
