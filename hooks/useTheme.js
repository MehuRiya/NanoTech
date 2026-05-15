import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

/**
 * Helper to get theme from html element classList
 */
function getThemeFromClassList(htmlElement) {
  return htmlElement.classList.contains("light") ? "light" : "dark";
}

/**
 * Custom hook to safely use theme in components
 * Handles both context usage and fallback to MutationObserver for SSR compatibility
 */
export function useTheme() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    // Check theme from html element
    const htmlElement = document.documentElement;
    const theme = getThemeFromClassList(htmlElement);
    setIsDark(theme === "dark");
    setMounted(true);

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const newTheme = getThemeFromClassList(htmlElement);
      setIsDark(newTheme === "dark");
    });

    observer.observe(htmlElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // If context is available and mounted, use it
  if (themeContext && themeContext.mounted) {
    return {
      isDark: themeContext.theme === "dark",
      theme: themeContext.theme,
      toggleTheme: themeContext.toggleTheme,
      mounted: themeContext.mounted,
    };
  }

  // Fallback to local state
  return {
    isDark,
    theme: isDark ? "dark" : "light",
    toggleTheme: () => {},
    mounted,
  };
}
