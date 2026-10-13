export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { display: ['Sora', 'system-ui', 'sans-serif'], sans: ['"Public Sans"', 'system-ui', 'sans-serif'] },
      colors: {
        navy: { 950: '#050F26', 900: '#071633', 800: '#0B2150', 700: '#12307A' },
        royal: { DEFAULT: '#2554E8', 600: '#1E45C7', 100: '#DCE6FF', 50: '#EEF3FF' },
      },
      boxShadow: { soft: '0 10px 40px -12px rgba(11,33,80,.25)' },
    },
  },
  plugins: [],
}
