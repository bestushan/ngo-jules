/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#ec5b13", // Screen 5 primary
        "primary-gold": "#B8860B", // Screen 7 primary
        "teal-deep": "#004d4d",
        "sea-foam": "#f0f7f4",
        "background-light": "#f8f6f6",
        "background-dark": "#221610",
        "secondary-teal": "#004D4D",
        "accent-red": "#A52A2A",
        "background-light-7": "#FDFBF7",
      },
      fontFamily: {
        "display": ["'Public Sans'", "sans-serif"],
        "serif": ["'Playfair Display'", "serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [(await import("daisyui")).default],
  daisyui: {
    themes: ["light"],
  },
}
