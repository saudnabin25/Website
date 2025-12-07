import React from "react";
import { Link } from "react-router-dom";
import { assetPath } from "../utils/assetPath.js";

const socials = [
  { label: "Facebook", symbol: "f", href: "https://www.facebook.com/profile.php?id=61572664831960" },
  { label: "Instagram", symbol: "ig", href: "#" },
  { label: "LinkedIn", symbol: "in", href: "#" },
];

const aboutLinks = [
  { label: "Organization", to: "/about" },
  { label: "What we do", to: "/", state: { scrollTo: "projects" } },
  { label: "Contact Us", to: "/get-involved" },
  { label: "Terms and Conditions", to: "/terms" },
];

const articleLinks = [
  { label: "Blogs", to: "/blogs" },
  { label: "Annual Reports", to: "/annual-reports" },
  { label: "Publications", to: "/terms" },
];
export default function Footer(){
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-max py-12 text-gray-700">
        <div className="grid gap-10 md:grid-cols-4 text-sm">
          <div>
            <h4 className="font-semibold text-gray-900">Contact</h4>
            <ul className="space-y-3 mt-4 text-gray-600">
              <li>
                <span className="font-semibold">Email:</span> info@trinketforeducation.org
              </li>
              <li>
                <span className="font-semibold">Phone:</span> 571-338-0048
              </li>
              <li>
                <span className="font-semibold">Address:</span><br />
                5024 Sunridge Palms Dr<br />
                Tampa, FL 33617 (Apt 101)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">About</h4>
            <ul className="mt-4 space-y-2">
              {aboutLinks.map(item => (
                <li key={item.label}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      state={item.state}
                      className="hover:text-brand transition"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href || "#"}
                      className="hover:text-brand transition"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Articles</h4>
            <ul className="mt-4 space-y-2">
              {articleLinks.map(item => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="hover:text-brand transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="uppercase text-xs tracking-widest text-gray-500 font-semibold">
              Follow Us
            </div>
            <div className="flex items-center gap-3 mt-3">
              {socials.map(s => (
                <a
                  key={`slogan-${s.label}`}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-xs font-semibold uppercase text-gray-600 hover:text-brand hover:border-brand transition"
                  target={s.href?.startsWith("http") ? "_blank" : undefined}
                  rel={s.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {s.symbol}
                </a>
              ))}
            </div>
            <img src={assetPath("/Pictures/logo.png")} alt="Trinket For Education logo" className="h-16 w-auto mt-6" />
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              An individual thought or deed is all it takes to set everything in motion.
            </p>
          </div>

        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="container-max py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-gray-500">
          <div>© {year}. All rights reserved Trinket For Education</div>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-brand transition">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
