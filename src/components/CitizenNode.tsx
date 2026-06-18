import Image from "next/image";

export default function CitizenNode() {
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">

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
              simulations and other compute-intensive workloads.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Participants receive compensation based on their measured
              contribution, helping create a more inclusive and resilient
              sovereign AI ecosystem.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
