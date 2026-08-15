"use client";

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-[#030008] pointer-events-none">
      
      {/* 
        Premium 3D Liquid Aurora Background
        Large, heavily blurred colored orbs that drift and blend together 
      */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#7c3aed]/30 mix-blend-screen filter blur-[100px] sm:blur-[130px] animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#00f7ff]/20 mix-blend-screen filter blur-[120px] sm:blur-[150px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-20%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-[#ec4899]/20 mix-blend-screen filter blur-[140px] sm:blur-[170px] animate-blob animation-delay-4000" />
      
      {/* Dark gradient overlay to ensure text remains readable and adds depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#030008_100%)] opacity-80" />

      {/* Cinematic Film Grain */}
      <div className="absolute inset-0 bg-film-grain opacity-[0.05] mix-blend-overlay" />
    </div>
  );
}
