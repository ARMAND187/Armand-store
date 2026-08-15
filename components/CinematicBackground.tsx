"use client";

export default function CinematicBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none"
      style={{ background: "#050505" }}
    >
      {/* Very subtle central glow — barely visible, just prevents dead black */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Top-left faint silver accent */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full opacity-20 animate-blob"
        style={{
          background:
            "radial-gradient(ellipse, rgba(200,200,220,0.08) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />

      {/* Bottom-right faint silver accent */}
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[55vw] h-[55vw] rounded-full opacity-20 animate-blob animation-delay-4000"
        style={{
          background:
            "radial-gradient(ellipse, rgba(180,180,210,0.06) 0%, transparent 65%)",
          filter: "blur(110px)",
        }}
      />

      {/* Subtle horizontal gradient line at top — gives depth */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.15) 60%, transparent)",
        }}
      />

      {/* Cinematic Film Grain */}
      <div className="absolute inset-0 bg-film-grain opacity-[0.06] mix-blend-overlay" />
    </div>
  );
}
