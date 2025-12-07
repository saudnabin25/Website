import React from "react";
import { Link } from "react-router-dom";

export default function AboutSection({ showButton = true, paddingY = "py-20" }){
  return (
    <section id="about" className="bg-white">
      <div className={`container-max ${paddingY} grid lg:grid-cols-[1fr,1fr] gap-12 items-center`}>
        <div className="flex justify-center">
          <img
            src="/Pictures/fulllogo.png"
            alt="Trinket For Education logo"
            className="max-w-md w-full"
          />
        </div>
        <div>
          <div className="section-sub text-brand">About Us</div>
          <h2 className="section-title text-brand mt-3">Why we exist</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            TFE started with a living room conversation where we shared our childhood stories from the days we were in school. There were instances where we were ostracized for asking questions and made out to feel guilty for being curious. During our schooling years in Nepal, we found there was an all-pervasive sense of frustration about the way we were taught.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Learning was shown to us as a burden that was imposed upon us. Rather than gathering knowledge being presented as a natural thing for humans to do. This is what encouraged us to look for changes in the way we teach our children so they do not suffer from their education but find it as a cause for celebration.
          </p>
          {showButton && (
            <Link to="/about" className="btn btn-blue mt-6 inline-flex items-center gap-2">
              More About Us
              <span aria-hidden>→</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
