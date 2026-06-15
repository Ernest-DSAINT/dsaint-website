export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 to-white">

      <div className="max-w-6xl mx-auto text-center px-6">

        <img
          src="/images/dsaint-logo.png"
          alt="DSAINT Logo"
          className="mx-auto mb-8 w-72"
        />

        <h1 className="text-6xl font-bold text-slate-900 mb-6">
          Building Germany's Sovereign AI Infrastructure Backbone
        </h1>

        <p className="text-2xl text-slate-600 mb-10">
          Distributed Sovereign AI Infrastructure Nodes Technology
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <button className="px-8 py-4 bg-blue-700 text-white rounded-xl">
            Explore DSAINT
          </button>

          <button className="px-8 py-4 border border-blue-700 text-blue-700 rounded-xl">
            View Demonstrator Node 01
          </button>

        </div>

      </div>

    </section>
  );
}
