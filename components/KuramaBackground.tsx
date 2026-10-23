"use client";

import { useEffect, useState } from "react";

export default function KuramaBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax transform calculation for gentle ambient movement
  const parallaxOffset = Math.min(scrollY * 0.18, 160);
  const opacityFade = Math.max(0.12, 0.45 - scrollY * 0.0004);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. KURAMA NINE-TAILED CHAKRA SILHOUETTE (Hero & Ambient Backdrop) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] sm:w-[980px] lg:w-[1240px] h-[750px] transition-transform duration-100 ease-out"
        style={{
          transform: `translate(-50%, ${-parallaxOffset}px)`,
          opacity: opacityFade,
        }}
      >
        {/* Soft Radial Ambient Chakra Flame Glow */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[520px] h-[450px] bg-gradient-to-b from-orange-600/20 via-orange-500/10 to-transparent rounded-full blur-[110px] animate-kurama-aura" />

        {/* Kurama Nine Tails & Fox Silhouette SVG */}
        <svg
          viewBox="0 0 1000 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="chakraFlameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.05" />
              <stop offset="40%" stopColor="#f97316" stopOpacity="0.35" />
              <stop offset="85%" stopColor="#fb923c" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="bodyChakraGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#7c2d12" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#c2410c" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.6" />
            </linearGradient>

            <filter id="chakraGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* NINE TAILS FAN (Waving Smoothly with CSS Physics) */}
          <g filter="url(#chakraGlowFilter)" style={{ transformOrigin: "500px 580px" }}>
            {/* Tail 1 (Far Left) */}
            <path
              d="M500 580 C 420 540 280 440 200 320 C 130 220 120 130 150 70 C 180 140 250 240 370 360 C 440 440 480 520 500 580 Z"
              fill="url(#chakraFlameGrad)"
              style={{
                transformOrigin: "500px 580px",
                animation: "kurama-tail-left-1 6.5s ease-in-out infinite",
              }}
            />
            {/* Tail 2 (Mid-Left 1) */}
            <path
              d="M500 580 C 440 510 320 400 270 270 C 230 160 250 80 290 30 C 310 110 370 210 440 330 C 480 420 490 510 500 580 Z"
              fill="url(#chakraFlameGrad)"
              style={{
                transformOrigin: "500px 580px",
                animation: "kurama-tail-left-2 5.8s ease-in-out infinite 0.4s",
              }}
            />
            {/* Tail 3 (Mid-Left 2) */}
            <path
              d="M500 580 C 460 480 370 360 360 230 C 350 120 380 50 420 10 C 430 90 460 190 480 310 C 490 410 495 500 500 580 Z"
              fill="url(#chakraFlameGrad)"
              style={{
                transformOrigin: "500px 580px",
                animation: "kurama-tail-left-3 5.2s ease-in-out infinite 0.8s",
              }}
            />
            {/* Tail 4 (Center Spine Tail) */}
            <path
              d="M500 580 C 490 460 470 320 490 190 C 500 90 505 30 500 0 C 515 40 525 110 520 210 C 515 330 510 460 500 580 Z"
              fill="url(#chakraFlameGrad)"
              style={{
                transformOrigin: "500px 580px",
                animation: "kurama-tail-center 4.8s ease-in-out infinite 0.2s",
              }}
            />
            {/* Tail 5 (Mid-Right 1) */}
            <path
              d="M500 580 C 505 500 510 410 520 310 C 540 190 570 90 580 10 C 620 50 650 120 640 230 C 630 360 540 480 500 580 Z"
              fill="url(#chakraFlameGrad)"
              style={{
                transformOrigin: "500px 580px",
                animation: "kurama-tail-right-1 5.4s ease-in-out infinite 0.6s",
              }}
            />
            {/* Tail 6 (Mid-Right 2) */}
            <path
              d="M500 580 C 510 510 520 420 560 330 C 630 210 690 110 710 30 C 750 80 770 160 730 270 C 680 400 560 510 500 580 Z"
              fill="url(#chakraFlameGrad)"
              style={{
                transformOrigin: "500px 580px",
                animation: "kurama-tail-right-2 6.1s ease-in-out infinite 1.1s",
              }}
            />
            {/* Tail 7 (Far Right) */}
            <path
              d="M500 580 C 520 520 560 440 630 360 C 750 240 820 140 850 70 C 880 130 870 220 800 320 C 720 440 580 540 500 580 Z"
              fill="url(#chakraFlameGrad)"
              style={{
                transformOrigin: "500px 580px",
                animation: "kurama-tail-right-3 6.8s ease-in-out infinite 1.5s",
              }}
            />
          </g>

          {/* KURAMA FOX HEAD & SHOULDERS SILHOUETTE */}
          <g filter="url(#chakraGlowFilter)">
            {/* Shoulders & Torso */}
            <path
              d="M360 680 C 370 560 410 480 450 440 C 470 420 530 420 550 440 C 590 480 630 560 640 680 Z"
              fill="url(#bodyChakraGrad)"
            />

            {/* Fox Head & Fierce Ears */}
            {/* Left Ear */}
            <path
              d="M460 420 L 410 260 C 425 310 450 350 475 390 Z"
              fill="url(#chakraFlameGrad)"
            />
            <path
              d="M465 410 L 420 280 L 470 380 Z"
              fill="#fed7aa"
              opacity="0.8"
            />
            {/* Right Ear */}
            <path
              d="M540 420 L 590 260 C 575 310 550 350 525 390 Z"
              fill="url(#chakraFlameGrad)"
            />
            <path
              d="M535 410 L 580 280 L 530 380 Z"
              fill="#fed7aa"
              opacity="0.8"
            />

            {/* Main Face Contour */}
            <polygon
              points="450,430 430,370 470,390 500,435 530,390 570,370 550,430 500,470"
              fill="#f97316"
              opacity="0.75"
            />

            {/* Glowing Ethereal Fox Eyes */}
            <ellipse
              cx="472"
              cy="415"
              rx="12"
              ry="5"
              transform="rotate(18 472 415)"
              fill="#ffffff"
            />
            <ellipse
              cx="528"
              cy="415"
              rx="12"
              ry="5"
              transform="rotate(-18 528 415)"
              fill="#ffffff"
            />
            <circle cx="473" cy="415" r="4" fill="#fbbf24" />
            <circle cx="527" cy="415" r="4" fill="#fbbf24" />

            {/* Whisker Markings */}
            <line x1="430" y1="428" x2="455" y2="433" stroke="#ea580c" strokeWidth="2.5" />
            <line x1="425" y1="438" x2="452" y2="440" stroke="#ea580c" strokeWidth="2.5" />
            <line x1="432" y1="448" x2="455" y2="446" stroke="#ea580c" strokeWidth="2.5" />

            <line x1="570" y1="428" x2="545" y2="433" stroke="#ea580c" strokeWidth="2.5" />
            <line x1="575" y1="438" x2="548" y2="440" stroke="#ea580c" strokeWidth="2.5" />
            <line x1="568" y1="448" x2="545" y2="446" stroke="#ea580c" strokeWidth="2.5" />
          </g>
        </svg>
      </div>

      {/* 2. RISING CHAKRA FLAME EMBERS (Subtle Ambient Physics) */}
      <div className="absolute inset-0">
        {[
          { left: "18%", delay: "0s", dur: "7s", size: "w-1.5 h-1.5" },
          { left: "26%", delay: "2.3s", dur: "6.2s", size: "w-2 h-2" },
          { left: "42%", delay: "1.1s", dur: "8.5s", size: "w-1.5 h-1.5" },
          { left: "58%", delay: "3.7s", dur: "5.8s", size: "w-2.5 h-2.5" },
          { left: "74%", delay: "0.8s", dur: "7.8s", size: "w-1.5 h-1.5" },
          { left: "84%", delay: "4.2s", dur: "6.7s", size: "w-2 h-2" },
        ].map((ember, i) => (
          <span
            key={i}
            className={`absolute bottom-20 rounded-full bg-orange-400 ${ember.size}`}
            style={{
              left: ember.left,
              boxShadow: "0 0 10px #f97316, 0 0 20px #ea580c",
              animation: `chakra-ember-float ${ember.dur} ease-in-out infinite ${ember.delay}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
