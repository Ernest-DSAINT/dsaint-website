export default function Architecture() {
  return (
    <section
      id="architecture"
      className="py-28 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Four-Layer DSAINT Architecture
          </h2>

          <p className="max-w-5xl mx-auto text-xl text-slate-600">
            DSAINT combines sovereign infrastructure, research,
            industry and community participation into a resilient
            national AI ecosystem capable of supporting Germany&apos;s
            long-term digital sovereignty.
          </p>

        </div>

        {/* Architecture Stack */}
        <div className="max-w-5xl mx-auto">

          {/* Layer 4 */}
          <div className="bg-yellow-50 border-l-8 border-yellow-500 rounded-3xl shadow-lg p-8 mb-6 hover:shadow-xl transition">

            <div className="flex items-center gap-6">

              <div className="text-6xl">🏠</div>

              <div>

                <h3 className="text-3xl font-bold text-slate-900">
                  Layer 4 — Community Compute Federation
                </h3>

                <p className="text-slate-700 mt-3">
                  Citizen AI Nodes connected through Reverse Co-Hosting.
                  Inspired by the anthill principle, thousands of
                  participants contribute computing resources while
                  receiving compensation based on their measured
                  contribution to the network.
                </p>

              </div>

            </div>

          </div>

          <div className="text-center text-4xl text-slate-400 mb-6">
            ↓
          </div>

          {/* Layer 3 */}
          <div className="bg-green-50 border-l-8 border-green-600 rounded-3xl shadow-lg p-8 mb-6 hover:shadow-xl transition">

            <div className="flex items-center gap-6">

              <div className="text-6xl">🏭</div>

              <div>

                <h3 className="text-3xl font-bold text-slate-900">
                  Layer 3 — Industrial & Enterprise Nodes
                </h3>

                <p className="text-slate-700 mt-3">
                  Manufacturing companies, healthcare providers,
                  utilities and enterprise operators utilizing
                  sovereign AI infrastructure for commercial,
                  industrial and mission-critical workloads.
                </p>

              </div>

            </div>

          </div>

          <div className="text-center text-4xl text-slate-400 mb-6">
            ↓
          </div>

          {/* Layer 2 */}
          <div className="bg-sky-50 border-l-8 border-sky-500 rounded-3xl shadow-lg p-8 mb-6 hover:shadow-xl transition">

            <div className="flex items-center gap-6">

              <div className="text-6xl">🎓</div>

              <div>

                <h3 className="text-3xl font-bold text-slate-900">
                  Layer 2 — Research & Innovation Nodes
                </h3>

                <p className="text-slate-700 mt-3">
                  Universities, research institutions and HPC
                  facilities connected through secure networks
                  to accelerate scientific research, AI development,
                  digital twins and biochemical simulations.
                </p>

              </div>

            </div>

          </div>

          <div className="text-center text-4xl text-slate-400 mb-6">
            ↓
          </div>

          {/* Layer 1 */}
          <div className="bg-blue-50 border-l-8 border-blue-600 rounded-3xl shadow-lg p-8 hover:shadow-xl transition">

            <div className="flex items-center gap-6">

              <div className="text-6xl">🏗️</div>

              <div>

                <h3 className="text-3xl font-bold text-slate-900">
                  Layer 1 — Core Infrastructure Network
                </h3>

                <p className="text-slate-700 mt-3">
                  Twelve environmentally friendly Tier III
                  AI-optimized Core Nodes providing low-latency
                  AI services, sovereign infrastructure,
                  orchestration of Citizen Nodes and contribution
                  accounting for the Community Compute Federation.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Summary Panel */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-12 text-center">

          <h3 className="text-3xl font-bold text-white mb-6">
            Reverse Co-Hosting Architecture
          </h3>

          <p className="max-w-5xl mx-auto text-lg text-slate-300 leading-relaxed">
            Fast-response AI services are delivered through the Core
            Infrastructure Network, while compute-intensive workloads
            such as AI video generation, scientific simulations and
            digital twin modeling can be distributed across thousands
            of Citizen AI Nodes.
            <br />
            <br />
            This creates a scalable, resilient and economically
            inclusive sovereign AI ecosystem in which municipalities,
            enterprises, universities, research institutions and
            citizens all participate in Germany&apos;s AI future.
          </p>

        </div>

      </div>
    </section>
  );
}
