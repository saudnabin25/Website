import { assetPath } from "../utils/assetPath.js";

const projects = [
  { id: 1, banner: assetPath("/Pictures/student.png"), topColor: "", title: "Project Student", description: "At TFE, we support academically bright but financially challenged students — helping them stay in school until they complete their SEE and become future contributors who pay it forward.", raised: 1750, goal: 7500, completed: false },
  { id: 2, banner: assetPath("/Pictures/evaluation.png"), topColor: "", title: "Project Evaluation", description: "At TFE, we don’t just look at grades — we become part of each student’s journey, mentoring them and helping their natural strengths flourish.", raised: 1200, goal: 3000, completed: false },
  { id: 3, banner: assetPath("/Pictures/nepal.png"), topColor: "", title: "Project Nepal", description: "At TFE, we believe real change happens from within — Project Nepal funds research to build a home-grown education model rooted in Nepal’s culture, people, and land.", raised: 1500, goal: 15000, completed: false },
];
export default projects;
