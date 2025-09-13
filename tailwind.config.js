export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e6fbff",
          200: "#7ae3ff",
          400: "#29c0ff",
          500: "#00b4ff",
          700: "#0aa3d6",
        },
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
      backgroundImage: {
        "space-gradient":
          "radial-gradient(1200px 600px at 70% -10%, rgba(0,180,255,.25), transparent), linear-gradient(180deg,#0a0f2b 0%, #0b122f 40%, #0c142f 100%)",
      },
    },
  },
  plugins: [],
};
