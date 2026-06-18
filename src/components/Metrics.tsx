export default function Metrics() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          The DSAINT Ecosystem
        </h2>

        <p className="text-center text-gray-600 max-w-4xl mx-auto mb-16">
          A sovereign AI infrastructure model connecting Core Infrastructure
          Nodes, the Community Compute Federation, municipalities,
          enterprises and research institutions into a resilient national AI ecosystem.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Core Infrastructure Network */}
          <div className="bg-white rounded-3xl shadow-lg border border-sky-100 p-10 hover:shadow-xl transition">

            <h3 className="text-3xl font-bold text-sky-600 mb-6">
              Core Infrastructure Network
            </h3>

            <p className="text-slate-700 leading-relaxed">
              Twelve environmentally friendly Tier III
              AI-optimized infrastructure nodes located in
              medium-sized German municipalities.
              <br />
              <br />
              With capacities ranging from 2 MW to 6 MW
              and a target PUE ≤ 1.20, they provide the
              secure and sovereign backbone of Germany&apos;s
              sovereign AI future.
              <br />
              <br />
              Core Nodes deliver low-latency AI services,
              coordinate the Community Compute Federation,
              redirect compute-intensive workloads to
              Citizen AI Nodes, and accurately measure
              network contributions to ensure fair and
              transparent compensation for all participants.
            </p>

          </div>

          {/* Community Compute Federation */}
          <div className="bg-white rounded-3xl shadow-lg border border-sky-100 p-10 hover:shadow-xl transition">

            <h3 className="text-3xl font-bold text-sky-600 mb-6">
              Community Compute Federation
            </h3>

            <p className="text-slate-700 leading-relaxed">
              Citizen AI Nodes connected through
              Reverse Co-Hosting.
              <br />
              <br />
              Inspired by the anthill principle,
              thousands of small contributions form
              a powerful collective computing resource.
              <br />
              <br />
              Optimized for high-workload tasks such as
              AI video generation, biochemical simulations,
              scientific computing and digital twin modeling.
              <br />
              <br />
              By distributing workloads across the network,
              DSAINT enables slower but significantly more
              affordable processing while making advanced AI
              capabilities accessible to businesses,
              researchers and citizens alike.
            </p>

          </div>

          {/* Municipal • Enterprise • Research Network */}
          <div className="bg-white rounded-3xl shadow-lg border border-sky-100 p-10 hover:shadow-xl transition">

            <h3 className="text-3xl font-bold text-sky-600 mb-6">
              Municipal • Enterprise • Research Network
            </h3>

            <p className="text-slate-700 leading-relaxed">
              Connecting municipalities, enterprises,
              universities and research institutions into
              a collaborative sovereign AI ecosystem.
              <br />
              <br />
              DSAINT enables trusted cooperation through
              dedicated secure networks, encrypted standard
              formats and protocols, strict access control
              and identity management, and compliance with
              GDPR and applicable state regulations.
              <br />
              <br />
              Security architecture is guided by the
              BSI IT-Grundschutz framework, ensuring that
              innovation, research and industrial AI
              deployment can operate within a secure,
              resilient and sovereign infrastructure
              environment.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
