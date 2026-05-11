/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#061A2E",
        ink: "#10263D",
        ocean: "#0E8BB8",
        aqua: "#7AD7E5",
        gold: "#D8B45F",
        sand: "#F4EFE6",
        mist: "#EEF7F8",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 70px rgba(6, 26, 46, 0.14)",
        glow: "0 18px 50px rgba(14, 139, 184, 0.24)",
      },
      backgroundImage: {
        "luxury-radial":
          "radial-gradient(circle at 20% 20%, rgba(216,180,95,.25), transparent 28%), radial-gradient(circle at 80% 10%, rgba(14,139,184,.22), transparent 30%), linear-gradient(135deg, #061A2E, #10263D)",
      },
    },
  },
  plugins: [],
};
