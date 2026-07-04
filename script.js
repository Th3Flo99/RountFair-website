// Theme: follow the system by default, let the toggle override (persisted).
(function () {
  const stored = localStorage.getItem("roundfair-theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  function apply(theme) {
    document.documentElement.dataset.theme = theme;
    const btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  function current() {
    return (
      localStorage.getItem("roundfair-theme") ||
      (systemDark.matches ? "dark" : "light")
    );
  }

  apply(stored || (systemDark.matches ? "dark" : "light"));

  systemDark.addEventListener("change", () => {
    if (!localStorage.getItem("roundfair-theme")) apply(current());
  });

  document.addEventListener("DOMContentLoaded", () => {
    apply(current());
    const btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.addEventListener("click", () => {
        const next = current() === "dark" ? "light" : "dark";
        localStorage.setItem("roundfair-theme", next);
        apply(next);
      });
    }

    // Scroll reveal
    const revealed = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealed.forEach((el) => io.observe(el));
    } else {
      revealed.forEach((el) => el.classList.add("in"));
    }
  });
})();
