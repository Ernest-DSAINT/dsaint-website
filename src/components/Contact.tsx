export default function Contact() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Contact DSAINT
        </h2>

        <form className="space-y-4">

          <input
            className="w-full border p-3 rounded-lg"
            placeholder="Name"
          />

          <input
            className="w-full border p-3 rounded-lg"
            placeholder="Organization"
          />

          <input
            className="w-full border p-3 rounded-lg"
            placeholder="Email"
          />

          <textarea
            className="w-full border p-3 rounded-lg"
            rows={5}
            placeholder="Message"
          />

          <button
            className="bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Submit Inquiry
          </button>

        </form>

      </div>
    </section>
  );
}
