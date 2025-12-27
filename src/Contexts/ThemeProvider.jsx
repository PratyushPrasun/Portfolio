import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const THEMES = ["dark", "light", "blue"];

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    // reset
    root.classList.remove("dark");
    root.removeAttribute("data-theme");

    if (theme === "dark") {
      root.classList.add("dark");
    }

    if (theme === "blue") {
      root.setAttribute("data-theme", "blue");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const cycleTheme = () => {
    setTheme((prev) => {
      const index = THEMES.indexOf(prev);
      return THEMES[(index + 1) % THEMES.length];
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
