import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#vision" className="flex items-center z-10">
            <Image
              src="/images/dsaint-logo-horizontal.png"
              alt="DSAINT"
              width={1200}
              height={300}
              priority
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div
            className="
              hidden xl:flex
              absolute left-1/2 -translate-x-1/2
              items-center gap-8
              text-sm font-semibold text-slate-700
            "
          >
            <a
              href="#vision"
              className="hover:text-blue-700 transition-colors"
            >
              Home
            </a>

            <a
              href="#ecosystem"
              className="hover:text-blue-700 transition-colors"
            >
              Ecosystem
            </a>

            <a
              href="#technology"
              className="hover:text-blue-700 transition-colors"
            >
              Technology
            </a>

            <a
              href="#node"
              className="hover:text-blue-700 transition-colors"
            >
              Node 01
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
              href="#contact"
              className="hover:text-blue-700 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Language Switcher */}
          <div className="z-10">
            <LanguageSwitcher />
          </div>

        </div>

      </div>
    </nav>
  );
}
