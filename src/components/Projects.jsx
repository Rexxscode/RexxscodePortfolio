// =============================
// src/components/Projects.jsx
// =============================
import React, { useState, useEffect } from "react";
import FunSongLyrics from "../assets/PROJECT/1.jpg"
import CakralogyV1 from "../assets/PROJECT/2.jpg"
import RexxCodePort1 from "../assets/PROJECT/3.jpg"
import OnicEsport from "../assets/PROJECT/4.jpg"
import MovieRexx from "../assets/PROJECT/5.jpg"
import SejarahIslam from "../assets/PROJECT/6.jpg"
import CivilizationLibrary from "../assets/PROJECT/7.jpg"
import LibraryOfcivilization from "../assets/PROJECT/8.jpg"
import RexxCodePort2 from "../assets/PROJECT/9.jpg"
import RexxCodePort3 from "../assets/PROJECT/10.jpg"
import RexxCalc from "../assets/PROJECT/11.jpg"
import RexxCodePort4 from "../assets/PROJECT/12.jpg"
import RexxDocs from "../assets/PROJECT/13.jpg"
import RexxCodePort5 from "../assets/PROJECT/14.jpg"
import RexxyAdzka from "../assets/PROJECT/15.jpg"
import Astrava from "../assets/PROJECT/16.jpg"
import CakralogyITECHNO from "../assets/PROJECT/17.jpg"
import GreenovaTech from "../assets/PROJECt/18.jpg"

const projects = [
  {
    name: "Muhamad Adzka Lainufar Portfolio ",
    img: RexxyAdzka,
    desc: "Personal Portfolio",
    tech: ["ReactJS", "TailwindCSS", "Figma"],
    type: "Public",
  },
  {
    name: "Astrava",
    img: Astrava,
    desc: "( TAP ) Tasks, Activity & Projects Management",
    tech: ["ReactJS", "TailwindCSS", "JavaScript"],
    type: "Public",
  },
  {
    name: "Cakralogy Galaxy",
    img: CakralogyITECHNO,
    desc: "Programming Platform Education",
    tech: ["PHP", "TailwindCSS", "JavaScript"],
    type: "Public",
  },
  {
    name: "GreenovaTech",
    img: GreenovaTech,
    desc: "Sustainable Technology Solutions for Modern Digital Ecosystems",
    tech: ["Bootstrap", "TailwROJECT", "JavaScript"],
    type: "Public",
  },
  {
    name: "Fun Song Lyrics",
    img: FunSongLyrics,
    desc: "A fun project displaying song lyrics with interactive UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Private",
  },
  {
    name: "Cakralogy V1",
    img: CakralogyV1,
    desc: "First version of the Cakralogy project for learning algorithms and logic.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Private",
  },
  {
    name: "Rexx Code Port 1",
    img: RexxCodePort1,
    desc: "Personal portfolio project showcasing coding skills and projects.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Private",
  },
  {
    name: "Onic Esport",
    img: OnicEsport,
    desc: "UI/UX design for an esports team website with team info and schedules.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Private",
  },
  {
    name: "Movie Rexx",
    img: MovieRexx,
    desc: "Movie catalog app with search and filter functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Private",
  },
  {
    name: "Sejarah Islam",
    img: SejarahIslam,
    desc: "Educational project on Islamic history with timeline and interactive elements.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Private",
  },
  {
    name: "Civilization Library",
    img: CivilizationLibrary,
    desc: "Library management system project for books and resources.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Private",
  },
  {
    name: "Library Of Civilization",
    img: LibraryOfcivilization,
    desc: "Advanced library app with cataloging and searching features.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Private",
  },
  {
    name: "Rexx Code Port 2",
    img: RexxCodePort2,
    desc: "Second version of personal portfolio for showcasing projects.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Private",
  },
  {
    name: "Rexx Code Port 3",
    img: RexxCodePort3,
    desc: "Updated portfolio with animations and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Private",
  },
  {
    name: "Rexx Calc",
    img: RexxCalc,
    desc: "Custom calculator project built with JavaScript and React.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Private",
  },
  {
    name: "Rexx Code Port 4",
    img: RexxCodePort4,
    desc: "Fourth version of portfolio project with advanced features.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Private",
  },
  {
    name: "Rexx Docs",
    img: RexxDocs,
    desc: "Documentation project for personal coding projects.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Private",
  },
  {
    name: "Rexx Code Port 5",
    img: RexxCodePort5,
    desc: "Fifth portfolio iteration with all previous projects integrated.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Private",
  },
];


export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: false, easing: "ease-out" });
    }
  }, []);

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.type === filter);

  return (
    <section id="projects" className="min-h-screen px-4 py-20 bg-gray-900/50">
      <h2 data-aos="fade-down" className="text-4xl font-bold mb-8 text-center text-green-500">
        My <span className="text-green-500">Projects</span>
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        {["All", "Private", "Public"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              filter === f
                ? "bg-green-500 text-white"
                : "bg-gray-800 text-green-400 hover:bg-green-600/30"
            }`}
          >
            {f === "Private" ? "Private" : f === "Public" ? "Public" : "All"}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((p, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 150}
            className="relative bg-gray-800 border border-green-500/30 rounded-lg overflow-hidden cursor-pointer group transition hover:scale-[1.02]"
            onClick={() => setSelected(p)}
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-48 object-cover group-hover:brightness-75 transition duration-300"
            />

            {/* Badge Type */}
            <span className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold bg-green-600/30 text-white">
              {p.type === "Private" ? "Private" : "Public"}
            </span>

            {/* Hover overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 text-center px-4">
              <p className="text-green-400 font-bold mb-2">{p.name}</p>
              <p className="text-gray-300 text-sm">{p.desc.slice(0, 60)}...</p>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold text-white">{p.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-gray-800 border border-green-500/40 rounded-xl p-6 max-w-xl w-full animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.img}
              alt={selected.name}
              className="rounded mb-4 w-full h-full object-cover"
            />
            <h3 className="text-2xl font-bold text-green-400 mb-2">{selected.name}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{selected.desc}</p>

            <div className="mb-6">
              <h4 className="text-green-400 font-semibold mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {selected.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="w-full py-2 mt-2 bg-green-500 hover:bg-green-700 rounded-lg text-white font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
