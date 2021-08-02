module.exports = {
  mode: 'jit',
  purge: [
    'src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        jumble: 'jumble 0.3s steps(1) infinite'
      },
      keyframes: {
        jumble: {
          '0%, 100%': { transform: 'scaleX(1) scaleY(1)' },
          '25%': { transform: 'scaleX(1) scaleY(-1)' },
          '50%': { transform: 'scaleX(-1) scaleY(-1)' },
          '75%': { transform: 'scaleX(-1) scaleY(1)' }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
