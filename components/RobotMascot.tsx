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
      <sphereGeometry args={[0.06, 16, 16]} />
      <meshStandardMaterial
        ref={matRef}
        color="#ffffff"
        emissive="#ffffff"
        emissiveIntensity={1.5}
      />
    </mesh>
  );
}

// ── Floating speech bubble ────────────────────────────────────────────────────
function Bubble({ text, visible }: { text: string; visible: boolean }) {
  if (!visible) return null;
  return (
    <Html position={[-0.4, 1.2, 0]} center style={{ pointerEvents: "none" }}>
      <div
        style={{
          background: "rgba(12,12,18,0.96)",
          border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: "16px",
          padding: "12px 20px",
          color: "rgba(255,255,255,0.9)",
          fontSize: "15px",
          fontWeight: 600,
          whiteSpace: "nowrap",
          backdropFilter: "blur(16px)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)",
          fontFamily: "Inter, sans-serif",
          letterSpacing: "0.01em",
          userSelect: "none",
          position: "relative",
          animation: "bubblePop 0.35s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        {text}
        {/* Tail arrow */}
        <div
          style={{
            position: "absolute",
            bottom: -8,
            left: "60%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderTop: "8px solid rgba(255,255,255,0.14)",
          }}
        />
      </div>
      <style>{`
        @keyframes bubblePop {
          from { opacity: 0; transform: scale(0.8) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </Html>
  );
}

// ── Main Humanoid Robot built from Three.js primitives ──────────────────────
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

  // target Y for rise-up (making the robot full scale)
  const targetY = useRef(-8.0);
  useEffect(() => {
    if (phase !== "entering") targetY.current = -1.2;
  }, [phase]);

  useFrame(({ clock }, delta) => {
    if (!rootRef.current || !headRef.current || !waveRef.current) return;
    const t = clock.getElapsedTime();

    // Smooth rise
    rootRef.current.position.y = THREE.MathUtils.lerp(
      rootRef.current.position.y,
      targetY.current,
      delta * 1.5
    );

    // Idle float (applied on top once visible)
    if (phase !== "entering") {
      rootRef.current.position.y =
        targetY.current + Math.sin(t * 1.2) * 0.08;
    }

    // Very subtle body sway
    rootRef.current.rotation.z = Math.sin(t * 0.6) * 0.02;

    // Head tracks mouse smoothly
    headRef.current.rotation.y = THREE.MathUtils.lerp(
      headRef.current.rotation.y,
      mouse.x * 0.5,
      delta * 4
    );
    headRef.current.rotation.x = THREE.MathUtils.lerp(
      headRef.current.rotation.x,
      -mouse.y * 0.3,
      delta * 4
    );

    // Wave animation (Right arm)
    if (phase === "waving") {
      waveRef.current.rotation.z = -Math.abs(Math.sin(t * 5.5)) * 1.6 - 0.4;
      waveRef.current.rotation.x = -0.3;
    } else {
      waveRef.current.rotation.z = THREE.MathUtils.lerp(
        waveRef.current.rotation.z, -0.15, delta * 2
      );
      waveRef.current.rotation.x = THREE.MathUtils.lerp(
        waveRef.current.rotation.x, 0, delta * 2
      );
    }

    // Left arm gentle idle swing
    if (leftRef.current && phase === "idle") {
      leftRef.current.rotation.x = Math.sin(t * 1.0 + 1) * 0.1;
    }

    // Click/reaction jump
    if (reacting) {
      rootRef.current.position.y =
        targetY.current + Math.abs(Math.sin(t * 15)) * 0.2;
    }
  });

  // Shared metal material params (Sleek Silver/Black)
  const metal = {
    color:     "#111116" as THREE.ColorRepresentation,
    metalness: 0.9,
    roughness: 0.15,
  };
  const jointMetal = {
    color: "#2a2a35" as THREE.ColorRepresentation,
    metalness: 0.8,
    roughness: 0.3,
  };

  return (
    <group ref={rootRef} position={[2.5, -8.0, 0]} scale={1.2}>
      
      {/* ── HEAD ── */}
      <group ref={headRef} position={[0, 2.6, 0]}>
        {/* Head shape (Capsule/Sphere hybrid) */}
        <mesh castShadow>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
        
        {/* Face plate (glassy black) */}
        <mesh position={[0, 0, 0.28]}>
          <boxGeometry args={[0.45, 0.35, 0.15]} />
          <meshPhysicalMaterial color="#000000" metalness={1} roughness={0} />
        </mesh>

        {/* Eyes */}
        <Eye position={[-0.12, 0.05, 0.36]} />
        <Eye position={[ 0.12, 0.05, 0.36]} />
        <pointLight position={[-0.12, 0.05, 0.5]} color="#ffffff" intensity={0.8} distance={2} />
        <pointLight position={[ 0.12, 0.05, 0.5]} color="#ffffff" intensity={0.8} distance={2} />

        {/* Speech bubble */}
        <Bubble text={speech} visible={phase === "idle"} />
      </group>

      {/* ── NECK ── */}
      <mesh position={[0, 2.15, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.4, 16]} />
        <meshPhysicalMaterial {...jointMetal} />
      </mesh>

      {/* ── TORSO ── */}
      <group position={[0, 1.2, 0]}>
        {/* Upper chest */}
        <mesh castShadow position={[0, 0.4, 0]}>
          <capsuleGeometry args={[0.4, 0.5, 16, 16]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
        
        {/* Glowing core in chest */}
        <mesh position={[0, 0.4, 0.38]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
        </mesh>
        <pointLight position={[0, 0.4, 0.5]} color="#ffffff" intensity={1} distance={2} />

        {/* Lower torso/waist */}
        <mesh castShadow position={[0, -0.3, 0]}>
          <capsuleGeometry args={[0.3, 0.4, 16, 16]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>

        {/* Shoulder joints */}
        <mesh position={[ 0.5, 0.7, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshPhysicalMaterial {...jointMetal} />
        </mesh>
        <mesh position={[-0.5, 0.7, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshPhysicalMaterial {...jointMetal} />
        </mesh>
      </group>

      {/* ── RIGHT ARM (WAVING) ── */}
      <group ref={waveRef} position={[0.65, 1.9, 0]}>
        {/* Upper arm */}
        <mesh position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <capsuleGeometry args={[0.1, 0.4, 16, 16]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
        {/* Elbow */}
        <mesh position={[0.6, 0, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshPhysicalMaterial {...jointMetal} />
        </mesh>
        {/* Lower arm */}
        <mesh position={[0.6, -0.35, 0]}>
          <capsuleGeometry args={[0.08, 0.5, 16, 16]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
        {/* Hand */}
        <mesh position={[0.6, -0.75, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
      </group>

      {/* ── LEFT ARM ── */}
      <group ref={leftRef} position={[-0.65, 1.9, 0]}>
        {/* Upper arm (angled down slightly) */}
        <mesh position={[-0.15, -0.25, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <capsuleGeometry args={[0.1, 0.4, 16, 16]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
        {/* Elbow */}
        <mesh position={[-0.3, -0.55, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshPhysicalMaterial {...jointMetal} />
        </mesh>
        {/* Lower arm */}
        <mesh position={[-0.35, -0.9, 0]} rotation={[0, 0, -Math.PI / 12]}>
          <capsuleGeometry args={[0.08, 0.5, 16, 16]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
        {/* Hand */}
        <mesh position={[-0.4, -1.3, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
      </group>

      {/* ── HIPS & LEGS ── */}
      <mesh position={[0, 0.4, 0]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshPhysicalMaterial {...jointMetal} />
      </mesh>
      
      {/* Right Leg */}
      <group position={[0.22, 0.4, 0]}>
        <mesh position={[0, -0.6, 0]}>
          <capsuleGeometry args={[0.12, 0.8, 16, 16]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
        <mesh position={[0, -1.15, 0]}>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshPhysicalMaterial {...jointMetal} />
        </mesh>
        <mesh position={[0, -1.75, 0]}>
          <capsuleGeometry args={[0.1, 0.9, 16, 16]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
        <mesh position={[0, -2.35, 0.1]}>
          <boxGeometry args={[0.2, 0.15, 0.4]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
      </group>

      {/* Left Leg */}
      <group position={[-0.22, 0.4, 0]}>
        <mesh position={[0, -0.6, 0]}>
          <capsuleGeometry args={[0.12, 0.8, 16, 16]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
        <mesh position={[0, -1.15, 0]}>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshPhysicalMaterial {...jointMetal} />
        </mesh>
        <mesh position={[0, -1.75, 0]}>
          <capsuleGeometry args={[0.1, 0.9, 16, 16]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
        <mesh position={[0, -2.35, 0.1]}>
          <boxGeometry args={[0.2, 0.15, 0.4]} />
          <meshPhysicalMaterial {...metal} />
        </mesh>
      </group>

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
      <ambientLight intensity={0.4} />
      {/* Key light — top-front bright */}
      <directionalLight position={[2, 5, 4]} intensity={2.0} />
      {/* Rim light — cool silver from behind */}
      <directionalLight position={[-4, 2, -3]} intensity={1.5} color="#c0c8ff" />
      {/* Fill — soft warm from right */}
      <directionalLight position={[4, -2, 2]} intensity={0.5} color="#ffd8a8" />
      <Robot mouse={mouse} phase={phase} reacting={reacting} speech={speech} />
    </>
  );
}

// ── Smart context messages ────────────────────────────────────────────────────
const MESSAGES = {
  idle:     "👋 Hello there!",
  store:    "🛒 Looking for views?",
  scroll:   "👇 Keep scrolling!",
  click:    "✅ Good choice!",
  card:     "💡 Need this?",
  cta:      "📩 Let's talk!",
  top:      "🏠 Back to top!",
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
    }, 1200);
  };

  // Phase progression: rise → wave → idle
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("waving"), 800);
    const t2 = setTimeout(() => {
      setPhase("idle");
      setSpeech(MESSAGES.idle);
    }, 3500);
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
        top:      0,
        right:    0,
        width:    "100vw",
        height:   "100vh",
        zIndex:   -10, // Places it behind the main content but above the base background
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
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
