// =============================
// src/components/About.jsx
// =============================
import React, { useEffect } from "react";
import Logo from "../assets/PROPIL.jpg";

export default function About() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 1000, once: false, easing: "ease-out" });
    }
  }, []);

  const details = [
    { title: "🎯 Focus", desc: "Web Development, Mobile Apps, Backend, UI/UX, and modern automation." },
    { title: "🚀 Core Skills", desc: "JavaScript, React, Node.js, Tailwind, Databases, API Design." },
    { title: "💡 Mindset", desc: "Problem-solving, creative, detail-oriented, and always learning new things." },
    { title: "📍 Goal", desc: "Becoming a world-class engineer and building large-scale technology products." },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center px-6 md:px-16 py-24 relative overflow-hidden bg-gray-900/50">
      {/* Cyber grid background */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#0f0_1px,transparent_1px),linear-gradient(to_bottom,#0f0_1px,transparent_1px)] bg-position-[40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          About <span className="text-green-500">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* PHOTO */}
          <div
            data-aos="zoom-in"
            className="relative w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 rounded-full overflow-hidden border-4 border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.6)] animate-floating flex-shrink-0"
          >
            <img src={Logo} className="w-full h-full object-cover" alt="About" />
          </div>

          {/* TEXT */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="w-full md:w-2/3 bg-gray-900/40 backdrop-blur-lg border border-green-500/20 p-8 md:p-10 rounded-2xl shadow-lg shadow-green-500/20"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I am a <span className="text-green-400 font-semibold mr-1">Software Engineer</span>  
              with a passion for building modern, scalable, and user-focused applications.
              Every day, I continue learning, experimenting, and improving my skills to create solutions that are useful and innovative.
            </p>

            {/* DETAILS */}
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              {details.map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={300 + i * 150}
                  className="bg-gray-800/40 p-5 rounded-xl border border-green-500/20 hover:border-green-500 transition"
                >
                  <h3 className="text-green-400 font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
