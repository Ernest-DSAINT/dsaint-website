export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Contact DSAINT
          </h2>

          <p className="text-lg text-slate-600">
            We welcome inquiries from municipalities, investors,
            research institutions and infrastructure partners.
          </p>
        </div>

        <form
          action="https://formspree.io/f/xbdewkzy"
          method="POST"
          className="max-w-2xl mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full mb-4 p-4 rounded-xl border border-slate-300"
          />

          <input
            type="text"
            name="organization"
            placeholder="Organization"
            className="w-full mb-4 p-4 rounded-xl border border-slate-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full mb-4 p-4 rounded-xl border border-slate-300"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            required
            className="w-full mb-6 p-4 rounded-xl border border-slate-300"
          />

          <button
            type="submit"
            className="px-8 py-4 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Submit Inquiry
          </button>
        </form>

      </div>
    </section>
  );
}
