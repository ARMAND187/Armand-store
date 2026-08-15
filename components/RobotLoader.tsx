"use client";
import dynamic from "next/dynamic";

const RobotMascot = dynamic(() => import("@/components/RobotMascot"), {
  ssr: false,
});

export default function RobotLoader() {
  return <RobotMascot />;
}
