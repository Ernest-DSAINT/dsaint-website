export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* DSAINT Information */}
          <div className="text-center md:text-left">

            <div className="text-xl font-bold mb-2">
              DSAINT
            </div>

            <div className="text-slate-400 text-sm">
              Distributed Sovereign AI Infrastructure Nodes Technology
            </div>

            <div className="text-slate-500 text-sm mt-2">
              Concept Development Document
            </div>

          </div>

          {/* Footer Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <a
              href="/docs/dsaint-privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              Privacy Policy
            </a>

            <a
              href="/docs/dsaint-impressum.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              Impressum
            </a>

            <a
              href="#contact"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              Contact
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">

          <p className="text-slate-500 text-sm">
            © 2026 DSAINT · Distributed Sovereign AI Infrastructure Nodes Technology
          </p>

          <p className="text-slate-600 text-xs mt-2">
            Concept Development Document – not an offer of securities or investment solicitation.
          </p>

        </div>

      </div>
    </footer>
  );
}
