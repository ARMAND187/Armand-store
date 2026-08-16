"use client";


import { ReactNode } from "react";

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
