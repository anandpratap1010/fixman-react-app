export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Lato",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      fontSize: {
        // Figma-style precise font scale
        "5xl": ["3rem", { lineHeight: "1.1", fontWeight: "700" }],
        "6xl": ["3.75rem", { lineHeight: "1.1", fontWeight: "700" }],
      },
      spacing: {
        // custom spacing that may be used for more exact gaps
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-figma-title": {
          fontSize: "3.15rem",
          lineHeight: "1.1",
          fontWeight: "800",
        },
        ".text-figma-subtitle": {
          fontSize: "1.25rem",
          lineHeight: "1.6",
          fontWeight: "500",
        },
        ".leading-fancy": {
          lineHeight: "1.75",
        },
        ".gap-f": {
          gap: "1.25rem",
        },
      });
    },
  ],
};
