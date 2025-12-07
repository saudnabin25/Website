import React from "react";

export default function BackToTop(){
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full bg-brand text-white shadow-lg hover:bg-[#2563eb] transition"
      aria-label="Back to top"
    >
      ↑ Top
    </button>
  );
}
