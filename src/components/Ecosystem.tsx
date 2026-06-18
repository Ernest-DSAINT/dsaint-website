export default function Ecosystem() {
  const layers = [
    {
      icon: "🏗️",
      title: "Layer 1",
      subtitle: "Core Infrastructure Network",
      description:
        "Twelve environmentally friendly Tier III AI-optimized Core Nodes form the sovereign backbone of the DSAINT ecosystem. These facilities provide low-latency AI services, infrastructure orchestration and secure network operations.",
      color: "bg-blue-50 border-blue-600",
    },
    {
      icon: "🎓",
      title: "Layer 2",
      subtitle: "Research & Innovation Nodes",
      description:
        "Universities, research institutes and HPC facilities connected to the DSAINT ecosystem accelerate scientific research, AI development, digital twin modeling and technological innovation.",
      color: "bg-sky-50 border-sky-500",
    },
    {
      icon: "🏭",
      title: "Layer 3",
      subtitle: "Industrial & Enterprise Nodes",
      description:
        "Manufacturing companies, utilities, healthcare providers and enterprise operators deploy AI infrastructure for commercial, industrial and mission-critical applications.",
      color: "bg-green-50 border-green-600",
    },
    {
      icon: "🏠",
      title: "Layer 4",
      subtitle: "Community Compute Federation",
      description:
        "The Community Compute Federation connects Citizen AI Nodes through the Reverse Co-Hosting model. Inspired by the anthill principle, thousands of participants contribute computing resources while receiving compensation based on their measured contribution to the network.",
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

          <p className="max-w-5xl mx-auto text-xl text-slate-600">
            DSAINT is designed as a multi-layer sovereign AI ecosystem
            connecting infrastructure, research, industry and citizens
            into a resilient national AI platform.
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

        {/* Reverse Co-Hosting */}
        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-3xl p-10">

          <div className="text-center mb-10">

            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Reverse Co-Hosting
            </h3>

            <p className="max-w-5xl mx-auto text-lg text-slate-600 leading-relaxed">
              Reverse co-hosting is the future of Germany&apos;s independent AI –
              a future in which everyone can participate.
              <br />
              <br />
              Instead of renting infrastructure space to customers,
              DSAINT enables citizens, startups and organizations
              to host secure Citizen AI Nodes and contribute computing
              resources to Germany&apos;s sovereign AI ecosystem.
              <br />
              <br />
              Inspired by the anthill principle, thousands of small
              contributions combine into a powerful collective resource
              capable of supporting AI video generation, biochemical
              simulations, scientific computing and other
              compute-intensive workloads.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white rounded-2xl p-6 shadow text-center">

              <div className="text-4xl mb-3">🏠</div>

              <h4 className="font-bold mb-2">
                Citizen Nodes
              </h4>

              <p className="text-sm text-slate-600">
                Host secure AI units and participate in Germany&apos;s sovereign AI future.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-6 shadow text-center">

              <div className="text-4xl mb-3">🎬</div>

              <h4 className="font-bold mb-2">
                AI Video Generation
              </h4>

              <p className="text-sm text-slate-600">
                Affordable processing of high-compute creative workloads.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-6 shadow text-center">

              <div className="text-4xl mb-3">🧬</div>

              <h4 className="font-bold mb-2">
                Scientific Simulation
              </h4>

              <p className="text-sm text-slate-600">
                Distributed compute for biochemical and research workloads.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-6 shadow text-center">

              <div className="text-4xl mb-3">💶</div>

              <h4 className="font-bold mb-2">
                Fair Compensation
              </h4>

              <p className="text-sm text-slate-600">
                Rewards based on measured contribution to the federation.
              </p>

            </div>

          </div>

        </div>

        {/* Strategic Vision */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-12 text-center">

          <h3 className="text-3xl font-bold text-white mb-6">
            Germany&apos;s Sovereign AI Federation
          </h3>

          <p className="max-w-5xl mx-auto text-lg text-slate-300 leading-relaxed">
            DSAINT aims to connect Core Infrastructure Nodes,
            Community Compute Federation participants,
            municipalities, enterprises, universities and
            research institutions into a resilient sovereign
            AI ecosystem that strengthens Germany&apos;s digital
            independence and technological leadership.
          </p>

        </div>

      </div>
    </section>
  );
}
