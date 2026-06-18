export default function Technology() {
  return (
    <section
      id="technology"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-slate-900 mb-6">
          Technology & Infrastructure
        </h2>

        <p className="text-center text-slate-600 max-w-4xl mx-auto mb-16">
          DSAINT combines environmentally friendly AI infrastructure,
          sovereign security architecture and distributed compute
          orchestration to create Germany&apos;s next-generation AI ecosystem.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Cooling */}
          <div className="bg-white rounded-3xl shadow-lg border border-sky-100 p-8">
            <h3 className="text-2xl font-bold text-sky-600 mb-4">
              Advanced Cooling
            </h3>

            <p className="text-slate-700 leading-relaxed">
              Direct-to-chip liquid cooling and energy-efficient
              infrastructure design support high-density AI workloads
              while targeting a PUE of ≤ 1.20.
            </p>
          </div>

          {/* Connectivity */}
          <div className="bg-white rounded-3xl shadow-lg border border-sky-100 p-8">
            <h3 className="text-2xl font-bold text-sky-600 mb-4">
              Multi-Carrier Connectivity
            </h3>

            <p className="text-slate-700 leading-relaxed">
              High-availability fiber connectivity with redundant
              carrier paths ensures resilient communication between
              Core Nodes, Citizen Nodes and ecosystem partners.
            </p>
          </div>

          {/* Security */}
          <div className="bg-white rounded-3xl shadow-lg border border-sky-100 p-8">
            <h3 className="text-2xl font-bold text-sky-600 mb-4">
              Sovereign Security
            </h3>

            <p className="text-slate-700 leading-relaxed">
              Security architecture based on BSI IT-Grundschutz,
              dedicated secure networks, encrypted protocols,
              strict identity management and GDPR compliance.
            </p>
          </div>

          {/* Core Nodes */}
          <div className="bg-white rounded-3xl shadow-lg border border-sky-100 p-8">
            <h3 className="text-2xl font-bold text-sky-600 mb-4">
              Core Node Orchestration
            </h3>

            <p className="text-slate-700 leading-relaxed">
              Core Infrastructure Nodes provide low-latency AI services,
              coordinate workloads across the federation and manage
              secure network operations.
            </p>
          </div>

          {/* Community Compute */}
          <div className="bg-white rounded-3xl shadow-lg border border-sky-100 p-8">
            <h3 className="text-2xl font-bold text-sky-600 mb-4">
              Community Compute Federation
            </h3>

            <p className="text-slate-700 leading-relaxed">
              Reverse Co-Hosting enables Citizen AI Nodes to process
              compute-intensive workloads including video generation,
              scientific simulations and digital twin modeling.
            </p>
          </div>

          {/* Rewards */}
          <div className="bg-white rounded-3xl shadow-lg border border-sky-100 p-8">
            <h3 className="text-2xl font-bold text-sky-600 mb-4">
              Contribution & Rewards
            </h3>

            <p className="text-slate-700 leading-relaxed">
              Core Nodes continuously measure uptime, reliability
              and compute contribution, enabling transparent and
              fair compensation for Citizen Node operators.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
