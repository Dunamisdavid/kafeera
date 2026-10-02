import { useEffect } from "react";

// Gently advances a horizontal scroller one card at a time.
export default function useAutoScroll(ref, { interval = 3500, resumeAfter = 6000, query = "(max-width: 767px)" } = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const mobile = window.matchMedia(query);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer = null;
    let resumeTimer = null;
    let visible = false;

    const step = () => {
      const card = el.firstElementChild;
      if (!card) return;
      const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
      const distance = card.getBoundingClientRect().width + gap;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + distance, behavior: "smooth" });
    };

    const stop = () => {
      clearInterval(timer);
      timer = null;
    };

    const start = () => {
      stop();
      if (mobile.matches && !reduced.matches && visible && !document.hidden) {
        timer = setInterval(step, interval);
      }
    };

    // Any interaction pauses it; it picks up again after a quiet moment
    const pause = () => {
      stop();
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(start, resumeAfter);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        start();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("pointerdown", pause);
    el.addEventListener("wheel", pause, { passive: true });
    el.addEventListener("focusin", pause);
    document.addEventListener("visibilitychange", start);
    mobile.addEventListener("change", start);

    return () => {
      stop();
      clearTimeout(resumeTimer);
      observer.disconnect();
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("wheel", pause);
      el.removeEventListener("focusin", pause);
      document.removeEventListener("visibilitychange", start);
      mobile.removeEventListener("change", start);
    };
  }, [ref, interval, resumeAfter, query]);
}