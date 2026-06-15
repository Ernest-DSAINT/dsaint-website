export default function Ecosystem() {
  const layers = [
    {
      icon: "🏢",
      title: "Layer 1",
      subtitle: "Sovereign Infrastructure Core Nodes",
      description:
        "The national AI infrastructure backbone consisting of strategically located DSAINT Core Nodes providing secure, resilient and sovereign AI-ready infrastructure.",
      color: "bg-blue-50 border-blue-600",
    },
    {
      icon: "🎓",
      title: "Layer 2",
      subtitle: "Research & Innovation Nodes",
      description:
        "Universities, research institutes and HPC facilities connected to the DSAINT ecosystem to accelerate scientific research, AI development and technological innovation.",
      color: "bg-sky-50 border-sky-500",
    },
    {
      icon: "🏭",
      title: "Layer 3",
      subtitle: "Industrial & Enterprise Nodes",
      description:
        "Manufacturing companies, utilities, hospitals and enterprise operators deploying AI infrastructure for commercial and industrial applications.",
      color: "bg-green-50 border-green-600",
    },
    {
      icon: "🌍",
      title: "Layer 4",
      subtitle: "DSAINT Community Compute Federation",
      description:
        "A trusted ecosystem enabling citizens, SMEs, startups and home AI operators to participate in Germany's future sovereign AI infrastructure network through distributed compute resources, innovation initiatives and digital collaboration.",
      color: "bg-yellow-50 border-yellow-500",
    },
  ];

  return (
    <section
      id="ecosystem"
      className="py-28 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            DSAINT Ecosystem
          </h2>

          <p className="max-w-4xl mx-auto text-xl text-slate-600">
            DSAINT is designed as a multi-layer ecosystem connecting
            infrastructure, research, industry and communities into
            a resilient national AI platform.
          </p>
        </div>

        {/* Ecosystem Layers */}
        <div className="grid lg:grid-cols-2 gap-8">

          {layers.map((layer) => (
            <div
              key={layer.title}
              className={`${layer.color} border-l-8 rounded-3xl shadow-lg p-8 hover:shadow-xl transition`}
            >
              <div className="text-5xl mb-4">
                {layer.icon}
              </div>

              <div className="text-sm font-semibold text-slate-500 mb-2">
                {layer.title}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {layer.subtitle}
              </h3>

              <p className="text-slate-700 leading-relaxed">
                {layer.description}
              </p>
            </div>
          ))}

        </div>

        {/* Community Federation Highlight */}
        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-3xl p-10">

          <div className="text-center mb-10">

            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              DSAINT Community Compute Federation
            </h3>

            <p className="max-w-4xl mx-auto text-lg text-slate-600">
              The long-term vision extends beyond infrastructure ownership.
              DSAINT aims to create a trusted ecosystem where communities,
              startups and small businesses can contribute to Germany&apos;s
              future sovereign AI capabilities.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white rounded-2xl p-6 shadow text-center">
              <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>

              <h4 className="font-bold mb-2">
                Citizens
              </h4>

              <p className="text-sm text-slate-600">
                Participation in trusted digital infrastructure initiatives.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow text-center">
              <div className="text-4xl mb-3">🏢</div>

              <h4 className="font-bold mb-2">
                SMEs
              </h4>

              <p className="text-sm text-slate-600">
                Access to scalable AI infrastructure and innovation programs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow text-center">
              <div className="text-4xl mb-3">🚀</div>

              <h4 className="font-bold mb-2">
                Startups
              </h4>

              <p className="text-sm text-slate-600">
                Accelerated development through sovereign AI infrastructure access.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow text-center">
              <div className="text-4xl mb-3">🖥️</div>

              <h4 className="font-bold mb-2">
                Home AI Operators
              </h4>

              <p className="text-sm text-slate-600">
                Future participation in a trusted distributed compute ecosystem.
              </p>
            </div>

          </div>

        </div>

        {/* Strategic Vision */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-12 text-center">

          <h3 className="text-3xl font-bold text-white mb-6">
            Germany&apos;s Future AI Ecosystem
          </h3>

          <p className="max-w-4xl mx-auto text-lg text-slate-300">
            DSAINT aims to connect sovereign infrastructure, research
            institutions, industry and communities into a distributed
            ecosystem capable of supporting Germany&apos;s long-term AI
            competitiveness and digital sovereignty.
          </p>

        </div>

      </div>
    </section>
  );
}
