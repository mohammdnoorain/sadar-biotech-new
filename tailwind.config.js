module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        'rotate-circle': {
          '0%': {
            transform: 'rotate(0deg) translate(180px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translate(180px) rotate(-360deg)',
          },
        },
      },
      animation: {
        'rotate-circle': 'rotate-circle 10s linear infinite',
      },
    },
  },
  plugins: [],
};
