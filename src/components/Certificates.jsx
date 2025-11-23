// =============================
// src/components/Certificates.jsx
// =============================
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import LKN from "../assets/LKN.jpg";
import ITECHNO from "../assets/ITECHNO.jpg";
import IDN from "../assets/IDN.jpg";
import HUAWEI from "../assets/HUAWEI.jpg";

const certs = [
  {
    title: "LKN Mathematics Bronze Medal 2022",
    img: LKN,
    desc: "Awarded Bronze Medal at National Level 2022 Mathematics Competition (LKN).",
  },
  {
    title: "Itechnocup Frontend Developer 3rd Place",
    img: ITECHNO,
    desc: "Achieved 3rd place in Frontend Development at Itechnocup, Politeknik Negeri Jakarta.",
  },
  {
    title: "IDN Participant Certificate",
    img: IDN,
    desc: "Participated in the IDN program as an active attendee.",
  },
  {
    title: "Huawei AI Training",
    img: HUAWEI,
    desc: "Completed AI training program focusing on modern machine learning techniques.",
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  // AOS initialization
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: false, easing: "ease-out" });
    }
  }, []);

  return (
    <section id="certificates" className="min-h-screen px-4 py-20 bg-gray-900/50">
      <h2
        data-aos="fade-down"
        className="text-4xl font-bold mb-12 text-center text-green-500"
      >
        My <span className="text-green-500">Certificates</span>
      </h2>

      {/* GRID CERTIFICATE */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((c, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 150}
            className="relative bg-gray-900 border border-green-500/30 rounded-xl p-0 overflow-hidden shadow-md cursor-pointer group transition hover:scale-[1.02] animate-fadeIn"
            onClick={() => setSelected(c)}
          >
            <img
              src={c.img}
              className="w-full h-64 object-cover group-hover:brightness-75 transition duration-300"
              alt={c.title}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 text-center px-4
                            bg-black/60 backdrop-blur-sm">
              <p className="text-green-400 font-semibold mb-2 text-lg drop-shadow-md">
                {c.title}
              </p>
              <p className="text-gray-200 text-sm drop-shadow-sm">
                {c.desc.slice(0, 60)}...
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL POPUP */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity animate-fadeIn">
          <div className="bg-gray-900 border border-green-500/30 rounded-xl p-6 max-w-3xl w-full mx-4 relative animate-fadeIn">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-red-400 hover:text-red-500 transition"
            >
              <X size={28} />
            </button>

            {/* MODAL CONTENT */}
            <img
              src={selected.img}
              className="rounded-lg w-full mb-6 shadow-lg shadow-green-500/20"
              alt="Certificate"
            />

            <h3 className="text-2xl font-bold mb-2 text-green-400">
              {selected.title}
            </h3>
            <p className="text-gray-400 text-sm">{selected.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
