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

        {/* Europe Map Placeholder */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">

          <div className="relative">

            <Image
              src="/images/europe-network-map.png"
              alt="DSAINT European Network Vision"
              width={1600}
              height={900}
              className="w-full h-auto"
            />

          </div>

        </div>

        {/* Network Layers */}

        <
