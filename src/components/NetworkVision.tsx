import Image from "next/image";

export default function NetworkVision() {
  return (
    <section
      id="network"
      className="py-28 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Sovereign AI Network Vision
          </h2>

          <p className="max-w-5xl mx-auto text-xl text-slate-600 leading-relaxed">
            DSAINT combines environmentally friendly Core Infrastructure
            Nodes, Community Compute Federation participants and trusted
            institutional partners into a distributed sovereign AI ecosystem
            designed for Germany and future European expansion.
          </p>

        </div>

        {/* Network Map */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">

          <Image
            src="/images/europe-network-map.png"
            alt="DSAINT Sovereign AI Network"
            width={1600}
            height={900}
            className="w-full h-auto"
          />

        </div>

        {/* Vision Cards */}
        <div className="grid md:grid-cols-4 gap-8">

          {/* Core Nodes */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-sky-100">

            <div className="text-5xl mb-4">
              🏗️
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Core Infrastructure Nodes
            </h3>

            <p className="text-slate-600">
              Twelve environmentally friendly Tier III
              AI-optimized infrastructure nodes form the
              sovereign backbone of the DSAINT ecosystem.
            </p>

          </div>

          {/* Citizen Nodes */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-sky-100">

            <div className="text-5xl mb-4">
              🏠
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Citizen AI Nodes
            </h3>

            <p className="text-slate-600">
              Thousands of Community Compute Federation
              participants contribute computing resources
              through the Reverse Co-Hosting model.
            </p>

          </div>

          {/* Institutional Partners */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-sky-100">

            <div className="text-5xl mb-4">
              🎓
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Institutional Partners
            </h3>

            <p className="text-slate-600">
              Municipalities, enterprises, universities
              and research institutions collaborate through
              secure sovereign infrastructure.
            </p>

          </div>

          {/* European Federation */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-sky-100">

            <div className="text-5xl mb-4">
              🇪🇺
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              European Federation
            </h3>

            <p className="text-slate-600">
              Long-term expansion connects national
              sovereign AI ecosystems into a resilient
              European infrastructure federation.
            </p>

          </div>

        </div>

        {/* Network Vision Panel */}
        <div className="mt-16 bg-slate-900 rounded-3xl p-12 text-center">

          <h3 className="text-3xl font-bold text-white mb-6">
            From Bedburg-Hau to Europe
          </h3>

          <p className="max-w-5xl mx-auto text-xl text-slate-300 leading-relaxed">
            Demonstrator Node 01 in Bedburg-Hau is the first building block
            of a distributed sovereign AI ecosystem.
            <br />
            <br />
            DSAINT's long-term vision combines Core Infrastructure Nodes,
            Community Compute Federation participants and trusted institutional
            partners into a secure, resilient and scalable AI network that
            strengthens digital sovereignty across Germany and Europe.
          </p>

        </div>

      </div>
    </section>
  );
}
