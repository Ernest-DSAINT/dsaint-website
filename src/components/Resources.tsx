export default function Resources() {
  const resources = [
    {
      title: "DSAINT Concept Development Document",
      description:
        "Overview of the DSAINT vision, infrastructure model, governance and long-term strategic objectives.",
      file: "#",
    },
    {
      title: "Business Model Overview",
      description:
        "Infrastructure-as-a-Platform model focused on long-life infrastructure ownership and recurring value creation.",
      file: "#",
    },
    {
      title: "Financial Model Overview",
      description:
        "High-level financial assumptions, CAPEX framework, operational model and network expansion strategy.",
      file: "#",
    },
    {
      title: "Demonstrator Node 01 Masterplan",
      description:
        "Bedburg-Hau site masterplan including campus layout, infrastructure systems and technical specifications.",
      file: "#",
    },
  ];

  return (
    <section
      id="resources"
      className="py-28 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Resources & Downloads
          </h2>

          <p className="max-w-4xl mx-auto text-xl text-slate-600">
            Access key DSAINT documents, project information and
            infrastructure planning materials.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {resources.map((resource) => (
            <div
              key={resource.title}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">
                📄
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {resource.title}
              </h3>

              <p className="text-slate-600 mb-6">
                {resource.description}
              </p>

              <a
                href={resource.file}
                className="inline-block px-6 py-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition"
              >
                Download
              </a>
            </div>
          ))}

        </div>

        <div className="mt-20 bg-slate-900 rounded-3xl p-12 text-center">

          <h3 className="text-3xl font-bold text-white mb-6">
            Documentation Library
          </h3>

          <p className="max-w-4xl mx-auto text-lg text-slate-300">
            DSAINT documentation is continuously expanded as the
            project evolves through concept development, technical
            planning and ecosystem engagement.
          </p>

        </div>

      </div>
    </section>
  );
}
