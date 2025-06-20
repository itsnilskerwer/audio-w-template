document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;

  // 1. Apply saved or default theme
  const detectSystemTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const applyTheme = (theme) => {
      root.classList.remove("light-mode", "dark-mode");

      if (theme === "dark") {
        root.classList.add("dark-mode");
      }
      if (theme === "light") {
        root.classList.add("light-mode");
      }
      
      localStorage.setItem("theme", theme);
  };

  const savedTheme = localStorage.getItem("theme");

  // Only apply saved theme or fall back to system preference
  if (savedTheme === "light" || savedTheme === "dark") {
    applyTheme(savedTheme);
  } else {
    const systemTheme = detectSystemTheme();
    root.classList.add(`${systemTheme}-mode`);
  }

  // Prevent duplicate binding
  themeToggle?.removeEventListener("click", themeToggle._handler);

  const clickHandler = () => {
    const isDark = root.classList.contains("dark-mode");
    applyTheme(isDark ? "light" : "dark");
  };

  // 2. Toggle theme on button click
  themeToggle._handler = clickHandler;
  themeToggle?.addEventListener("click", clickHandler);

});