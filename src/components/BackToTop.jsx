import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useTheme } from "../Contexts/usetheme";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isBlue = theme === "blue";

  // Dynamic Theme Styling
  const accentBg = isBlue ? "bg-blue-500 shadow-blue-500/40" : "bg-red-500 shadow-red-500/40";
  const hoverBg = isBlue ? "hover:bg-blue-600" : "hover:bg-red-600";

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down more than 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`
            fixed bottom-8 right-8 z-[100]
            w-12 h-12 md:w-14 md:h-14
            flex items-center justify-center
            rounded-2xl text-white shadow-2xl
            transition-colors duration-300
            ${accentBg} ${hoverBg}
          `}
          aria-label="Back to top"
        >
          <ArrowUp size={24} strokeWidth={3} />
          
          {/* Pulsing ring effect for the Blue theme to make it look "techier" */}
          {isBlue && (
            <span className="absolute inset-0 rounded-2xl bg-blue-400 animate-ping opacity-20 pointer-events-none" />
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
}