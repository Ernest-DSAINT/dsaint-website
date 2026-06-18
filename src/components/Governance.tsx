export default function Governance() {
  const governanceBodies = [
    {
      icon: "🏛️",
      title: "Supervisory Board",
      description:
        "Provides strategic oversight, long-term direction and governance of the DSAINT ecosystem.",
    },
    {
      icon: "👔",
      title: "Executive Team",
      description:
        "Responsible for infrastructure development, ecosystem operations and Community Compute Federation growth.",
    },
    {
      icon: "⚙️",
      title: "Technical Governance Board",
      description:
        "Defines architecture standards, Core Node requirements, Citizen Node specifications and infrastructure roadmap decisions.",
    },
    {
      icon: "🔒",
      title: "Security & Compliance Committee",
      description:
        "Oversees cybersecurity, physical security, BSI IT-Grundschutz alignment, GDPR compliance and sovereign infrastructure protection.",
    },
    {
      icon: "🌱",
      title: "Sustainability Committee",
      description:
        "Guides environmental performance, energy efficiency, heat recovery and long-term sustainability objectives.",
    },
    {
      icon: "🏠",
      title: "Community Federation Council",
      description:
        "Represents Citizen Node operators and helps shape policies for participation, contribution measurement and reward allocation.",
    },
  ];

  return (
    <section
      id="governance"
      className="py-28 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Governance & Leadership
          </h2>

          <p className="max-w-5xl mx-auto text-xl text-slate-600">
            DSAINT is designed around transparent governance,
            sovereign security, technical excellence and long-term
            stewardship of Germany&apos;s AI infrastructure ecosystem.
          </p>

        </div>

        {/* Governance Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {governanceBodies.map((body) => (
            <div
              key={body.title}
              className="bg-white rounded-3xl shadow-lg border border-sky-100 p-8 hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">
                {body.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {body.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {body.description}
              </p>
            </div>
          ))}

        </div>

        {/* Governance Principles */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-12 text-center">

          <h3 className="text-3xl font-bold text-white mb-8">
            Core Governance Principles
          </h3>

          <div className="grid md:grid-cols-5 gap-6 text-slate-300">

            <div>
              <div className="text-3xl mb-2">🇩🇪</div>
              <p>German Sovereignty</p>
            </div>

            <div>
              <div className="text-3xl mb-2">🔒</div>
              <p>Security by Design</p>
            </div>

            <div>
              <div className="text-3xl mb-2">⚖️</div>
              <p>Transparency & Fairness</p>
            </div>

            <div>
              <div className="text-3xl mb-2">⚡</div>
              <p>Infrastructure Resilience</p>
            </div>

            <div>
              <div className="text-3xl mb-2">🌱</div>
              <p>Sustainable Growth</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
