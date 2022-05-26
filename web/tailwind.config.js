module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    variants: {
      borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    },
    extend: {
      zIndex: {
        '-1': '-1',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [
    '@tailwindcss/typography',
    '@tailwindcss/forms',
    '@tailwindcss/line-clamp',
    '@tailwindcss/aspect-ratio',
  ],
};
