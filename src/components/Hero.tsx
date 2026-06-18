import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="vision"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-cyan-50 to-slate-50" />

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
          opacity-15
          bg-cover
          bg-no-repeat
          pointer-events-none
        "
        style={{
          backgroundImage:
            "url('/images/europe-network-background.png')",
          backgroundPosition: 'center top',
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
        <p className="text-center text-lg md:text-xl text-slate-700 max-w-5xl mx-auto mb-8 leading-relaxed">
          DSAINT is a distributed sovereign AI infrastructure movement
          that combines professional infrastructure ownership with
          citizen participation through Reverse Co-Hosting.
          By connecting core infrastructure nodes, research institutions,
          industry, municipalities and community-operated AI nodes,
          DSAINT enables everyone to contribute to Germany&apos;s
          independent AI future.
        </p>

        {/* Official Slogan */}
        <div className="max-w-5xl mx-auto mb-12">
          <p className="text-center text-2xl md:text-3xl font-semibold text-sky-700 italic">
            Reverse co-hosting is the future of Germany&apos;s independent AI –
            a future in which everyone can participate.
          </p>
        </div>

      </div>
    </section>
  );
}
