const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './content/articles/**/*.md'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.stone,
      blue: colors.sky
    },
    extend: {}
  },
  plugins: []
}
