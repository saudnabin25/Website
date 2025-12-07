import React from "react";
import { Link } from "react-router-dom";
import students from "../data/students.js";

export default function Students(){
  return (
    <section className="container-max py-16">
      <div className="text-center max-w-3xl mx-auto">
        <div className="section-sub">Project Student Scholars</div>
        <h1 className="section-title mt-3">Meet Our Students</h1>
        <p className="mt-4 text-gray-600">
          Each student in our cohort receives mentorship, technology access, and tuition support.
          They are the reason Trinket For Education exists—and the leaders we are preparing for tomorrow.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {students.map(student => (
          <Link
            key={student.id}
            to={`/students/${student.id}`}
            className="card pt-12 pb-6 px-6 flex flex-col items-center text-center h-full hover:shadow-lg transition"
          >
            <img
              src={student.photo}
              alt={student.name}
              className="w-28 h-28 rounded-full object-cover shadow-md border-4 border-white -mt-16"
            />
            <h2 className="mt-6 text-xl font-extrabold text-brand">{student.name}</h2>
            <div className="text-sm text-gray-500 uppercase tracking-wide">{student.grade} • {student.location}</div>
            <div className="mt-2 text-xs font-semibold text-blue-600">{student.focus}</div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed max-h-24 overflow-hidden">{student.description}</p>
            <span className="mt-6 text-sm font-semibold text-blue-600">View Story →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
