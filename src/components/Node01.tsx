import Image from "next/image";

export default function Node01() {
  return (
    <section
      id="node"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Demonstrator Node 01
          </h2>

          <p className="text-2xl text-blue-700 font-semibold">
            Bedburg-Hau, Germany
          </p>

          <p className="mt-6 text-lg text-slate-600 max-w-5xl mx-auto leading-relaxed">
            Demonstrator Node 01 serves as the foundation of the DSAINT
            ecosystem and the blueprint for future deployment across Germany.
            Designed as an environmentally friendly Tier III AI-optimized
            infrastructure facility, it combines high-performance AI
            operations, sovereign security architecture and orchestration
            capabilities for the Community Compute Federation.
          </p>

        </div>

        {/* Site Plan */}
        <Image
          src="/images/dsaint-site-plan.png"
          alt="DSAINT Demonstrator Node 01"
          width={1600}
          height={900}
          className="rounded-3xl shadow-2xl mb-16"
        />

        {/* Core Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100">
            <h3 className="text-blue-700 text-4xl font-bold mb-2">
              2 MW
            </h3>
            <p className="text-slate-600">
              Initial Capacity
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100">
            <h3 className="text-blue-700 text-4xl font-bold mb-2">
              6 MW
            </h3>
            <p className="text-slate-600">
              Expansion Capacity
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100">
            <h3 className="text-blue-700 text-4xl font-bold mb-2">
              Tier III
            </h3>
            <p className="text-slate-600">
              Infrastructure Standard
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100">
            <h3 className="text-blue-700 text-4xl font-bold mb-2">
              ≤ 1.20
            </h3>
            <p className="text-slate-600">
              Target PUE
            </p>
          </div>

        </div>

        {/* Node Functions */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg border border-sky-100 p-8">

            <h3 className="text-2xl font-bold text-sky-600 mb-4">
              Fast AI Processing
            </h3>

            <p className="text-slate-700 leading-relaxed">
              Node 01 delivers low-latency AI services,
              hosts critical platform components and
              supports workloads that require immediate
              results and high availability.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-sky-100 p-8">

            <h3 className="text-2xl font-bold text-sky-600 mb-4">
              Federation Orchestration
            </h3>

            <p className="text-slate-700 leading-relaxed">
              The node coordinates Citizen AI Nodes,
              distributes compute-intensive workloads,
              monitors performance and manages secure
              communication across the Community Compute
              Federation.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-sky-100 p-8">

            <h3 className="text-2xl font-bold text-sky-600 mb-4">
              Contribution & Rewards
            </h3>

            <p className="text-slate-700 leading-relaxed">
              Node 01 measures uptime, reliability and
              compute contribution across the federation,
              enabling transparent accounting and fair
              compensation for Citizen Node operators.
            </p>

          </div>

        </div>

        {/* Vision Statement */}
        <div className="mt-16 bg-slate-900 rounded-3xl p-12 text-center">

          <h3 className="text-3xl font-bold text-white mb-6">
            Blueprint for Germany&apos;s Sovereign AI Future
          </h3>

          <p className="max-w-5xl mx-auto text-xl text-slate-300 leading-relaxed">
            Demonstrator Node 01 is more than a data center.
            It is the first building block of a distributed
            sovereign AI ecosystem connecting Core Infrastructure
            Nodes, Citizen AI Nodes, municipalities, enterprises
            and research institutions across Germany.
          </p>

        </div>

      </div>
    </section>
  );
}
