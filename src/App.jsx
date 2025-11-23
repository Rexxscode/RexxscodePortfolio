// =============================
// src/App.jsx
// =============================
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact'

export default function App() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000, // durasi animasi
        offset: 120,    // jarak scroll sebelum animasi
        easing: "ease-in-out",
        once: false,    // animasi hanya sekali atau setiap scroll
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Achievements />
      <Certificates />
      <Projects />
      <Contact />
    </div>
  );
}
