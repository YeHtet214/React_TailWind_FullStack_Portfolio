/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      violet: '#0A1640',
      purple: '#0E1C4B',
      pink: '#FB2576',
      white: '#f2f2f2',
      pure: '#ffffff',
      lightGray: '#d9d9d9',
      black: '#000000',
      lightViolet: '#172B6D',
    },
    extend: {
      boxShadow: {
        'lg': '0 3px 8px 2px rgba(60, 60, 60, 0.3)',
        'inner-btn': 'inset 0 2px 4px rgba(150, 28, 75, 1)'
        
      }
    }
  },
  plugins: [],
}

