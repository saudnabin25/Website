import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DONATION_URL } from "../constants/links.js";

const links = [
  { label: "About Us", to: "/about" },
  { label: "Projects", href: "#projects" },
  { label: "Students", to: "/students" },
  { label: "Blogs", to: "/blogs" },
  { label: "Scholarships", to: "/scholarships" },
  { label: "Get Involved", to: "/get-involved" },
];

export default function Navbar(){
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return undefined;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const onHero = isHome && !scrolled;
  const handleProjectsClick = event => {
    event.preventDefault();
    if (isHome) {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: "projects" } });
    }
  };

  const headerClass = [
    "w-full z-50 transition-all duration-200",
    onHero ? "absolute top-0 left-0 text-white bg-transparent shadow-none" : "sticky top-0 bg-white text-brand shadow-md",
  ].join(" ");

  const linkClass = onHero
    ? "inline-flex items-center font-semibold text-white hover:text-white/70 transition"
    : "inline-flex items-center font-semibold text-brand hover:text-[#2563eb] transition";

  return (
    <header className={headerClass}>
      <div className="px-5 md:px-10 py-3 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/Pictures/logo.png"
            alt="Trinket For Education logo"
            className={`w-auto ${
              onHero
                ? "h-14 drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
                : "h-14"
            }`}
          />
        </Link>
        <nav className="hidden md:flex gap-7 text-base flex-1 justify-center">
          {links.map(link => {
            if (link.to) {
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={linkClass}
                >
                  {link.label}
                </Link>
              );
            }
            if (link.href === "#projects") {
              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={handleProjectsClick}
                  className={linkClass}
                >
                  {link.label}
                </button>
              );
            }
            return (
              <a
                key={link.label}
                href={link.href}
                className={linkClass}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <a
          href={DONATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`ml-auto px-5 py-2 rounded-xl bg-brand text-white font-semibold text-base shadow-lg shadow-brand/40 hover:shadow-brand/60 transition ${
            onHero ? "border border-white/40" : ""
          }`}
        >
          Donate Us
        </a>
      </div>
    </header>
  )
}
