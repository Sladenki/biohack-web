"use client";

import { motion } from "framer-motion";

export function PomorGuideCharacter() {
  return (
    <motion.div
      className="relative mx-auto w-48 sm:w-56"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 200 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full drop-shadow-lg"
      >
        {/* Body / coat */}
        <ellipse cx="100" cy="220" rx="55" ry="40" fill="#0E6E5C" />
        <rect x="55" y="140" width="90" height="90" rx="20" fill="#12433A" />

        {/* Arms */}
        <rect x="30" y="155" width="25" height="60" rx="12" fill="#0E6E5C" />
        <rect x="145" y="155" width="25" height="60" rx="12" fill="#0E6E5C" />

        {/* Head */}
        <circle cx="100" cy="100" r="45" fill="#E8C9A0" />

        {/* Beard */}
        <path
          d="M65 115 Q100 180 135 115 Q120 130 100 135 Q80 130 65 115"
          fill="#8B7355"
        />

        {/* Eyes */}
        <motion.g
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
            repeatDelay: 4,
          }}
          style={{ transformOrigin: "100px 95px" }}
        >
          <circle cx="85" cy="95" r="4" fill="#1C2624" />
          <circle cx="115" cy="95" r="4" fill="#1C2624" />
        </motion.g>

        {/* Eyebrows */}
        <path d="M75 85 Q85 80 95 85" stroke="#8B7355" strokeWidth="2" fill="none" />
        <path d="M105 85 Q115 80 125 85" stroke="#8B7355" strokeWidth="2" fill="none" />

        {/* Nose */}
        <ellipse cx="100" cy="105" rx="5" ry="4" fill="#D4A574" />

        {/* Mouth */}
        <path d="M90 115 Q100 120 110 115" stroke="#8B7355" strokeWidth="2" fill="none" />

        {/* Pomor hat */}
        <ellipse cx="100" cy="62" rx="50" ry="12" fill="#1C2624" />
        <path d="M60 62 Q100 20 140 62" fill="#1C2624" />
        <rect x="55" y="58" width="90" height="8" rx="4" fill="#1FA98C" />

        {/* Scarf */}
        <path
          d="M70 135 Q100 150 130 135 L125 160 Q100 170 75 160 Z"
          fill="#1FA98C"
        />
      </svg>
    </motion.div>
  );
}
