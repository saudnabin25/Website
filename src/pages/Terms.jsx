import React from "react";
import { Link } from "react-router-dom";

export default function Terms(){
  return (
    <section className="container-max py-24 text-center space-y-6">
      <p className="uppercase tracking-[0.4em] text-xs font-semibold text-brand">Terms &amp; Conditions</p>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Thanks for taking a closer look</h1>
      <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
        We thank you for spending time to extensively check out our website, and really appreciate the curiosity.
        That&apos;s exactly the type of spirit we look for in our volunteers—please check out our Get Involved page and see how you can help!!
      </p>
      <Link
        to="/get-involved"
        className="inline-flex items-center justify-center btn btn-blue mt-4"
      >
        Explore Get Involved
      </Link>
    </section>
  );
}
