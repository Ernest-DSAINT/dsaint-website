export default function Metrics() {
  const metrics = [
    {
      value: "2 MW",
      label: "Initial IT Capacity",
    },
    {
      value: "6 MW",
      label: "Expansion Ready",
    },
    {
      value: "≤ 1.20",
      label: "Target PUE",
    },
    {
      value: "Tier III",
      label: "Infrastructure Standard",
    },
    {
      value: "~ €43M",
      label: "Estimated CAPEX",
    },
    {
      value: "10+",
      label: "Future Nodes",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          DSAINT at a Glance
        </h2>

        <p className="text-center text-gray-600 mb-16">
          Key metrics from Demonstrator Node 01 and the long-term DSAINT vision.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-white rounded-2xl shadow-lg border border-sky-100 p-8 text-center hover:shadow-xl transition"
            >
              <div className="text-5xl font-bold text-sky-600 mb-4">
                {metric.value}
              </div>

              <div className="text-lg font-semibold text-gray-800">
                {metric.label}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
