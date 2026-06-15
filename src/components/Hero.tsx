import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-white to-slate-50" />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/images/dsaint-logo.png"
            alt="DSAINT Logo"
            width={700}
            height={250}
            priority
            className="w-auto h-auto max-w-xl"
          />
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="px-5 py-2 rounded-full border border-yellow-500 text-yellow-600 font-semibold">
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
          Distributed Sovereign AI Infrastructure
        </p>

        {/* Summary */}
        <p className="text-center text-lg text-slate-600 max-w-5xl mx-auto mb-16">
          DSAINT develops a distributed network of secure,
          sustainable, and AI-optimized infrastructure nodes designed
          to strengthen Germany&apos;s digital sovereignty and support
          Europe&apos;s next generation of AI innovation.
        </p>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-14">
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <div className="text-5xl font-bold text-sky-600 mb-2">
              2 MW
            </div>
            <div className="text-slate-600">
              Initial Capacity
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <div className="text-5xl font-bold text-sky-600 mb-2">
              6 MW
            </div>
            <div className="text-slate-600">
              Expansion Ready
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <div className="text-5xl font-bold text-sky-600 mb-2">
              Tier III
            </div>
            <div className="text-slate-600">
              Infrastructure Standard
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <div className="text-5xl font-bold text-sky-600 mb-2">
              €43M
            </div>
            <div className="text-slate-600">
              Estimated CAPEX
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#node"
            className="px-8 py-4 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            View Demonstrator Node 01
          </a>

          <a
            href="#vision"
            className="px-8 py-4 border border-blue-700 text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Explore DSAINT Vision
          </a>
        </div>

        {/* Values */}
        <div className="flex flex-wrap justify-center gap-8 text-slate-700 font-medium">
          <span>🔒 Secure</span>
          <span>🇪🇺 Sovereign</span>
          <span>📈 Scalable</span>
          <span>🌱 Sustainable</span>
        </div>
      </div>
    </section>
  );
}
