module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "navbar-bg": "#111827",
        "link-hover": "#14B8A6",
        headingThree: "#F9FAFB",
        "about-bg": "#1F2937",
        "about-heading": "#F9FAFB",
        "about-paragragraph": "#D1D5DB",
        border: "#1F2937",
      },
      backgroundImage: {
        "red-background": "url('/bg-red.png')",
        "green-background": "url('/bg-green.png')",
        "gray-background": "url('/bg-gray.png')",
        "skyblue-background": "url('/bg-skyblue.png')",
      },
      lineHeight: {
        heading: "4.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
