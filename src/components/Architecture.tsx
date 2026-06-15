export default function Architecture() {
  return (
    <section className="py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Four-Layer Architecture
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">
              Layer 1 – Core Infrastructure Nodes
            </h3>
            <p>National sovereign AI backbone.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">
              Layer 2 – Research & Innovation Nodes
            </h3>
            <p>Universities, HPC centers and research institutions.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">
              Layer 3 – Industrial & Enterprise Nodes
            </h3>
            <p>Industry, healthcare, utilities and enterprise facilities.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">
              Layer 4 – Community Compute Federation
            </h3>
            <p>Trusted community participation and local AI ecosystems.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
