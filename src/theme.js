const STORAGE_KEY = "theme";

const currentTheme = () => {
    const explicit = document.documentElement.getAttribute("data-theme");
    if (explicit === "light" || explicit === "dark") {
        return explicit;
    }
    return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
};

const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
        localStorage.setItem(STORAGE_KEY, theme);
    } catch {
        /* storage unavailable */
    }
};

const initThemeToggle = () => {
    const toggles = document.querySelectorAll("[data-theme-toggle]");
    toggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            applyTheme(currentTheme() === "dark" ? "light" : "dark");
        });
    });
};

export { initThemeToggle };
