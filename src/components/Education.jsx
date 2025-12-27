import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"; // Added Award icon
import { useTheme } from "../Contexts/usetheme";

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Haldia Institute of Technology",
    duration: "2024 – 2028",
    location: "Haldia, West Bengal, India",
    details: "Focusing on Full-Stack Development, Data Structures, and Artificial Intelligence. Maintaining a strong academic record while participating in tech communities.",
    grade: "8.3 CGPA  (Pursuing)", // Added Grade
    current: true,
  },
  {
    degree: "Higher Secondary (12th Grade)",
    institution: "Annie Besant International School",
    duration: "2021 – 2023",
    location: "Patna, Bihar, India",
    details: "Specialized in Physics, Chemistry, and Mathematics (PCM). Developed a strong foundation in analytical thinking and problem-solving.",
    grade: "85%", // Added Grade
    current: false,
  },
  {
    degree: "Secondary School (10th Grade)",
    institution: "Destiny International School",
    duration: "2019 – 2021",
    location: "Patna, Bihar, India",
    details: "Completed general secondary education with a focus on science and mathematics.",
    grade: "92%", // Added Grade
    current: false,
  },
];

export default function Education() {
  const { theme } = useTheme();
  const isBlue = theme === "blue";

  // Dynamic Theme Mapping
  const accentText = isBlue ? "text-blue-500" : "text-red-500";
  const accentBg = isBlue ? "bg-blue-500" : "bg-red-500";
  const gradeBadge = isBlue 
    ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20" 
    : "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20";

  return (
    <section
      id="education"
      className="relative py-8 overflow-hidden bg-white dark:bg-[#050505]"
      style={{
        background: isBlue
          ? `linear-gradient(135deg, var(--blue-bg-from), var(--blue-bg-via), var(--blue-bg-to))`
          : undefined,
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-0 w-72 h-72 blur-[120px] rounded-full opacity-10 ${isBlue ? 'bg-blue-500' : 'bg-red-500'}`} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Educational <span className={accentText}>Background</span>
          </h2>
          <div className={`h-1.5 w-20 ${accentBg} mx-auto mt-4 rounded-full`} />
        </motion.div>

        <div className="relative">
          <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-[2px] bg-gray-200 dark:bg-white/10`} />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 z-20 w-10 h-10 rounded-full border-4 ${isBlue ? 'border-[#050505] bg-blue-500' : 'border-[#050505] bg-red-500'} flex items-center justify-center shadow-xl`}>
                  <GraduationCap size={18} className="text-white" />
                </div>

                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                  <div className={`p-8 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-100 dark:border-white/10 backdrop-blur-xl hover:shadow-2xl hover:shadow-black/5 transition-all group ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    
                    <div className={`flex flex-wrap items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {edu.current && (
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${isBlue ? 'bg-blue-500/10 text-blue-500' : 'bg-red-500/10 text-red-500'}`}>
                          Currently Enrolled
                        </span>
                      )}
                      {/* Grade Badge */}
                      <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border ${gradeBadge}`}>
                        <Award size={12} />
                        Grade: {edu.grade}
                      </span>
                    </div>

                    <div className={`flex items-center gap-2 text-sm font-semibold mb-2 ${accentText} ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar size={14} />
                      {edu.duration}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">
                      {edu.institution}
                    </p>

                    <div className={`flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <MapPin size={12} />
                      {edu.location}
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}