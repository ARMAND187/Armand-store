"use client";

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-[#030008] pointer-events-none">
      
      {/* 
        Minimalist Premium Background
        Deep dark canvas with a sweeping light effect from right to left
      */}
      
      {/* Ambient background glow to prevent it from being completely pitch black */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent opacity-60" />

      {/* The sweeping light ray */}
      <div className="bg-sweeping-light" />
      
      {/* Cinematic Film Grain (subtle texture to make the black look like premium film) */}
      <div className="absolute inset-0 bg-film-grain opacity-[0.04] mix-blend-overlay" />
    </div>
  );
}
