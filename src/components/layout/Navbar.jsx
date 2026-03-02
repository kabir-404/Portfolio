import { useEffect, useState } from "react";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.getElementById(link.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSection = entry.target.id;
          }
        });

        if (visibleSection) {
          setActive(visibleSection);
        }
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // 🔥 Handle hero/top scroll case
    const handleTop = () => {
      if (window.scrollY < 100) {
        setActive("");
      }
    };

    window.addEventListener("scroll", handleTop);

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener("scroll", handleTop);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-10/12 mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-semibold text-indigo-500">
            Kabir Chandrikapure
          </span>
          <span className="text-xs text-slate-400 tracking-wide">
            Frontend Engineer
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative transition duration-300 ${
                active === link.id
                  ? "text-indigo-400"
                  : "hover:text-indigo-400"
              }`}
            >
              {link.name}

              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-500 transition-[width] duration-300 ${
                  active === link.id ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="border border-slate-700 hover:border-indigo-500 px-4 py-2 rounded-md text-xs transition"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl cursor-pointer"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 py-4 space-y-4 text-sm border-t border-slate-800 bg-slate-950">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="block"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="block border border-slate-700 hover:border-indigo-500 px-4 py-2 rounded-md text-center text-xs transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;