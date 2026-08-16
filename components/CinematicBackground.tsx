"use client";

export default function CinematicBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none bg-black"
    >
      {/* ── Monochrome Mesh Gradient Orbs ── */}
      {/* Top Left Gray Glow */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[120vw] sm:w-[60vw] h-[60vh] rounded-full mix-blend-screen opacity-[0.25] sm:opacity-[0.15] animate-blob"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(100,100,100,0) 70%)",
          filter: "blur(100px)",
        }}
      />
      
      {/* Bottom Right White Glow */}
      <div
        className="absolute -bottom-[20%] -right-[10%] w-[140vw] sm:w-[70vw] h-[70vh] rounded-full mix-blend-screen opacity-[0.2] sm:opacity-[0.1] animate-blob animation-delay-4000"
        style={{
          background: "radial-gradient(ellipse at center, rgba(200,200,200,1) 0%, rgba(50,50,50,0) 70%)",
          filter: "blur(120px)",
        }}
      />

      {/* Center Deep Gray Core */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] sm:w-[80vw] h-[80vh] rounded-full opacity-[0.1] sm:opacity-[0.05]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, transparent 60%)",
          filter: "blur(90px)",
        }}
      />

      {/* ── Small White/Silver Stars (Static) ── */}
      <div className="absolute top-[15%] left-[25%] w-1 h-1 bg-white rounded-full opacity-40 sm:opacity-30 shadow-[0_0_10px_rgba(255,255,255,1)]" />
      <div className="absolute top-[45%] right-[15%] w-1 h-1 bg-white rounded-full opacity-30 sm:opacity-20 shadow-[0_0_10px_rgba(255,255,255,1)]" />
      <div className="absolute bottom-[20%] left-[10%] w-1.5 h-1.5 bg-gray-300 rounded-full opacity-20 sm:opacity-10 blur-[1px]" />
      <div className="absolute top-[60%] left-[60%] w-0.5 h-0.5 bg-white rounded-full opacity-50 sm:opacity-40 shadow-[0_0_5px_rgba(255,255,255,1)]" />
      <div className="absolute bottom-[10%] right-[30%] w-2 h-2 bg-gray-200 rounded-full opacity-10 sm:opacity-5 blur-[2px]" />

      {/* ── Tiny Tech Grid / Mesh ── */}
      <div 
        className="absolute inset-0 opacity-[0.06] sm:opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Top Edge Highlight ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-20"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.4) 50%, transparent)",
        }}
      />

      {/* ── Cinematic Film Grain ── */}
      <div className="absolute inset-0 bg-film-grain opacity-[0.04] mix-blend-overlay" />
    </div>
  );
}
