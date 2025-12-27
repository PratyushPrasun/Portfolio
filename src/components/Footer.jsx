import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import { useTheme } from "../Contexts/usetheme";

const socialLinks = [
  { 
    icon: <Github size={22} />, 
    href: "https://github.com/PratyushPrasun", 
    label: "GitHub", 
    brandColor: "group-hover:bg-[#333] group-hover:shadow-[0_0_15px_#333]" 
  },
  { 
    icon: <Linkedin size={22} />, 
    href: "https://www.linkedin.com/in/pratyush-38b705351/", 
    label: "LinkedIn", 
    brandColor: "group-hover:bg-[#0077b5] group-hover:shadow-[0_0_15px_#0077b5]" 
  },
  { 
    icon: <Twitter size={22} />, 
    href: "https://x.com/pprasun1203", 
    label: "Twitter", 
    brandColor: "group-hover:bg-[#1da1f2] group-hover:shadow-[0_0_15px_#1da1f2]" 
  },
  { 
    icon: <Instagram size={22} />, 
    href: "https://www.instagram.com/pratyush_1203?igsh=MXQ4OXI4aXZqY2Vsdw==", 
    label: "Instagram", 
    brandColor: "group-hover:bg-[#ea4335] group-hover:shadow-[0_0_15px_#ea4335]" 
  },
  { 
    icon: <Mail size={22} />, 
    href: "mailto:ppratyush1203@gmail.com", 
    label: "Email", 
    brandColor: "group-hover:bg-[#ea4335] group-hover:shadow-[0_0_15px_#ea4335]" 
  },
];

export default function Footer() {
  const { theme } = useTheme();
  const isBlue = theme === "blue";

  // Dynamic Theme Mapping
  const accentText = isBlue ? "text-blue-500" : "text-red-500";
  const divider = isBlue ? "via-blue-500/30" : "via-red-500/30";

  return (
    <footer 
      className="relative w-full py-10 bg-white dark:bg-[#050505] transition-colors duration-500"
      style={{ background: isBlue ? "var(--blue-bg-to)" : undefined }}
    >
      {/* Premium Divider */}
      <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent ${divider} to-transparent opacity-40`} />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4">
          
          {/* LEFT: Branding */}
          <div className="flex flex-col items-center md:items-start order-2 md:order-1">
            <h2 className="text-xl font-black text-gray-900 dark:text-white tracking-tighter">
              PRATYUSH<span className={accentText}>.</span>
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mt-1">
              © {new Date().getFullYear()} — Handcrafted in India
            </p>
          </div>

          {/* CENTER: Glowing Socials */}
          <div className="flex items-center gap-6 order-1 md:order-2">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                className="group relative flex items-center justify-center w-12 h-12 transition-all duration-300"
                aria-label={social.label}
              >
                {/* Hover Background Circle & Glow */}
                <div className={`
                  absolute inset-0 rounded-full scale-0 group-hover:scale-100 
                  transition-transform duration-300 ease-out opacity-20 
                  ${social.brandColor}
                `} />

                {/* Icon Layer */}
                <div className="relative text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </div>

          {/* RIGHT: Status */}
          <div className="flex flex-col items-center md:items-end order-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">
                Live for Work
              </span>
            </div>
            <span className={`text-[11px] font-bold ${accentText} tracking-[0.1em] mt-1`}>
              Available Now
            </span>
          </div>

        </div>
      </div>

      {/* Blue Theme Bottom Glow Line */}
      {isBlue && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-[2px]" />
      )}
    </footer>
  );
}