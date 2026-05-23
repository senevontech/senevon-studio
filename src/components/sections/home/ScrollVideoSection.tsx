"use client";

import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { capabilities, featuredProjects, stats } from "@/lib/site-data";
import { useTheme } from "@/components/providers/ThemeProvider";

const LOCAL_VIDEO_SRC = "/video/video.mp4";
const INITIAL_VIDEO_TIME = 0.12;

function seekVideoToProgress(video: HTMLVideoElement, videoDuration: number, progress: number) {
  if (!Number.isFinite(videoDuration) || videoDuration <= 0) return;

  const clampedProgress = Math.max(0, Math.min(1, progress));
  const endTime = Math.max(0, videoDuration - 0.05);
  const startTime = Math.min(INITIAL_VIDEO_TIME, endTime);
  const targetTime = startTime + (endTime - startTime) * clampedProgress;

  video.pause();

  if (Math.abs(video.currentTime - targetTime) > 0.025) {
    video.currentTime = targetTime;
  }
}

const PROCESS_STEPS_EXTRA = [
  { step: "Discovery", desc: "Strategy & Audits" },
  { step: "Concept", desc: "Art & Prototypes" },
  { step: "Design", desc: "High-Fi Systems" },
  { step: "Development", desc: "UE5 & React Craft" },
  { step: "Testing", desc: "QA & Performance" },
  { step: "Launch", desc: "Live Ops & Deploy" },
];

