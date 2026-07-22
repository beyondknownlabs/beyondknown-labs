(() => {
  "use strict";

  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const navLinks = nav ? nav.querySelectorAll("a") : [];
  const year = document.querySelector("[data-year]");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const setMenuState = (open) => {
    if (!toggle || !nav || !header) return;

    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    nav.classList.toggle("is-open", open);
    header.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      setMenuState(!isOpen);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenuState(false);
        toggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      const clickedInsideHeader = header && header.contains(event.target);

      if (isOpen && !clickedInsideHeader) {
        setMenuState(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 920) {
        setMenuState(false);
      }
    }, { passive: true });
  }

  const updateHeader = () => {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 16);
    }
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
})();
