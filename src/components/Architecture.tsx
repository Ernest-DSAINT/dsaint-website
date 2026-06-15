export default function Architecture() {
  return (
    <section id="architecture" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Four Layer Architecture
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-blue-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              Layer 1
            </h3>

            <p className="font-semibold text-blue-700">
              Physical Infrastructure
            </p>

            <p className="mt-4">
              Land, buildings, power systems, cooling infrastructure and security.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              Layer 2
            </h3>

            <p className="font-semibold text-blue-700">
              Compute Infrastructure
            </p>

            <p className="mt-4">
              GPU clusters, storage systems and high-speed networking.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              Layer 3
            </h3>

            <p className="font-semibold text-blue-700">
              AI Platform Services
            </p>

            <p className="mt-4">
              AI training, inference, orchestration and deployment services.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              Layer 4
            </h3>

            <p className="font-semibold text-blue-700">
              Sovereign Applications
            </p>

            <p className="mt-4">
              Government, industry, research and defense AI applications.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
