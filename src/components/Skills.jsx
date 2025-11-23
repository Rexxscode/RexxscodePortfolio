// =============================
// src/components/Skills.jsx
// =============================
import React, { useEffect } from "react";

const skills = [
  {
    name: "Web Developer",
    icon: "🌐",
    description: "Building modern, responsive, and high-performance websites.",
    tech: ["React", "Next.js", "TailwindCSS", "Node.js", "Express","Laravel","PHP"],
  },
  {
    name: "Mobile Developer",
    icon: "📱",
    description: "Creating high-performance cross-platform mobile applications.",
    tech: ["React Native", "Flutter", "Dart", "Kotlin"],
  },
  {
    name: "Desktop Developer",
    icon: "🖥️",
    description: "Developing modern and powerful desktop applications.",
    tech: ["Electron", "Tauri", "Python TK", "C#/VB WinForms/WPF"],
  },
  {
    name: "Game Developer",
    icon: "🎮",
    description: "Creating games with engaging gameplay and interactive worlds.",
    tech: ["Unity", "C#", "Godot", "Blender (assets)", "Scratch", "Unreal Engine"],
  },
  {
    name: "UI/UX Designer",
    icon: "🎨",
    description: "Designing interfaces that are visually appealing, clean, and user-friendly.",
    tech: ["Figma", "Adobe XD", "Prototyping", "Design System"],
  },
  {
    name: "AI Engineer",
    icon: "🤖",
    description: "Developing artificial intelligence models and smart automation.",
    tech: ["Python", "TensorFlow", "PyTorch", "OpenAI API"],
  },
];

export default function Skills() {
  // Initialize AOS
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: false, easing: "ease-out" });
    }
  }, []);

  return (
    <section id="skills" className="min-h-screen px-4 py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto w-full">
        <h2
          data-aos="fade-down"
          className="text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-green-500">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((s, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-gray-900/70 border border-green-500/30 rounded-xl p-6 shadow-lg 
                hover:shadow-green-500/50 hover:border-green-400 transition duration-300 transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{s.icon}</div>

              <h3 className="text-2xl font-semibold mb-3 text-green-400">
                {s.name}
              </h3>

              <p className="text-gray-300 text-sm mb-4">{s.description}</p>

              <div className="flex flex-wrap gap-2">
                {s.tech.map((t, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-300"
                  >
                    {t}
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
