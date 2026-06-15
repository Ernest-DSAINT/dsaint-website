export default function Architecture() {
  return (
    <section
      id="architecture"
      className="py-28 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Four-Layer DSAINT Architecture
          </h2>

          <p className="max-w-4xl mx-auto text-xl text-slate-600">
            DSAINT creates value through ownership and operation of sovereign AI
            infrastructure. The platform integrates municipalities, energy,
            facilities, and digital operations into a scalable European blueprint.
          </p>
        </div>

        {/* Architecture Stack */}

        <div className="max-w-5xl mx-auto">

          {/* Layer 4 */}
          <div className="bg-yellow-50 border-l-8 border-yellow-500 rounded-3xl shadow-lg p-8 mb-6">
            <div className="flex items-center gap-6">
              <div className="text-6xl">🧠</div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  Digital Operations Layer
                </h3>

                <p className="text-slate-700 mt-3">
                  Digital twin operations, infrastructure monitoring,
                  automation, predictive maintenance, cybersecurity,
                  governance and performance optimization.
                </p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="text-center text-4xl text-slate-400 mb-6">
            ↓
          </div>

          {/* Layer 3 */}
          <div className="bg-blue-50 border-l-8 border-blue-600 rounded-3xl shadow-lg p-8 mb-6">
            <div className="flex items-center gap-6">
              <div className="text-6xl">🏢</div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  AI Infrastructure Core Layer
                </h3>

                <p className="text-slate-700 mt-3">
                  Tier III facilities, AI-ready infrastructure, secure
                  operations, high-availability systems, physical security,
                  and resilient deployment environments.
                </p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="text-center text-4xl text-slate-400 mb-6">
            ↓
          </div>

          {/* Layer 2 */}
          <div className="bg-sky-50 border-l-8 border-sky-500 rounded-3xl shadow-lg p-8 mb-6">
            <div className="flex items-center gap-6">
              <div className="text-6xl">⚡</div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  Energy & Cooling Layer
                </h3>

                <p className="text-slate-700 mt-3">
                  Dedicated substations, resilient power infrastructure,
                  direct-to-chip liquid cooling, thermal storage,
                  heat recovery and sustainable energy integration.
                </p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="text-center text-4xl text-slate-400 mb-6">
            ↓
          </div>

          {/* Layer 1 */}
          <div className="bg-green-50 border-l-8 border-green-600 rounded-3xl shadow-lg p-8">
            <div className="flex items-center gap-6">
              <div className="text-6xl">🌍</div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  Municipal Integration Layer
                </h3>

                <p className="text-slate-700 mt-3">
                  Land access, permitting support, district heating
                  integration, local partnerships, workforce development
                  and regional economic growth.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Summary Panel */}

        <div className="mt-20 bg-slate-900 rounded-3xl p-12 text-center">

          <h3 className="text-3xl font-bold text-white mb-6">
            Infrastructure Ownership Model
          </h3>

          <p className="max-w-4xl mx-auto text-lg text-slate-300">
            DSAINT focuses on ownership and operation of long-life
            infrastructure assets including land, facilities, power,
            cooling, security, connectivity and operations rather than
            ownership of rapidly depreciating compute hardware.
          </p>

        </div>

      </div>
    </section>
  );
}
