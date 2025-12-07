import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects.js";
import NotFound from "./NotFound.jsx";
import { DONATION_URL } from "../constants/links.js";

const donationTiers = ["$25", "$50", "$100", "$250", "Custom Amount"];

const studentCriteria = [
  {
    title: "Age of the Student",
    body: "Classes 6–8 receive higher priority so we can mentor and measure growth for 3–5 years.",
  },
  {
    title: "Identifiable Potential",
    body: "We look for clear strengths so we can fuel a student’s passion throughout the scholarship.",
  },
  {
    title: "Financial Need",
    body: "Students facing financial barriers are prioritized so cost never blocks their goals.",
  },
];

function StatCard({ label, value }){
  return (
    <div className="p-4 rounded-2xl border border-gray-200 bg-gray-50">
      <div className="text-xs font-semibold uppercase tracking-wide text-brand/80">{label}</div>
      <div className="text-2xl font-bold text-gray-900 mt-2">{value}</div>
    </div>
  );
}

function SectionShell({ children }){
  return (
    <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 p-6 md:p-8 shadow-lg shadow-gray-200/60 space-y-4">
      {children}
    </div>
  );
}

export default function Project(){
  const { id } = useParams();
  const project = projects.find(p => String(p.id) === id);

  if (!project) {
    return <NotFound />;
  }

  const moreProjects = projects.filter(p => p.id !== project.id);
  const pct = Math.min(100, Math.round((project.raised / project.goal) * 100));
  const statusLabel = project.completed ? "Completed" : "In Progress";
  const hasImage = project.banner && project.banner.startsWith("/");

  return (
    <section className="container-max py-12 space-y-12">
      <article className="rounded-2xl bg-white shadow-xl border border-gray-100 p-6 md:p-10">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-10 items-center">
          <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 flex items-center justify-center min-h-[280px]">
            {hasImage ? (
              <img
                src={project.banner}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="text-center text-brand font-semibold text-xl">
                {project.banner || project.title}
              </div>
            )}
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand/80">
              Featured Project
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand">
              {project.title}
            </h1>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm text-gray-600">
              <StatCard label="Raised" value={`$${project.raised.toLocaleString()}`} />
              <StatCard label="Goal" value={`$${project.goal.toLocaleString()}`} />
              <StatCard label="Status" value={statusLabel} />
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-gray-600">
                <span>Raised</span>
                <span>Goal</span>
              </div>
              <div className="mt-2 h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-500 rounded-full transition-all"
                  style={{ width: `${pct}%` }}
                ></div>
              </div>
              <div className="mt-2 text-sm font-semibold text-gray-700">{pct}% Funded</div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={DONATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-blue"
              >
                Contribute Today
              </a>
              {project.completed && (
                <span className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 text-sm">
                  Project Completed
                </span>
              )}
            </div>
          </div>
        </div>
      </article>

      <div className="grid gap-8 lg:grid-cols-[2fr,1.1fr] items-start">
        <div className="space-y-8">
          {project.id === 1 && (
            <SectionShell>
              <h2 className="text-2xl font-extrabold text-brand">Why Project Students Matters</h2>
              <p className="text-gray-700 leading-relaxed">
                Project Students is our on-ground link to students scattered across Nepal. Scholarships cover essentials so learners with potential in academics, arts, literature, or athletics can focus on growing.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It also lets us mentor each student for years, gathering insights about what kind of coaching, care, and tools accelerate their trajectory.
              </p>
              <div>
                <p className="text-gray-800 font-semibold mb-4">How we select students</p>
                <div className="grid gap-4 md:grid-cols-3">
                  {studentCriteria.map(item => (
                    <div key={item.title} className="rounded-2xl border border-gray-100 bg-white p-4 text-sm shadow-sm shadow-gray-200/70">
                      <div className="font-semibold text-brand text-sm">{item.title}</div>
                      <p className="text-gray-600 mt-2">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionShell>
          )}

          {project.id === 2 && (
            <SectionShell>
              <h2 className="text-2xl font-extrabold text-brand">Why Project Evaluation Matters</h2>
              <p className="text-gray-700 leading-relaxed">
                <span className="text-blue-700 font-semibold">Project Evaluation</span> is Trinket for Education’s student-centered approach to understanding potential beyond grades. We believe every student learns differently and shines in different ways—so evaluation should reflect a student’s unique strengths, not force everyone into the same standard. In other words: we don’t judge a fish by its ability to climb a tree.
              </p>
              <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 space-y-3">
                <p className="text-sm text-gray-700">
                  <span className="text-blue-700 font-semibold text-base">What we do:</span> every student we sponsor is paired with a dedicated mentor who meets with them consistently, builds a real relationship, and becomes part of their journey. Mentors go beyond academics—offering guidance, encouragement, and a trusted space for students to explore who they are, what they love, and what they’re naturally good at.
                </p>
                <p className="text-sm text-gray-700">
                  This approach lets us identify each student’s skills early—creativity, leadership, problem-solving, communication, and more—and support them with resources that match their path.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
                <p className="text-sm text-gray-700">
                  <span className="text-emerald-700 font-semibold text-base">What we hope to achieve:</span> by recognizing strengths early and investing in them, we help students grow with confidence and direction. That can mean art supplies for a young creator or tuition for a specialty program—support that develops the skills shaping each student’s future.
                </p>
              </div>
            </SectionShell>
          )}

          {project.id === 3 && (
            <SectionShell>
              <h2 className="text-2xl font-extrabold text-brand">Why Project Nepal Matters</h2>
              <p className="text-gray-700 leading-relaxed">
                <span className="text-blue-700 font-semibold">Project Nepal</span> is Trinket for Education’s long-term initiative dedicated to developing an education model that is <span className="text-blue-700 font-semibold">native to the land of Nepal</span>—one that directly serves the country by leveraging Nepal’s unique diversity and geopolitical position.
              </p>
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 text-sm text-gray-700 space-y-3">
                <p>
                  <span className="text-blue-700 font-semibold">What we do:</span> the first building block is our Research Grants program, which awards funding to Master’s and PhD-level students researching education in Nepal. Proposals are evaluated and funded strictly <span className="text-blue-700 font-semibold">based on the merit of the researcher’s proposal</span>, ensuring bold ideas receive the backing they need.
                </p>
                <p>
                  <span className="text-blue-700 font-semibold">What we hope to achieve:</span> the <span className="text-blue-700 font-semibold">Project Nepal Research Committee</span>—a group of professors and leading education thinkers—reviews submissions and awards grants to the most promising work. Their goal is to champion projects with the greatest potential impact so Nepal’s future education model is shaped by locally informed research.
                </p>
              </div>
            </SectionShell>
          )}

          <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50"></div>
            <div className="absolute -top-12 left-6 h-28 w-28 rounded-full bg-brand/10 blur-3xl opacity-70"></div>
            <div className="absolute -bottom-16 right-0 h-40 w-40 rounded-full bg-[#38bdf8]/15 blur-[120px] opacity-70"></div>
            <div className="relative z-10 space-y-4 p-8 text-gray-900">
              <p className="text-[11px] uppercase tracking-[0.4em] text-brand/80">Make an impact</p>
              <h3 className="text-2xl font-semibold">Send immediate support</h3>
              <p className="text-sm text-gray-600 max-w-2xl">
                Every contribution keeps {project.title} moving forward. Choose a tier or enter any amount on our secure donation page.
              </p>
              <div className="flex flex-wrap gap-3">
                {donationTiers.map(label => (
                  <a
                    key={label}
                    href={DONATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 bg-white shadow-sm transition-all hover:bg-brand hover:text-white hover:border-brand hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    {label}
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={DONATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-brand text-white font-semibold shadow-lg shadow-brand/40 hover:shadow-brand/50 transition"
                >
                  Donate now
                </a>
                <p className="text-sm text-gray-600">
                  You&apos;ll be redirected to our third-party donation portal to customize your donation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="rounded-2xl bg-white p-6 md:p-8 shadow-xl shadow-brand/10 h-fit">
          <div className="flex items-center justify-between">
            <h3 className="uppercase text-xs tracking-[0.4em] text-brand font-semibold">Explore More Projects</h3>
          </div>
            {moreProjects.length ? (
              <ul className="mt-6 space-y-5">
                {moreProjects.map(item => {
                  const initials = item.title.split(" ").map(word => word[0]).join("").slice(0,3);
                  return (
                    <li key={item.id}>
                      <Link
                        to={`/projects/${item.id}`}
                        className="flex gap-4 rounded-xl border border-gray-100 bg-gray-50/60 p-4 items-center shadow-sm transition transform hover:-translate-y-1 hover:shadow-xl"
                      >
                        {item.banner ? (
                          <img
                            src={item.banner}
                            alt={item.title}
                            className="h-16 w-16 rounded-lg object-cover border border-white/60"
                          />
                        ) : (
                          <span className="inline-flex h-16 w-16 rounded-lg bg-brand/10 text-brand items-center justify-center text-sm font-semibold uppercase">
                            {initials}
                          </span>
                        )}
                        <div className="flex-1">
                          <div className="text-base font-semibold text-brand">{item.title}</div>
                          <p className="text-xs text-gray-500 mt-1">
                            Goal: ${item.goal.toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="mt-6 text-sm text-gray-500">More projects will be added soon.</p>
            )}
        </aside>
      </div>
    </section>
  );
}
