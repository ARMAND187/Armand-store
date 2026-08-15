"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

// ── Pulsing glowing eye ───────────────────────────────────────────────────────
function Eye({ position }: { position: [number, number, number] }) {
  const matRef = useRef<THREE.MeshStandardMaterial>(null!);
  useFrame(({ clock }) => {
    if (!matRef.current) return;
    matRef.current.emissiveIntensity =
      1.4 + Math.sin(clock.getElapsedTime() * 2.8) * 0.5;
  });
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.075, 16, 16]} />
      <meshStandardMaterial
        ref={matRef}
        color="#00f7ff"
        emissive="#00f7ff"
        emissiveIntensity={1.5}
      />
    </mesh>
  );
}

// ── Floating speech bubble ────────────────────────────────────────────────────
function Bubble({ text, visible }: { text: string; visible: boolean }) {
  if (!visible) return null;
  return (
    <Html position={[-0.3, 2.1, 0]} center style={{ pointerEvents: "none" }}>
      <div
        style={{
          background: "rgba(12,12,18,0.96)",
          border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: "14px",
          padding: "9px 16px",
          color: "rgba(255,255,255,0.9)",
          fontSize: "12px",
          fontWeight: 500,
          whiteSpace: "nowrap",
          backdropFilter: "blur(16px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
          fontFamily: "Inter, sans-serif",
          letterSpacing: "0.01em",
          userSelect: "none",
          position: "relative",
          animation: "bubblePop 0.25s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        {text}
        {/* Tail arrow */}
        <div
          style={{
            position: "absolute",
            bottom: -7,
            left: "55%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "7px solid transparent",
            borderRight: "7px solid transparent",
            borderTop: "7px solid rgba(255,255,255,0.14)",
          }}
        />
      </div>
      <style>{`
        @keyframes bubblePop {
          from { opacity: 0; transform: scale(0.8) translateY(6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </Html>
  );
}

// ── Main robot built from Three.js primitives ─────────────────────────────────
function Robot({
  mouse,
  phase,
  reacting,
  speech,
}: {
  mouse: { x: number; y: number };
  phase: "entering" | "waving" | "idle";
  reacting: boolean;
  speech: string;
}) {
  const rootRef  = useRef<THREE.Group>(null!);
  const headRef  = useRef<THREE.Group>(null!);
  const waveRef  = useRef<THREE.Group>(null!);
  const leftRef  = useRef<THREE.Group>(null!);

  // target Y for rise-up
  const targetY = useRef(-4.5);
  useEffect(() => {
    if (phase !== "entering") targetY.current = -1.65;
  }, [phase]);

  useFrame(({ clock }, delta) => {
    if (!rootRef.current || !headRef.current || !waveRef.current) return;
    const t = clock.getElapsedTime();

    // Smooth rise
    rootRef.current.position.y = THREE.MathUtils.lerp(
      rootRef.current.position.y,
      targetY.current,
      delta * 2.0
    );

    // Idle float (applied on top once visible)
    if (phase !== "entering") {
      rootRef.current.position.y =
        targetY.current + Math.sin(t * 1.15) * 0.045;
    }

    // Very subtle body sway
    rootRef.current.rotation.z =
      Math.sin(t * 0.7) * 0.018;

    // Head tracks mouse smoothly
    headRef.current.rotation.y = THREE.MathUtils.lerp(
      headRef.current.rotation.y,
      mouse.x * 0.42,
      delta * 5
    );
    headRef.current.rotation.x = THREE.MathUtils.lerp(
      headRef.current.rotation.x,
      -mouse.y * 0.22,
      delta * 5
    );

    // Wave animation
    if (phase === "waving") {
      waveRef.current.rotation.z =
        -Math.abs(Math.sin(t * 5.5)) * 1.4 - 0.25;
      waveRef.current.rotation.x = -0.25;
    } else {
      waveRef.current.rotation.z = THREE.MathUtils.lerp(
        waveRef.current.rotation.z, -0.12, delta * 3
      );
      waveRef.current.rotation.x = THREE.MathUtils.lerp(
        waveRef.current.rotation.x, 0, delta * 3
      );
    }

    // Left arm gentle idle swing
    if (leftRef.current && phase === "idle") {
      leftRef.current.rotation.x = Math.sin(t * 1.1 + 1) * 0.07;
    }

    // Click/reaction jump
    if (reacting) {
      rootRef.current.position.y =
        targetY.current + Math.abs(Math.sin(t * 14)) * 0.14;
    }
  });

  // Shared metal material params
  const metal = {
    color:     "#0f0f1c" as THREE.ColorRepresentation,
    metalness: 0.94,
    roughness: 0.06,
  };

  return (
    <group ref={rootRef} position={[0.55, -4.5, 0]}>

      {/* ── HEAD ── */}
      <group ref={headRef} position={[0, 1.15, 0]}>
        {/* Head cube */}
        <mesh castShadow>
          <boxGeometry args={[0.62, 0.58, 0.55]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>

        {/* Eyes */}
        <Eye position={[-0.135, 0.07, 0.285]} />
        <Eye position={[ 0.135, 0.07, 0.285]} />
        {/* Eye glow lights */}
        <pointLight position={[-0.14, 0.07, 0.6]} color="#00f7ff" intensity={0.6} distance={1.4} />
        <pointLight position={[ 0.14, 0.07, 0.6]} color="#00f7ff" intensity={0.6} distance={1.4} />

        {/* Mouth bar */}
        <mesh position={[0, -0.1, 0.285]}>
          <boxGeometry args={[0.21, 0.026, 0.01]} />
          <meshStandardMaterial color="#00f7ff" emissive="#00f7ff" emissiveIntensity={1.8} />
        </mesh>

        {/* Antenna pole */}
        <mesh position={[0, 0.37, 0]}>
          <cylinderGeometry args={[0.013, 0.013, 0.19, 8]} />
          <meshPhysicalMaterial color="#1e1e2e" metalness={0.9} roughness={0.15} />
        </mesh>
        {/* Antenna ball — pulsing purple */}
        <mesh position={[0, 0.49, 0]}>
          <sphereGeometry args={[0.052, 16, 16]} />
          <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={2.5} />
        </mesh>
        <pointLight position={[0, 0.55, 0]} color="#7c3aed" intensity={0.5} distance={0.8} />

        {/* Speech bubble */}
        <Bubble text={speech} visible={phase === "idle"} />
      </group>

      {/* ── NECK ── */}
      <mesh position={[0, 0.76, 0]}>
        <cylinderGeometry args={[0.1, 0.14, 0.15, 12]} />
        <meshPhysicalMaterial {...metal} />
      </mesh>

      {/* ── BODY ── */}
      <group position={[0, 0.22, 0]}>
        {/* Torso */}
        <mesh castShadow>
          <boxGeometry args={[0.73, 0.82, 0.47]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>

        {/* Chest panel (glowing screen) */}
        <mesh position={[0, 0.06, 0.255]}>
          <boxGeometry args={[0.37, 0.31, 0.012]} />
          <meshStandardMaterial
            color="#060610"
            emissive="#7c3aed"
            emissiveIntensity={0.45}
          />
        </mesh>
        {/* Grid lines on panel */}
        {[-0.05, 0.04, 0.13].map((y, i) => (
          <mesh key={i} position={[0, y, 0.268]}>
            <boxGeometry args={[0.33, 0.003, 0.004]} />
            <meshStandardMaterial
              color="#a78bfa"
              emissive="#a78bfa"
              emissiveIntensity={0.7}
            />
          </mesh>
        ))}
        {/* Panel glow */}
        <pointLight position={[0, 0.06, 0.5]} color="#7c3aed" intensity={0.35} distance={0.9} />

        {/* Shoulder joints */}
        <mesh position={[ 0.45, 0.32, 0]}>
          <sphereGeometry args={[0.095, 12, 12]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
        <mesh position={[-0.45, 0.32, 0]}>
          <sphereGeometry args={[0.095, 12, 12]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
      </group>

      {/* ── RIGHT/WAVE ARM ── */}
      <group ref={waveRef} position={[0.54, 0.55, 0]}>
        {/* Upper arm (horizontal) */}
        <mesh position={[0.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.078, 0.078, 0.34, 12]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
        {/* Elbow ball */}
        <mesh position={[0.39, 0, 0]}>
          <sphereGeometry args={[0.085, 12, 12]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
        {/* Lower arm */}
        <mesh position={[0.39, -0.21, 0]}>
          <cylinderGeometry args={[0.063, 0.063, 0.37, 12]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
        {/* Hand */}
        <mesh position={[0.39, -0.41, 0]}>
          <boxGeometry args={[0.13, 0.12, 0.12]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
        {/* Finger */}
        <mesh position={[0.39, -0.53, 0.02]}>
          <cylinderGeometry args={[0.025, 0.02, 0.1, 8]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
      </group>

      {/* ── LEFT ARM ── */}
      <group ref={leftRef} position={[-0.54, 0.55, 0]}>
        {/* Upper arm (horizontal) */}
        <mesh position={[-0.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.078, 0.078, 0.34, 12]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
        {/* Elbow ball */}
        <mesh position={[-0.39, 0, 0]}>
          <sphereGeometry args={[0.085, 12, 12]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
        {/* Lower arm — angled slightly forward */}
        <mesh position={[-0.39, -0.21, 0]}>
          <cylinderGeometry args={[0.063, 0.063, 0.37, 12]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
        {/* Hand */}
        <mesh position={[-0.39, -0.41, 0]}>
          <boxGeometry args={[0.13, 0.12, 0.12]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
      </group>

      {/* ── HIP BLOCK ── */}
      <mesh position={[0, -0.43, 0]}>
        <boxGeometry args={[0.56, 0.13, 0.35]} />
        <meshPhysicalMaterial {...metal} />
      </mesh>

      {/* ── LEGS ── */}
      {/* Left */}
      <mesh position={[-0.17, -0.75, 0]}>
        <cylinderGeometry args={[0.092, 0.082, 0.56, 12]} />
        <meshPhysicalMaterial {...metal} />
      </mesh>
      <mesh position={[-0.17, -1.06, 0]}>
        <sphereGeometry args={[0.083, 12, 12]} />
        <meshPhysicalMaterial {...metal} />
      </mesh>
      <mesh position={[-0.17, -1.09, 0]}>
        <boxGeometry args={[0.16, 0.09, 0.27]} />
        <meshPhysicalMaterial {...metal} />
      </mesh>
      {/* Right */}
      <mesh position={[0.17, -0.75, 0]}>
        <cylinderGeometry args={[0.092, 0.082, 0.56, 12]} />
        <meshPhysicalMaterial {...metal} />
      </mesh>
      <mesh position={[0.17, -1.06, 0]}>
        <sphereGeometry args={[0.083, 12, 12]} />
        <meshPhysicalMaterial {...metal} />
      </mesh>
      <mesh position={[0.17, -1.09, 0]}>
        <boxGeometry args={[0.16, 0.09, 0.27]} />
        <meshPhysicalMaterial {...metal} />
      </mesh>

    </group>
  );
}

// ── Scene lighting ────────────────────────────────────────────────────────────
function Scene({
  mouse,
  phase,
  reacting,
  speech,
}: {
  mouse: { x: number; y: number };
  phase: "entering" | "waving" | "idle";
  reacting: boolean;
  speech: string;
}) {
  return (
    <>
      <ambientLight intensity={0.35} />
      {/* Key light — top-front warm */}
      <directionalLight position={[1.5, 4, 3.5]} intensity={1.4} />
      {/* Rim light — cool silver from behind-left */}
      <directionalLight position={[-3, 1, -2]} intensity={0.6} color="#c0c8ff" />
      {/* Fill — soft warm from right */}
      <directionalLight position={[3, -1, 1]} intensity={0.4} color="#ffd8a8" />
      <Robot mouse={mouse} phase={phase} reacting={reacting} speech={speech} />
    </>
  );
}

// ── Smart context messages ────────────────────────────────────────────────────
const MESSAGES = {
  idle:     "👋  Hey, need help?",
  store:    "🛒  Check our products!",
  scroll:   "👇  More below!",
  click:    "✅  Great choice!",
  card:     "💡  Nice pick!",
  cta:      "📩  Sending message!",
  top:      "🏠  Back at the top!",
};

// ── Exported component (loaded dynamically, SSR disabled) ─────────────────────
export default function RobotMascot() {
  const [mouse,    setMouse]    = useState({ x: 0, y: 0 });
  const [phase,    setPhase]    = useState<"entering" | "waving" | "idle">("entering");
  const [reacting, setReacting] = useState(false);
  const [speech,   setSpeech]   = useState(MESSAGES.idle);
  const reactingRef = useRef(false);

  const triggerReact = (msg: string) => {
    if (reactingRef.current) return;
    reactingRef.current = true;
    setReacting(true);
    setSpeech(msg);
    setTimeout(() => {
      setReacting(false);
      reactingRef.current = false;
    }, 900);
  };

  // Phase progression: rise → wave → idle
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("waving"), 700);
    const t2 = setTimeout(() => {
      setPhase("idle");
      setSpeech(MESSAGES.idle);
    }, 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Mouse tracking
  useEffect(() => {
    const h = (e: MouseEvent) =>
      setMouse({
        x:  (e.clientX / window.innerWidth)  * 2 - 1,
        y:  (e.clientY / window.innerHeight) * 2 - 1,
      });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  // Scroll awareness
  useEffect(() => {
    let prevY = 0;
    const h = () => {
      const y = window.scrollY;
      if (y < 80 && prevY >= 80) setSpeech(MESSAGES.top);
      else if (y >= 80 && prevY < 80) setSpeech(MESSAGES.scroll);
      prevY = y;
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Click awareness — detect what was clicked
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (phase !== "idle") return;
      const t = e.target as HTMLElement;
      const closest = t.closest("[id^='cta-'], a[href*='telegram'], .btn-primary");
      if (closest) { triggerReact(MESSAGES.cta); return; }
      const card = t.closest(".glass-card");
      if (card) { triggerReact(MESSAGES.card); return; }
      const btn = t.closest("button, a");
      if (btn) { triggerReact(MESSAGES.click); return; }
    };
    window.addEventListener("click", h);
    return () => window.removeEventListener("click", h);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // Card hover awareness
  useEffect(() => {
    if (phase !== "idle") return;
    const h = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest(".glass-card")) setSpeech(MESSAGES.card);
      else if (window.scrollY < 80) setSpeech(MESSAGES.idle);
      else setSpeech(MESSAGES.scroll);
    };
    window.addEventListener("mouseover", h);
    return () => window.removeEventListener("mouseover", h);
  }, [phase]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        bottom:   0,
        right:    "2vw",
        width:    "clamp(200px, 22vw, 320px)",
        height:   "clamp(260px, 32vw, 420px)",
        zIndex:   20,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 48 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: false }}
      >
        <Scene
          mouse={mouse}
          phase={phase}
          reacting={reacting}
          speech={speech}
        />
      </Canvas>
    </div>
  );
}
