export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-6xl">

          <img
            src="/images/dsaint-logo.png"
            alt="DSAINT Logo"
            className="mx-auto mb-8 w-64"
          />

          <h1 className="text-6xl font-bold mb-6">
            Building Germany's Sovereign AI Infrastructure Backbone
          </h1>

          <p className="text-2xl text-slate-600 mb-8">
            Distributed Sovereign AI Infrastructure Nodes Technology
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg">
              Explore DSAINT
            </button>

            <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg">
              View Node 01
            </button>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="py-24 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Germany Needs Sovereign AI Infrastructure
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">AI Demand Growth</h3>
              <p>Growing AI workloads require resilient infrastructure.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">Digital Sovereignty</h3>
              <p>European control over critical AI infrastructure.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">Infrastructure Resilience</h3>
              <p>Distributed architecture reduces systemic risk.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">Regional Innovation</h3>
              <p>Supporting municipalities and research ecosystems.</p>
            </div>

          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-10">
            A Germany-First Strategy
          </h2>

          <p className="text-xl mb-10">
            DSAINT aims to establish a network of 12 interconnected
            sovereign AI infrastructure nodes across Germany.
          </p>

        </div>
      </section>

      {/* NODE 01 */}
      <section className="py-24 bg-slate-50 px-8">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-12 text-center">
            Demonstrator Node 01
          </h2>

          <img
            src="/images/dsaint-site-plan.png"
            alt="Node 01 Site Plan"
            className="rounded-xl shadow-lg mb-10"
          />

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold">Initial Capacity</h3>
              <p>2 MW</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold">Expansion Capacity</h3>
              <p>6 MW</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold">Cooling</h3>
              <p>Direct-to-Chip Liquid Cooling</p>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-16 text-center">

        <h3 className="text-3xl font-bold mb-4">
          DSAINT
        </h3>

        <p className="mb-4">
          Securing Germany's Digital Future Through Distributed Sovereign AI Infrastructure
        </p>

        <p className="text-sm text-slate-400">
          Concept Development Document – not an offer of securities or investment solicitation.
        </p>

      </footer>

    </main>
  );
}
