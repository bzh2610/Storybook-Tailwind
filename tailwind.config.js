/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{html,ts}",
    "./src/stories/**/*.{html,ts,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          black: "#202F3E",
          white: "#fcfcfc",
          regular: "#F5F6F7",
          background: "#EAECF1",
          menuHovered: "#DEE6EC",
          label: "#515860",
        },
        semantic: {
          blue: "#00B0FF",
          disabled: "#B1BABF",
          yellow: "#F5D823",
          orange: "#FF9900",
          red: "#CF1217",
        }
      },
    },
  },
  plugins: [],
}
