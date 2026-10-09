module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefaf6',
          100: '#d8f4ea',
          200: '#b2e8d7',
          300: '#7ad0b1',
          400: '#3eb585',
          500: '#1c9b6d',
          600: '#127a58',
          700: '#10624a',
          800: '#0f4f3d',
          900: '#0e4338',
        },
      },
      boxShadow: {
        soft: '0 10px 25px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
