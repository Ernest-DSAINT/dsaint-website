import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center text-center">

          {/* Logo */}
          <Image
            src="/images/dsaint-logo-horizontal.png"
            alt="DSAINT"
            width={320}
            height={90}
            className="h-16 w-auto mb-8"
          />

          {/* Company Name */}
          <h3 className="text-4xl font-bold mb-4">
            DSAINT
          </h3>

          {/* Tagline */}
          <p className="text-xl text-slate-300 max-w-4xl mb-6">
            Securing Germany's Digital Future Through Distributed Sovereign AI Infrastructure
          </p>

          {/* Description */}
          <p className="max-w-3xl text-slate-400 mb-10">
            Distributed Sovereign AI Infrastructure Nodes Technology.
            Building Germany's Sovereign AI Infrastructure Backbone through
            secure, scalable, and sustainable infrastructure development.
          </p>

          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-slate-300">

            <a href="#vision" className="hover:text-white transition">
              Vision
            </a>

            <a href="#architecture" className="hover:text-white transition">
              Architecture
            </a>

            <a href="#node" className="hover:text-white transition">
              Node 01
            </a>

            <a href="#technology" className="hover:text-white transition">
              Technology
            </a>

            <a href="#roadmap" className="hover:text-white transition">
              Roadmap
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>

          </div>

          {/* Divider */}
          <div className="w-full border-t border-slate-800 mb-8" />

          {/* Disclaimer */}
          <p className="text-sm text-slate-500">
            Concept Development Document – not an offer of securities or investment solicitation.
          </p>

          {/* Copyright */}
          <p className="text-sm text-slate-600 mt-3">
            © 2026 DSAINT – Distributed Sovereign AI Infrastructure Nodes Technology
          </p>

        </div>
      </div>
    </footer>
  );
}
