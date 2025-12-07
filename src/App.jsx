import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import Scholarships from "./pages/Scholarships.jsx";
import Students from "./pages/Students.jsx";
import Student from "./pages/Student.jsx";
import TeamMember from "./pages/TeamMember.jsx";
import NotFound from "./pages/NotFound.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import BackToTop from "./components/BackToTop.jsx";
import AnnualReports from "./pages/AnnualReports.jsx";
import GetInvolved from "./pages/GetInvolved.jsx";
import Project from "./pages/Project.jsx";
import Terms from "./pages/Terms.jsx";

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<Student />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/annual-reports" element={<AnnualReports />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/team/:id" element={<TeamMember />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
