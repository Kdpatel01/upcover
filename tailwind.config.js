/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '12px',
    },
    screens:{
      'sm': '540px',
      'md':'720px',
      'lg':'960px',
      'xl':'1140px',
      'xxl':'1320px',
    },
    extend: {
      fontFamily:{
        'Libre-regular':'Libre-Franklin',
      },
      colors:{
        'theme':'#14b8a6',
      },
    },
  },
  plugins: [],
}

