export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Contact DSAINT
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed">
            Discuss infrastructure partnerships, municipal cooperation,
            investment opportunities, technology integration, research
            collaboration, or future node development within the DSAINT
            ecosystem.
          </p>

          <div className="mt-6">
            <a
              href="mailto:info@dsaint.eu"
              className="text-sky-600 font-semibold hover:text-sky-800 transition"
            >
              info@dsaint.eu
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          action="https://formspree.io/f/mzdqlnaa"
          method="POST"
          className="space-y-8"
        >

          {/* Form Subject */}
          <input
            type="hidden"
            name="_subject"
            value="New Contact Request from DSAINT Website"
          />

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                First Name *
              </label>

              <input
                type="text"
                name="firstName"
                required
                placeholder="First Name"
                className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Last Name *
              </label>

              <input
                type="text"
                name="lastName"
                required
                placeholder="Last Name"
                className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email *
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone
              </label>

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Organization *
              </label>

              <input
                type="text"
                name="organization"
                required
                placeholder="Organization"
                className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Website
              </label>

              <input
                type="url"
                name="website"
                placeholder="Website"
                className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Message *
            </label>

            <textarea
              name="message"
              rows={8}
              required
              placeholder="Tell us about your inquiry..."
              className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-4">

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="updates"
                className="mt-1"
              />

              <span className="text-slate-700">
                I would like to receive DSAINT project updates,
                newsletters and information about future participation
                opportunities. I understand that I can withdraw my
                consent at any time.
              </span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="citizenNodeInterest"
                className="mt-1"
              />

              <span className="text-slate-700">
                I am interested in participating in the future DSAINT
                Community Compute Federation through a Citizen AI Node,
                organizational node, research node or other
                infrastructure contribution.
              </span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="privacy"
                required
                className="mt-1"
              />

              <span className="text-slate-700">
                I have read and accept the{" "}
                <a
                  href="/docs/dsaint-privacy-policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 underline hover:text-sky-800"
                >
                  Privacy Policy
                </a>
                . *
              </span>
            </label>

          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">

            <button
              type="submit"
              className="
                px-10 py-4
                bg-sky-600
                text-white
                rounded-xl
                font-semibold
                shadow-lg
                hover:bg-sky-700
                transition
              "
            >
              Contact DSAINT →
            </button>

          </div>

        </form>

      </div>
    </section>
  );
}
