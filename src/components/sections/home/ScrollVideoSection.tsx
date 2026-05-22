"use client";

import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const LOCAL_VIDEO_SRC = "/video/video.mp4";

const PANELS = [
  {
    title: "SCROLL TO DRIVE FRAMES",
    subtitle: "The video timeline reacts to your scroll position.",
  },
  {
    title: "HORIZONTAL STORY LAYER",
    subtitle: "Content moves side-to-side like a cinematic track.",
  },
  {
    title: "PINNED. SMOOTH. RESPONSIVE.",
    subtitle: "Built for desktop and mobile touch scrolling.",
  },
];

export function ScrollVideoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const targetTimeRef = useRef(0);
  const smoothTargetTimeRef = useRef(0);
  const previousProgressRef = useRef(0);
  const scrollDirectionRef = useRef<1 | -1>(1);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.45,
  });

  const horizontalX = useTransform(smoothProgress, [0, 1], ["0vw", "-200vw"]);

  useMotionValueEvent(smoothProgress, "change", (value) => {
    const delta = value - previousProgressRef.current;
    if (Math.abs(delta) > 0.0004) {
      scrollDirectionRef.current = delta < 0 ? -1 : 1;
    }
    previousProgressRef.current = value;

    if (!duration) {
      return;
    }
    targetTimeRef.current = value * duration;
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    video.load();

    const onLoadedMetadata = () => {
      setDuration(video.duration || 0);
      setIsReady(true);
      video.currentTime = 0.12;
      video.pause();
    };
    const onCanPlay = () => {
      setIsReady(true);
      if (video.currentTime < 0.08) {
        video.currentTime = 0.12;
      }
      video.pause();
    };
    const onError = () => {
      setHasVideoError(true);
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("error", onError);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("error", onError);
    };
  }, []);

  useEffect(() => {
    if (!duration) {
      return;
    }

    const video = videoRef.current;
    if (!video) {
      return;
    }

    let rafId = 0;
    const tick = () => {
      const current = video.currentTime;
      const target = targetTimeRef.current;
      smoothTargetTimeRef.current += (target - smoothTargetTimeRef.current) * 0.22;
      const smoothedTarget = smoothTargetTimeRef.current;
      const diff = smoothedTarget - current;
      const absDiff = Math.abs(diff);
      const isReverseScroll = scrollDirectionRef.current < 0;

      // Close enough: pause to keep frame stable.
      if (absDiff < 0.02) {
        if (!video.paused) {
          video.pause();
        }
      } else if (isReverseScroll) {
        // Force reverse movement on upward scroll.
        if (!video.paused) {
          video.pause();
        }
        const reverseTime = Math.max(0, Math.min(duration, smoothedTarget));
        if (Math.abs(reverseTime - current) > 0.002) {
          video.currentTime = reverseTime;
        }
      } else if (diff > 0.02) {
        // Forward movement: playback-rate chasing is smoother than repeated seeks.
        const rate = Math.min(3, Math.max(0.45, absDiff * 2.2));
        video.playbackRate = rate;
        if (video.paused) {
          const maybePromise = video.play();
          if (maybePromise) {
            playPromiseRef.current = maybePromise.catch(() => undefined);
          }
        }
      } else {
        // Backward movement: browsers generally can't play reverse smoothly, so seek.
        if (!video.paused) {
          video.pause();
        }
        const next = current + diff * 0.28;
        if (Math.abs(next - current) > 0.002) {
          video.currentTime = Math.max(0, Math.min(duration, next));
        }
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(rafId);
      video.pause();
      video.playbackRate = 1;
    };
  }, [duration]);

  return (
    <section ref={sectionRef} data-no-title-reveal className="relative h-[340vh] bg-[#0a0a0a] text-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(255,153,102,0.5),rgba(255,153,102,0.16)_28%,rgba(0,0,0,0.85)_70%)]" />

        <video
          ref={videoRef}
          className="relative z-[1] h-full w-full object-cover"
          src={LOCAL_VIDEO_SRC}
          muted
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
        />

        <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/8 via-transparent to-black/20" />

        {hasVideoError ? (
          <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center bg-black/65 px-6 text-center">
            <p className="text-sm uppercase tracking-[0.16em] text-white/90 md:text-base">Local video failed to load. Check /public/video/video.mp4.</p>
          </div>
        ) : null}

        <div className="pointer-events-none absolute inset-0 z-[3] flex items-center">
          <motion.div style={{ x: horizontalX }} className="flex h-full w-[300vw]">
            {PANELS.map((panel) => (
              <div key={panel.title} className="flex h-full w-screen items-center justify-center px-6 md:px-12">
                <div className="mx-auto max-w-5xl text-center">
                  <h2 className="text-[clamp(1.5rem,4.2vw,4.2rem)] uppercase tracking-[0.08em] text-white/95">{panel.title}</h2>
                  <p className="mt-4 text-[clamp(0.95rem,1.8vw,1.4rem)] text-white/78">{panel.subtitle}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-[8%] z-[4] px-6 text-center md:px-10">
          <p className="mx-auto max-w-4xl text-[clamp(0.82rem,1.35vw,1.05rem)] uppercase tracking-[0.14em] text-white/72">
            {hasVideoError ? "Unable to read local video file." : isReady ? "Keep scrolling to scrub video and advance horizontal sections." : "Loading local video..."}
          </p>
        </div>
      </div>
    </section>
  );
}
