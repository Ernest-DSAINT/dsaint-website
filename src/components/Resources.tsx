export default function Resources() {
  const documents = [
    {
      title: "DSAINT Concept Development Document",
      description:
        "Complete overview of the DSAINT vision, infrastructure model and long-term strategy.",
      file: "/docs/dsaint-concept-development-document.pdf",
    },
    {
      title: "Business Model Overview",
      description:
        "Infrastructure-as-a-Platform business model and ecosystem strategy.",
      file: "/docs/dsaint-business-model-overview.pdf",
    },
    {
      title: "Financial Model Overview",
      description:
        "CAPEX, OPEX and long-term expansion economics.",
      file: "/docs/dsaint-financial-model-overview.pdf",
    },
    {
      title: "Demonstrator Node 01 Masterplan",
      description:
        "Site layout, infrastructure design and technical concept.",
      file: "/docs/dsaint-node01-masterplan.pdf",
    },
  ];

  return (
    <section
      id="resources"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            DSAINT Resources
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore the key documents behind the DSAINT concept,
            business model, financial framework and Demonstrator Node 01.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {documents.map((doc) => (
            <div
              key={doc.title}
              className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {doc.title}
              </h3>

              <p className="text-slate-600 mb-6">
                {doc.description}
              </p>

              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition"
              >
                View PDF
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
