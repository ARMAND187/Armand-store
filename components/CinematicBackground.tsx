"use client";

export default function CinematicBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none"
      style={{ background: "#050505" }}
    >
      {/* Deep purple floor glow matching the robot screenshot */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[60vh] opacity-60"
        style={{
          background: "linear-gradient(to top, rgba(124, 58, 237, 0.25), transparent)",
        }}
      />
      <div
        className="absolute -bottom-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] rounded-full opacity-50"
        style={{
          background: "radial-gradient(ellipse, rgba(124, 58, 237, 0.3) 0%, transparent 60%)",
          filter: "blur(90px)",
        }}
      />

      {/* Grid pattern (optional, subtle tech look) */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Subtle horizontal gradient line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.15) 60%, transparent)",
        }}
      />

      {/* Cinematic Film Grain */}
      <div className="absolute inset-0 bg-film-grain opacity-[0.05] mix-blend-overlay" />
    </div>
  );
}
