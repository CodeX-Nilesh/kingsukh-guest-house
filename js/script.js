(function () {
  "use strict";

  /* ---------------------------------------------------------------------- */
  /* Navigation: scroll-aware background + mobile menu toggle               */
  /* (replaces Navigation.tsx's useState/useEffect + Framer Motion)         */
  /* ---------------------------------------------------------------------- */
  function initNavigation() {
    const nav = document.getElementById("navbar");
    const homeIcon = document.getElementById("nav-home-icon");
    const brand = document.getElementById("nav-brand");
    const desktopLinks = document.querySelectorAll(".nav-link-desktop");
    const desktopBtn = document.getElementById("nav-book-btn-desktop");
    const mobileBtn = document.getElementById("nav-book-btn-mobile");
    const toggleBtn = document.getElementById("nav-toggle");
    const iconMenu = document.getElementById("icon-menu");
    const iconClose = document.getElementById("icon-close");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileLinks = mobileMenu.querySelectorAll(".mobile-nav-link");

    let isScrolled = false;
    let open = false;
    let closeTimer = null;

    function render() {
      const light = open || !isScrolled;

      nav.className =
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-400 nav-enter " +
        (open ? "bg-foreground" : isScrolled ? "bg-card/95 backdrop-blur-lg shadow-soft" : "bg-transparent");

      homeIcon.setAttribute("class", "h-4 w-4 " + (light ? "text-white" : "text-primary"));
      brand.className = "text-sm font-normal tracking-wide " + (light ? "text-white" : "text-foreground");

      const linkCls =
        "nav-link-desktop text-[11px] uppercase tracking-wider font-normal smooth-hover hover:opacity-60 " +
        (light ? "text-white" : "text-foreground");
      desktopLinks.forEach((a) => (a.className = linkCls));

      const btnColors = light
        ? "bg-white/10 text-white hover:bg-primary/80 hover:text-white"
        : "bg-white/20 text-foreground hover:bg-primary/80 hover:text-white";
      const btnBase =
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full smooth-hover text-[11px] uppercase tracking-wider font-normal backdrop-blur-md border border-white/30 px-5";
      desktopBtn.className = btnBase + " h-9 " + btnColors;
      mobileBtn.className = btnBase + " h-10 w-full mt-4 " + btnColors;

      toggleBtn.className = "lg:hidden " + (light ? "text-white" : "text-foreground");
      iconMenu.classList.toggle("hidden", open);
      iconClose.classList.toggle("hidden", !open);
    }

    function setOpen(next) {
      open = next;
      render();
      clearTimeout(closeTimer);
      if (open) {
        mobileMenu.classList.add("is-open");
        requestAnimationFrame(() => requestAnimationFrame(() => mobileMenu.classList.add("is-shown")));
      } else {
        mobileMenu.classList.remove("is-shown");
        closeTimer = setTimeout(() => mobileMenu.classList.remove("is-open"), 600);
      }
    }

    toggleBtn.addEventListener("click", () => setOpen(!open));
    mobileLinks.forEach((a) => a.addEventListener("click", () => setOpen(false)));

    window.addEventListener(
      "scroll",
      () => {
        const next = window.scrollY > 50;
        if (next !== isScrolled) {
          isScrolled = next;
          render();
        }
      },
      { passive: true },
    );

    render();
  }

  /* ---------------------------------------------------------------------- */
  /* Hero: autoplay image ticker with per-slide progress bars               */
  /* (replaces Hero.tsx's useState/useEffect/useCallback interval)         */
  /* ---------------------------------------------------------------------- */
  function initHero() {
    const hero = document.getElementById("home");
    if (!hero) return;
    const slides = Array.from(hero.querySelectorAll(".hero-slide"));
    const bars = Array.from(hero.querySelectorAll(".hero-progress-bar"));
    const SLIDE_DURATION = 5000;
    const TICK = 50;
    let current = 0;
    let progress = 0;
    let timer = null;

    function render() {
      slides.forEach((el, i) => el.classList.toggle("is-active", i === current));
      bars.forEach((bar, i) => {
        const fill = bar.querySelector(".hero-progress-fill");
        fill.style.width = i === current ? progress + "%" : i < current ? "100%" : "0%";
      });
    }

    function goTo(index) {
      current = index;
      progress = 0;
      render();
    }

    function tick() {
      progress += 100 / (SLIDE_DURATION / TICK);
      if (progress >= 100) {
        current = (current + 1) % slides.length;
        progress = 0;
      }
      render();
    }

    bars.forEach((bar, i) => bar.addEventListener("click", () => goTo(i)));

    timer = setInterval(tick, TICK);
    window.addEventListener("beforeunload", () => clearInterval(timer));

    render();
  }

  /* ---------------------------------------------------------------------- */
  /* Scroll reveal: fade + slide-up once an element enters the viewport     */
  /* (replaces Sections.tsx's <Reveal> using framer-motion's useInView)     */
  /* ---------------------------------------------------------------------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => observer.observe(el));
  }

  /* ---------------------------------------------------------------------- */
  /* Gallery lightbox modal                                                  */
  /* (replaces Sections.tsx's Gallery Radix <Dialog> + useState)            */
  /* ---------------------------------------------------------------------- */
  function initGalleryLightbox() {
    const items = document.querySelectorAll(".gallery-item");
    const overlay = document.getElementById("gallery-lightbox");
    if (!overlay || items.length === 0) return;
    const image = document.getElementById("lightbox-image");
    const title = document.getElementById("lightbox-title");
    const closeBtn = document.getElementById("lightbox-close");
    let lastFocused = null;

    function open(item) {
      const img = item.querySelector("img");
      image.src = img.src;
      image.alt = item.dataset.title || img.alt;
      title.textContent = item.dataset.title || "";
      lastFocused = document.activeElement;
      overlay.classList.remove("hidden");
      overlay.classList.add("flex");
      requestAnimationFrame(() => overlay.classList.add("is-open"));
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }

    function close() {
      overlay.classList.remove("is-open");
      document.body.style.overflow = "";
      setTimeout(() => {
        overlay.classList.add("hidden");
        overlay.classList.remove("flex");
      }, 300);
      if (lastFocused) lastFocused.focus();
    }

    items.forEach((item) => item.addEventListener("click", () => open(item)));
    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("is-open")) close();
    });
  }

  /* ---------------------------------------------------------------------- */
  /* Contact form: build a WhatsApp message from the fields and open it     */
  /* (replaces Sections.tsx's Contact useState + FormEvent handler)         */
  /* ---------------------------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const first = (data.get("first") || "").toString().trim();
      const last = (data.get("last") || "").toString().trim();
      const email = (data.get("email") || "").toString().trim();
      const mobile = (data.get("mobile") || "").toString().trim();
      const message = (data.get("message") || "").toString().trim();
      const text =
        "Hello Kingsukh Guest House,\n\n" +
        "Name: " + first + " " + last + "\n" +
        "Email: " + email + "\n" +
        "Mobile: " + mobile + "\n\n" +
        message;
      const url = "https://wa.me/919007062180?text=" + encodeURIComponent(text);
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  /* ---------------------------------------------------------------------- */
  /* Footer year                                                             */
  /* ---------------------------------------------------------------------- */
  function initFooterYear() {
    const el = document.getElementById("footer-year");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initHero();
    initReveal();
    initGalleryLightbox();
    initContactForm();
    initFooterYear();
  });
})();
