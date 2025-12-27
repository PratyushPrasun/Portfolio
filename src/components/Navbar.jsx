import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Circle } from "lucide-react";
import { useTheme } from "../Contexts/usetheme";

const navLinks = ["Home", "About", "Projects", "Skills", "Experience", "Education", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  const { theme, cycleTheme } = useTheme();



  const isBlue = theme === "blue";
  const lastScroll = useRef(0);

  /* ---------------- Dynamic Theme Colors ---------------- */
  const accentText = isBlue ? "text-blue-500" : "text-red-500";
  const hoverText = isBlue ? "hover:text-blue-500" : "hover:text-red-500";
  const accentBg = isBlue ? "bg-blue-500" : "bg-red-500";
  const progressBg = isBlue ? "bg-blue-500 shadow-[0_0_10px_#3b82f6]" : "bg-red-500 shadow-[0_0_10px_#ef4444]";

  /* ---------------- Scroll Logic ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // 1. Hide/Show Navbar
      if (current > lastScroll.current && current > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll.current = current;

      // 2. Progress Bar
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress((current / height) * 100);

      // 3. IMPROVED ACTIVE SECTION LOGIC (Proximity Based)
      const scrollPosition = window.scrollY + 200; 

      let currentSection = active;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = link;
          }
        }
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        currentSection = "Contact";
      }

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  const scrollTo = (id) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ width: `${progress}%` }}
        className={`fixed top-0 left-0 h-[4px] z-[65] transition-colors duration-500 ${progressBg}`}
      />

      {/* Navbar Container */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 md:top-4 inset-x-0 z-50 flex justify-center"
      >
        <div className="w-full max-w-7xl px-4 md:px-6">
          <div
            className="h-[64px] flex items-center justify-between px-6 rounded-none md:rounded-2xl
                       backdrop-blur-xl bg-black/20 dark:bg-black/40
                       border-b md:border border-black/5 dark:border-white/10
                       shadow-lg transition-colors duration-500"
          >
            {/* Logo */}
            <h1 className="text-xl md:text-2xl font-black text-black dark:text-white flex items-center cursor-pointer"
            onClick={() => scrollTo("home")}
            >
              PRATYUSH<span className={accentText}>.</span>
            </h1>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = active === link;
                return (
                  <li
                    key={link}
                    onClick={() => scrollTo(link.toLowerCase())}
                    className="relative cursor-pointer py-2 group"
                  >
                    <span className={`text-lg font-semibold tracking-wide transition-all duration-300 
                      ${isActive ? accentText : `text-gray-500 dark:text-gray-400 ${hoverText} dark:hover:text-red-500`}`}
                    >
                      {link}
                    </span>

                    {/* Underline: Permanent if Active, Slide on Hover */}
                    <span
                      className={`
                        absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300
                        ${accentBg} 
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                    />
                  </li>
                );
              })}
            </ul>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => cycleTheme()}
                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                title="Cycle Theme"
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" && (
                    <motion.div key="sun" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: 90 }} className="text-orange-400">
                      <Sun size={20} fill="currentColor" />
                    </motion.div>
                  )}
                  {theme === "light" && (
                    <motion.div key="moon" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: 90 }} className="text-blue-600">
                      <Moon size={20} fill="currentColor" />
                    </motion.div>
                  )}
                  {theme === "blue" && (
                    <motion.div key="blue" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-blue-400">
                      <Circle size={18} fill="currentColor" className="animate-pulse" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <button onClick={() => setOpen(true)} className="lg:hidden p-2 text-gray-700 dark:text-gray-200">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer remains exactly as you had it */}
      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            
            {/* Drawer Container */}
            <motion.aside
              initial={{ x: "-100%", opacity: 0 }} // Start off-screen left
              animate={{ x: 0, opacity: 1 }}      // Slide to view
              exit={{ x: "-100%", opacity: 0 }}    // Slide back left
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed top-4 left-4 bottom-4 w-[280px] z-[110] p-8 rounded-3xl shadow-2xl
                        ${isBlue ? 'bg-slate-900 border border-blue-500/20' : 'bg-white dark:bg-[#0c0c0c] border border-white/10'}`}
            >
              {/* Close Button */}
              <button 
                onClick={() => setOpen(false)} 
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-gray-500 transition-colors"
              >
                <X size={24} />
              </button>
              
              {/* Branding inside Drawer */}
              <div className="mb-12">
                 <h1 className="text-xl font-black text-black dark:text-white">
                  PRATYUSH<span className={accentText}>.</span>
                </h1>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.button
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }} // Staggered entrance
                    key={link}
                    onClick={() => scrollTo(link.toLowerCase())}
                    className={`text-xl font-bold text-left transition-colors flex items-center gap-3
                                ${active === link ? accentText : 'text-gray-500 dark:text-gray-400'}`}
                  >
                    {active === link && <motion.div layoutId="activeDot" className={`w-1.5 h-1.5 rounded-full ${accentBg}`} />}
                    {link}
                  </motion.button>
                ))}
              </div>

              {/* Theme Toggle at bottom of drawer */}
              <div className="absolute bottom-8 left-8">
                 <p className="text-xs uppercase tracking-widest text-gray-400 mb-4 font-bold">Theme</p>
                 <button onClick={() => cycleTheme()} className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode
                 </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}