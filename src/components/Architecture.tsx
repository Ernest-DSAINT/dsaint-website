export default function Architecture() {
  const layers = [
    {
      number: "01",
      title: "Municipal Integration Layer",
      description:
        "Strategic partnerships with municipalities providing land access, permitting support, local energy integration, district heating opportunities, and regional economic development.",
      color: "border-green-500",
      bg: "bg-green-50",
      text: "text-green-700",
    },
    {
      number: "02",
      title: "Energy & Cooling Layer",
      description:
        "Dedicated substations, resilient power delivery, direct-to-chip liquid cooling, thermal storage systems, heat recovery, and sustainable infrastructure operations.",
      color: "border-sky-500",
      bg: "bg-sky-50",
      text: "text-sky-700",
    },
    {
      number: "03",
      title: "AI Infrastructure Core Layer",
      description:
        "Tier III AI-ready facilities designed for secure, scalable deployment of next-generation compute infrastructure with N+1 redundancy and high availability.",
      color: "border-blue-600",
      bg: "bg-blue-50",
      text: "text-blue-700",
    },
    {
      number: "04",
      title: "Digital Operations Layer",
      description:
        "Digital twin operations, monitoring systems, security management, predictive maintenance, automation, and sovereign infrastructure governance.",
      color: "border-yellow-500",
      bg: "bg-yellow-50",
      text: "text-yellow-700",
    },
  ];

  return (
    <section
      id="architecture"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Four-Layer DSAINT Architecture
          </h2>

          <p className="max-w-4xl mx-auto text-xl text-slate-600">
            DSAINT creates long-term value through ownership and operation
            of sovereign AI infrastructure. The platform combines municipal
            partnerships, resilient energy systems, advanced facilities,
            and digital operations into a scalable European blueprint.
          </p>
        </div>

        {/* Architecture Stack */}
        <div className="max-w-5xl mx-auto space-y-6">

          {layers.map((layer) => (
            <div
              key={layer.number}
              className={`${layer.bg} ${layer.color} border-l-8 rounded-3xl shadow-lg p-8 hover:shadow-xl transition`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">

                <div
                  className={`text-6xl font-extrabold ${layer.text} min-w-[120px]`}
                >
                  {layer.number}
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">
                    {layer.title}
                  </h3>

                  <p className="text-lg text-slate-700 leading-relaxed">
                    {layer.description}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Summary */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-10 text-center text-white">

          <h3 className="text-3xl font-bold mb-4">
            Infrastructure Ownership Model
          </h3>

          <p className="max-w-4xl mx-auto text-lg text-slate-300">
            Unlike traditional AI companies, DSAINT focuses on ownership and
            operation of land, facilities, energy systems, cooling infrastructure,
            security systems, connectivity, and digital operations rather than
            ownership of rapidly depreciating compute hardware.
          </p>

        </div>

      </div>
    </section>
  );
}
