/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        magenta: '#db3d9e',
        teal: '#079fa6',
        coral: '#ff2768',
        blush: '#ffc4d4',
        cyan: '#05e0e9',
        gold: '#D4AF37',
        ink: '#0b0b10',
        dusk: '#16121d',
      },
      fontFamily: {
        display: ['"Wonderful Branding"', 'Playfair Display', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-shimmer':
          'linear-gradient(120deg, #D4AF37 0%, #f7e7a3 25%, #D4AF37 50%, #b58a1d 75%, #D4AF37 100%)',
        'magenta-glow':
          'radial-gradient(circle at 30% 20%, rgba(219,61,158,0.35), transparent 60%), radial-gradient(circle at 75% 80%, rgba(7,159,166,0.25), transparent 60%)',
        'luxe-dark':
          'linear-gradient(135deg, #0b0b10 0%, #1a0f1c 50%, #0b0b10 100%)',
        'blush-fade':
          'linear-gradient(180deg, #fff 0%, #ffe6ee 50%, #ffc4d4 100%)',
      },
      boxShadow: {
        glam: '0 25px 60px -25px rgba(219, 61, 158, 0.45)',
        gold: '0 0 0 1px rgba(212,175,55,0.6), 0 10px 30px -10px rgba(212,175,55,0.45)',
        luxe: '0 35px 80px -30px rgba(0,0,0,0.55)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.9s ease-out both',
      },
    },
  },
  plugins: [],
};
