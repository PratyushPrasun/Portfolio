import React, { useRef } from "react";
import { useTheme } from "../Contexts/usetheme";

/* -------------------- DATA -------------------- */
const skillGroups = [
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
  },
  {
    title: "UI / UX & Design",
    skills: ["Responsive Design", "Component Design", "Accessibility Basics", "Design Systems", "Glassmorphism"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "JWT Authentication", "Auth.js"],
  },
  {
    title: "AI / ML Integration",
    skills: ["OpenAI APIs", "Prompt Engineering", "AI Feature Integration", "ML Fundamentals"],
  },
  {
    title: "Programming & CS",
    skills: ["C++", "Data Structures", "Algorithms", "OOP Concepts"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git & GitHub", "VS Code", "Postman", "Figma (Basics)", "Agile Workflow"],
  },
];

/* -------------------- SMOOTH TILT CARD -------------------- */

function SkillCard({ group, isBlue }) {
  const cardRef = useRef(null);
  
  const TILT_STRENGTH = 12; 
  const PERSPECTIVE = 1000;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const cardWidth = rect.width;
    const cardHeight = rect.height;
    const centerX = rect.left + cardWidth / 2;
    const centerY = rect.top + cardHeight / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = ((-1 * mouseY) / (cardHeight / 2)) * TILT_STRENGTH;
    const rotateY = (mouseX / (cardWidth / 2)) * TILT_STRENGTH;

    card.style.transform = `perspective(${PERSPECTIVE}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(${PERSPECTIVE}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  // Blue Theme specific classes
  const hoverRing = isBlue ? "ring-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.2)]" : "ring-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.15)]";
  const pillBorder = isBlue ? "border-blue-500/30 hover:border-blue-500 hover:text-blue-500" : "border-red-500/30 hover:border-red-500 hover:text-red-600";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl p-5 backdrop-blur-xl backdrop-saturate-150
                 bg-white/10 border-gray-200 shadow-sm
                 dark:bg-white/5 dark:bg-gradient-to-br dark:from-white/10 dark:to-transparent
                 dark:border-white/10 dark:shadow-none
                 border transition-transform duration-200 ease-out will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Dynamic Glow Layer */}
      <div className={`absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-1 ${hoverRing}`} />

      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4" style={{ transform: "translateZ(40px)" }}>
        {group.title}
      </h3>

      <ul className="flex flex-wrap gap-2.5" style={{ transform: "translateZ(25px)" }}>
        {group.skills.map((skill) => (
          <li
            key={skill}
            className={`px-4 py-1.5 text-xs md:text-sm rounded-full font-medium
                       bg-white/70 text-gray-900
                       dark:bg-black/40 dark:text-gray-300
                       border transition-all duration-300 ${pillBorder} dark:hover:text-white`}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------- MAIN SECTION -------------------- */

export default function Skills() {
  const { theme } = useTheme();
  const isBlue = theme === "blue";

  return (
    <section
      id="skills"
      className="relative py-10 overflow-hidden bg-gray-50 dark:bg-[#050505]"
      style={{
        background: isBlue
          ? `linear-gradient(135deg, var(--blue-bg-from), var(--blue-bg-via), var(--blue-bg-to))`
          : undefined,
      }}
    >
      {/* Ambient background lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isBlue ? (
          <>
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] blur-[120px] rounded-full opacity-20" style={{ background: "var(--blue-accent-soft)" }} />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] blur-[100px] rounded-full opacity-10" style={{ background: "var(--blue-glow-strong)" }} />
          </>
        ) : (
          <>
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-red-500/5 dark:bg-red-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-red-400/5 dark:bg-red-900/10 blur-[100px] rounded-full" />
          </>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Technical <span className={isBlue ? "text-blue-500" : "text-red-600 dark:text-red-500"}>Skills</span>
          </h2>
          <div className={`h-1.5 w-20 mt-4 rounded-full ${isBlue ? "bg-blue-500" : "bg-red-600"}`} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <SkillCard key={group.title} group={group} isBlue={isBlue} />
          ))}
        </div>
      </div>
    </section>
  );
}