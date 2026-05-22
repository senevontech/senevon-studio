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
];

//# sourceMappingURL=src_components_0r8r5jr._.js.map