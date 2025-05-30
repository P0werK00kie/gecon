/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#075f2c',
        secondary: '#454d53',
        darkBlue: '#0a122a',
        darkBg: '#191e28',
      },
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        barlowCondensed: ['Barlow Condensed', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/04/iStock-635922448.jpg')",
        'action-bg': "url('https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/04/iStock-940251778.jpg')",
        'contractor-bg': "url('https://gecon-roofing.websitepro.hosting/wp-content/uploads/2021/03/AdobeStock_209466807.jpg')",
      }
    },
  },
  plugins: [],
};