export default function Roadmap() {
  const roadmap = [
    {
      year: "2026",
      title: "Demonstrator Node 01",
      subtitle: "Bedburg-Hau, Germany",
      description:
        "Launch of the first DSAINT sovereign AI infrastructure node with 2 MW initial capacity and expansion capability up to 6 MW.",
      icon: "🏗️",
    },
    {
      year: "2028",
      title: "3 German Nodes",
      subtitle: "Regional Expansion",
      description:
        "Replication of the DSAINT model across strategically selected municipalities in Germany.",
      icon: "🇩🇪",
    },
    {
      year: "2032",
      title: "6 German Nodes",
      subtitle: "National Infrastructure Network",
      description:
        "Creation of a distributed sovereign AI infrastructure backbone supporting research, industry and public sector workloads.",
      icon: "⚡",
    },
    {
      year: "2036",
      title: "12 Core Nodes",
      subtitle: "National Scale",
      description:
        "Formation of a resilient multi-node infrastructure ecosystem across Germany with advanced operational integration.",
      icon: "🌐",
    },
    {
      year: "2040",
      title: "European Expansion",
      subtitle: "Cross-Border Network",
      description:
        "Expansion of the DSAINT concept into a distributed European sovereign AI infrastructure platform.",
      icon: "🇪🇺",
    },
  ];

  return (
    <section
      id="roadmap"
      className="py-28 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            European Expansion Roadmap
          </h2>

          <p className="max-w-4xl mx-auto text-xl text-slate-600">
            A phased strategy for developing a distributed sovereign AI
            infrastructure network across Germany and Europe.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-16">

            {roadmap.map((item, index) => (
              <div
                key={item.year}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="md:w-1/2 p-4">
                  <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition">

                    <div className="text-5xl mb-4">
                      {item.icon}
                    </div>

                    <div className="text-blue-700 font-bold text-3xl mb-2">
                      {item.year}
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>

                    <div className="text-blue-600 font-medium mb-4">
                      {item.subtitle}
                    </div>

                    <p className="text-slate-600">
                      {item.description}
                    </p>

                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-12 justify-center">
                  <div className="w-6 h-6 bg-blue-700 rounded-full border-4 border-white shadow-lg" />
                </div>

                {/* Spacer */}
                <div className="md:w-1/2" />
              </div>
            ))}

          </div>
        </div>

        {/* Vision Panel */}
        <div className="mt-24 bg-slate-900 rounded-3xl p-12 text-center">

          <h3 className="text-3xl font-bold text-white mb-6">
            Long-Term Vision
          </h3>

          <p className="max-w-4xl mx-auto text-xl text-slate-300">
            DSAINT aims to establish a distributed network of sovereign AI
            infrastructure nodes that strengthens digital sovereignty,
            infrastructure resilience and technological leadership across
            Germany and Europe.
          </p>

        </div>

      </div>
    </section>
  );
}
