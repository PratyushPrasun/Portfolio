import React from "react";
import { motion } from "framer-motion";
import { Code, Brain, Palette, Rocket } from "lucide-react";
import { useTheme } from "../Contexts/usetheme";

const cards = [
  { icon: <Code size={28} />, title: "Web Development", desc: "Building fast, scalable and responsive web apps." },
  { icon: <Palette size={28} />, title: "UI / UX Design", desc: "Designing clean, modern and intuitive interfaces." },
  { icon: <Brain size={28} />, title: "AI / ML", desc: "Exploring intelligent systems and automation." },
  { icon: <Rocket size={28} />, title: "Problem Solving", desc: "Turning ideas into impactful digital solutions." },
];

export default function About() {
  const { theme } = useTheme();
  const isBlue = theme === "blue";

  // Dynamic values based on theme
  const accentColor = isBlue ? "text-blue-500" : "text-red-500";
  const accentBg = isBlue ? "bg-blue-500 hover:shadow-blue-500/50" : "bg-red-500 hover:shadow-red-500/50";
  const borderColor = isBlue ? "rgba(59,130,246,0.9)" : "rgba(239,68,68,0.9)";

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gradient-to-br dark:from-black dark:via-[#0c0c0c] dark:to-[#120000]"
      style={{
        background: isBlue
          ? `linear-gradient(135deg, var(--blue-bg-from), var(--blue-bg-via), var(--blue-bg-to))`
          : undefined,
      }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        {!isBlue ? (
          <div className="absolute inset-0 dark:block hidden">
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-red-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          </div>
        ) : (
          <>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl" style={{ background: "var(--blue-accent-soft)" }} />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: "rgba(96,165,250,0.22)" }} />
          </>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="tracking-widest mb-2 text-gray-600 dark:text-gray-400 uppercase text-sm font-medium">
            About Me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Who <span className={accentColor}>I Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="leading-relaxed text-lg text-gray-600 dark:text-gray-300">
              I’m <span className={`${accentColor} font-semibold`}>Pratyush</span>, a passionate developer focused on crafting modern, scalable, and visually compelling web applications.

               I enjoy turning complex

              problems into clean, intuitive digital experiences.

            </p>



            <p className="mt-6 leading-relaxed text-gray-600 dark:text-gray-400">

              My interests span across{" "}

              <span className="text-red-500 dark:text-red-400 accent">

                full-stack development

              </span>

              , UI/UX design, and integrating{" "}

              <span className="text-red-500 dark:text-red-400 accent">

                AI-driven solutions

              </span>{" "}

              into real world products. I believe in writing

              performance-optimized code with an eye for design.

            </p>

            <a href="public\PRATYUSH.pdf"
            download
            ><motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mt-10 px-8 py-3 rounded-full font-semibold text-white ${accentBg} shadow-lg transition-all`}
            >
              Download Resume →
            </motion.button></a>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {cards.map((item, i) => (
              <div key={i} className="relative group rounded-2xl p-[1.5px] overflow-hidden">
                {/* Animated Border */}
                <span
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border"
                  style={{
                    background: `conic-gradient(from 0deg, transparent, ${borderColor}, transparent)`,
                  }}
                />

                {/* Card Content */}
                <div className="relative p-6 rounded-2xl h-full backdrop-blur-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-md">
                  <div className={`${accentColor} mb-4`}>{item.icon}</div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}