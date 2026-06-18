export default function Roadmap() {
  const roadmap = [
    {
      year: "2027",
      title: "Demonstrator Node 01",
      subtitle: "Bedburg-Hau, Germany",
      description:
        "Commissioning of the first DSAINT Core Infrastructure Node with 2 MW initial IT capacity, expandable to 6 MW. The facility serves as the operational blueprint for future sovereign AI infrastructure deployments across Germany.",
      icon: "🏗️",
    },
    {
      year: "2028",
      title: "Citizen Node Program",
      subtitle: "Reverse Co-Hosting Launch",
      description:
        "Introduction of the DSAINT Community Compute Federation, enabling citizens, startups and organizations to host Citizen AI Nodes and participate directly in Germany's sovereign AI ecosystem while earning rewards based on their contribution.",
      icon: "🏠",
    },
    {
      year: "2030",
      title: "Core Network Expansion",
      subtitle: "3 German Core Nodes",
      description:
        "Deployment of additional Core Infrastructure Nodes in strategically selected German municipalities, creating the first interconnected sovereign AI infrastructure network and expanding regional compute capacity.",
      icon: "🇩🇪",
    },
    {
      year: "2032",
      title: "National AI Ecosystem",
      subtitle: "6 German Core Nodes",
      description:
        "Integration of municipalities, enterprises, universities and research institutions into a distributed sovereign AI ecosystem supported by Core Infrastructure Nodes and Community Compute Federation participants.",
      icon: "⚡",
    },
    {
      year: "2034",
      title: "12 Core Nodes",
      subtitle: "Germany-Wide Infrastructure",
      description:
        "Completion of the 12-node German Core Infrastructure Network, providing nationwide sovereign AI capacity and coordinating a large-scale Community Compute Federation of Citizen AI Nodes.",
      icon: "🌐",
    },
    {
      year: "2036",
      title: "European Expansion",
      subtitle: "Sovereign AI Federation",
      description:
        "Expansion of the DSAINT model into a distributed European sovereign AI platform connecting nations, municipalities, enterprises, universities and communities through secure infrastructure and shared innovation.",
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
            DSAINT Development Roadmap
          </h2>

          <p className="max-w-5xl mx-auto text-xl text-slate-600">
            A phased strategy for building Germany's sovereign AI ecosystem
            through environmentally friendly Core Infrastructure Nodes,
            Community Compute Federation participants and Reverse Co-Hosting.
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

                    <p className="text-slate-600 leading-relaxed">
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

          <p className="max-w-5xl mx-auto text-xl text-slate-300 leading-relaxed">
            DSAINT aims to establish Germany's first sovereign AI federation,
            combining environmentally friendly Core Infrastructure Nodes,
            Community Compute Federation participants, municipalities,
            enterprises, universities and research institutions into a
            resilient national AI ecosystem.
            <br />
            <br />
            By 2036, DSAINT seeks to expand this model across Europe,
            enabling a new generation of sovereign, secure and
            community-driven AI infrastructure.
          </p>

        </div>

      </div>
    </section>
  );
}