export function ScrollVideoSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const pendingProgressRef = useRef(0);
  
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [activeProgress, setActiveProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    mass: 0.5,
  });

  const horizontalX = useTransform(smoothProgress, [0, 1], ["0vw", "-300vw"]);
  const svgProgress = useTransform(smoothProgress, [0.45, 0.75], [0, 1]);
  const progressWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(smoothProgress, "change", (value) => {
    setActiveProgress(value);
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    pendingProgressRef.current = value;
    if (!duration) return;

    const video = videoRef.current;
    if (!video) return;

    seekVideoToProgress(video, duration, value);
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.load();

    const onLoadedMetadata = () => {
      const videoDuration = video.duration || 0;
      pendingProgressRef.current = scrollYProgress.get();
      setDuration(videoDuration);
      setIsReady(true);
      seekVideoToProgress(video, videoDuration, pendingProgressRef.current);
    };
    const onCanPlay = () => {
      setIsReady(true);
      video.pause();
    };
    const onError = () => {
      setHasVideoError(true);
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("error", onError);

    return () => {
      video.pause();
      video.playbackRate = 1;
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("error", onError);
    };
  }, [scrollYProgress]);

  return (
    <section 
      ref={sectionRef} 
      data-no-title-reveal 
      className="relative h-[480vh] transition-colors duration-500"
      style={{ backgroundColor: isLight ? "#f6f1e9" : "#030303" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* All overlay spotlights and ambient gradients have been removed for full transparency as requested */}

        {/* Video is rendered fully opaque with zero overlays */}
        <video
          ref={videoRef}
          className="relative z-[1] h-full w-full object-cover transition-opacity duration-500 opacity-100"
          src={LOCAL_VIDEO_SRC}
          muted
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
        />

        {hasVideoError ? (
          <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center bg-black/80 px-6 text-center">
            <p className="text-sm uppercase tracking-[0.16em] text-orange-500 font-display">Local video failed to load. Check /public/video/video.mp4.</p>
          </div>
        ) : null}

        {/* Pinned horizontal slider container. pointer-events-none ensures scroll passes through to desktop window */}
        <div className="pointer-events-none absolute inset-0 z-[3] flex items-center">
          <motion.div style={{ x: horizontalX }} className="pointer-events-none flex h-full w-[400vw] items-center">
            
            {/* PANEL 1: WHAT WE DO (Capabilities Grid) */}
            <div className="flex h-full w-screen items-center justify-center px-4 sm:px-6 md:px-16">
              <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                <div className="lg:col-span-4 text-left space-y-2 md:space-y-4">
                  <span className="text-xs uppercase tracking-[0.24em] text-orange-600 dark:text-orange-500 font-semibold font-display">What We Do</span>
                  <h2 
                    className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-[0.95]"
                    style={{ color: isLight ? "#090909" : "#ffffff" }}
                  >
                    CREATIVE<br />ENGINEERING
                  </h2>
                  <p 
                    className="text-xs sm:text-sm md:text-base max-w-sm leading-relaxed"
                    style={{ color: isLight ? "rgba(9, 9, 9, 0.65)" : "rgba(255, 255, 255, 0.65)" }}
                  >
                    We bridge the boundary between interactive gaming systems, rich visual communication, and cinematic art direction.
                  </p>
                </div>
                <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                  {capabilities.map((item) => (
                    <div 
                      key={item.title} 
                      className="pointer-events-auto group relative flex flex-col justify-between rounded-2xl backdrop-blur-md p-3.5 md:p-5 transition-all duration-300 min-h-[110px] sm:min-h-[125px] md:min-h-[160px] border"
                      style={{ 
                        backgroundColor: isLight ? "rgba(0, 0, 0, 0.02)" : "rgba(255, 255, 255, 0.02)",
                        borderColor: isLight ? "rgba(9, 9, 9, 0.08)" : "rgba(255, 255, 255, 0.07)"
                      }}
                    >
                      <div className="space-y-0.5 md:space-y-1">
                        <h4 
                          className="text-xs sm:text-sm md:text-base font-display font-medium uppercase tracking-wider transition-colors group-hover:text-orange-500"
                          style={{ color: isLight ? "#090909" : "#ffffff" }}
                        >
                          {item.title}
                        </h4>
                        <p 
                          className="text-[9px] sm:text-xs leading-relaxed max-w-[210px]"
                          style={{ color: isLight ? "rgba(9, 9, 9, 0.55)" : "rgba(255, 255, 255, 0.55)" }}
                        >
                          {item.description}
                        </p>
                      </div>
                      <span className="self-end text-[8px] md:text-[10px] font-display uppercase tracking-widest px-2 md:px-2.5 py-0.5 md:py-1 rounded-full border font-semibold transition-all duration-300 text-orange-500 border-orange-500/20 bg-orange-500/10 group-hover:bg-orange-500/20">
                        {item.metric.split(" ")[0]} <span style={{ color: isLight ? "rgba(9, 9, 9, 0.5)" : "rgba(255, 255, 255, 0.6)" }}>{item.metric.split(" ").slice(1).join(" ")}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PANEL 2: FEATURED PROJECTS */}
            <div className="flex h-full w-screen items-center justify-center px-4 sm:px-6 md:px-16">
              <div className="mx-auto w-full max-w-7xl text-left space-y-4 md:space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 md:gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-[0.24em] text-orange-600 dark:text-orange-500 font-semibold font-display">Featured Projects</span>
                    <h2 
                      className="text-2xl sm:text-3xl md:text-5xl font-display font-medium leading-none mt-1 md:mt-2 uppercase"
                      style={{ color: isLight ? "#090909" : "#ffffff" }}
                    >
                      CINEMATIC REALMS
                    </h2>
                  </div>
                  <p 
                    className="text-xs sm:text-sm max-w-md leading-relaxed"
                    style={{ color: isLight ? "rgba(9, 9, 9, 0.6)" : "rgba(255, 255, 255, 0.55)" }}
                  >
                    A highly curated streamline of virtual environments, comprehensive brand architectures, and interactive digital products.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                  {featuredProjects.map((project) => (
                    <div 
                      key={project.title} 
                      className="pointer-events-auto group relative flex flex-col justify-end overflow-hidden rounded-2xl transition-all duration-500 h-[22vh] sm:h-[28vh] md:h-[48vh] p-4 md:p-6 border"
                      style={{
                        borderColor: isLight ? "rgba(9, 9, 9, 0.08)" : "rgba(255, 255, 255, 0.08)",
                        backgroundColor: isLight ? "rgba(0, 0, 0, 0.01)" : "rgba(255, 255, 255, 0.01)"
                      }}
                    >
                      {/* Interactive visual background image */}
                      <div className="absolute inset-0 -z-10 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className={`object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out ${
                            isLight
                              ? "brightness-[0.8] group-hover:brightness-[0.95]"
                              : "brightness-[0.7] group-hover:brightness-[0.8]"
                          }`}
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                        <div 
                          className="absolute inset-0 transition-all duration-500" 
                          style={{
                            background: isLight 
                              ? "linear-gradient(to top, rgba(246,241,233,0.85) 0%, rgba(246,241,233,0.5) 40%, transparent 100%)" 
                              : "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)"
                          }}
                        />
                      </div>

                      <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 font-semibold font-display mb-0.5 md:mb-1">{project.category}</span>
                      <h3 
                        className="text-base sm:text-lg md:text-2xl font-display font-medium mb-1 md:mb-2 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ color: isLight ? "#090909" : "#ffffff" }}
                      >
                        {project.title}
                      </h3>
                      <p 
                        className="text-[10px] md:text-xs mb-2 md:mb-4 line-clamp-1 md:line-clamp-2 max-w-sm leading-relaxed"
                        style={{ color: isLight ? "rgba(9, 9, 9, 0.7)" : "rgba(255, 255, 255, 0.7)" }}
                      >
                        {project.description}
                      </p>
                      
                      <div 
                        className="hidden sm:flex flex-wrap gap-2 pt-2 border-t"
                        style={{ borderColor: isLight ? "rgba(9, 9, 9, 0.1)" : "rgba(255, 255, 255, 0.1)" }}
                      >
                        {project.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-2 py-0.5 rounded-full border text-[9px] tracking-wider font-medium"
                            style={{
                              borderColor: isLight ? "rgba(9, 9, 9, 0.08)" : "rgba(255, 255, 255, 0.08)",
                              backgroundColor: isLight ? "rgba(9, 9, 9, 0.02)" : "rgba(255, 255, 255, 0.02)",
                              color: isLight ? "rgba(9, 9, 9, 0.6)" : "rgba(255, 255, 255, 0.6)"
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PANEL 3: DISCIPLINED PROCESS (Animated SVG Path) */}
            <div className="flex h-full w-screen items-center justify-center px-4 sm:px-6 md:px-16">
              <div className="mx-auto w-full max-w-5xl text-center space-y-6 md:space-y-12">
                <div className="space-y-1 md:space-y-3">
                  <span className="text-xs uppercase tracking-[0.24em] text-orange-600 dark:text-orange-500 font-semibold font-display">Disciplined Pipeline</span>
                  <h2 
                    className="text-2xl sm:text-3xl md:text-5xl font-display font-medium leading-none uppercase"
                    style={{ color: isLight ? "#090909" : "#ffffff" }}
                  >
                    OUR PROCESS
                  </h2>
                  <p 
                    className="text-xs sm:text-sm md:text-base max-w-md mx-auto leading-relaxed"
                    style={{ color: isLight ? "rgba(9, 9, 9, 0.6)" : "rgba(255, 255, 255, 0.6)" }}
                  >
                    A robust structural pipeline that aligns strategy, identity, and complex technical production.
                  </p>
                </div>

                {/* Animated Horizontal SVG Timeline */}
                <div className="relative py-2 md:py-4">
                  <svg className="w-full h-8 md:h-12 max-w-4xl mx-auto overflow-visible relative z-10" viewBox="0 0 1000 60">
                    <defs>
                      <linearGradient id="svg-timeline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ff6a00" stopOpacity="0.4" />
                        <stop offset="50%" stopColor="#ff9b62" stopOpacity="1" />
                        <stop offset="100%" stopColor="#ffc38f" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    {/* Underlying Track */}
                    <line 
                      x1="50" y1="30" x2="950" y2="30" 
                      stroke={isLight ? "rgba(9,9,9,0.06)" : "rgba(255,255,255,0.06)"} 
                      strokeWidth="3" strokeDasharray="8 6" strokeLinecap="round" 
                    />
                    {/* Animated Glow-bound Stroke */}
                    <motion.line 
                      x1="50" y1="30" x2="950" y2="30" 
                      stroke="url(#svg-timeline-grad)" 
                      strokeWidth="3.5" 
                      strokeLinecap="round"
                      style={{ pathLength: svgProgress }}
                    />
                  </svg>

                  {/* Horizontal steps columns overlay */}
                  <div className="grid grid-cols-6 gap-1 md:gap-2 pt-4 md:pt-6 max-w-4xl mx-auto">
                    {PROCESS_STEPS_EXTRA.map((item, index) => {
                      const activationThresholds = [0.45, 0.50, 0.56, 0.62, 0.68, 0.74];
                      const isActive = activeProgress >= activationThresholds[index];
                      
                      return (
                        <div key={item.step} className="flex flex-col items-center space-y-1.5 md:space-y-3 relative pointer-events-auto">
                          {/* Circle Dot Anchor */}
                          <div className="absolute -top-[40px] md:-top-[52px] z-20 flex items-center justify-center">
                            <div className={`rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                              isActive 
                                ? "bg-orange-500 border-orange-400 shadow-[0_0_12px_rgba(255,106,0,0.8)] scale-110" 
                                : `${isLight ? "bg-[#f6f1e9] border-black/25" : "bg-[#0c0c0c] border-white/20"}`
                            } w-3.5 h-3.5 md:w-5 md:h-5`}>
                              {isActive && <div className="rounded-full bg-white animate-pulse w-1 h-1 md:w-1.5 md:h-1.5" />}
                            </div>
                          </div>

                          <div className={`space-y-0.5 md:space-y-1 transition-all duration-500 ${isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"}`}>
                            <span 
                              className="text-[8px] md:text-[10px] font-display tracking-widest uppercase font-semibold"
                              style={{ color: isActive ? "#ea580c" : (isLight ? "rgba(9, 9, 9, 0.4)" : "rgba(255, 255, 255, 0.4)") }}
                            >
                              0{index + 1}
                            </span>
                            <h4 
                              className="text-[9px] sm:text-xs md:text-sm font-display font-medium uppercase tracking-wider"
                              style={{ color: isLight ? "#090909" : "#ffffff" }}
                            >
                              {item.step}
                            </h4>
                            <p 
                              className="text-[8px] md:text-[10px] max-w-[120px] mx-auto leading-relaxed"
                              style={{ color: isLight ? "rgba(9, 9, 9, 0.5)" : "rgba(255, 255, 255, 0.5)" }}
                            >
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* PANEL 4: STATS ACHIEVEMENTS */}
            <div className="flex h-full w-screen items-center justify-center px-4 sm:px-6 md:px-16">
              <div className="mx-auto w-full max-w-7xl text-center space-y-6 md:space-y-12">
                <div className="space-y-1 md:space-y-3">
                  <span className="text-xs uppercase tracking-[0.24em] text-orange-600 dark:text-orange-500 font-semibold font-display">Proven Discipline</span>
                  <h2 
                    className="text-2xl sm:text-3xl md:text-5xl font-display font-medium leading-none uppercase"
                    style={{ color: isLight ? "#090909" : "#ffffff" }}
                  >
                    THE METRICS
                  </h2>
                  <p 
                    className="text-xs sm:text-sm md:text-base max-w-md mx-auto leading-relaxed"
                    style={{ color: isLight ? "rgba(9, 9, 9, 0.6)" : "rgba(255, 255, 255, 0.6)" }}
                  >
                    A testament of consistent execution and global impact over nearly a decade.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
                  {stats.map((item, index) => {
                    const descriptions = [
                      "Cinematic products, games, and systems delivered globally.",
                      "International honors for creative direction and interactive craft.",
                      "Active partnerships spanning 4 continents and major creative hubs.",
                      "Years spent disrupting conventions and refining creative technology."
                    ];
                    return (
                      <div 
                        key={item.label} 
                        className="pointer-events-auto group relative flex flex-col justify-center items-center text-center p-4 md:p-8 backdrop-blur-md rounded-2xl h-[18vh] sm:h-[22vh] md:h-[38vh] overflow-hidden transition-all duration-300 border"
                        style={{ 
                          backgroundColor: isLight ? "rgba(0, 0, 0, 0.02)" : "rgba(255, 255, 255, 0.02)",
                          borderColor: isLight ? "rgba(9, 9, 9, 0.08)" : "rgba(255, 255, 255, 0.07)"
                        }}
                      >
                        {/* Immersive radial glow background */}
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.04)_0%,transparent_60%)] group-hover:scale-110 transition-transform duration-500" />
                        
                        <span 
                          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold group-hover:scale-105 transition-transform duration-300 leading-none"
                          style={{ color: isLight ? "#ea580c" : "#ff9f60" }}
                        >
                          {item.value}
                        </span>
                        
                        <h4 
                          className="mt-2 md:mt-4 text-[9px] md:text-xs font-display uppercase tracking-[0.2em] font-semibold"
                          style={{ color: isLight ? "#ea580c" : "#ff9f60" }}
                        >
                          {item.label}
                        </h4>
                        
                        <p 
                          className="mt-1 md:mt-3 text-[9px] md:text-xs max-w-[200px] leading-relaxed"
                          style={{ color: isLight ? "rgba(9, 9, 9, 0.55)" : "rgba(255, 255, 255, 0.55)" }}
                        >
                          {descriptions[index]}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Dynamic status/scroll indicators */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[6%] z-[4] px-6 text-center md:px-10 flex flex-col items-center gap-2">
          <p 
            className="text-[clamp(0.75rem,1.2vw,0.95rem)] uppercase tracking-[0.16em] font-display"
            style={{ color: isLight ? "rgba(9, 9, 9, 0.6)" : "rgba(255, 255, 255, 0.5)" }}
          >
            {hasVideoError 
              ? "Unable to read local video file." 
              : isReady 
                ? "Scroll down to scrub the story & trace the pipeline" 
                : "Initializing atmospheric timeline..."
            }
          </p>
          
          {/* Pulsing indicator line */}
          <div className={`w-16 h-[2px] overflow-hidden rounded-full mt-1 ${isLight ? "bg-black/10" : "bg-white/10"}`}>
            <motion.div 
              className="h-full bg-orange-500"
              style={{ width: progressWidth }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
