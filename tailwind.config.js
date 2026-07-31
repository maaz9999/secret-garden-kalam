/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pine: {
          950: '#0B1310',
          900: '#111E18',
          800: '#1B2C23',
          700: '#283E32',
          600: '#385344',
        },
        charcoal: '#181815',
        walnut: '#5E4937',
        amber: {
          DEFAULT: '#C49A62',
          light: '#DAB888',
          dark: '#9E7743',
        },
        'warm-light': '#E7C998',
        cream: {
          DEFAULT: '#EEE8DE',
          light: '#F8F6F0',
          dark: '#E2DACD',
        },
        mist: '#B9C0B9',
        snow: '#F3F3F0',
        stone: {
          DEFAULT: '#77766F',
          dark: '#4A4944',
          light: '#A3A29B',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'warm-glow': '0 0 40px -10px rgba(196, 154, 98, 0.25)',
        'pine-glow': '0 20px 50px -15px rgba(11, 19, 16, 0.7)',
      },
      animation: {
        'subtle-drift': 'drift 20s ease-in-out infinite alternate',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(-10px, -15px) scale(1.03)' },
        },
      },
    },
  },
  plugins: [],
}
