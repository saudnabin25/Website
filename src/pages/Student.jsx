import React from "react";
import { useParams, Link } from "react-router-dom";
import students from "../data/students.js";

export default function Student(){
  const { id } = useParams();
  const student = students.find(s => String(s.id) === id) || students[0];

  return (
    <section className="container-max py-12">
      <div className="card bg-white p-6 md:p-10">
        <div className="grid md:grid-cols-[1fr,2fr] gap-8 items-center">
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <img
              src={student.photo}
              alt={student.name}
              className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
            />
            <h1 className="mt-4 text-3xl font-extrabold text-brand">{student.name}</h1>
            <div className="mt-1 text-sm text-gray-500 uppercase tracking-wide">
              {student.grade} • {student.location}
            </div>
            <div className="mt-2 text-xs font-semibold text-blue-600 uppercase tracking-wide">
              {student.focus}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">About {student.name.split(" ")[0]}</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">{student.description}</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="p-3 bg-gray-50 rounded-lg border">
                <div className="font-semibold text-gray-800">Aspiration</div>
                <div>{student.focus}</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border">
                <div className="font-semibold text-gray-800">Hometown</div>
                <div>{student.location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="section-title text-center mt-12">More Students</h3>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {students.map(s => (
          <Link key={s.id} to={`/students/${s.id}`} className="card p-4 flex flex-col items-center hover:shadow-lg transition">
            <img src={s.photo} alt={s.name} className="w-20 h-20 rounded-full object-cover" />
            <div className="mt-3 font-semibold text-sm text-center">{s.name}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">{s.grade}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
