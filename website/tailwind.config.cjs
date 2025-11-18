/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          50: 'var(--olive-50)',
          100: 'var(--olive-100)',
          300: 'var(--olive-300)',
          500: 'var(--olive-500)',
          700: 'var(--olive-700)',
          900: 'var(--olive-900)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        glass: '0 20px 60px rgba(0,0,0,0.45)',
      },
      keyframes: {
        'halo-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(135,155,74,0.45)' },
          '50%': { boxShadow: '0 0 30px 0 rgba(135,155,74,0.8)' },
        },
      },
      animation: {
        'halo-pulse': 'halo-pulse 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
