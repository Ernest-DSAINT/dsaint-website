export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          <div className="font-bold text-2xl text-blue-700">
            DSAINT
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium">

            <a href="#vision">Vision</a>
            <a href="#architecture">Architecture</a>
            <a href="#node">Node 01</a>
            <a href="#technology">Technology</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#contact">Contact</a>

          </div>

        </div>

      </div>

    </nav>
  );
}
