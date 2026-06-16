import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/images/dsaint-logo-horizontal.png"
              alt="DSAINT"
              width={320}
              height={80}
              priority
              className="h-12 w-auto"
            />
          </a>

          {/* Navigation */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">

            <a
              href="#vision"
              className="hover:text-blue-700 transition-colors"
            >
              Vision
            </a>

            <a
              href="#ecosystem"
              className="hover:text-blue-700 transition-colors"
            >
              Ecosystem
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
              href="#network"
              className="hover:text-blue-700 transition-colors"
            >
              Network
            </a>

            <a
              href="#governance"
              className="hover:text-blue-700 transition-colors"
            >
              Governance
            </a>

            <a
              href="#resources"
              className="hover:text-blue-700 transition-colors"
            >
              Resources
            </a>

            <a
              href="#contact"
              className="hover:text-blue-700 transition-colors"
            >
              Contact
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
}
