// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#fff1f1',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        yellow: {
          300: '#fde047',
        },
      },
    },
  },
  plugins: [],
}