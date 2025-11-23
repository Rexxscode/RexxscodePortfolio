// =============================
// src/components/Achievements.jsx
// =============================
import React, { useEffect } from "react";
import { Trophy, Award, Medal, Star } from "lucide-react";

const achievements = [
  {
    title: "Bronze Medal – Mathematics | Lembaga Kompetisi Nasional",
    year: "2022",
    category: "Competition",
    icon: <Medal className="text-green-400 w-7 h-7" />,
    desc: "Recognized with a Bronze Medal in Mathematics at the 2022 National Competition",
  },  
  {
    title: "3rd Place – Frontend Developer | Itechnocup, Politeknik Negeri Jakarta",
    year: "2025",
    category: "Award",
    icon: <Trophy className="text-green-400 w-7 h-7" />,
    desc: "Awarded 3rd place for outstanding frontend development skills at Itechnocup, Politeknik Negeri Jakarta",
  },
];

export default function Achievements() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: false, easing: "ease-out" });
    }
  }, []);

  return (
    <section
      id="achievements"
      className="min-h-screen px-4 py-20 bg-gray-900/50"
    >
      <h2
        data-aos="fade-down"
        className="text-4xl font-bold mb-12 text-center text-green-500"
      >
        My <span className="text-green-500">Achievements</span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((a, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 150}
            className="bg-gray-800/50 border border-green-500/30 rounded-xl p-6 shadow-lg
                       hover:shadow-green-500/30 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {a.icon}
              <div>
                <p className="text-green-400 font-semibold">{a.year}</p>
                <h3 className="text-xl font-bold">{a.title}</h3>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4">{a.desc}</p>

            <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold rounded-full">
              {a.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
