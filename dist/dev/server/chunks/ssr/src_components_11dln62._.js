module.exports = [
"[project]/src/components/layout/PageTransition.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageTransition",
    ()=>PageTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function PageTransition({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].main, {
        initial: {
            opacity: 0,
            y: 18
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.7,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: "relative",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/layout/PageTransition.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/home/HeroReferenceSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroReferenceSection",
    ()=>HeroReferenceSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/providers/ThemeProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const LOADING_COMPLETE_EVENT = "snv:loading-complete";
const revealEase = [
    0.22,
    1,
    0.36,
    1
];
const textStack = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.12
        }
    }
};
const textItem = {
    hidden: {
        opacity: 0,
        y: 28,
        filter: "blur(6px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.82,
            ease: revealEase
        }
    }
};
function HeroReferenceSection() {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const oLetterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [readyToReveal, setReadyToReveal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if (typeof document === "undefined") {
            return false;
        }
        return document.documentElement.dataset.loadingComplete === "true";
    });
    const [rippleGeometry, setRippleGeometry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const heroBgImage = theme === "light" ? "/bg/hero-bg-light.png" : "/bg/hero-bg-dark.png";
    const isLight = theme === "light";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (readyToReveal) {
            return;
        }
        const onComplete = ()=>setReadyToReveal(true);
        window.addEventListener(LOADING_COMPLETE_EVENT, onComplete);
        const fallbackTimer = window.setTimeout(()=>setReadyToReveal(true), 2200);
        return ()=>{
            window.removeEventListener(LOADING_COMPLETE_EVENT, onComplete);
            window.clearTimeout(fallbackTimer);
        };
    }, [
        readyToReveal
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateRippleGeometry = ()=>{
            if (!sectionRef.current || !oLetterRef.current) {
                return;
            }
            const sectionRect = sectionRef.current.getBoundingClientRect();
            const letterRect = oLetterRef.current.getBoundingClientRect();
            const x = letterRect.left + letterRect.width / 2 - sectionRect.left;
            const y = letterRect.top + letterRect.height / 2 - sectionRect.top;
            const maxRadius = Math.max(Math.hypot(x, y), Math.hypot(sectionRect.width - x, y), Math.hypot(x, sectionRect.height - y), Math.hypot(sectionRect.width - x, sectionRect.height - y));
            setRippleGeometry({
                x,
                y,
                diameter: maxRadius * 2
            });
        };
        const rafId = window.requestAnimationFrame(updateRippleGeometry);
        const onResize = ()=>window.requestAnimationFrame(updateRippleGeometry);
        window.addEventListener("resize", onResize);
        return ()=>{
            window.cancelAnimationFrame(rafId);
            window.removeEventListener("resize", onResize);
        };
    }, [
        readyToReveal
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        "data-no-title-reveal": true,
        className: "relative min-h-screen overflow-hidden",
        style: {
            backgroundColor: isLight ? "#fbfaf9" : "#000000"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-1/2 h-[150vmax] w-[150vmax] -translate-x-1/2 -translate-y-[55%] select-none object-contain blur-[88px] sm:h-[132vmax] sm:w-[132vmax] md:h-[116vmax] md:w-[116vmax]",
                        style: {
                            opacity: isLight ? 0.92 : 0.88,
                            filter: isLight ? "blur(88px) saturate(1.1)" : "blur(92px) saturate(1.08)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: heroBgImage,
                            alt: "",
                            "aria-hidden": true,
                            fill: true,
                            priority: true,
                            sizes: "100vw",
                            className: "object-contain"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/home/HeroReferenceSection.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/home/HeroReferenceSection.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-10",
                        style: {
                            background: isLight ? "radial-gradient(ellipse at 50% 40%, rgba(246,132,66,0.72) 0%, rgba(255,191,151,0.56) 24%, rgba(255,245,239,0.9) 54%, #ffffff 84%)" : "radial-gradient(ellipse at 50% 38%, rgba(196,131,94,0.8) 0%, rgba(138,56,0,0.9) 31%, rgba(30,12,3,0.94) 61%, #000000 88%)",
                            backdropFilter: "blur(34px) saturate(1.15)",
                            WebkitBackdropFilter: "blur(34px) saturate(1.15)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/home/HeroReferenceSection.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/home/HeroReferenceSection.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            readyToReveal && rippleGeometry ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "pointer-events-none absolute inset-0 z-[15]",
                width: "100%",
                height: "100%",
                "aria-hidden": true,
                children: [
                    0,
                    3
                ].map((delay, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                        cx: rippleGeometry.x,
                        cy: rippleGeometry.y,
                        fill: "none",
                        stroke: isLight ? "rgba(170,58,0,0.9)" : "rgba(255,185,130,0.72)",
                        strokeWidth: 2,
                        initial: {
                            r: 2,
                            opacity: 0.85
                        },
                        animate: {
                            r: rippleGeometry.diameter / 2,
                            opacity: 0
                        },
                        transition: {
                            duration: 5,
                            ease: [
                                0.22,
                                0.05,
                                0.36,
                                1
                            ],
                            delay,
                            repeat: Infinity,
                            repeatDelay: 1
                        }
                    }, `ripple-${i}-${theme}`, false, {
                        fileName: "[project]/src/components/sections/home/HeroReferenceSection.tsx",
                        lineNumber: 139,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/home/HeroReferenceSection.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative z-20 flex min-h-screen flex-col items-center justify-center px-5 text-center",
                variants: textStack,
                initial: "hidden",
                animate: readyToReveal ? "visible" : "hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                        variants: textItem,
                        className: "font-display font-medium uppercase leading-[0.86]",
                        style: {
                            color: isLight ? "#000000" : "#ffffff",
                            fontSize: "clamp(3.3rem, 13.2vw, 16.4rem)",
                            letterSpacing: "0"
                        },
                        children: [
                            "SENEV",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: oLetterRef,
                                className: "inline-block",
                                children: "O"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/home/HeroReferenceSection.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            "N"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/home/HeroReferenceSection.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        variants: textItem,
                        className: "mt-1 font-display uppercase leading-none md:mt-2",
                        style: {
                            color: isLight ? "#000000" : "#ffffff",
                            fontSize: "clamp(2.25rem, 6vw, 6.1rem)",
                            letterSpacing: "0"
                        },
                        children: "STUDIO"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/home/HeroReferenceSection.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        variants: textItem,
                        className: "mt-4 max-w-[92vw] leading-[1.05] md:mt-6",
                        style: {
                            color: isLight ? "#000000" : "#ffffff",
                            fontSize: "clamp(1.15rem, 2.2vw, 2.9rem)",
                            letterSpacing: "0"
                        },
                        children: "A studio that defines your presence"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/home/HeroReferenceSection.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/home/HeroReferenceSection.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/home/HeroReferenceSection.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/home/ScrollVideoSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollVideoSection",
    ()=>ScrollVideoSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/providers/ThemeProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const LOCAL_VIDEO_SRC = "/video/video.mp4";
const INITIAL_VIDEO_TIME = 0.12;
function seekVideoToProgress(video, videoDuration, progress) {
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
    {
        step: "Discovery",
        desc: "Strategy & Audits"
    },
    {
        step: "Concept",
        desc: "Art & Prototypes"
    },
    {
        step: "Design",
        desc: "High-Fi Systems"
    },
    {
        step: "Development",
        desc: "UE5 & React Craft"
    },
    {
        step: "Testing",
        desc: "QA & Performance"
    },
    {
        step: "Launch",
        desc: "Live Ops & Deploy"
    }
];
function ScrollVideoSection() {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const isLight = theme === "light";
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasVideoError, setHasVideoError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeProgress, setActiveProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: sectionRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    const smoothProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 110,
        damping: 30,
        mass: 0.5
    });
    const horizontalX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
        0,
        1
    ], [
        "0vw",
        "-300vw"
    ]);
    const svgProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
        0.45,
        0.75
    ], [
        0,
        1
    ]);
    const progressWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
        0,
        1
    ], [
        "0%",
        "100%"
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(smoothProgress, "change", (value)=>{
        setActiveProgress(value);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollYProgress, "change", (value)=>{
        pendingProgressRef.current = value;
        if (!duration) return;
        const video = videoRef.current;
        if (!video) return;
        seekVideoToProgress(video, duration, value);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const video = videoRef.current;
        if (!video) return;
        video.muted = true;
        video.load();
        const onLoadedMetadata = ()=>{
            const videoDuration = video.duration || 0;
            pendingProgressRef.current = scrollYProgress.get();
            setDuration(videoDuration);
            setIsReady(true);
            seekVideoToProgress(video, videoDuration, pendingProgressRef.current);
        };
        const onCanPlay = ()=>{
            setIsReady(true);
            video.pause();
        };
        const onError = ()=>{
            setHasVideoError(true);
        };
        video.addEventListener("loadedmetadata", onLoadedMetadata);
        video.addEventListener("canplay", onCanPlay);
        video.addEventListener("error", onError);
        return ()=>{
            video.pause();
            video.playbackRate = 1;
            video.removeEventListener("loadedmetadata", onLoadedMetadata);
            video.removeEventListener("canplay", onCanPlay);
            video.removeEventListener("error", onError);
        };
    }, [
        scrollYProgress
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        "data-no-title-reveal": true,
        className: "relative h-[480vh] transition-colors duration-500",
        style: {
            backgroundColor: isLight ? "#f6f1e9" : "#030303"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 h-screen overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    ref: videoRef,
                    className: "relative z-[1] h-full w-full object-cover transition-opacity duration-500 opacity-100",
                    src: LOCAL_VIDEO_SRC,
                    muted: true,
                    playsInline: true,
                    preload: "auto",
                    controls: false,
                    disablePictureInPicture: true
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this),
                hasVideoError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute inset-0 z-10 grid place-items-center bg-black/80 px-6 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm uppercase tracking-[0.16em] text-orange-500 font-display",
                        children: "Local video failed to load. Check /public/video/video.mp4."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                        lineNumber: 136,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                    lineNumber: 135,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute inset-0 z-[3] flex items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            x: horizontalX
                        },
                        className: "pointer-events-none flex h-full w-[400vw] items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full w-screen items-center justify-center px-4 sm:px-6 md:px-16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-4 text-left space-y-2 md:space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs uppercase tracking-[0.24em] text-orange-600 dark:text-orange-500 font-semibold font-display",
                                                    children: "What We Do"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-[0.95]",
                                                    style: {
                                                        color: isLight ? "#090909" : "#ffffff"
                                                    },
                                                    children: [
                                                        "CREATIVE",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 29
                                                        }, this),
                                                        "ENGINEERING"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs sm:text-sm md:text-base max-w-sm leading-relaxed",
                                                    style: {
                                                        color: isLight ? "rgba(9, 9, 9, 0.65)" : "rgba(255, 255, 255, 0.65)"
                                                    },
                                                    children: "We bridge the boundary between interactive gaming systems, rich visual communication, and cinematic art direction."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["capabilities"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pointer-events-auto group relative flex flex-col justify-between rounded-2xl backdrop-blur-md p-3.5 md:p-5 transition-all duration-300 min-h-[110px] sm:min-h-[125px] md:min-h-[160px] border",
                                                    style: {
                                                        backgroundColor: isLight ? "rgba(0, 0, 0, 0.02)" : "rgba(255, 255, 255, 0.02)",
                                                        borderColor: isLight ? "rgba(9, 9, 9, 0.08)" : "rgba(255, 255, 255, 0.07)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-0.5 md:space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-xs sm:text-sm md:text-base font-display font-medium uppercase tracking-wider transition-colors group-hover:text-orange-500",
                                                                    style: {
                                                                        color: isLight ? "#090909" : "#ffffff"
                                                                    },
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[9px] sm:text-xs leading-relaxed max-w-[210px]",
                                                                    style: {
                                                                        color: isLight ? "rgba(9, 9, 9, 0.55)" : "rgba(255, 255, 255, 0.55)"
                                                                    },
                                                                    children: item.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                                    lineNumber: 179,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "self-end text-[8px] md:text-[10px] font-display uppercase tracking-widest px-2 md:px-2.5 py-0.5 md:py-1 rounded-full border font-semibold transition-all duration-300 text-orange-500 border-orange-500/20 bg-orange-500/10 group-hover:bg-orange-500/20",
                                                            children: [
                                                                item.metric.split(" ")[0],
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: isLight ? "rgba(9, 9, 9, 0.5)" : "rgba(255, 255, 255, 0.6)"
                                                                    },
                                                                    children: item.metric.split(" ").slice(1).join(" ")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                                    lineNumber: 187,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, item.title, true, {
                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full w-screen items-center justify-center px-4 sm:px-6 md:px-16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto w-full max-w-7xl text-left space-y-4 md:space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col md:flex-row md:items-end justify-between gap-2 md:gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs uppercase tracking-[0.24em] text-orange-600 dark:text-orange-500 font-semibold font-display",
                                                            children: "Featured Projects"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl sm:text-3xl md:text-5xl font-display font-medium leading-none mt-1 md:mt-2 uppercase",
                                                            style: {
                                                                color: isLight ? "#090909" : "#ffffff"
                                                            },
                                                            children: "CINEMATIC REALMS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs sm:text-sm max-w-md leading-relaxed",
                                                    style: {
                                                        color: isLight ? "rgba(9, 9, 9, 0.6)" : "rgba(255, 255, 255, 0.55)"
                                                    },
                                                    children: "A highly curated streamline of virtual environments, comprehensive brand architectures, and interactive digital products."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["featuredProjects"].map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pointer-events-auto group relative flex flex-col justify-end overflow-hidden rounded-2xl transition-all duration-500 h-[22vh] sm:h-[28vh] md:h-[48vh] p-4 md:p-6 border",
                                                    style: {
                                                        borderColor: isLight ? "rgba(9, 9, 9, 0.08)" : "rgba(255, 255, 255, 0.08)",
                                                        backgroundColor: isLight ? "rgba(0, 0, 0, 0.01)" : "rgba(255, 255, 255, 0.01)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 -z-10 overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: project.image,
                                                                    alt: project.title,
                                                                    fill: true,
                                                                    className: `object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out ${isLight ? "brightness-[0.8] group-hover:brightness-[0.95]" : "brightness-[0.7] group-hover:brightness-[0.8]"}`,
                                                                    sizes: "(max-width: 768px) 100vw, 400px"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 transition-all duration-500",
                                                                    style: {
                                                                        background: isLight ? "linear-gradient(to top, rgba(246,241,233,0.85) 0%, rgba(246,241,233,0.5) 40%, transparent 100%)" : "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 font-semibold font-display mb-0.5 md:mb-1",
                                                            children: project.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-base sm:text-lg md:text-2xl font-display font-medium mb-1 md:mb-2 group-hover:translate-x-1 transition-transform duration-300",
                                                            style: {
                                                                color: isLight ? "#090909" : "#ffffff"
                                                            },
                                                            children: project.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] md:text-xs mb-2 md:mb-4 line-clamp-1 md:line-clamp-2 max-w-sm leading-relaxed",
                                                            style: {
                                                                color: isLight ? "rgba(9, 9, 9, 0.7)" : "rgba(255, 255, 255, 0.7)"
                                                            },
                                                            children: project.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "hidden sm:flex flex-wrap gap-2 pt-2 border-t",
                                                            style: {
                                                                borderColor: isLight ? "rgba(9, 9, 9, 0.1)" : "rgba(255, 255, 255, 0.1)"
                                                            },
                                                            children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 py-0.5 rounded-full border text-[9px] tracking-wider font-medium",
                                                                    style: {
                                                                        borderColor: isLight ? "rgba(9, 9, 9, 0.08)" : "rgba(255, 255, 255, 0.08)",
                                                                        backgroundColor: isLight ? "rgba(9, 9, 9, 0.02)" : "rgba(255, 255, 255, 0.02)",
                                                                        color: isLight ? "rgba(9, 9, 9, 0.6)" : "rgba(255, 255, 255, 0.6)"
                                                                    },
                                                                    children: tag
                                                                }, tag, false, {
                                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                                    lineNumber: 268,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, project.title, true, {
                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full w-screen items-center justify-center px-4 sm:px-6 md:px-16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto w-full max-w-5xl text-center space-y-6 md:space-y-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1 md:space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs uppercase tracking-[0.24em] text-orange-600 dark:text-orange-500 font-semibold font-display",
                                                    children: "Disciplined Pipeline"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl sm:text-3xl md:text-5xl font-display font-medium leading-none uppercase",
                                                    style: {
                                                        color: isLight ? "#090909" : "#ffffff"
                                                    },
                                                    children: "OUR PROCESS"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs sm:text-sm md:text-base max-w-md mx-auto leading-relaxed",
                                                    style: {
                                                        color: isLight ? "rgba(9, 9, 9, 0.6)" : "rgba(255, 255, 255, 0.6)"
                                                    },
                                                    children: "A robust structural pipeline that aligns strategy, identity, and complex technical production."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative py-2 md:py-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-full h-8 md:h-12 max-w-4xl mx-auto overflow-visible relative z-10",
                                                    viewBox: "0 0 1000 60",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                id: "svg-timeline-grad",
                                                                x1: "0%",
                                                                y1: "0%",
                                                                x2: "100%",
                                                                y2: "0%",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "0%",
                                                                        stopColor: "#ff6a00",
                                                                        stopOpacity: "0.4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                                        lineNumber: 311,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "50%",
                                                                        stopColor: "#ff9b62",
                                                                        stopOpacity: "1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                                        lineNumber: 312,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "100%",
                                                                        stopColor: "#ffc38f",
                                                                        stopOpacity: "1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                                        lineNumber: 313,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "50",
                                                            y1: "30",
                                                            x2: "950",
                                                            y2: "30",
                                                            stroke: isLight ? "rgba(9,9,9,0.06)" : "rgba(255,255,255,0.06)",
                                                            strokeWidth: "3",
                                                            strokeDasharray: "8 6",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].line, {
                                                            x1: "50",
                                                            y1: "30",
                                                            x2: "950",
                                                            y2: "30",
                                                            stroke: "url(#svg-timeline-grad)",
                                                            strokeWidth: "3.5",
                                                            strokeLinecap: "round",
                                                            style: {
                                                                pathLength: svgProgress
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-6 gap-1 md:gap-2 pt-4 md:pt-6 max-w-4xl mx-auto",
                                                    children: PROCESS_STEPS_EXTRA.map((item, index)=>{
                                                        const activationThresholds = [
                                                            0.45,
                                                            0.50,
                                                            0.56,
                                                            0.62,
                                                            0.68,
                                                            0.74
                                                        ];
                                                        const isActive = activeProgress >= activationThresholds[index];
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center space-y-1.5 md:space-y-3 relative pointer-events-auto",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute -top-[40px] md:-top-[52px] z-20 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `rounded-full border-2 transition-all duration-500 flex items-center justify-center ${isActive ? "bg-orange-500 border-orange-400 shadow-[0_0_12px_rgba(255,106,0,0.8)] scale-110" : `${isLight ? "bg-[#f6f1e9] border-black/25" : "bg-[#0c0c0c] border-white/20"}`} w-3.5 h-3.5 md:w-5 md:h-5`,
                                                                        children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "rounded-full bg-white animate-pulse w-1 h-1 md:w-1.5 md:h-1.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                                            lineNumber: 347,
                                                                            columnNumber: 44
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                                        lineNumber: 342,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                                    lineNumber: 341,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `space-y-0.5 md:space-y-1 transition-all duration-500 ${isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[8px] md:text-[10px] font-display tracking-widest uppercase font-semibold",
                                                                            style: {
                                                                                color: isActive ? "#ea580c" : isLight ? "rgba(9, 9, 9, 0.4)" : "rgba(255, 255, 255, 0.4)"
                                                                            },
                                                                            children: [
                                                                                "0",
                                                                                index + 1
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                                            lineNumber: 352,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "text-[9px] sm:text-xs md:text-sm font-display font-medium uppercase tracking-wider",
                                                                            style: {
                                                                                color: isLight ? "#090909" : "#ffffff"
                                                                            },
                                                                            children: item.step
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                                            lineNumber: 358,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[8px] md:text-[10px] max-w-[120px] mx-auto leading-relaxed",
                                                                            style: {
                                                                                color: isLight ? "rgba(9, 9, 9, 0.5)" : "rgba(255, 255, 255, 0.5)"
                                                                            },
                                                                            children: item.desc
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                                            lineNumber: 364,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, item.step, true, {
                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 25
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full w-screen items-center justify-center px-4 sm:px-6 md:px-16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto w-full max-w-7xl text-center space-y-6 md:space-y-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1 md:space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs uppercase tracking-[0.24em] text-orange-600 dark:text-orange-500 font-semibold font-display",
                                                    children: "Proven Discipline"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl sm:text-3xl md:text-5xl font-display font-medium leading-none uppercase",
                                                    style: {
                                                        color: isLight ? "#090909" : "#ffffff"
                                                    },
                                                    children: "THE METRICS"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs sm:text-sm md:text-base max-w-md mx-auto leading-relaxed",
                                                    style: {
                                                        color: isLight ? "rgba(9, 9, 9, 0.6)" : "rgba(255, 255, 255, 0.6)"
                                                    },
                                                    children: "A testament of consistent execution and global impact over nearly a decade."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                            lineNumber: 382,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stats"].map((item, index)=>{
                                                const descriptions = [
                                                    "Cinematic products, games, and systems delivered globally.",
                                                    "International honors for creative direction and interactive craft.",
                                                    "Active partnerships spanning 4 continents and major creative hubs.",
                                                    "Years spent disrupting conventions and refining creative technology."
                                                ];
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pointer-events-auto group relative flex flex-col justify-center items-center text-center p-4 md:p-8 backdrop-blur-md rounded-2xl h-[18vh] sm:h-[22vh] md:h-[38vh] overflow-hidden transition-all duration-300 border",
                                                    style: {
                                                        backgroundColor: isLight ? "rgba(0, 0, 0, 0.02)" : "rgba(255, 255, 255, 0.02)",
                                                        borderColor: isLight ? "rgba(9, 9, 9, 0.08)" : "rgba(255, 255, 255, 0.07)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.04)_0%,transparent_60%)] group-hover:scale-110 transition-transform duration-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold group-hover:scale-105 transition-transform duration-300 leading-none",
                                                            style: {
                                                                color: isLight ? "#ea580c" : "#ff9f60"
                                                            },
                                                            children: item.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                            lineNumber: 418,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "mt-2 md:mt-4 text-[9px] md:text-xs font-display uppercase tracking-[0.2em] font-semibold",
                                                            style: {
                                                                color: isLight ? "#ea580c" : "#ff9f60"
                                                            },
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 md:mt-3 text-[9px] md:text-xs max-w-[200px] leading-relaxed",
                                                            style: {
                                                                color: isLight ? "rgba(9, 9, 9, 0.55)" : "rgba(255, 255, 255, 0.55)"
                                                            },
                                                            children: descriptions[index]
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, item.label, true, {
                                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                            lineNumber: 398,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                    lineNumber: 381,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                lineNumber: 380,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute inset-x-0 bottom-[6%] z-[4] px-6 text-center md:px-10 flex flex-col items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[clamp(0.75rem,1.2vw,0.95rem)] uppercase tracking-[0.16em] font-display",
                            style: {
                                color: isLight ? "rgba(9, 9, 9, 0.6)" : "rgba(255, 255, 255, 0.5)"
                            },
                            children: hasVideoError ? "Unable to read local video file." : isReady ? "Scroll down to scrub the story & trace the pipeline" : "Initializing atmospheric timeline..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                            lineNumber: 450,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-16 h-[2px] overflow-hidden rounded-full mt-1 ${isLight ? "bg-black/10" : "bg-white/10"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "h-full bg-orange-500",
                                style: {
                                    width: progressWidth
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                                lineNumber: 464,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                            lineNumber: 463,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
                    lineNumber: 449,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/home/ScrollVideoSection.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/home/HomeFooter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeFooter",
    ()=>HomeFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/providers/ThemeProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function HomeFooter() {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const isLight = theme === "light";
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: `relative transition-colors duration-500 pb-12 pt-20 overflow-hidden border-t ${isLight ? "border-black/8 text-black" : "border-white/8 text-white"}`,
        style: {
            backgroundColor: isLight ? "#f6f1e9" : "#050505"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full blur-[120px] transition-colors duration-500 ${isLight ? "bg-orange-500/5" : "bg-orange-600/10"}`
            }, void 0, false, {
                fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-6 md:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-16 lg:grid-cols-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 lg:col-span-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "inline-block group",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `font-display text-3xl md:text-4xl tracking-wide uppercase transition-colors ${isLight ? "group-hover:text-orange-600" : "group-hover:text-orange-400"}`,
                                            children: [
                                                "SENEVON",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-orange-500",
                                                    children: "."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 24
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `max-w-md text-sm md:text-base leading-relaxed ${isLight ? "text-black/60" : "text-white/60"}`,
                                        children: "Kinetic creative systems engineering next-gen game worlds, immersive UI/UX systems, and title-grade motion graphics. We define presence."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `block text-xs uppercase tracking-wider mb-2 ${isLight ? "text-black/40" : "text-white/40"}`,
                                                children: "Collaboration Request"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                                lineNumber: 42,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:hello@snvstudio.com",
                                                className: `relative inline-block text-lg md:text-xl font-medium transition-colors group ${isLight ? "text-orange-600 hover:text-orange-700" : "text-orange-400 hover:text-orange-300"}`,
                                                children: [
                                                    "hello@snvstudio.com",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute bottom-0 left-0 w-full h-[1px] bg-orange-500 scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-left"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right ${isLight ? "bg-orange-700" : "bg-orange-300"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                                lineNumber: 43,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-8 lg:col-span-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `mb-4 text-xs uppercase tracking-[0.24em] font-semibold ${isLight ? "text-black/40" : "text-white/40"}`,
                                                children: "Navigation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `space-y-3 text-sm ${isLight ? "text-black/70" : "text-white/70"}`,
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.href,
                                                        className: `block transition-colors hover:translate-x-1 duration-200 transform ${isLight ? "hover:text-orange-600" : "hover:text-orange-400"}`,
                                                        children: item.label
                                                    }, item.href, false, {
                                                        fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `mb-4 text-xs uppercase tracking-[0.24em] font-semibold ${isLight ? "text-black/40" : "text-white/40"}`,
                                                children: "Socials"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `space-y-3 text-sm ${isLight ? "text-black/70" : "text-white/70"}`,
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["socialLinks"].map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: social.href,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: `block transition-colors hover:translate-x-1 duration-200 transform ${isLight ? "hover:text-orange-600" : "hover:text-orange-400"}`,
                                                        children: social.label
                                                    }, social.label, false, {
                                                        fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col justify-between items-start lg:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `mb-4 text-xs uppercase tracking-[0.24em] font-semibold ${isLight ? "text-black/40" : "text-white/40"}`,
                                                children: "HQ Location"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-sm ${isLight ? "text-black/60" : "text-white/60"}`,
                                                children: [
                                                    "San Francisco, CA",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 34
                                                    }, this),
                                                    "Tokyo, Japan"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: scrollToTop,
                                        className: `mt-8 lg:mt-0 flex items-center gap-2 group text-xs uppercase tracking-widest transition-colors ${isLight ? "text-black/50 hover:text-orange-600" : "text-white/50 hover:text-orange-400"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Back To Top"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M5 10l7-7m0 0l7 7m-7-7v18"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `my-10 h-px w-full transition-colors duration-500 ${isLight ? "bg-black/10" : "bg-white/10"}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider uppercase ${isLight ? "text-black/40" : "text-white/40"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studioName"],
                                    ". All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display",
                                children: "Cinematic Digital Architectures"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/home/HomeFooter.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_components_11dln62._.js.map