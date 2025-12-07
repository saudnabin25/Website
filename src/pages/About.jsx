import React from "react";
import AboutSection from "../components/AboutSection.jsx";
import TeamSection from "../components/TeamSection.jsx";

export default function About(){
  return (
    <>
      <AboutSection showButton={false} paddingY="py-12" />
      <section className="container-max py-16">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[minmax(0,1fr),minmax(0,1.4fr)] items-center">
          <div className="w-full">
            <img
              src="/Pictures/founders.jpg"
              alt="Founders of Trinket For Education"
              className="w-full rounded-3xl object-cover shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-brand">Our Story</h1>
            <p className="text-gray-700 leading-relaxed">
              We are a group of young individuals striving to make a change in the way we teach our children. Our mission
              is to change the way we disseminate education in our educational institutions by integrating technology into
              education.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We work on designing a student-centric curriculum suitable to the realities of the students. We also find
              young bright students and sponsor them by providing the necessary recourses for their successful academic
              careers.
            </p>
          </div>
        </div>
      </section>
      <TeamSection />
    </>
  );
}
