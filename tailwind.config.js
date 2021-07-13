module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'matterbold': ['matterbold'],
      'mattermedium' : ['mattermedium'],
      'matterregular' : ['matterregular']
     },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/hero.png')",
        'hero-pattern-sm': "url('/hero-sm.png')",
       })

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
