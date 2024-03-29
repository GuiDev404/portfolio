/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mono: ["'JetBrains Mono'", 'monospace']
    },
    extend: {},
  },
  plugins: [],
}
