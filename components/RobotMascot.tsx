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
    <Html position={[-0.8, 1.0, 0]} center style={{ pointerEvents: "none" }}>
      <div
        style={{
          background: "rgba(8, 8, 12, 0.85)",
          border: "1px solid rgba(124, 58, 237, 0.4)",
          borderRadius: "14px",
          padding: "12px 18px",
          color: "rgba(255,255,255,0.9)",
          fontSize: "14px",
          fontWeight: 500,
          whiteSpace: "nowrap",
          backdropFilter: "blur(12px)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.6), 0 0 20px rgba(124, 58, 237, 0.3)",
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
            borderLeft: "8px solid rgba(124, 58, 237, 0.4)",
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

// ── Premium AI Core (Replaces the clunky humanoid) ────────────────────────────
function AICore({
  mouse,
  reacting,
  speech,
  visibleBubble,
}: {
  mouse: { x: number; y: number };
  reacting: boolean;
  speech: string;
  visibleBubble: boolean;
}) {
  const rootRef = useRef<THREE.Group>(null!);
  const coreRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const ring3Ref = useRef<THREE.Mesh>(null!);
  const particlesRef = useRef<THREE.Points>(null!);

  useFrame(({ clock }, delta) => {
    if (!rootRef.current || !coreRef.current) return;
    const t = clock.getElapsedTime();

    // Bobbing animation
    rootRef.current.position.y = Math.sin(t * 1.5) * 0.15;

    // Core pulsing
    const scale = 1.0 + Math.sin(t * 3) * 0.05 + (reacting ? 0.2 : 0);
    coreRef.current.scale.set(scale, scale, scale);

    // Mouse tracking (Core looks towards mouse slightly)
    rootRef.current.rotation.y = THREE.MathUtils.lerp(
      rootRef.current.rotation.y,
      mouse.x * 0.5,
      delta * 3
    );
    rootRef.current.rotation.x = THREE.MathUtils.lerp(
      rootRef.current.rotation.x,
      -mouse.y * 0.5,
      delta * 3
    );

    // Rings rotating
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.5;
      ring1Ref.current.rotation.y += delta * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.8;
      ring2Ref.current.rotation.z += delta * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z -= delta * 0.6;
      ring3Ref.current.rotation.x -= delta * 0.4;
    }

    // Particles rotating
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={rootRef} position={[1.0, 0, 0]} scale={1.2}>
      {/* ── CENTRAL CORE ── */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.5, 64, 64]} />
        <meshPhysicalMaterial
          color="#1a0b2e"
          emissive="#7c3aed"
          emissiveIntensity={reacting ? 2.5 : 1.5}
          roughness={0.1}
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
        {/* Intense core light */}
        <pointLight color="#a855f7" intensity={reacting ? 6 : 3} distance={5} />
      </mesh>

      {/* ── ORBITING RINGS ── */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[0.8, 0.02, 16, 100]} />
        <meshPhysicalMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={1}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.1, 0.015, 16, 100]} />
        <meshPhysicalMaterial
          color="#00f7ff"
          emissive="#00f7ff"
          emissiveIntensity={1.5}
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh ref={ring3Ref} rotation={[0, Math.PI / 4, 0]}>
        <torusGeometry args={[1.4, 0.01, 16, 100]} />
        <meshPhysicalMaterial
          color="#ec4899"
          emissive="#ec4899"
          emissiveIntensity={1.5}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* ── PARTICLES ── */}
      <points ref={particlesRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <pointsMaterial
          color="#ffffff"
          size={0.02}
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* ── SPEECH BUBBLE ── */}
      <Bubble text={speech} visible={visibleBubble} />
    </group>
  );
}

// ── Scene lighting ────────────────────────────────────────────────────────────
function Scene({
  mouse,
  reacting,
  speech,
  visibleBubble,
}: {
  mouse: { x: number; y: number };
  reacting: boolean;
  speech: string;
  visibleBubble: boolean;
}) {
  return (
    <>
      <ambientLight intensity={0.2} />
      {/* Key light */}
      <directionalLight position={[0, 5, 5]} intensity={1.5} />
      {/* Rim light */}
      <directionalLight position={[0, -5, -3]} intensity={3.0} color="#9333ea" />
      <AICore mouse={mouse} reacting={reacting} speech={speech} visibleBubble={visibleBubble} />
    </>
  );
}

// ── Smart context messages ────────────────────────────────────────────────────
export default function RobotMascot() {
  const pathname = usePathname();
  const [mouse,    setMouse]    = useState({ x: 0, y: 0 });
  const [reacting, setReacting] = useState(false);
  
  const [fullSpeech, setFullSpeech] = useState("");
  const [speech, setSpeech] = useState("");
  const [visibleBubble, setVisibleBubble] = useState(false);
  
  const reactingRef = useRef(false);

  // Typing effect hook
  useEffect(() => {
    if (!fullSpeech) {
      setSpeech("");
      setVisibleBubble(false);
      return;
    }
    
    setVisibleBubble(true);
    setSpeech("...");
    
    const t = setTimeout(() => {
      setSpeech(fullSpeech);
    }, 400);
    
    return () => clearTimeout(t);
  }, [fullSpeech]);

  // Page awareness
  useEffect(() => {
    if (pathname === "/") {
      setFullSpeech("Welcome! 🛒 Click Store in the nav bar to see products.");
    } else if (pathname === "/store") {
      setFullSpeech("Great! Here are our premium digital services. ✨");
    } else {
      setFullSpeech("Need help? Click a button to continue.");
    }
  }, [pathname]);

  const triggerReact = (msg: string) => {
    if (reactingRef.current) return;
    reactingRef.current = true;
    setReacting(true);
    setFullSpeech(msg);
    setTimeout(() => {
      setReacting(false);
      reactingRef.current = false;
      
      // Revert to default page message after reacting
      setTimeout(() => {
        if (pathname === "/") setFullSpeech("Welcome! 🛒 Click Store in the nav bar to see products.");
        else if (pathname === "/store") setFullSpeech("Great! Here are our premium digital services. ✨");
        else setFullSpeech("Need help? Click a button to continue.");
      }, 3000);
      
    }, 1500);
  };

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
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top:      0,
        right:    0,
        width:    "clamp(300px, 40vw, 600px)",
        height:   "100vh",
        zIndex:   -10,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: false }}
      >
        <Scene
          mouse={mouse}
          reacting={reacting}
          speech={speech}
          visibleBubble={visibleBubble}
        />
      </Canvas>
    </div>
  );
}
