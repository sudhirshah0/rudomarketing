"use client";

import React, { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable mouse glow on devices with pointer/mouse support
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    let rafId: number;
    let targetX = -200;
    let targetY = -200;
    let currentX = -200;
    let currentY = -200;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth lerp animation for fluid luxury feel
    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      setPos({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 overflow-hidden"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div
        className="absolute w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          background:
            "radial-gradient(circle, rgba(192, 132, 252, 0.22) 0%, rgba(244, 114, 182, 0.16) 25%, rgba(56, 189, 248, 0.14) 50%, rgba(250, 204, 21, 0.08) 65%, transparent 80%)",
          filter: "blur(32px)",
          transform: "translate(-50%, -50%) translate3d(0, 0, 0)",
          willChange: "transform, left, top",
        }}
      />
    </div>
  );
}
