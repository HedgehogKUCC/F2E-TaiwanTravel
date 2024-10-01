module.exports = {
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ],
    options: {
      keyframes: true
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#5B9BD5',
          500: '#00457C'
        },
        yellow: '#E8D4A2',
        pink: '#D69F8F',
        grey: {
          300: '#F5F4F2',
          500: '#F1EDEA'
        },
        dark: '#000000',
        white: '#FFFFFF'
      }
    },
    container: {
      center: true
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}
