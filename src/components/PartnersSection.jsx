import React from "react";
import partners from "../data/partners.js";

export default function PartnersSection(){
  if (!partners.length) return null;

  return (
    <section id="partners" className="bg-gray-50 py-16">
      <div className="container-max text-center space-y-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-brand/60">Our Partners & Donors</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand">Fueling the Mission Together</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            These partners and donors power new scholarships, technology labs, and community programs so more students can define their own future.
          </p>
        </div>
        <div className="flex flex-nowrap justify-center gap-8 max-w-5xl mx-auto overflow-x-auto">
          {partners.map(partner => (
            <div key={partner.name} className="flex items-center justify-center px-4 basis-1/5 min-w-[140px]">
              {partner.logo ? (
                partner.url ? (
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center">
                    <img src={partner.logo} alt={partner.name} className="max-h-16 max-w-full object-contain" />
                  </a>
                ) : (
                  <img src={partner.logo} alt={partner.name} className="max-h-16 max-w-full object-contain" />
                )
              ) : (
                <span className="text-brand font-semibold">{partner.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
