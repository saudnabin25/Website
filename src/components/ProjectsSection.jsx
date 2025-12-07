import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import projects from "../data/projects.js";

export default function ProjectsSection(){
  return (
    <section id="projects" className="container-max py-16">
      <div className="text-center">
        <h2 className="section-title mt-2">Projects We Are Working On</h2>
      </div>

      <div className="grid gap-6 mt-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>

      <div className="text-center mt-8">
        <a
          href="#projects"
          className="btn bg-accent text-white hover:bg-[#c02f2f]"
        >
          View All Projects
        </a>
      </div>
    </section>
  )
}
