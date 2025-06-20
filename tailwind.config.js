module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['"Comfortaa", sans-serif'],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        popupSlow: {
          "0%": {
            opacity: 0,
            transform: "scale(0.8) translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1) translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 1s ease-out forwards",
        fadeIn: "fadeIn 0.8s ease-out both",
        slideUp: "slideUp 0.8s ease-out both",
        slideLeft: "slideLeft 0.8s ease-out both",
        popupSlow: "popupSlow 1s cubic-bezier(0.22, 1, 0.36, 1) forwards", // slow and smooth
      },
    },
  },
  plugins: [],
};
