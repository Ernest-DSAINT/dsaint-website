import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#top" className="flex items-center">
            <Image
              src="/images/dsaint-logo-horizontal.png"
              alt="DSAINT"
              width={320}
              height={90}
              priority
              className="h-14 w-auto"
            />
          </a>

          {/* Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">

            <a
              href="#vision"
              className="hover:text-blue-700 transition-colors"
            >
              Vision
            </a>

            <a
              href="#architecture"
              className="hover:text-blue-700 transition-colors"
            >
              Architecture
            </a>

            <a
              href="#node"
              className="hover:text-blue-700 transition-colors"
            >
              Node 01
            </a>

            <a
              href="#technology"
              className="hover:text-blue-700 transition-colors"
            >
              Technology
            </a>

            <a
              href="#roadmap"
              className="hover:text-blue-700 transition-colors"
            >
              Roadmap
            </a>

            <a
              href="#contact"
              className="hover:text-blue-700 transition-colors"
            >
              Contact
            </a>

            {/* CTA */}
            <a
              href="#contact"
              className="ml-4 px-5 py-2.5 bg-blue-700 text-white rounded-xl shadow hover:bg-blue-800 transition-colors"
            >
              Contact Us
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
}
