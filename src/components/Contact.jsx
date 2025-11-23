// =============================
// src/components/Contact.jsx
// =============================
import React, { useEffect, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 1000, once: false, easing: "ease-out" });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message submitted! (Form is for display only)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-4 py-20 bg-gray-900/50 flex items-center justify-center"
    >
      <div className="max-w-4xl w-full mx-auto">
        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-bold text-center text-green-500 mb-12"
        >
          Contact <span className="text-green-400">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* INFO */}
          <div
            data-aos="fade-right"
            className="md:w-1/2 flex flex-col justify-center text-gray-300 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-green-400">
              Get in Touch
            </h3>
            <p>
              This contact section is for display purposes only.  
              If you want to reach out, please use the form provided or connect
              through my social platforms.
            </p>

            <div className="space-y-3 text-gray-400">
              <p>• For collaborations</p>
              <p>• For projects</p>
              <p>• For general inquiries</p>
              <p className="text-sm italic">
                Personal contact details are intentionally not displayed.
              </p>
            </div>
          </div>

          {/* FORM */}
          <form
            data-aos="fade-left"
            onSubmit={handleSubmit}
            className="md:w-1/2 bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-green-500/30 shadow-lg shadow-green-500/20 space-y-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-green-500/20 text-gray-200 focus:outline-none focus:border-green-400 transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-green-500/20 text-gray-200 focus:outline-none focus:border-green-400 transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-green-500/20 text-gray-200 focus:outline-none focus:border-green-400 transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 bg-green-500 hover:bg-green-600 transition rounded-lg text-black font-semibold shadow-md shadow-green-500/50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
