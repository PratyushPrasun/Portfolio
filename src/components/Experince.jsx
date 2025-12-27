import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useTheme } from "../Contexts/usetheme";

/* -------------------- DATA -------------------- */

const experiences = [
  {
    role: "Freelancer Web Developer",
    company: "GS3 Solution LLC",
    duration: "May 2025 – June 2025",
    description: [
      "Developed responsive and user-friendly web interfaces.",
      "Worked directly with clients to deliver feature-based solutions.",
      "Enhanced UI performance and design consistency.",
    ],
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    role: "Web & Tech Team Member",
    company: "The HIT Times (College Club)",
    duration: "Nov 2024 – Present",
    description: [
      "Building and maintaining the club’s web presence.",
      "Collaborating with writers and designers.",
      "Implementing modern UI components and layouts.",
    ],
    tech: ["React", "UI Design", "Team Collaboration"],
  },
];

/* -------------------- CARD -------------------- */

function ExperienceCard({ item, index, isBlue }) {
  // Dynamic Theme Colors
  const accentColor = isBlue ? "text-blue-500" : "text-red-500";
  const accentBg = isBlue ? "bg-blue-500" : "bg-red-500";
  const iconBg = isBlue ? "bg-blue-50 dark:bg-blue-500/10" : "bg-red-50 dark:bg-red-500/10";
  const hoverShadow = isBlue ? "dark:hover:shadow-blue-500/10" : "dark:hover:shadow-red-500/10";
  const tagStyles = isBlue 
    ? "dark:bg-blue-500/5 dark:border-blue-500/20 dark:text-blue-400 group-hover:border-blue-500/40" 
    : "dark:bg-red-500/5 dark:border-red-500/20 dark:text-red-400 group-hover:border-red-500/40";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-2xl p-6
                 bg-white/80 border-gray-200 shadow-sm
                 dark:bg-white/5 dark:bg-gradient-to-br dark:from-white/10 dark:to-transparent
                 dark:border-white/10 dark:shadow-none
                 backdrop-blur-xl border
                 transition-all duration-300
                 hover:-translate-y-1 hover:shadow-lg ${hoverShadow}`}
    >
      {/* Left Accent Bar */}
      <span
        className={`absolute left-0 top-0 h-full w-[4px]
                   ${accentBg} opacity-60 group-hover:opacity-100
                   transition-opacity duration-300`}
      />

      {/* Content Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className={`text-xs font-bold uppercase tracking-wider ${accentColor} mb-1`}>
            {item.duration}
          </p>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {item.role}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            {item.company}
          </p>
        </div>
        <div className={`p-2 rounded-lg ${iconBg}`}>
          <Briefcase size={20} className={accentColor} />
        </div>
      </div>

      {/* Description */}
      <ul className="space-y-3 mb-6">
        {item.description.map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm">
            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${accentBg} shrink-0`} />
            {point}
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {item.tech.map((tech) => (
          <span
            key={tech}
            className={`px-3 py-1 text-[11px] font-semibold uppercase tracking-tight rounded-md
                       bg-gray-100 text-gray-600 border border-gray-200
                       transition-colors ${tagStyles}`}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* -------------------- SECTION -------------------- */

export default function Experience() {
  const { theme } = useTheme();
  const isBlue = theme === "blue";

  // Dynamic Layout Styles
  const sectionBg = isBlue ? "bg-white" : "bg-gray-50"; // Keeps light mode clean
  const headerBorder = isBlue ? "border-blue-500" : "border-red-500";
  const accentSpan = isBlue ? "text-blue-500" : "text-red-600";

  return (
    <section
      id="experience"
      className={`relative py-10 overflow-hidden ${sectionBg} dark:bg-[#050505]`}
      style={{
        background: isBlue
          ? `linear-gradient(135deg, var(--blue-bg-from), var(--blue-bg-via), var(--blue-bg-to))`
          : undefined,
      }}
    >
      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        {isBlue ? (
          <>
            <div className="absolute top-1/4 left-0 w-96 h-96 blur-[120px] rounded-full opacity-20" style={{ background: "var(--blue-accent-soft)" }} />
            <div className="absolute bottom-1/4 right-0 w-72 h-72 blur-[100px] rounded-full opacity-10" style={{ background: "var(--blue-glow-strong)" }} />
          </>
        ) : (
          <>
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/5 dark:bg-red-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-red-400/5 dark:bg-red-500/5 blur-[100px] rounded-full" />
          </>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mb-16 border-l-4 ${headerBorder} pl-6`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Professional <span className={accentSpan}>Journey</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl text-lg">
            A timeline of my technical growth, freelance ventures, and
            contributions to community-driven projects.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((item, index) => (
            <ExperienceCard
              key={index}
              item={item}
              index={index}
              isBlue={isBlue}
            />
          ))}
        </div>
      </div>
    </section>
  );
}