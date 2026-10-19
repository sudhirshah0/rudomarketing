"use client";

import React, { useEffect, useRef, useState } from "react";
import { Application } from "@splinetool/runtime";

export default function RobotSpline() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let app: Application | null = null;
    let isMounted = true;

    let observer: IntersectionObserver | null = null;

    if (canvasRef.current) {
      app = new Application(canvasRef.current);
      app
        .load("/scene_fixed.splinecode")
        .then(() => {
          if (isMounted) {
            setLoading(false);
            if (canvasRef.current && app && containerRef.current) {
              const splineAny = app as unknown as { setSize?: (w: number, h: number) => void };
              if (typeof splineAny.setSize === "function") {
                splineAny.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
              }
            }
          }
        })
        .catch((err) => {
          console.warn("Spline 3D local failed to load, falling back:", err);
          if (isMounted && app) {
            app
              .load("https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode")
              .finally(() => {
                if (isMounted) setLoading(false);
              });
          }
        });

      // Pause WebGL rendering loop when user scrolls away from hero section
      if (containerRef.current) {
        observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            if (!entry) return;
            const splineAny = app as unknown as { play?: () => void; stop?: () => void };
            if (!entry.isIntersecting) {
              if (typeof splineAny.stop === "function") splineAny.stop();
            } else {
              if (typeof splineAny.play === "function") splineAny.play();
            }
          },
          { rootMargin: "150px" }
        );
        observer.observe(containerRef.current);
      }
    }

    // Debounced resize handler
    let resizeTimer: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (app && containerRef.current) {
          const splineAny = app as unknown as { setSize?: (w: number, h: number) => void };
          if (typeof splineAny.setSize === "function") {
            splineAny.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
          }
        }
      }, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      isMounted = false;
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      if (observer) observer.disconnect();
      if (app) {
        try {
          app.dispose();
        } catch {
          // ignore cleanup errors
        }
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-full flex items-center justify-center pointer-events-auto overflow-hidden"
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="w-10 h-10 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin" />
        </div>
      )}
      {/* 
        Responsive transforms:
        - Mobile (<640px): Centered, scaled 0.85, shifted down slightly so it doesn't overlap header
        - Tablet (640px-1024px): Scaled 0.9, shifted right 10%
        - Desktop (1024px-1280px): Scaled 0.95, shifted right 18%
        - Large desktop (1280px+): Scaled 1.0, shifted right 24%
      */}
      <div className="w-full h-full min-h-0 min-w-0 transform-gpu will-change-transform origin-center transition-transform duration-500 scale-[0.82] sm:scale-[0.88] md:scale-[0.92] lg:scale-[0.98] xl:scale-[1.02] translate-y-[10%] sm:translate-y-[4%] md:translate-y-[2%] translate-x-0 sm:translate-x-[4%] md:translate-x-[14%] lg:translate-x-[20%] xl:translate-x-[24%]">
        <canvas
          ref={canvasRef}
          className="w-full h-full block transition-opacity duration-700"
          style={{ opacity: loading ? 0 : 1 }}
        />
      </div>
    </div>
  );
}

