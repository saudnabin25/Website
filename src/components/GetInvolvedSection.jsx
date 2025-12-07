import React from "react";
import { Link } from "react-router-dom";

export default function GetInvolvedSection(){
  return (
    <section id="get-involved" className="bg-slate-900 text-white py-16">
      <div className="container-max grid gap-8 md:grid-cols-[1.1fr,0.9fr] items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-xs font-semibold text-white/60">Get Involved</p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4">Be the spark that unlocks learning</h2>
          <p className="mt-4 text-white/80">
            Trinket For Education thrives because volunteers, partners, and donors add their voice to our mission.
            Use the form below to let us know how you would like to collaborate.
          </p>
        </div>
        <div className="bg-white text-slate-900 rounded-3xl p-6 shadow-2xl shadow-black/30">
          <h3 className="text-xl font-semibold">Ways to help</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="bg-slate-100 rounded-2xl px-4 py-3">Volunteer tutoring, mentoring, or professional skills.</li>
            <li className="bg-slate-100 rounded-2xl px-4 py-3">Donate equipment so students can stay connected.</li>
            <li className="bg-slate-100 rounded-2xl px-4 py-3">Partner with us to sponsor a classroom or host a drive.</li>
          </ul>
          <Link
            to="/get-involved"
            className="btn btn-blue w-full mt-6 text-base font-semibold"
          >
            Visit Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}
