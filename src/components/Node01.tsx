import Image from "next/image";

export default function Node01() {
  return (
    <section id="node" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Demonstrator Node 01
          </h2>

          <p className="text-2xl text-blue-700 font-semibold">
            Bedburg-Hau, Germany
          </p>

          <p className="mt-6 text-lg text-slate-600 max-w-4xl mx-auto">
            The first DSAINT sovereign AI infrastructure node designed as a
            scalable European blueprint for future deployment across Germany
            and Europe.
          </p>
        </div>

        <Image
          src="/images/dsaint-site-plan.png"
          alt="DSAINT Demonstrator Node 01"
          width={1600}
          height={900}
          className="rounded-3xl shadow-2xl mb-12"
        />

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-blue-700 text-4xl font-bold">2 MW</h3>
            <p>Initial IT Capacity</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-blue-700 text-4xl font-bold">6 MW</h3>
            <p>Expansion Capacity</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-blue-700 text-4xl font-bold">Tier III</h3>
            <p>Infrastructure Standard</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-blue-700 text-4xl font-bold">€43M</h3>
            <p>Total Investment</p>
          </div>

        </div>
      </div>
    </section>
  );
}
