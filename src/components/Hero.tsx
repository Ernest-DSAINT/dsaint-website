import Image from "next/image";

export default function Hero() {
return ( <section
   id="vision"
   className="relative min-h-screen overflow-hidden"
 >
{/* Background */} <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-cyan-50 to-slate-50" />

```
  {/* Azure Sunrise Glow */}
  <div
    className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2
      w-[1200px]
      h-[600px]
      rounded-full
      bg-cyan-400/20
      blur-3xl
    "
  />

  {/* Secondary Glow */}
  <div
    className="
      absolute
      top-20
      right-0
      w-[700px]
      h-[700px]
      rounded-full
      bg-blue-500/10
      blur-3xl
    "
  />

  {/* Europe Network Background */}
  <div
    className="
      absolute
      inset-0
      opacity-10
      bg-center
      bg-no-repeat
      bg-contain
      pointer-events-none
    "
    style={{
      backgroundImage:
        "url('/images/europe-network-background.png')",
    }}
  />

  {/* Navbar Spacer */}
  <div className="h-20" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

    {/* DSAINT Banner */}
    <div className="flex justify-center mb-12">
      <Image
        src="/images/dsaint-header-banner.png"
        alt="DSAINT"
        width={1800}
        height={500}
        priority
        className="
          w-full
          max-w-5xl
          h-auto
          drop-shadow-[0_0_30px_rgba(41,182,246,0.25)]
        "
      />
    </div>

    {/* Badge */}
    <div className="flex justify-center mb-8">
      <div className="px-6 py-2 rounded-full border border-yellow-500 bg-white/90 text-yellow-700 font-semibold shadow-sm">
        Concept Development Document
      </div>
    </div>

    {/* Headline */}
    <h1 className="text-center text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
      Building Germany&apos;s Sovereign
      <br />
      AI Infrastructure Backbone
    </h1>

    {/* Description */}
    <p className="text-center text-lg md:text-xl text-slate-700 max-w-5xl mx-auto mb-12 leading-relaxed">
      DSAINT develops a distributed network of secure, sustainable,
      and AI-optimized infrastructure nodes designed to strengthen
      Germany&apos;s digital sovereignty and support Europe&apos;s next
      generation of AI innovation.
    </p>

    {/* Network Status */}
    <div className="flex flex-wrap justify-center gap-4 mb-16">

      <div className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 font-medium">
        Node 01 • Bedburg-Hau
      </div>

      <div className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 font-medium">
        12 German Nodes
      </div>

      <div className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 font-medium">
        Tier III Architecture
      </div>

      <div className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 font-medium">
        Target PUE ≤ 1.20
      </div>

      <div className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 font-medium">
        Sovereign AI Infrastructure
      </div>

    </div>

    {/* KPI Cards */}
    <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">

      <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-8 text-center border border-sky-100">
        <div className="text-5xl font-bold text-sky-600 mb-2">
          2 MW
        </div>
        <div className="text-slate-600 font-medium">
          Initial Capacity
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-8 text-center border border-sky-100">
        <div className="text-5xl font-bold text-sky-600 mb-2">
          6 MW
        </div>
        <div className="text-slate-600 font-medium">
          Expansion Ready
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-8 text-center border border-sky-100">
        <div className="text-5xl font-bold text-sky-600 mb-2">
          Tier III
        </div>
        <div className="text-slate-600 font-medium">
          Infrastructure Standard
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-8 text-center border border-sky-100">
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
        className="
          px-8 py-4
          bg-blue-700
          text-white
          rounded-xl
          font-semibold
          shadow-lg
          hover:bg-blue-800
          transition
        "
      >
        Explore Demonstrator Node 01
      </a>

      <a
        href="/docs/dsaint-concept-development-document.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          px-8 py-4
          border border-blue-700
          text-blue-700
          rounded-xl
          font-semibold
          hover:bg-blue-50
          transition
        "
      >
        Download Concept Document
      </a>

    </div>

    {/* Core Values */}
    <div className="flex flex-wrap justify-center gap-8 text-slate-700 font-medium text-lg">
      <span>🔒 Secure</span>
      <span>🇪🇺 Sovereign</span>
      <span>📈 Scalable</span>
      <span>🌱 Sustainable</span>
    </div>

  </div>
</section>
```

);
}
