"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { usePathname } from "next/navigation";

// ── Floating speech bubble ────────────────────────────────────────────────────
function Bubble({ text, visible }: { text: string; visible: boolean }) {
  if (!visible) return null;
  return (
    <Html position={[-0.4, 0.2, 0.4]} center style={{ pointerEvents: "none" }}>
      <div
        style={{
          background: "rgba(8, 8, 12, 0.85)",
          border: "1px solid rgba(124, 58, 237, 0.3)",
          borderRadius: "14px",
          padding: "10px 16px",
          color: "rgba(255,255,255,0.9)",
          fontSize: "clamp(12px, 1.5vw, 15px)",
          fontWeight: 500,
          whiteSpace: "nowrap",
          backdropFilter: "blur(12px)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.6), 0 0 15px rgba(124, 58, 237, 0.2)",
          fontFamily: "Inter, sans-serif",
          letterSpacing: "0.01em",
          userSelect: "none",
          position: "relative",
          animation: "bubblePop 0.3s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        {text}
        {/* Tail arrow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: -7,
            transform: "translateY(-50%)",
            width: 0,
            height: 0,
            borderTop: "6px solid transparent",
            borderBottom: "6px solid transparent",
            borderLeft: "8px solid rgba(124, 58, 237, 0.3)",
          }}
        />
      </div>
      <style>{`
        @keyframes bubblePop {
          from { opacity: 0; transform: scale(0.8) translateX(10px); }
          to   { opacity: 1; transform: scale(1) translateX(0); }
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
  phase: "entering" | "idle";
  reacting: boolean;
  speech: string;
}) {
  const rootRef  = useRef<THREE.Group>(null!);
  const headRef  = useRef<THREE.Group>(null!);
  const chestRef = useRef<THREE.Group>(null!);
  const rightArmRef = useRef<THREE.Group>(null!);
  const leftArmRef  = useRef<THREE.Group>(null!);

  // target Y for rise-up (making the robot full scale)
  const targetY = useRef(-5.0);
  useEffect(() => {
    if (phase !== "entering") targetY.current = -1.2;
  }, [phase]);

  useFrame(({ clock }, delta) => {
    if (!rootRef.current || !headRef.current || !chestRef.current) return;
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
        targetY.current + Math.sin(t * 1.5) * 0.05;
    }

    // Body slowly tracks mouse, breathing
    chestRef.current.rotation.y = THREE.MathUtils.lerp(
      chestRef.current.rotation.y,
      mouse.x * 0.15,
      delta * 2
    );
    chestRef.current.rotation.x = Math.sin(t * 2) * 0.02;

    // Head tracks mouse smoothly (faster than chest)
    headRef.current.rotation.y = THREE.MathUtils.lerp(
      headRef.current.rotation.y,
      mouse.x * 0.6,
      delta * 4
    );
    headRef.current.rotation.x = THREE.MathUtils.lerp(
      headRef.current.rotation.x,
      -mouse.y * 0.4 + Math.sin(t * 1.2) * 0.05,
      delta * 4
    );
    headRef.current.rotation.z = -mouse.x * 0.15;

    // Arms gentle idle swing
    if (rightArmRef.current && leftArmRef.current) {
      rightArmRef.current.rotation.x = Math.sin(t * 1.5) * 0.05;
      leftArmRef.current.rotation.x = Math.sin(t * 1.5 + Math.PI) * 0.05;
    }

    // Click/reaction jump
    if (reacting) {
      rootRef.current.position.y =
        targetY.current + Math.abs(Math.sin(t * 15)) * 0.15;
    }
  });

  // Material exactly matching the Spline screenshot (Dark/Black Chrome)
  const chromeDark = {
    color: "#030303" as THREE.ColorRepresentation,
    metalness: 0.9,
    roughness: 0.15,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
  };
  
  // High reflective black for face visor
  const visorMat = {
    color: "#000000" as THREE.ColorRepresentation,
    metalness: 1.0,
    roughness: 0.05,
    clearcoat: 1.0,
    clearcoatRoughness: 0.0,
  };

  const jointMat = {
    color: "#1a1a24" as THREE.ColorRepresentation,
    metalness: 0.7,
    roughness: 0.5,
  };

  return (
    <group ref={rootRef} position={[0, -5.0, 0]} scale={1.3}>
      
      {/* ── CHEST & BODY ── */}
      <group ref={chestRef} position={[0, 1.2, 0]}>
        
        {/* Upper Chest (Curved, wide shoulders) */}
        <mesh castShadow position={[0, 0.4, 0]}>
          <capsuleGeometry args={[0.45, 0.5, 32, 32]} />
          <meshPhysicalMaterial {...chromeDark} />
        </mesh>

        {/* Lower Torso / Abdomen */}
        <mesh castShadow position={[0, -0.3, 0]}>
          <capsuleGeometry args={[0.3, 0.4, 32, 32]} />
          <meshPhysicalMaterial {...chromeDark} />
        </mesh>

        {/* Shoulder Joints */}
        <mesh position={[ 0.55, 0.65, 0]}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshPhysicalMaterial {...jointMat} />
        </mesh>
        <mesh position={[-0.55, 0.65, 0]}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshPhysicalMaterial {...jointMat} />
        </mesh>

        {/* ── RIGHT ARM ── */}
        <group ref={rightArmRef} position={[0.7, 0.6, 0]}>
          {/* Upper arm */}
          <mesh position={[0.05, -0.35, 0]} rotation={[0, 0, 0.15]}>
            <capsuleGeometry args={[0.12, 0.45, 32, 32]} />
            <meshPhysicalMaterial {...chromeDark} />
          </mesh>
          {/* Elbow */}
          <mesh position={[0.1, -0.7, 0]}>
            <sphereGeometry args={[0.12, 32, 32]} />
            <meshPhysicalMaterial {...jointMat} />
          </mesh>
          {/* Lower arm */}
          <mesh position={[0.12, -1.1, 0.05]} rotation={[-0.1, 0, 0.1]}>
            <capsuleGeometry args={[0.1, 0.5, 32, 32]} />
            <meshPhysicalMaterial {...chromeDark} />
          </mesh>
          {/* Hand */}
          <mesh position={[0.14, -1.5, 0.08]} rotation={[0, 0, 0.1]}>
            <capsuleGeometry args={[0.08, 0.15, 32, 32]} />
            <meshPhysicalMaterial {...chromeDark} />
          </mesh>
        </group>

        {/* ── LEFT ARM ── */}
        <group ref={leftArmRef} position={[-0.7, 0.6, 0]}>
          {/* Upper arm */}
          <mesh position={[-0.05, -0.35, 0]} rotation={[0, 0, -0.15]}>
            <capsuleGeometry args={[0.12, 0.45, 32, 32]} />
            <meshPhysicalMaterial {...chromeDark} />
          </mesh>
          {/* Elbow */}
          <mesh position={[-0.1, -0.7, 0]}>
            <sphereGeometry args={[0.12, 32, 32]} />
            <meshPhysicalMaterial {...jointMat} />
          </mesh>
          {/* Lower arm */}
          <mesh position={[-0.12, -1.1, 0.05]} rotation={[-0.1, 0, -0.1]}>
            <capsuleGeometry args={[0.1, 0.5, 32, 32]} />
            <meshPhysicalMaterial {...chromeDark} />
          </mesh>
          {/* Hand */}
          <mesh position={[-0.14, -1.5, 0.08]} rotation={[0, 0, -0.1]}>
            <capsuleGeometry args={[0.08, 0.15, 32, 32]} />
            <meshPhysicalMaterial {...chromeDark} />
          </mesh>
        </group>

        {/* ── HEAD & NECK ── */}
        {/* Neck */}
        <mesh position={[0, 0.85, 0]}>
          <cylinderGeometry args={[0.1, 0.14, 0.25, 32]} />
          <meshPhysicalMaterial {...jointMat} />
        </mesh>

        {/* Head Group */}
        <group ref={headRef} position={[0, 1.15, 0]}>
          {/* Back of Head (Chrome) */}
          <mesh castShadow position={[0, 0, -0.05]}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshPhysicalMaterial {...chromeDark} />
          </mesh>
          
          {/* Visor / Faceplate (Reflective Black) */}
          <mesh position={[0, 0, 0.08]} rotation={[0.1, 0, 0]}>
            <boxGeometry args={[0.42, 0.5, 0.38]} />
            <meshPhysicalMaterial {...visorMat} />
          </mesh>
          <mesh position={[0, -0.1, 0.28]} rotation={[0.2, 0, 0]}>
             <sphereGeometry args={[0.22, 32, 32]} />
             <meshPhysicalMaterial {...visorMat} />
          </mesh>

          {/* Speech bubble - Positioned lower near neck */}
          <Bubble text={speech} visible={phase === "idle"} />
        </group>

        {/* ── HIPS & LEGS (Visible partially) ── */}
        <mesh position={[0, -0.75, 0]}>
          <sphereGeometry args={[0.28, 32, 32]} />
          <meshPhysicalMaterial {...jointMat} />
        </mesh>
        {/* Right Leg */}
        <mesh position={[0.22, -1.4, 0]}>
          <capsuleGeometry args={[0.14, 1.0, 32, 32]} />
          <meshPhysicalMaterial {...chromeDark} />
        </mesh>
        {/* Left Leg */}
        <mesh position={[-0.22, -1.4, 0]}>
          <capsuleGeometry args={[0.14, 1.0, 32, 32]} />
          <meshPhysicalMaterial {...chromeDark} />
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
  phase: "entering" | "idle";
  reacting: boolean;
  speech: string;
}) {
  return (
    <>
      <ambientLight intensity={0.5} />
      {/* Key light — bright top front (creates the shiny chest) */}
      <directionalLight position={[0, 5, 5]} intensity={2.5} />
      {/* Rim light — deep purple from bottom/back (matches background) */}
      <directionalLight position={[0, -5, -3]} intensity={4.0} color="#9333ea" />
      {/* Side rim lights for edge definition */}
      <directionalLight position={[-4, 2, -2]} intensity={1.5} color="#c0c8ff" />
      <directionalLight position={[4, 2, -2]} intensity={1.5} color="#c0c8ff" />
      <Robot mouse={mouse} phase={phase} reacting={reacting} speech={speech} />
    </>
  );
}

// ── Smart context messages ────────────────────────────────────────────────────
// Using typing effect for messages
export default function RobotMascot() {
  const pathname = usePathname();
  const [mouse,    setMouse]    = useState({ x: 0, y: 0 });
  const [phase,    setPhase]    = useState<"entering" | "idle">("entering");
  const [reacting, setReacting] = useState(false);
  
  const [fullSpeech, setFullSpeech] = useState("");
  const [speech, setSpeech] = useState("");
  
  const reactingRef = useRef(false);

  // Typing effect hook
  useEffect(() => {
    if (!fullSpeech) {
      setSpeech("");
      return;
    }
    
    // Start with typing dots
    setSpeech("...");
    
    // After short delay, show full message
    const t = setTimeout(() => {
      setSpeech(fullSpeech);
    }, 400);
    
    return () => clearTimeout(t);
  }, [fullSpeech]);

  // Page awareness
  useEffect(() => {
    if (phase !== "idle") return;
    if (pathname === "/") {
      setFullSpeech("Welcome! 🛒 Click Store in the nav bar to see products.");
    } else if (pathname === "/store") {
      setFullSpeech("Great! Here are our premium digital services. ✨");
    } else {
      setFullSpeech("Need help? Click a button to continue.");
    }
  }, [pathname, phase]);

  const triggerReact = (msg: string) => {
    if (reactingRef.current) return;
    reactingRef.current = true;
    setReacting(true);
    setFullSpeech(msg);
    setTimeout(() => {
      setReacting(false);
      reactingRef.current = false;
    }, 1500);
  };

  // Phase progression: rise → idle
  useEffect(() => {
    const t = setTimeout(() => {
      setPhase("idle");
    }, 1500);
    return () => clearTimeout(t);
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

  // Click awareness
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (phase !== "idle") return;
      const t = e.target as HTMLElement;
      if (t.closest("a[href='/store']")) {
        triggerReact("Heading to the Store! 🚀");
        return;
      }
      const closest = t.closest("[id^='cta-'], a[href*='telegram'], .btn-primary");
      if (closest) { triggerReact("Excellent choice! 📩"); return; }
      const card = t.closest(".glass-card");
      if (card) { triggerReact("💡 I like this one."); return; }
    };
    window.addEventListener("click", h);
    return () => window.removeEventListener("click", h);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top:      0,
        right:    0, // Align to right
        width:    "clamp(300px, 40vw, 600px)", // Take up right half of screen on desktop, full on mobile
        height:   "100vh",
        zIndex:   -10,
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
