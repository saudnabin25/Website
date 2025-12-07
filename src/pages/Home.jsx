import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AboutSection from "../components/AboutSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import TeamSection from "../components/TeamSection.jsx";
import BlogSection from "../components/BlogSection.jsx";
import PartnersSection from "../components/PartnersSection.jsx";
import { DONATION_URL } from "../constants/links.js";
import { assetPath } from "../utils/assetPath.js";

export default function Home(){
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 0);
      }
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center text-white bg-brand">
        <img src={assetPath("/Pictures/landing.jpeg")} alt="Trinket For Education" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-brand/70"></div>
        <div className="relative z-10 text-center px-4 mt-[-17vh]">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">A Trinket For Education</h1>
          <p className="mt-4 text-base sm:text-lg text-white/90">An individual thought or deed is all it takes to set everything in motion.</p>
          <a
            href={DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero mt-6 inline-flex items-center justify-center"
          >
            Donate a Trinket
          </a>
        </div>
      </section>
      <AboutSection />
      <ProjectsSection />
      <TeamSection />
      <BlogSection />
      <PartnersSection />
    </>
  )
}
