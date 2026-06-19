import Image from "next/image";

export default function CitizenNode() {
  const nodeTypes = [
    {
      name: "Citizen AI Node S",
      subtitle: "Entry-Level Community Node",
      specs: [
        "8–12 Core CPU",
        "64–128 GB RAM",
        "2–4 TB SSD",
        "1× 16 GB GPU",
        "500 W Power Supply",
      ],
      users: "Citizens, students, AI enthusiasts",
    },
    {
      name: "Citizen AI Node M",
      subtitle: "Advanced Community Node",
      specs: [
        "16–24 Core CPU",
        "128–256 GB RAM",
        "4–8 TB SSD",
        "2× 24 GB GPU",
        "1.5 kW Power Supply",
      ],
      users: "SMEs, startups, researchers",
    },
    {
      name: "Citizen AI Node L",
      subtitle: "Professional Federation Node",
      specs: [
        "32–48 Core CPU",
        "256–512 GB RAM",
        "8–16 TB SSD",
        "4× 32 GB GPU",
        "3 kW Power Supply",
      ],
      users: "Universities, laboratories, professional contributors",
    },
    {
      name: "Citizen AI Node XL",
      subtitle: "Research & Innovation Node",
      specs: [
        "64–96 Core CPU",
        "512 GB–1 TB RAM",
        "16–32 TB SSD",
        "8× 48 GB GPU",
        "5 kW Power Supply",
      ],
      users: "Research institutions, AI startups, scientific computing centers",
    },
  ];

  return (
    <section
      id="citizen-node"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            DSAINT Citizen AI Node
          </h2>

          <p className="max-w-5xl mx-auto text-xl text-slate-600">
            A secure AI appliance designed for the Community Compute Federation.
            Through Reverse Co-Hosting, citizens, startups and organizations
            can participate directly in Germany&apos;s sovereign AI future.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

          <div>
            <Image
              src="/images/dsaint-citizen-node.png"
              alt="DSAINT Citizen AI Node"
              width={1200}
              height={1200}
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>

            <h3 className="text-3xl font-bold text-sky-600 mb-6">
              Reverse Co-Hosting
            </h3>

            <p className="text-slate-700 leading-relaxed mb-6">
              The DSAINT Citizen Node is a compact AI system that can
              be hosted in homes, offices and community organizations.
            </p>

            <p className="text-slate-700 leading-relaxed mb-6">
              Inspired by the anthill principle, thousands of Citizen
              Nodes combine into a powerful Community Compute Federation
              capable of supporting AI video generation, scientific
              simulations, biochemical modeling and other compute-intensive
              workloads.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Participants receive compensation based on their measured
              contribution, helping create a more inclusive and resilient
              sovereign AI ecosystem.
            </p>

          </div>

        </div>

        {/* Node Configurations */}

        <div className="text-center mb-12">

          <h3 className="text-4xl font-bold text-slate-900 mb-4">
            Citizen Node Configurations
          </h3>

          <p className="text-slate-600 max-w-4xl mx-auto">
            The DSAINT Community Compute Federation supports multiple
            node classes ranging from individual citizen participation
            to advanced research and innovation deployments.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {nodeTypes.map((node) => (
            <div
              key={node.name}
              className="bg-white rounded-3xl shadow-lg p-8 border border-sky-100 hover:shadow-xl transition"
            >
              <h4 className="text-2xl font-bold text-sky-600 mb-2">
                {node.name}
              </h4>

              <p className="text-sm font-semibold text-slate-500 mb-6">
                {node.subtitle}
              </p>

              <ul className="space-y-2 text-slate-700 mb-6">
                {node.specs.map((spec) => (
                  <li key={spec}>• {spec}</li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-200">
                <p className="text-sm text-slate-500">
                  Target Users
                </p>

                <p className="font-medium text-slate-700">
                  {node.users}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
