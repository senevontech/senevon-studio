"use client";

import type { ReactNode } from "react";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { DynamicBackground } from "@/components/effects/DynamicBackground";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { NoiseOverlay } from "@/components/effects/NoiseOverlay";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScrollProvider />
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <DynamicBackground />
      <NoiseOverlay />
      {children}
    </>
  );
}
