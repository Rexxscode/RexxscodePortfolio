// =============================
// src/components/Navbar.jsx
// =============================
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ["home","about","skills","education","experience","achievements","certificates","projects","contact"];
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const offsetTop = el.offsetTop - 100;
          const offsetBottom = offsetTop + el.offsetHeight;
          if (window.scrollY >= offsetTop && window.scrollY < offsetBottom) {
            setActiveSection(sec);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setIsPortfolioOpen(false);
    }
  };

  const DesktopLink = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`relative group px-2 py-1 transition-all duration-300 text-sm md:text-base ${
        activeSection === id
          ? "text-green-500 after:w-full after:bg-green-500"
          : "text-white after:w-0 after:bg-green-500"
      } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300 group-hover:after:w-full hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.5)]`}
    >
      {label}
    </button>
  );

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-md transition-all border-b border-green-500/30
        ${isScrolled ? "bg-black/90 shadow-lg shadow-green-500/10" : "bg-black/40"}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-green-500 tracking-wider drop-shadow-[0_0_6px_rgba(0,255,0,0.6)]">
            REXXY
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <DesktopLink id="home" label="Home" />
            <DesktopLink id="about" label="About" />
            <DesktopLink id="skills" label="Skills" />
            <DesktopLink id="education" label="Education" />
            <DesktopLink id="experience" label="Experience" />

            {/* Portfolio Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                className={`flex items-center gap-1 px-2 py-1 transition text-sm md:text-base ${
                  isPortfolioOpen ? "text-green-500" : "text-white"
                } hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.5)]`}
              >
                Portfolio
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform duration-300 ${isPortfolioOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              <div
                className={`absolute top-full right-0 mt-3 bg-black/90 backdrop-blur-md border border-green-500/30 shadow-xl rounded-lg min-w-[190px] overflow-hidden transition-all duration-300 ${
                  isPortfolioOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
              >
                {["achievements", "certificates", "projects"].map((sec, idx) => (
                  <button
                    key={sec}
                    onClick={() => scrollToSection(sec)}
                    style={{ transitionDelay: `${idx * 75}ms` }}
                    className="block w-full text-center px-4 py-3 hover:bg-green-500/20 text-white transition"
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Me Link */}
            <DesktopLink id="contact" label="Contact Me" />
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-green-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden border-t border-green-500/30 overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-screen py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center space-y-2">
            {["home","about","skills","education","experience"].map((sec, idx) => (
              <button
                key={sec}
                onClick={() => scrollToSection(sec)}
                style={{ transitionDelay: `${idx * 50}ms` }}
                className="w-full text-center py-3 px-4 text-white hover:text-green-400 hover:bg-green-500/20 rounded-md transition-all duration-300"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            ))}

            {/* Portfolio Dropdown Mobile */}
            <div className="w-full">
              <button
                onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                className="flex justify-center items-center gap-2 w-full py-3 px-4 text-white hover:text-green-400 hover:bg-green-500/20 rounded-md transition-all duration-300"
              >
                Portfolio
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isPortfolioOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isPortfolioOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                } flex flex-col items-center`}
              >
                {["achievements", "certificates", "projects"].map((sec, idx) => (
                  <button
                    key={sec}
                    onClick={() => scrollToSection(sec)}
                    style={{ transitionDelay: `${idx * 50}ms` }}
                    className="w-full text-center py-2 px-4 text-white hover:text-green-400 hover:bg-green-500/20 transition-all duration-300"
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Me Mobile */}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full text-center py-3 px-4 text-white hover:text-green-400 hover:bg-green-500/20 rounded-md transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
