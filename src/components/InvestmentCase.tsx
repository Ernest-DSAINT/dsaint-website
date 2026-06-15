export default function InvestmentCase() {
  const pillars = [
    {
      title: "Sovereign Infrastructure",
      icon: "🇪🇺",
      description:
        "Strengthening Germany's and Europe's digital sovereignty through strategically located AI-ready infrastructure nodes operated under European governance principles.",
    },
    {
      title: "Long-Life Assets",
      icon: "🏗️",
      description:
        "DSAINT focuses on ownership and operation of land, facilities, power systems, cooling infrastructure and connectivity rather than rapidly depreciating compute hardware.",
    },
    {
      title: "Distributed Resilience",
      icon: "🔒",
      description:
        "A distributed node architecture reduces concentration risk and creates a resilient infrastructure backbone capable of supporting future AI workloads.",
    },
    {
      title: "European Expansion",
      icon: "🌍",
      description:
        "Demonstrator Node 01 is designed as the blueprint for a future network of sovereign AI infrastructure nodes across Germany and Europe.",
    },
  ];

  return (
    <section
      id="investment-case"
      className="py-28 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Why DSAINT
          </h2>

          <p className="max-w-4xl mx-auto text-xl text-slate-600">
            DSAINT is not just another AI project. It is an infrastructure
            platform designed to support Germany's long-term digital sovereignty,
            technological competitiveness and regional innovation.
          </p>
        </div>

        {/* Four Pillars */}
        <div className="grid md:grid-cols-2 gap-8">

          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-xl transition"
            >
              <div className="text-5xl mb-6">
                {pillar.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {pillar.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}

        </div>

        {/* Strategic Summary */}
        <div className="mt-20 bg-blue-700 rounded-3xl p-12 text-center">

          <h3 className="text-3xl font-bold text-white mb-6">
            Infrastructure-as-a-Platform
          </h3>

          <p className="max-w-4xl mx-auto text-xl text-blue-100">
            DSAINT creates long-term value through ownership and operation of
            critical infrastructure assets. This model supports recurring
            revenue, infrastructure resilience, scalable growth and strategic
            national capabilities.
          </p>

        </div>

      </div>
    </section>
  );
}
