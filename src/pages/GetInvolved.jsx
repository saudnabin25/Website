import React from "react";

const contactMethods = [
  {
    label: "Email",
    detail: "info@trinketforeducation.org",
    helper: "We respond within 24 hours.",
    href: "mailto:info@trinketforeducation.org",
  },
  {
    label: "Phone",
    detail: "571-338-0048",
    helper: "Text any day, any time.",
    href: "tel:5713380048",
  },
];

const stats = [
  { label: "Research Funded", value: "1" },
  { label: "Students Awarded", value: "18+" },
  { label: "Total Donated", value: "$5,622+" },
];

const involvementIdeas = [
  {
    title: "Volunteer Skills",
    body: "Facilitate tutoring sessions, mentor career clubs, or run weekend creativity labs.",
  },
  {
    title: "Donate Tech",
    body: "Give laptops, tablets, or phones in good condition so students can stay connected.",
  },
  {
    title: "Corporate Partners",
    body: "Sponsor a classroom, host skill-shares, or match employee gifts.",
  },
  {
    title: "Campus Chapters",
    body: "Mobilize classmates to host fundraisers, drives, or awareness events.",
  },
];

export default function GetInvolved(){
  const [status, setStatus] = React.useState("");
  const [contactPreference, setContactPreference] = React.useState("email");

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const interest = formData.get("interest");
    const preference = formData.get("preference");
    const message = formData.get("message");

    const subject = encodeURIComponent(`New Get Involved message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email || "N/A"}\nPhone: ${phone || "N/A"}\nInterest: ${interest}\nPreferred Follow-Up: ${preference}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:trinketforeducation@gmail.com?subject=${subject}&body=${body}`;
    setStatus(`Thank you, ${name || "friend"}! Your email client is opening with the details.`);
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand text-white py-24">
        <img
          src="/Pictures/homepage.png"
          alt="Volunteer leading a student workshop"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-brand/80 backdrop-blur-sm"></div>
        <div className="container-max relative z-10 grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-stretch">
          <div>
            <p className="uppercase tracking-[0.4em] text-xs font-semibold text-white/70">Get Involved</p>
            <h1 className="text-4xl sm:text-5xl font-bold mt-4 leading-tight">Be the spark that unlocks learning.</h1>
            <p className="mt-5 text-lg text-white/85">
              Trinket For Education thrives when volunteers, partners, and donors add their voice to our mission.
              Let us know how you would like to collaborate and we will meet you there.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {stats.map(item => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur p-4 text-center"
                >
                  <div className="text-2xl font-bold">{item.value}</div>
                  <div className="text-xs uppercase tracking-wide text-white/70 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white text-brand rounded-3xl p-6 shadow-2xl shadow-black/20 space-y-4 h-full flex flex-col">
            <h2 className="text-xl font-semibold">Featured opportunities</h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand"></span>
                Launch a device drive with your office or campus.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand"></span>
                Facilitate virtual tutoring sessions in STEM and literacy.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand"></span>
                Produce storytelling content that amplifies student voices.
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              We personalize every opportunity so you can share your gifts with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 text-slate-900 py-20">
        <div className="container-max grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-start">
          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-8 shadow-xl shadow-slate-200/80">
              <div className="uppercase text-xs tracking-[0.4em] text-brand font-semibold">Reach out directly</div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {contactMethods.map(method => (
                  <a
                    key={method.label}
                    href={method.href}
                    className="border border-slate-200 rounded-2xl p-6 bg-white text-slate-900 transition transform hover:-translate-y-1 hover:shadow-2xl hover:border-brand/40"
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">{method.label}</div>
                    <div className="text-base font-semibold text-slate-900 mt-2 break-words">{method.detail}</div>
                    <p className="text-sm text-slate-500 mt-2">{method.helper}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-8 shadow-xl shadow-slate-200/80">
              <div className="uppercase text-xs tracking-[0.4em] text-brand font-semibold">Ideas to get started</div>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {involvementIdeas.map(item => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 transition transform hover:-translate-y-1.5 hover:shadow-2xl hover:border-brand/40"
                  >
                    <div className="font-semibold text-brand">{item.title}</div>
                    <p className="text-sm mt-2">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-xl p-8 shadow-xl shadow-slate-200/90 h-full flex flex-col">
            <div className="uppercase text-xs tracking-[0.4em] text-brand font-semibold">Tell us about you</div>
            <form className="mt-8 space-y-5 flex-1 flex flex-col" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-brand focus:ring-brand"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="preference">Preferred follow-up</label>
                  <select
                    id="preference"
                    name="preference"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 focus:border-brand focus:ring-brand"
                    value={contactPreference}
                    onChange={event => setContactPreference(event.target.value)}
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone call</option>
                    <option value="text">Text message</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="interest">How would you like to help?</label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 focus:border-brand focus:ring-brand"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="volunteer">Volunteer my time</option>
                    <option value="donations">Donate equipment or funds</option>
                    <option value="partnership">Corporate or campus partnership</option>
                    <option value="storytelling">Content or storytelling support</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
              </div>
              {contactPreference === "phone" || contactPreference === "text" ? (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-brand focus:ring-brand"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-brand focus:ring-brand"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="message">Tell us more</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-brand focus:ring-brand"
                  placeholder="Share any details, availability, or questions."
                  required
                ></textarea>
              </div>
              <div className="space-y-4 pt-2 mt-auto">
                <button type="submit" className="w-full bg-brand text-white text-base font-semibold py-3 rounded-xl shadow-lg shadow-brand/40 hover:shadow-brand/50 transition">
                  Send message
                </button>
                {status && (
                  <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-2xl px-4 py-3">
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
