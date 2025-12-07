import React from "react";
import scholarships from "../data/scholarships.js";

export default function Scholarships(){
  return (
    <section className="bg-gray-50 py-16">
      <div className="container-max max-w-6xl">
        <div className="max-w-5xl">
          <p className="section-sub">Scholarships</p>
          <h1 className="section-title">Fueling Learners With Opportunity</h1>
          <p className="mt-4 text-gray-600">
            These scholarships are tailored for students who are ready to grow but need support to keep momentum.
            Each award pairs financial assistance with mentorship so recipients stay connected to the Trinket for
            Education network.
          </p>
        </div>

        <div className="mt-12 grid gap-6 max-w-5xl w-full">
          {scholarships.map(item => (
            <article key={item.id} className="card bg-white py-5 pr-5 pl-10 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <img src="/Pictures/logo.png" alt="TFE logo" className="w-14 h-14 object-contain" />
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">{item.name}</h2>
                </div>
                <span className="text-xs font-semibold text-brand uppercase tracking-wide whitespace-nowrap">{item.amount}</span>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="space-y-1.5 text-xs text-gray-700">
                <div>
                  <span className="font-semibold text-gray-900">Eligibility:</span> {item.eligibility}
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Support:</span> {item.support}
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Timeline:</span> {item.timeline}
                </div>
              </div>
              <a
                href="mailto:info@trinketforeducation.org?subject=Scholarship%20Inquiry"
                className="btn btn-blue w-fit text-xs"
              >
                Request Details
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
