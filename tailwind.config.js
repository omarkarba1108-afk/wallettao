/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { 
            filter: "drop-shadow(0 0 0px rgba(255,255,255,0)) drop-shadow(0 0 0px rgba(0,0,0,0))",
            boxShadow: "0 0 0 rgba(255,255,255,0), 0 0 0 rgba(0,0,0,0)"
          },
          "50%": { 
            filter: "drop-shadow(0 0 12px rgba(255,255,255,0.6)) drop-shadow(0 0 12px rgba(0,0,0,0.4))",
            boxShadow: "0 0 18px rgba(255,255,255,0.55), 0 0 18px rgba(0,0,0,0.45)"
          },
        },
        stretchHorizontal: {
          "0%, 100%": { transform: "scaleX(1) scaleY(1)" },
          "25%": { transform: "scaleX(1.25) scaleY(0.8)" },
          "50%": { transform: "scaleX(1) scaleY(1)" },
          "75%": { transform: "scaleX(0.8) scaleY(1.25)" },
        },
        stretchVertical: {
          "0%, 100%": { transform: "scaleX(1) scaleY(1)" },
          "25%": { transform: "scaleX(0.8) scaleY(1.25)" },
          "50%": { transform: "scaleX(1) scaleY(1)" },
          "75%": { transform: "scaleX(1.25) scaleY(0.8)" },
        },
      },
      animation: {
        glowPulse: "glowPulse 1.8s ease-in-out infinite",
        stretchHorizontal: "stretchHorizontal 1.8s ease-in-out infinite",
        stretchVertical: "stretchVertical 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

