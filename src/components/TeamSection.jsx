import React from "react";
import { Link } from "react-router-dom";
import team from "../data/team.js";

const filters = ["All","Executive","Researchers","Advisors","Volunteers","Mentors","Review Committee"];

export default function TeamSection(){
  const [activeFilter, setActiveFilter] = React.useState("All");
  const filteredTeam = activeFilter === "All" ? team : team.filter(member => member.category === activeFilter);

  return (
    <section className="container-max py-16" id="team">
      <h2 className="section-title text-center">Meet Our Team</h2>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {filters.map(f => (
          <button
            key={f}
            className={`px-4 py-2 rounded-full border text-sm ${activeFilter === f ? "bg-brand text-white border-brand" : "bg-white hover:bg-gray-100"}`}
            onClick={() => setActiveFilter(f)}
            type="button"
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 max-w-5xl mx-auto">
        {filteredTeam.map(m => (
          <Link key={m.id} to={`/team/${m.id}`} className="card p-4 flex flex-col items-center hover:shadow-lg">
            <img
              src={m.photo}
              alt={m.name}
              className={`w-28 h-28 rounded-full object-cover shadow-md ${m.photoClass || "object-top"}`}
            />
            <div className="mt-3 font-semibold">{m.name}</div>
            <div className="text-xs text-gray-600">{m.title}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
