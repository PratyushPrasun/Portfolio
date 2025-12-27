import React, { useEffect, useRef } from "react";
import { useTheme } from "../Contexts/usetheme";

export default function ThemeReveal() {
  const { theme } = useTheme();
  const flashRef = useRef(null);

  useEffect(() => {
    if (!flashRef.current) return;

    // Set flash color based on the target theme
    // Light -> Dark/Blue uses a dark flash, Dark -> Light uses a bright flash
    const flashColor = theme === 'light' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
    flashRef.current.style.backgroundColor = flashColor;

    // Trigger the ignition
    flashRef.current.classList.remove('active');
    void flashRef.current.offsetWidth; // Force reflow to restart animation
    flashRef.current.classList.add('active');

  }, [theme]);

  return <div ref={flashRef} className="theme-ignition" />;
}