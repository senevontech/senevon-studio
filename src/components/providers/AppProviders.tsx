"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { DynamicBackground } from "@/components/effects/DynamicBackground";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { NoiseOverlay } from "@/components/effects/NoiseOverlay";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

function AppProvidersContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <SmoothScrollProvider />
      <LoadingScreen />
      {!isHome ? <ScrollProgress /> : null}
      {!isHome ? <CustomCursor /> : null}
      {!isHome ? <DynamicBackground /> : null}
      {!isHome ? <NoiseOverlay /> : null}
      {children}
    </>
  );
}

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AppProvidersContent>{children}</AppProvidersContent>
    </ThemeProvider>
  );
}
