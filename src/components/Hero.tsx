import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-white to-slate-50" />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        {/* DSAINT Corporate Banner */}
        <div className="flex justify-center mb-12">
          <Image
            src="/images/dsaint-header-banner.png"
            alt="DSAINT"
            width={1800}
            height={500}
            priority
            className="w-full max-w-6xl h-auto"
          />
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="px-6 py-2 rounded-full border border-yellow-500 bg-white/80 backdrop-blur-sm text-yellow-700 font-semibold shadow-sm">
            Concept Development Document
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
          Building Germany&apos;s Sovereign
          <br />
          AI Infrastructure Backbone
        </h1>

        {/* Subtitle */}
        <p className="text-center text-xl md:text-3xl text-sky-700 font-medium max-w-5xl mx-auto mb-10">
          Securing Germany&apos;s Digital Future Through
          <br />
          Distributed Sovereign AI Infrastructure
        </p>

        {/* Summary */}
        <p className="text-center text-lg text-slate-600 max-w-5xl mx-auto mb-16">
          DSAINT develops a distributed network of secure, sustainable,
          and AI-optimized infrastructure nodes designed to strengthen
          Germany&apos;s digital sovereignty and support Europe&apos;s next
          generation of AI innovation.
        </p>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center border border-sky-100">
            <div className="text-5xl font-bold text-sky-600 mb-2">
              2 MW
            </div>
            <div className="text-slate-600 font-medium">
              Initial Capacity
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center border border-sky-100">
            <div className="text-5xl font-bold text-sky-600 mb-2">
              6 MW
            </div>
            <div className="text-slate-600 font-medium">
              Expansion Ready
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center border border-sky-100">
            <div className="text-5xl font-bold text-sky-600 mb-2">
              Tier III
            </div>
            <div className="text-slate-600 font-medium">
              Infrastructure Standard
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center border border-sky-100">
            <div className="text-5xl font-bold text-sky-600 mb-2">
              €43M
            </div>
            <div className="text-slate-600 font-medium">
              Estimated CAPEX
            </div>
          </div>

        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">

          <a
            href="#node"
            className="px-8 py-4 bg-blue-700 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-800 transition"
          >
            Explore Demonstrator Node 01
          </a>

          <a
            href="/docs/dsaint-concept-development-document.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-blue-700 text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Download Concept Document
          </a>

        </div>

        {/* Values */}
        <div className="flex flex-wrap justify-center gap-8 text-slate-700 font-medium text-lg">
          <span>🔒 Secure</span>
          <span>🇪🇺 Sovereign</span>
          <span>📈 Scalable</span>
          <span>🌱 Sustainable</span>
        </div>

      </div>
    </section>
  );
}
