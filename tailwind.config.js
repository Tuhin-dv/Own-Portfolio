/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '50%': { width: '40%' },
          '100%': { width: '0' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
      },
      animation: {
        typing: 'typing 8s steps(20, end) infinite',
        blink: 'blink 0.7s step-end infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
