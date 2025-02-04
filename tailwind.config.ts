import type { Config } from "tailwindcss";

export default {
  content: [
    "./(company)/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        semiDark: '#2F3138',
        dark: '#1D1F27'
      },
      screens: {
        'max-lg': {'max': '1024px'},
        'max-sm': {'max': '550px'}
      }
    },
    fontFamily: {
      'Inter': [ "Inter", 'serif'],
    },
    backgroundImage: {
      'main-section': "url('/main/main_section.png')"
    },
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config;
