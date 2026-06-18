export default function InvestmentCase() {
  const pillars = [
    {
      title: "Sovereign AI Infrastructure",
      icon: "🇩🇪",
      description:
        "DSAINT strengthens Germany's digital sovereignty through a distributed network of secure AI infrastructure nodes operated under European governance, security and compliance standards.",
    },
    {
      title: "Reverse Co-Hosting",
      icon: "🏠",
      description:
        "Citizen AI Nodes enable ordinary people to participate directly in the development of Germany's independent AI future while receiving compensation for their contributions.",
    },
    {
      title: "Community Compute Federation",
      icon: "🐜",
      description:
        "Inspired by the anthill principle, thousands of Citizen AI Nodes combine to process compute-intensive workloads such as AI video generation, scientific simulations and digital twin modeling.",
    },
    {
      title: "Long-Life Infrastructure Assets",
      icon: "🏗️",
      description:
        "DSAINT focuses on ownership and operation of land, facilities, power systems, cooling infrastructure, connectivity and security systems rather than rapidly depreciating AI hardware.",
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

          <p className="max-w-5xl mx-auto text-xl text-slate-600">
            DSAINT is not merely an AI infrastructure project.
            It is a sovereign AI ecosystem that combines Core Infrastructure
            Nodes, Community Compute Federation participants and trusted
            institutional partners into a resilient national platform.
          </p>

        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 gap-8">

          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-3xl shadow-lg p-10 border border-sky-100 hover:shadow-xl transition"
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
        <div className="mt-20 bg-slate-900 rounded-3xl p-12 text-center">

          <h3 className="text-3xl font-bold text-white mb-6">
            A New Model for Sovereign AI
          </h3>

          <p className="max-w-5xl mx-auto text-xl text-slate-300 leading-relaxed">
            DSAINT combines environmentally friendly Tier III Core Infrastructure
            Nodes with a nationwide Community Compute Federation.
            <br />
            <br />
            Fast-response AI services remain within the Core Infrastructure
            Network, while compute-intensive workloads are distributed across
            Citizen AI Nodes through Reverse Co-Hosting.
            <br />
            <br />
            This approach creates a scalable, resilient and economically
            inclusive AI ecosystem in which municipalities, enterprises,
            universities, research institutions and citizens all participate
            in Germany&apos;s sovereign AI future.
          </p>

        </div>

      </div>
    </section>
  );
}
