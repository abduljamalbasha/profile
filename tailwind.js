smodule.exports = {
  purge: {
    enabled:true,
    mode: 'all',
    preserveHtmlElements: false,
    content:["./src/**/*.html","./src/**/*.jsx","./src/**/*.js"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
  extend: {},
  },
  plugins: [],
};