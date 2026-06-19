import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const navLinkClass = `
    relative
    py-1
    text-slate-700
    hover:text-sky-600
    transition-colors
    duration-300

    after:absolute
    after:left-0
    after:-bottom-1
    after:h-0.5
    after:w-0
    after:bg-cyan-500
    after:transition-all
    after:duration-300

    hover:after:w-full
  `;

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
              text-sm font-semibold
            "
          >
            <a href="#vision" className={navLinkClass}>
              Home
            </a>

            <a href="#ecosystem" className={navLinkClass}>
              Ecosystem
            </a>

            <a href="#technology" className={navLinkClass}>
              Technology
            </a>

            <a href="#node" className={navLinkClass}>
              Node 01
            </a>

            <a href="#roadmap" className={navLinkClass}>
              Roadmap
            </a>

            <a href="#network" className={navLinkClass}>
              Network
            </a>

            <a href="#contact" className={navLinkClass}>
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
