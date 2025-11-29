// =============================
// src/components/Hero.jsx
// =============================
import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Logo from "../assets/ADZKA.jpg";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(140);

  const phrases = [
    "Software Engineer",
    "Full Stack Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  // Typing Effect
  useEffect(() => {
    const current = phrases[loopNum % phrases.length];

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === current) {
        setTimeout(() => setIsDeleting(true), 1200);
        return;
      }

      if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        return;
      }

      setTypedText(
        current.substring(0, typedText.length + (isDeleting ? -1 : 1))
      );
      setTypingSpeed(isDeleting ? 60 : 120);
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum]);

  // AOS Init
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 1000, once: false });
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 pt-20 relative overflow-hidden bg-gray-900/50"
    >
      {/* Soft green particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-green-500/20 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
        {/* PHOTO */}
        <div
          className="w-full md:w-1/3 flex justify-center relative"
          data-aos="zoom-in"
        >
          {/* Glow Ring */}
          <div className="absolute w-72 h-72 rounded-full bg-green-500/10 blur-3xl animate-pulse"></div>

          <div className="relative w-64 h-64 rounded-full border-4 border-green-500 shadow-[0_0_25px_rgba(34,197,94,0.6)] overflow-hidden animate-floating">
            <img
              src={Logo}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
          >
            Muhamad Adzka Lainufar
          </h1>

          {/* Typing Text */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl md:text-3xl text-green-500 mb-8 font-mono h-10"
          >
            <span>{typedText}</span>
            <span className="ml-1 animate-blink">|</span>
          </div>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-gray-400 text-lg mb-8 max-w-xl"
          >
            Passionate about building modern digital experiences and solving
            complex real–world problems through technology.
          </p>

          {/* Social Icons */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex justify-center md:justify-start space-x-5 mb-10"
          >
            {[
              { icon: Github, link: "https://github.com/Rexxscode" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/adzka-lainufar-3a7477379/" },
              { icon: Instagram, link: "https://instagram.com/adzkalaiii" },
              { icon: Mail, link: "mailto:email@example.com" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-green-500/40 rounded-full 
                           hover:bg-green-500 hover:text-black transition 
                           shadow-lg hover:shadow-green-500/30"
              >
                <item.icon size={22} />
              </a>
            ))}
          </div>

          {/* Call To Action */}
          <a
            href="#about"
            data-aos="fade-up"
            data-aos-delay="800"
            className="inline-block bg-green-500/90 text-black px-10 py-3 rounded-xl text-lg font-semibold
                       shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:bg-green-600 hover:shadow-green-500 transition-all"
          >
            Explore My Journey 🚀
          </a>
        </div>
      </div>
    </section>
  );
}
