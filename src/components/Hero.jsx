import React, { useEffect, useState } from "react";
import profile from "../assets/profile2.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const roles = [
    "Web Developer",
    "UI/UX Designer",
    "Freelancer",
    "AI/ML Enthusiast",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center overflow-hidden
        bg-white
        dark:bg-gradient-to-br dark:from-black dark:via-[#0c0c0c] dark:to-[#1a0000]
        pt-24 md:pt-5
      "
      /* 🔵 BLUE THEME – LIGHT, PREMIUM GRADIENT */
      style={{
        background:
          document.documentElement.getAttribute("data-theme") === "blue"
            ? `
              linear-gradient(
                135deg,
                var(--blue-bg-from),
                var(--blue-bg-via),
                var(--blue-bg-to)
              )
            `
            : undefined,
            transitionProperty: 'background, background-color'
      }}
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0">
        {/* Soft Blue Glow (Top-Left) */}
        <div
          className="
            absolute top-1/4 left-1/4 w-72 h-72 rounded-full
            blur-[120px]
            bg-gray-200/40
            dark:bg-red-600/10
          "
          style={{
            background:
              document.documentElement.getAttribute("data-theme") === "blue"
                ? "var(--blue-accent-soft)"
                : undefined,
          }}
        />

        {/* Soft Blue Glow (Bottom-Right) */}
        <div
          className="
            absolute bottom-1/4 right-1/4 w-[380px] h-[380px]
            rounded-full blur-[150px]
            bg-gray-300/30
            dark:bg-red-500/10
          "
          style={{
            background:
              document.documentElement.getAttribute("data-theme") === "blue"
                ? "var(--blue-glow-strong)"
                : undefined,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="tracking-[0.3em] mb-3 text-sm text-gray-600 dark:text-gray-400">
            HELLO
          </p>

          <h1 className="text-3xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            I’m{" "}
            <span className="dark:bg-gradient-to-r dark:from-red-500 dark:to-red-400 dark:bg-clip-text dark:text-transparent accent">
              Pratyush
            </span>
            <br />

            {/* Animated Role */}
            <span className="relative block h-[1.2em] overflow-hidden mt-1 text-4xl md:text-5xl font-extrabold">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="
                    absolute left-0 tracking-wide
                    text-red-500 accent
                  "
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>

              <span className="absolute bottom-0 left-0 w-16 h-[2px] bg-red-500/70 accent-bg rounded-full" />
            </span>
          </h1>

          <p className="mt-6 max-w-lg leading-relaxed text-gray-600 dark:text-gray-400">
            I design and develop modern web experiences with clean UI,
            performance-driven code, and AI-powered innovation.
          </p>

          <a href="#projects"><motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="
              mt-8 px-8 py-3 rounded-full font-semibold text-white
              shadow-md hover:shadow-lg
              bg-red-500 accent-bg
              shadow-red-500/30 dark:border border-red-400/30
              hover:shadow-red-500/50
              transition-all
            "
          >
            View Projects →
          </motion.button></a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mt-10 flex justify-center"
        >
          <div className="relative">
            <div
              className="
                absolute inset-0 rounded-full blur-3xl
                bg-gray-300/40
                dark:bg-red-500/20
              "
              style={{
                background:
                  document.documentElement.getAttribute("data-theme") === "blue"
                    ? "var(--blue-accent-soft)"
                    : undefined,
              }}
            />
            <img
              src={profile}
              alt="Profile"
              className="relative z-10 w-[300px] md:w-[380px]
                         rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
