import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../data/posts.js";

import team from "../data/team.js";

const authorProfiles = team.reduce((acc, member) => {
  if (member.name) {
    acc.images[member.name] = member.photo;
    if (member.socials?.linkedin) acc.links[member.name] = member.socials.linkedin;
  }
  return acc;
}, { images: {}, links: {} });

export default function BlogPost(){
  const { id } = useParams();
  const post = posts.find(p => String(p.id) === id);
  const recentPosts = posts.filter(p => p.id !== (post?.id ?? null)).slice(0,5);
  const headingLabels = new Set([
    "first steps",
    "conclusion",
    "the aftermath of both approaches",
    "references",
    "how is technical education defined?",
    "role of ctevt in training in technical education and vocational training:",
    "sakchyamta:",
    "expected result",
    "problems:",
    "summary:",
    "sources in the article for more information:",
    "restricted understanding of education in our subconscious",
    "technical education in the context of nepal:"
  ]);

  if (!post) {
    return (
      <section className="container-max py-20 text-center">
        <h1 className="text-3xl font-bold text-brand">Blog not found</h1>
        <p className="mt-4 text-gray-600">The post you are looking for might have been moved or removed.</p>
        <Link to="/blogs" className="btn btn-blue mt-6 inline-flex items-center gap-2">
          Back to Blogs <span aria-hidden>→</span>
        </Link>
      </section>
    );
  }

  return (
    <article className="bg-gray-50">
      <header className="container-max lg:max-w-[80rem] py-16 space-y-4">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-[#2563eb] transition">
          ← All Blogs
        </Link>
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-wide text-gray-500">
            {post.date}{post.readTime ? ` · ${post.readTime}` : ""}
          </div>
          <h1 className="text-4xl font-extrabold text-brand leading-tight">{post.title}</h1>
          <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
            {post.author && authorProfiles.images[post.author] ? (
              <img src={authorProfiles.images[post.author]} alt={post.author} className="w-12 h-12 rounded-full object-cover" />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-500">
                {post.author ? post.author.split(" ").map(n => n[0]).join("").slice(0,2) : "TFE"}
              </div>
            )}
            <div>
              <div className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                {post.author || "Trinket For Education"}
                {post.author && authorProfiles.links[post.author] && (
                  <a
                    href={authorProfiles.links[post.author]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-[#0A66C2]/10 px-2 py-1 text-[10px] font-semibold text-[#0A66C2]"
                  >
                    <span className="text-xs font-bold">in</span>
                    LinkedIn
                  </a>
                )}
              </div>
              <div className="text-xs text-gray-500">Author</div>
            </div>
          </div>
        </div>
      </header>

      <section className="container-max lg:max-w-[80rem] py-12">
        <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6 text-gray-700 leading-relaxed lg:max-w-none">
            {post.image && !post.disableFeaturedImage && (
              <div className="overflow-hidden rounded-2xl shadow-lg bg-black">
                <img src={post.image} alt={post.title} className="w-full h-[420px] object-cover" />
              </div>
            )}
            {(post.content || ["This story explores how communities are reimagining education through technology, mentorship, and local leadership."]).map((paragraph, idx) => {
              if (paragraph && typeof paragraph === "object") {
                if (paragraph.type === "reference" && paragraph.url) {
                  return (
                    <p key={idx}>
                      <a
                        href={paragraph.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand font-semibold underline"
                      >
                        {paragraph.label || paragraph.url}
                      </a>
                    </p>
                  );
                }

                if (paragraph.type === "list" && Array.isArray(paragraph.items)) {
                  const ListTag = paragraph.ordered === false ? "ul" : "ol";
                  return (
                    <ListTag key={idx} className="ml-6 list-outside space-y-2 text-base" style={{ listStyleType: paragraph.ordered === false ? "disc" : "decimal" }}>
                      {paragraph.items.map((item, liIdx) => (
                        <li key={liIdx}>{item}</li>
                      ))}
                    </ListTag>
                  );
                }

                if (paragraph.type === "image" && paragraph.src) {
                  return (
                    <figure key={idx} className="space-y-3">
                      <img
                        src={paragraph.src}
                        alt={paragraph.alt || ""}
                        className="w-full rounded-2xl shadow-md object-cover"
                      />
                      {paragraph.caption && (
                        <figcaption className="text-sm text-gray-500 italic">
                          {paragraph.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }
              }

              const text = typeof paragraph === "string" ? paragraph.trim() : "";
              const normalized = text.toLowerCase();
              const isHeading = headingLabels.has(normalized) || /:\s*$/.test(text);
              if (isHeading && text.length) {
                return (
                  <p key={idx} className="text-[20px] font-bold text-brand mt-8">
                    {text}
                  </p>
                );
              }
              return <p key={idx}>{typeof paragraph === "string" ? paragraph : ""}</p>;
            })}
          </div>
          <aside className="bg-white rounded-3xl shadow-md border p-6 h-fit">
            <h3 className="uppercase text-sm font-semibold text-gray-500">Recent Posts</h3>
            <ul className="mt-6 space-y-4">
              {recentPosts.map(recent => {
                const initials = recent.title ? recent.title.split(" ").map(w => w[0]).join("").slice(0,3) : "TFE";
                return (
                  <li key={recent.id} className="flex gap-4">
                    {recent.image ? (
                      <img
                        src={recent.image}
                        alt={recent.title}
                        className="mt-1 h-12 w-12 rounded-xl object-cover shadow-sm"
                      />
                    ) : (
                      <span
                        className="mt-1 inline-flex h-12 w-12 rounded-xl text-xs font-semibold uppercase text-white items-center justify-center"
                        style={{ backgroundColor: recent.categoryColor || "#1F2544" }}
                      >
                        {initials}
                      </span>
                    )}
                  <div className="flex-1">
                    <Link
                      to={`/blogs/${recent.id}`}
                      className="text-sm font-semibold text-brand leading-snug hover:text-[#2563eb] transition"
                    >
                      {recent.title}
                    </Link>
                    <div className="text-xs text-gray-500 mt-1">
                      {recent.date}{recent.readTime ? ` · ${recent.readTime}` : ""}
                    </div>
                  </div>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </section>
    </article>
  );
}
