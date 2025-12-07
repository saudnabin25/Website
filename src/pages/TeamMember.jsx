import React from "react";
import { useParams, Link } from "react-router-dom";
import team from "../data/team.js";

const socialStyles = {
  facebook: { label: "Facebook", className: "bg-[#1877F2]", text: "f" },
  instagram: { label: "Instagram", className: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]", text: "ig" },
  linkedin: { label: "LinkedIn", className: "bg-[#0A66C2]", text: "in" },
};

export default function TeamMember(){
  const { id } = useParams();
  const m = team.find(t => String(t.id) === id) || team[0];
  const [activeFilter, setActiveFilter] = React.useState("All");
  const filteredTeam = activeFilter === "All" ? team : team.filter(member => member.category === activeFilter);
  const aboutParagraphs = (m.about || "").split("\n\n").filter(paragraph => paragraph.trim().length);

  return (
    <section className="container-max py-12">
      <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start card p-6 bg-white">
        <div className="w-full md:max-w-sm flex flex-col items-center md:items-start">
          <img
            src={m.photo}
            alt={m.name}
            className={`w-full aspect-square rounded-3xl object-cover shadow ${m.photoClass || "object-top"}`}
          />
          <h1 className="mt-6 text-3xl font-extrabold text-center md:text-left">{m.name}</h1>
          <div className="text-blue-600 font-semibold uppercase tracking-wide text-sm text-center md:text-left">{m.title}</div>
        </div>
        <div>
          <h2 className="text-xl font-bold">About {m.name.split(' ')[0]}</h2>
          <div className="text-gray-700 mt-2 space-y-4">
            {aboutParagraphs.map((paragraph, idx) => (
              <p key={`about-${idx}`} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <div><span className="font-semibold">Email:</span> {m.email}</div>
            <div><span className="font-semibold">Role:</span> {m.title}</div>
            <div><span className="font-semibold">Residence:</span> {m.residence || "Nepal"}</div>
          </div>
          {m.socials && (
            <div className="mt-4 flex gap-3">
              {Object.entries(m.socials).map(([platform, url]) => {
                const meta = socialStyles[platform];
                if (!meta || !url) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold uppercase text-white ${meta.className} hover:opacity-90 transition`}
                    aria-label={`${m.name} on ${meta.label}`}
                  >
                    {meta.text}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <h3 className="section-title text-center mt-12">Meet The Team</h3>
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {["All","Executive","Researchers","Advisors","Volunteers","Mentors","Review Committee"].map(f => (
          <button
            key={f}
            className={`px-4 py-2 rounded-full border ${activeFilter === f ? "bg-brand text-white border-brand" : "bg-white hover:bg-gray-100"}`}
            onClick={() => setActiveFilter(f)}
            type="button"
          >
            {f}
          </button>
        ))}
      </div>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 max-w-5xl mx-auto">
        {filteredTeam.map(member => (
          <Link key={member.id} to={`/team/${member.id}`} className="card p-4 flex flex-col items-center">
            <img
              src={member.photo}
              className={`w-24 h-24 rounded-full object-cover ${member.photoClass || "object-top"}`}
            />
            <div className="mt-2 font-semibold">{member.name}</div>
            <div className="text-xs text-gray-600">{member.title}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
