// =============================
// src/components/Education.jsx
// =============================
import React, { useEffect } from "react";
import { Calendar, School, GraduationCap } from "lucide-react";

const educationData = [
  {
    level: "Junior High School",
    year: "2022 - 2025",
    school: "SMP IT Ulil Albab",
    gpa: "88.91 / 100.00",
    icon: <School className="w-6 h-6 text-green-400" />,
  },
  {
    level: "Senior High School / Vocational School",
    year: "2025 - 2028",
    school: "SMK Telekomunikasi Telesandi - Software Engineering",
    gpa: "85.15 / 100.00",
    icon: <School className="w-6 h-6 text-green-400" />,
  },
  {
    level: "Bachelor’s Degree",
    year: "2028 - 2032",
    school: "Institute Technology Bandung – Informatics Engineering",
    gpa: "3.92 / 4.00",
    icon: <GraduationCap className="w-6 h-6 text-green-400" />,
  },
];

export default function Education() {
  // Inisialisasi AOS
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: false, easing: "ease-out" });
    }
  }, []);

  return (
    <section id="education" className="min-h-screen px-4 py-20 bg-gray-900/50">
      <div className="max-w-5xl mx-auto w-full">
        <h2
          data-aos="fade-down"
          className="text-4xl font-bold mb-12 text-center"
        >
          <span className="text-green-500">Education</span>
        </h2>

        <div className="space-y-6">
          {educationData.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150} // staggered animation
              className="bg-gray-800/50 border border-green-500/30 rounded-xl p-6 shadow-lg
                hover:shadow-green-400/30 hover:border-green-400 transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h3 className="text-2xl font-semibold text-green-400">
                  {item.level}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-gray-300 mb-2">
                <Calendar className="w-5 h-5 text-green-500" />
                <p className="font-medium">{item.year}</p>
              </div>

              <p className="text-gray-400 text-lg mb-1">{item.school}</p>

              <p className="text-green-300 font-semibold">
                GPA: <span className="text-white">{item.gpa}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
