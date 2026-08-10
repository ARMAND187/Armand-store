"use client";

import Image from "next/image";

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-black pointer-events-none">
      
      {/* 
        The Background Media
        To use a video instead, replace this Image block with:
        <video src="/bg.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 animate-cinematic-pan" />
      */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/bg.jpg"
          alt="Cinematic Background"
          fill
          priority
          className="object-cover opacity-60 animate-cinematic-pan"
          quality={100}
        />
      </div>

      {/* Cinematic Vignette Overlay (Darkens edges to focus on center content) */}
      <div className="absolute inset-0 bg-radial-vignette mix-blend-multiply" />
      
      {/* Cinematic Film Grain */}
      <div className="absolute inset-0 bg-film-grain opacity-[0.03] mix-blend-overlay" />
      
      {/* Deep color tint to ensure text remains perfectly readable */}
      <div className="absolute inset-0 bg-[#05000f]/60 backdrop-blur-[2px]" />
    </div>
  );
}
