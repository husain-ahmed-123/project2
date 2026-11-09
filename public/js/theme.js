const themeToggle = document.querySelector("[data-theme-toggle]");

if (themeToggle) {
  const themeKey = "roadside-assist-theme";
  const root = document.documentElement;
  const themeIcon = themeToggle.querySelector("[data-theme-icon]");
  const savedTheme = localStorage.getItem(themeKey);

  function setTheme(theme) {
    const isDark = theme === "dark";
    root.dataset.theme = isDark ? "dark" : "light";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeIcon.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem(themeKey, root.dataset.theme);
  }

  setTheme(savedTheme === "dark" ? "dark" : "light");
  themeToggle.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });
}
