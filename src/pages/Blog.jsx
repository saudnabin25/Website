import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts.js";

const authorImages = {
  "Aasutosh Bhatt": "/Pictures/Aasutosh.JPG"
};

export default function Blog(){
  return (
    <section className="container-max py-16">
      <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-3xl shadow-md border overflow-hidden flex flex-col">
              {post.image ? (
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              ) : (
                <div
                  className="h-32 flex items-center justify-center text-white text-lg font-semibold tracking-wide uppercase"
                  style={{ backgroundColor: post.categoryColor || "#1F2544" }}
                >
                  {post.category || "Feature"}
                </div>
              )}
              <div className="p-6 space-y-4">
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  {post.date}{post.readTime ? ` · ${post.readTime}` : ""}
                </div>
                <h2 className="text-xl font-extrabold text-brand">
                  <Link to={`/blogs/${post.id}`} className="hover:text-[#2563eb] transition">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                <Link
                  to={`/blogs/${post.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-[#2563eb] transition"
                >
                  Read More <span aria-hidden>→</span>
                </Link>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  {post.author && authorImages[post.author] ? (
                    <img
                      src={authorImages[post.author]}
                      alt={post.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-500">
                      {post.author ? post.author.split(" ").map(n => n[0]).join("").slice(0,2) : "TFE"}
                    </div>
                  )}
                  <div className="text-sm font-medium text-gray-700">{post.author || "Trinket For Education"}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="bg-white rounded-3xl shadow-md border p-6 h-fit">
          <h3 className="uppercase text-sm font-semibold text-gray-500">Recent Posts</h3>
          <ul className="mt-6 space-y-4">
            {posts.slice(0,5).map(post => (
              <li key={`recent-${post.id}`} className="flex gap-4">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="mt-1 h-10 w-10 rounded-xl object-cover shadow-sm"
                  />
                ) : (
                  <span
                    className="mt-1 inline-flex h-10 w-10 rounded-xl text-[10px] font-semibold uppercase text-white items-center justify-center"
                    style={{ backgroundColor: post.categoryColor || "#1F2544" }}
                  >
                    {post.category ? post.category.split(" ").map(w => w[0]).join("").slice(0,3) : "TFE"}
                  </span>
                )}
                <div className="flex-1">
                  <Link
                    to={`/blogs/${post.id}`}
                    className="text-sm font-semibold text-brand leading-snug hover:text-[#2563eb] transition"
                  >
                    {post.title}
                  </Link>
                  <div className="text-xs text-gray-500 mt-1">
                    {post.date}{post.readTime ? ` · ${post.readTime}` : ""}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
