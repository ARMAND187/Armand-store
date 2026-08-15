"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  y: number; // starting Y percentage
  duration: number; // animation duration
  delay: number;
  color: string; // 'yellow' or 'white'
  direction: "left-to-right" | "right-to-left";
}

export default function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate stars randomly
    const createStar = () => {
      // "sometimes have yellow colors, sometimes fair color (white/silver)"
      const isYellow = Math.random() > 0.6;
      // "left to right or right to left"
      const isLtr = Math.random() > 0.5;
      
      const star: Star = {
        id: Date.now() + Math.random(),
        y: Math.random() * 70, // Top 70% of screen
        // "sometimes make faster" - duration between 1.0s (fast) and 2.5s (normal)
        duration: 1.0 + Math.random() * 1.5,
        delay: Math.random() * 0.5,
        color: isYellow ? "#fde047" : "#e2e8f0", // yellow-300 or slate-200
        direction: isLtr ? "left-to-right" : "right-to-left",
      };

      setStars((prev) => [...prev, star]);

      // Remove star after it finishes
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== star.id));
      }, (star.duration + star.delay) * 1000 + 100);
    };

    // Random interval for shooting stars
    const interval = setInterval(() => {
      // "sometimes 2 or more than 1"
      const count = Math.random() > 0.7 ? (Math.random() > 0.5 ? 3 : 2) : 1;
      for (let i = 0; i < count; i++) {
        setTimeout(createStar, Math.random() * 1000);
      }
    }, 2500); // Every 2.5 seconds, attempt to spawn

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-40] overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute h-[1.5px] rounded-full"
          style={{
            top: `${star.y}%`,
            left: star.direction === "left-to-right" ? "-20%" : "120%",
            width: "150px",
            background: `linear-gradient(${
              star.direction === "left-to-right" ? "90deg" : "-90deg"
            }, transparent, ${star.color})`,
            boxShadow: `0 0 10px ${star.color}, 0 0 20px ${star.color}`,
            // Rotate slightly downwards to simulate falling comets
            transform: `rotate(${star.direction === "left-to-right" ? "15deg" : "-15deg"})`,
            animation: `shoot-${star.direction} ${star.duration}s linear ${star.delay}s forwards`,
          }}
        >
          {/* Glowing Head of the comet */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
            style={{
              [star.direction === "left-to-right" ? "right" : "left"]: 0,
              background: star.color,
              boxShadow: `0 0 15px 2px ${star.color}`,
            }}
          />
        </div>
      ))}
      <style>{`
        @keyframes shoot-left-to-right {
          0% { transform: rotate(15deg) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: rotate(15deg) translateX(150vw); opacity: 0; }
        }
        @keyframes shoot-right-to-left {
          0% { transform: rotate(-15deg) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: rotate(-15deg) translateX(-150vw); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
