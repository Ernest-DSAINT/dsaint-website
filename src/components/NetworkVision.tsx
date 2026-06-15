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
            European Network Vision
          </h2>

          <p className="max-w-4xl mx-auto text-xl text-slate-600">
            Demonstrator Node 01 is designed as the foundation for a future
            distributed network of sovereign AI infrastructure nodes across
            Germany and Europe.
          </p>
        </div>

        {/* Europe Map */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          <Image
            src="/images/europe-network-map.png"
            alt="DSAINT European Network Vision"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </div>

        {/* Vision Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">🏗️</div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Demonstrator Node 01
            </h3>

            <p className="text-slate-600">
              Bedburg-Hau serves as the first DSAINT node and blueprint
              for future sovereign AI infrastructure deployment.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">🇩🇪</div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              German Expansion
            </h3>

            <p className="text-slate-600">
              Future nodes across Germany create a distributed,
              resilient and sovereign AI infrastructure backbone.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">🇪🇺</div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              European Vision
            </h3>

            <p className="text-slate-600">
              Long-term expansion into a European network supporting
              digital sovereignty and infrastructure resilience.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
