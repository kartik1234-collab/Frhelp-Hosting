// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     fontFamily: {
//       inter: ["Inter", "sans-serif"],
//       "edu-sa": ["Edu SA Beginner", "cursive"],
//       mono: ["Roboto Mono", "monospace"],
//     },
//     colors: {
//       white: "#fff",
//       black: "#000",
//       transparent: "#ffffff00",
//       richblack: {
//         5: "#F1F2FF",
//         25: "#DBDDEA",
//         50: "#C5C7D4",
//         100: "#AFB2BF",
//         200: "#999DAA",
//         300: "#838894",
//         400: "#6E727F",
//         500: "#585D69",
//         600: "#424854",
//         700: "#2C333F",
//         800: "#161D29",
//         900: "#000814",
//       },
//       richblue: {
//         5: "#ECF5FF",
//         25: "#C6D6E1",
//         50: "#A0B7C3",
//         100: "#7A98A6",
//         200: "#537988",
//         300: "#2D5A6A",
//         400: "#073B4C",
//         500: "#063544",
//         600: "#042E3B",
//         700: "#032833",
//         800: "#01212A",
//         900: "#001B22",
//       },
//       blue: {
//         5: "#EAF5FF",
//         25: "#B4DAEC",
//         50: "#7EC0D9",
//         100: "#47A5C5",
//         200: "#118AB2",
//         300: "#0F7A9D",
//         400: "#0C6A87",
//         500: "#0A5A72",
//         600: "#074B5D",
//         700: "#053B48",
//         800: "#022B32",
//         900: "#001B1D",
//       },
//       caribbeangreen: {
//         5: "#C1FFFD",
//         25: "#83F1DE",
//         50: "#44E4BF",
//         100: "#06D6A0",
//         200: "#05BF8E",
//         300: "#05A77B",
//         400: "#049069",
//         500: "#037957",
//         600: "#026144",
//         700: "#014A32",
//         800: "#01321F",
//         900: "#001B0D",
//       },
//       brown: {
//         5: "#FFF4C4",
//         25: "#FFE395",
//         50: "#FFD166",
//         100: "#E7BC5B",
//         200: "#CFA64F",
//         300: "#B89144",
//         400: "#A07C39",
//         500: "#88662D",
//         600: "#705122",
//         700: "#593C17",
//         800: "#41260B",
//         900: "#291100",
//       },
//       pink: {
//         5: "#FFF1F1",
//         25: "#FBC7D1",
//         50: "#F79CB0",
//         100: "#F37290",
//         200: "#EF476F",
//         300: "#D43D63",
//         400: "#BA3356",
//         500: "#9F294A",
//         600: "#841E3E",
//         700: "#691432",
//         800: "#4F0A25",
//         900: "#340019",
//       },
//       yellow: {
//         5: "#FFF970",
//         25: "#FFE83D",
//         50: "#FFD60A",
//         100: "#E7C009",
//         200: "#CFAB08",
//         300: "#B69507",
//         400: "#9E8006",
//         500: "#866A04",
//         600: "#6E5503",
//         700: "#553F02",
//         800: "#3D2A01",
//         900: "#251400",
//       },
//       "pure-greys": {
//         5: "#F9F9F9",
//         25: "#E2E2E2",
//         50: "#CCCCCC",
//         100: "#B5B5B5",
//         200: "#9E9E9E",
//         300: "#888888",
//         400: "#717171",
//         500: "#5B5B5B",
//         600: "#444444",
//         700: "#2D2D2D",
//         800: "#171717",
//         900: "#141414",
//       },
//     },
//     extend: {
//       maxWidth: {
//         maxContent: "1260px",
//         maxContentTab: "650px"
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "#ffffff00",

      richblack: {
        5:   "#F1F2FF",
        25:  "#DBDDEA",
        50:  "#C5C7D4",
        100: "#AFB2BF",
        200: "#999DAA",
        300: "#838894",
        400: "#6E727F",
        500: "#585D69",
        600: "#424854",
        700: "#2C333F",
        800: "#161D29",
        900: "#000814",
      },
      richblue: {
        5:   "#ECF5FF", 25:  "#C6D6E1", 50:  "#A0B7C3",
        100: "#7A98A6", 200: "#537988", 300: "#2D5A6A",
        400: "#073B4C", 500: "#063544", 600: "#042E3B",
        700: "#032833", 800: "#01212A", 900: "#001B22",
      },
      blue: {
        5:   "#EAF5FF", 25:  "#B4DAEC", 50:  "#7EC0D9",
        100: "#47A5C5", 200: "#118AB2", 300: "#0F7A9D",
        400: "#0C6A87", 500: "#0A5A72", 600: "#074B5D",
        700: "#053B48", 800: "#022B32", 900: "#001B1D",
      },

      // ── PRIMARY ACCENT — Cyan-Violet Aurora ──────────────────
      // Replaces yellow everywhere — same key name so zero JSX changes needed
      yellow: {
        5:   "#f0fdff",
        25:  "#a5f3fc",
        50:  "#67e8f9",
        100: "#22d3ee",   // cyan-400
        200: "#06b6d4",   // cyan-500  ← main
        300: "#0891b2",
        400: "#0e7490",
        500: "#155e75",
        600: "#164e63",
        700: "#0c3344",
        800: "#071e2a",
        900: "#020d12",
      },

      // ── Caribbean green → violet-purple ──────────────────────
      caribbeangreen: {
        5:   "#faf5ff",
        25:  "#e9d5ff",
        50:  "#d8b4fe",
        100: "#c084fc",
        200: "#a855f7",   // violet-500 ← main
        300: "#9333ea",
        400: "#7e22ce",
        500: "#6b21a8",
        600: "#581c87",
        700: "#3b0764",
        800: "#2e1065",
        900: "#1a0533",
      },

      brown: {
        5:   "#FFF4C4", 25:  "#FFE395", 50:  "#FFD166",
        100: "#E7BC5B", 200: "#CFA64F", 300: "#B89144",
        400: "#A07C39", 500: "#88662D", 600: "#705122",
        700: "#593C17", 800: "#41260B", 900: "#291100",
      },
      pink: {
        5:   "#FFF1F1", 25:  "#FBC7D1", 50:  "#F79CB0",
        100: "#F37290", 200: "#EF476F", 300: "#D43D63",
        400: "#BA3356", 500: "#9F294A", 600: "#841E3E",
        700: "#691432", 800: "#4F0A25", 900: "#340019",
      },
      "pure-greys": {
        5:   "#F9F9F9", 25:  "#E2E2E2", 50:  "#CCCCCC",
        100: "#B5B5B5", 200: "#9E9E9E", 300: "#888888",
        400: "#717171", 500: "#5B5B5B", 600: "#444444",
        700: "#2D2D2D", 800: "#171717", 900: "#141414",
      },

      // ── Direct aurora utilities ───────────────────────────────
      cyan: {
        50:  "#ecfeff", 100: "#cffafe", 200: "#a5f3fc",
        300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4",
        600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63",
      },
      violet: {
        50:  "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe",
        300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6",
        600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95",
      },
    },

    extend: {
      maxWidth: {
        maxContent:    "1260px",
        maxContentTab: "650px",
      },
      boxShadow: {
        "aurora-sm": "0 0 16px rgba(6,182,212,0.2), 0 0 32px rgba(168,85,247,0.1)",
        "aurora-md": "0 0 32px rgba(6,182,212,0.3), 0 0 64px rgba(168,85,247,0.15)",
        "aurora-lg": "0 0 64px rgba(6,182,212,0.35), 0 0 100px rgba(168,85,247,0.2)",
        "card-dark":  "0 4px 24px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.04) inset",
      },
      backgroundImage: {
        "aurora-gradient": "linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)",
        "aurora-gradient-r": "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
        "aurora-text":    "linear-gradient(135deg, #22d3ee 0%, #a78bfa 60%, #f0abfc 100%)",
        "aurora-subtle":  "linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(168,85,247,0.08) 100%)",
        "hero-glow":      "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(6,182,212,0.18) 0%, transparent 70%)",
      },
      keyframes: {
        "aurora-pulse": {
          "0%,100%": { opacity:"0.6", transform:"scale(1)" },
          "50%":      { opacity:"1",   transform:"scale(1.05)" },
        },
        shimmer: {
          "0%":   { backgroundPosition:"-200% 0" },
          "100%": { backgroundPosition:" 200% 0" },
        },
        "fade-up": {
          "0%":   { opacity:"0", transform:"translateY(20px)" },
          "100%": { opacity:"1", transform:"translateY(0)"    },
        },
      },
      animation: {
        "aurora-pulse": "aurora-pulse 6s ease-in-out infinite",
        shimmer:        "shimmer 3s linear infinite",
        "fade-up":      "fade-up 0.6s cubic-bezier(0.34,1.2,0.64,1) both",
      },
    },
  },
  plugins: [],
};
