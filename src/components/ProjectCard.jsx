import React from "react";
import { Link } from "react-router-dom";
import { DONATION_URL } from "../constants/links.js";

export default function ProjectCard({project}){
  const pct = Math.min(100, Math.round((project.raised / project.goal) * 100));
  const barColor = "bg-green-500";
  const topColor = project.topColor || "bg-slate-800";
  const hasImage = project.banner && project.banner.startsWith("/");
  const donateClass = "btn btn-blue";
  const completedClass = "btn bg-green-600 text-white";

  return (
    <div className="card overflow-hidden h-full flex flex-col">
      {hasImage ? (
        <div className="w-full aspect-[4/3] bg-white flex items-center justify-center p-4">
          <div className="w-full h-full rounded-2xl border border-brand/20 bg-white flex items-center justify-center overflow-hidden">
            <img src={project.banner} alt={project.title} className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      ) : (
        <div className={`${topColor} text-white h-40 flex items-center justify-center text-lg font-semibold`}>
          {project.banner}
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <Link
          to={`/projects/${project.id}`}
          className="text-brand font-extrabold text-lg hover:text-blue-600 transition"
        >
          {project.title}
        </Link>
        <div className="flex-1 mt-3"></div>
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm font-semibold text-gray-700">
            <span className="text-green-600">Raised: ${project.raised.toLocaleString()}</span>
            <span className="text-blue-600">Goal: ${project.goal.toLocaleString()}</span>
          </div>
          <div className="mt-2 h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className={`${barColor} h-full`} style={{width: pct + "%"}}></div>
          </div>
          <div className="mt-2 text-center text-sm font-semibold text-gray-700">{pct}% Funded</div>
        </div>

        {project.completed ? (
          <button className={`${completedClass} w-full mt-6`} disabled>
            Project Completed
          </button>
        ) : (
          <a
            href={DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${donateClass} w-full mt-6 text-center`}
          >
            Donate Now
          </a>
        )}
      </div>
    </div>
  )
}
