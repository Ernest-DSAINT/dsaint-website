export default function Node01() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Demonstrator Node 01
        </h2>

        <p className="text-center text-xl mb-10">
          Bedburg-Hau, Germany
        </p>

        <img
          src="/images/dsaint-site-plan.png"
          alt="DSAINT Demonstrator Node 01"
          className="rounded-xl shadow-xl mb-12"
        />

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-50 p-6 rounded-xl">
            <h3 className="font-bold">Initial Capacity</h3>
            <p>2 MW</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl">
            <h3 className="font-bold">Expansion Capacity</h3>
            <p>6 MW</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl">
            <h3 className="font-bold">Cooling</h3>
            <p>Direct-to-Chip Liquid Cooling</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl">
            <h3 className="font-bold">Redundancy</h3>
            <p>N+1</p>
          </div>

        </div>

      </div>
    </section>
  );
}
