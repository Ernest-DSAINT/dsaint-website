export default function Partnerships() {
  const partners = [
    {
      title: "Municipalities",
      icon: "🏛️",
      description:
        "Host environmentally friendly Core Infrastructure Nodes, strengthen local digital sovereignty and create long-term economic value for their communities.",
    },
    {
      title: "Universities",
      icon: "🎓",
      description:
        "Access sovereign AI infrastructure for research, education, scientific simulations and collaborative innovation projects.",
    },
    {
      title: "Research Institutions",
      icon: "🔬",
      description:
        "Utilize distributed compute resources for advanced research, modeling, digital twins and large-scale scientific workloads.",
    },
    {
      title: "Enterprises",
      icon: "🏢",
      description:
        "Leverage secure sovereign AI infrastructure while maintaining compliance, security and operational resilience.",
    },
    {
      title: "AI Startups",
      icon: "🚀",
      description:
        "Access affordable AI compute resources and infrastructure without dependence on hyperscale cloud providers.",
    },
    {
      title: "Citizen Node Operators",
      icon: "🏠",
      description:
        "Participate in the Community Compute Federation through Reverse Co-Hosting and receive compensation based on their contribution to the network.",
    },
    {
      title: "Utilities & Energy Partners",
      icon: "⚡",
      description:
        "Support sustainable infrastructure development through innovative energy integration, heat recovery and grid collaboration.",
    },
    {
      title: "Infrastructure Investors",
      icon: "📈",
      description:
        "Participate in the long-term development of sovereign AI infrastructure as a durable strategic asset class.",
    },
    {
      title: "Public Sector Organizations",
      icon: "🛡️",
      description:
        "Benefit from secure AI infrastructure aligned with BSI IT-Grundschutz, GDPR and national digital sovereignty objectives.",
    },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-b from-sky-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Join the DSAINT Ecosystem
          </h2>

          <p className="max-w-4xl mx-auto text-xl text-slate-600">
            DSAINT brings together municipalities, enterprises,
            universities, research institutions and citizens
            to build Germany&apos;s sovereign AI future.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {partners.map((partner) => (
            <div
              key={partner.title}
              className="bg-white rounded-3xl shadow-lg border border-sky-100 p-8 hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">
                {partner.icon}
              </div>

              <h3 className="text-2xl font-bold text-sky-600 mb-4">
                {partner.title}
              </h3>

              <p className="text-slate-700 leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}

        </div>

        {/* Ecosystem Statement */}
        <div className="mt-16 bg-slate-900 rounded-3xl p-12 text-center">

          <h3 className="text-3xl font-bold text-white mb-6">
            A Shared Infrastructure Future
          </h3>

          <p className="max-w-5xl mx-auto text-xl text-slate-300 leading-relaxed">
            DSAINT is more than a data center network.
            It is a collaborative ecosystem connecting
            Core Infrastructure Nodes, Community Compute
            Federation participants and trusted institutional
            partners.
            <br />
            <br />
            Reverse co-hosting is the future of Germany&apos;s
            independent AI – a future in which everyone
            can participate.
          </p>

        </div>

      </div>
    </section>
  );
}
