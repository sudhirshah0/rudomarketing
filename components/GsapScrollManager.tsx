"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GsapScrollManager() {
  useEffect(() => {
    // Register ScrollTrigger plugin on client
    gsap.registerPlugin(ScrollTrigger);

    // Subtle fade-and-slide up for sections marked with [data-gsap="fade-up"]
    const elements = document.querySelectorAll<HTMLElement>("[data-gsap='fade-up']");

    const triggers: ScrollTrigger[] = [];

    elements.forEach((el) => {
      const tween = gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );

      if (tween.scrollTrigger) {
        triggers.push(tween.scrollTrigger);
      }
    });

    // Stagger animation for grid cards marked with [data-gsap="stagger-cards"]
    const gridContainers = document.querySelectorAll<HTMLElement>("[data-gsap='stagger-cards']");
    gridContainers.forEach((container) => {
      const cards = container.children;
      if (cards.length > 0) {
        const tween = gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 86%",
              once: true,
            },
          }
        );

        if (tween.scrollTrigger) {
          triggers.push(tween.scrollTrigger);
        }
      }
    });

    return () => {
      triggers.forEach((st) => st.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null;
}
