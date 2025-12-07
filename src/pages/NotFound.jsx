import React from "react";
import { Link } from "react-router-dom";
export default function NotFound(){
  return (
    <section className="container-max py-24 text-center">
      <h1 className="text-4xl font-extrabold">404</h1>
      <p className="text-gray-600 mt-2">Page not found.</p>
      <Link to="/" className="btn-primary mt-4">Go Home</Link>
    </section>
  )
}
