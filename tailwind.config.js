export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Centra', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 45px rgba(59, 130, 246, 0.3)',
      },
      backgroundImage: {
        'hero-texture': "radial-gradient(circle at top, rgba(56, 189, 248, 0.16), transparent 35%), radial-gradient(circle at bottom, rgba(16, 185, 129, 0.15), transparent 28%)",
      },
    },
  },
  plugins: [],
};
