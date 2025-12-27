import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { useTheme } from "../Contexts/usetheme";
import Agr from "../assets/agroAi.png";
import rell from "../assets/rell.png";
import nsvi from "../assets/nsvi.png";
import exp from "../assets/exp.png";
import red from "../assets/red.png";

const projects = [
  {
    title: "Agro AI",
    description: "A multilingual, AI-powered web application that helps farmers predict crop yield and view real-time weather insights. Built with a responsive React and Tailwind CSS frontend, focusing on accessibility, usability, and performance.",
    points: [
      "AI-Based Crop Yield Prediction using crop and land inputs.",
      "Real-Time Weather Forecasting for informed farming decisions.",
      "Multilingual Support for better accessibility across regions."
    ],
    image: Agr,
    tech: ["React", "Django", "AI"],
    github: "https://github.com/PratyushPrasun/AI_AGROvision",
    live: "https://agrovision-black.vercel.app/",
  },
  {
    title: "Reelato",
    description: "Reelato is a full-stack food discovery platform where food partners can showcase their dishes through short video reels, and consumers can explore, like, and save reels for future reference.",
    points: [
      "Role-Based Authentication for food partners and consumers.",
      "Food Reels Upload & Discovery with like and save functionality.",
      "User Profiles for food partners and content exploration."
    ],
    image: rell,
    tech: ["React", "Express Js", "Mongo DB"],
    github: "https://github.com/PratyushPrasun/Reelato",
    live: "",
  },
  {
    title: "NSVI Website",
    description: "A professional and responsive website built for nsvi.in, focusing on clean UI, usability, and seamless performance across devices using modern frontend technologies.",
    points: [
      "Fully Responsive Design for all screen sizes.",
      "Modern UI Components built with React and Tailwind CSS.",
      "Performance & Accessibility Focused frontend implementation."
    ],
    image: nsvi,
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/PratyushPrasun",
    live: "https://nsvi.in/",
  },
  {
    title: "PitchHub",
    description: "PitchHub is a full-stack blogging platform that allows entrepreneurs to publish and pitch their business ideas to a wider audience. Built with Next.js and Tailwind CSS, the platform supports secure authentication and enables users to share, explore, and engage with startup-focused content.",
    points: [
      "Entrepreneur Pitch Publishing through blog-style posts.",
      "Secure Authentication System for users and creators.",
      "Modern & Responsive UI built with Next.js and Tailwind CSS."
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    tech: ["Next js", "Typescript", "Auth js"],
    github: "https://github.com/PratyushPrasun/Yc_directory",
    live: "https://yc-directory-omega-sable.vercel.app/",
  },
  {
    title: "ReDefine",
    description: "ReDefine is a visually rich, animation-driven web project focused on creating smooth, engaging user interactions using GSAP. The project emphasizes motion design, scroll-based animations, and modern UI transitions to enhance overall user experience.",
    points: [
      "Smooth GSAP Animations for interactive UI transitions.",
      "Scroll-Based & Micro-Interactions for immersive user experience.",
      "Modern, Performance-Optimized UI with fluid motion design."
    ],
    image: red,
    tech: ["React", "GSAP", "Framer Motion"],
    github: "https://github.com/PratyushPrasun/ReDefine",
    live: "https://re-define-phi.vercel.app/",
  },
  {
    title: "Expense Manager",
    description: "Expense Manager is a web application that helps users track and manage their daily expenses across different categories and dates. The app allows users to add, edit, and delete expenses, providing a simple and organized way to monitor spending habits.",
    points: [
      "Add, Edit & Delete Expenses with date-based tracking.",
      "Category-Wise Expense Management for better organization.",
      "Clean & User-Friendly Interface for daily usage."
    ],
    image: exp,
    tech: ["Javascript", "CSS", "HTML"],
    github: "https://github.com/PratyushPrasun/Expense-Manager",
    live: "https://pratyushprasun.github.io/Expense-Manager/",
  },
];

export default function Projects() {
  const { theme } = useTheme();
  const isBlue = theme === "blue";

  const accentColor = isBlue ? "text-blue-500" : "text-red-500";
  const accentSpan = isBlue ? "text-blue-400" : "text-red-500";

  return (
    <section
      id="projects"
      className="relative min-h-screen py-8 overflow-hidden bg-white/10 dark:bg-gradient-to-br dark:from-black dark:via-[#0c0c0c] dark:to-[#120000]"
      style={{
        background: isBlue
          ? `linear-gradient(135deg, var(--blue-bg-from), var(--blue-bg-via), var(--blue-bg-to))`
          : undefined,
      }}
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        {!isBlue ? (
          <div className="absolute inset-0 hidden dark:block">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          </div>
        ) : (
          <>
            <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-[120px]" style={{ background: "var(--blue-accent-soft)" }} />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px]" style={{ background: "rgba(37, 99, 235, 0.15)" }} />
          </>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="tracking-widest mb-2 text-gray-500 dark:text-gray-400 font-medium">PROJECTS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Selected <span className={accentSpan}>Work</span>
          </h2>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} isBlue={isBlue} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isBlue }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const accentColor = isBlue ? "text-blue-400" : "text-red-500";
  const borderColor = isBlue ? "border-blue-500/30" : "border-red-500/30";
  const hoverAccent = isBlue ? "hover:text-blue-400" : "hover:text-red-500";

  return (
    <div
      className="group h-[460px] [perspective:1200px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d]"
      >
        {/* FRONT: Visual Summary */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden bg-black/10 dark:bg-white/5 backdrop-blur-md border border-gray-900 dark:border-white/10 shadow-xl flex flex-col">
          <div className="relative h-52 overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 " />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
               <span className="text-white text-xs font-medium">Hover for details</span>
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm  line-clamp-5 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full border ${isBlue ? 'text-blue-400 border-blue-500/30 bg-blue-500/10' : 'text-red-500 border-red-500/30 bg-red-500/10'}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* BACK: Detailed View */}
        <div
          className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl p-8 flex flex-col justify-between border shadow-2xl ${borderColor} ${isBlue ? 'bg-gradient-to-b from-[#0f172a] to-[#020617]' : 'bg-gray-50 dark:bg-[#120000]'}`}
        >
          <div>
            <h3 className={`text-xl font-bold ${accentColor} mb-6 flex items-center gap-2`}>
              Key Highlights
              <div className={`h-[2px] flex-1 ${isBlue ? 'bg-blue-500/20' : 'bg-red-500/20'}`} />
            </h3>

            <ul className="space-y-4">
              {project.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 leading-snug">
                  <CheckCircle2 size={18} className={`${accentColor} shrink-0 mt-0.5`} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-6 pt-6 border-t border-gray-200 dark:border-white/10">
            <a href={project.github} className={`flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-gray-400 ${hoverAccent} dark:hover:text-white transition-colors`}>
              <Github size={20} /> Code
            </a>
            <a href={project.live} className={`flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-gray-400 ${hoverAccent} dark:hover:text-white transition-colors`}>
              <ExternalLink size={20} /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}