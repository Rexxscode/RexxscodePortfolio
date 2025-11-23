// =============================
// src/components/Experience.jsx
// =============================
import React, { useEffect } from "react";
import { Briefcase, Calendar, Code2 } from "lucide-react";

const experiences = [
  {
    period: "2015 - 2022",
    position: "YouTuber & Content Creator",
    company: "Self-Managed Channel",
    description:
      "Creating content focused on technology, gaming, tutorials, and entertainment. Responsible for scriptwriting, recording, editing, branding, and community engagement.",
    tech: ["YouTube Studio", "OBS Studio", "DaVinci Resolve", "Canva"],
  },
  {
    period: "2025 - Now",
    position: "Founder & Startup Owner",
    company: "Aero Alterix Technology",
    description:
      "Managing end-to-end product development, building MVPs, validating market fit, and leading a remote team to develop scalable digital solutions.",
    tech: ["Business Strategy", "Product Development", "Agile", "UI/UX"],
  },
  {
    period: "2018 - Now",
    position: "Video Editor",
    company: "Freelance",
    description:
      "Editing cinematic videos, short-form content, promotional clips, and motion graphics for various creators and clients across multiple platforms.",
    tech: ["Wondershare Filmora", "Alight Motion", "CapCut Pro", "Kinemaster"],
  },
  {
    period: "2016 - Now",
    position: "Gamer",
    company: "Esports",
    description:
      "Participating in competitive gaming, analyzing game meta and mechanics, and creating gameplay content for gaming communities.",
    tech: ["PC Gaming", "Streaming Tools", "Discord", "Game Analysis"],
  },
  {
    period: "2018 - Now",
    position: "Digital Artist",
    company: "Freelance & Personal Projects",
    description:
      "Designing digital illustrations, concept art, character assets, and UI elements using modern creative tools and workflows.",
    tech: ["Adobe Photoshop", "Illustrator", "Procreate", "Blender", "IbisPaint X"],
  },
  {
    period: "2024 - Now",
    position: "Software Engineer",
    company: "Freelance & Personal Projects",
    description:
      "Building websites, applications, backend APIs, and modern UI systems. Focused on scalable architecture, clean code, and user-centered development.",
    tech: ["JavaScript", "React", "Node.js", "Tailwind", "MongoDB"],
  },
];


export default function Experience() {
  // Inisialisasi AOS
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: false, easing: "ease-out" });
    }
  }, []);

  return (
    <section id="experience" className="min-h-screen px-4 py-20 bg-gray-900/50">
      <div className="max-w-5xl mx-auto w-full">
        <h2
          data-aos="fade-down"
          className="text-4xl font-bold mb-12 text-center text-green-500"
        >
          Work Experience
        </h2>

        <div className="relative border-l border-green-500/30 pl-6 space-y-10">
          {experiences.map((exp, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150} // staggered effect
              className="relative bg-gray-800/50 border border-green-500/30 rounded-xl p-6 shadow-lg
                         hover:shadow-green-500/20 transition duration-300 transform hover:-translate-y-1"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3.5 top-6 w-5 h-5 bg-green-500 rounded-full border-4 border-gray-900"></div>

              {/* Position */}
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="text-green-400 w-6 h-6" />
                <h3 className="text-2xl font-semibold">{exp.position}</h3>
              </div>

              {/* Period */}
              <div className="flex items-center gap-2 text-gray-300 mb-2">
                <Calendar className="w-5 h-5 text-green-400" />
                <p className="font-medium">{exp.period}</p>
              </div>

              {/* Company */}
              <p className="text-green-300 font-medium mb-2">{exp.company}</p>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-4">{exp.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-green-500/10 border border-green-500/30 rounded-full flex items-center gap-1"
                  >
                    <Code2 className="w-3 h-3 text-green-400" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
