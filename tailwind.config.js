module.exports = {
  mode: 'jit',
  purge: ['./**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // 自定義樣式
      colors: {
        bootstrap_primary: '#0d6efd',
        bootstrap_secondary: '#6c757d',
        bootstrap_success: '#198754',
        bootstrap_danger: '#dc3545',
        bootstrap_info: '#0dcaf0',
      },
      fontSize: {
        veryBig: ['10rem', {
          lineHeight: '10rem'
        }],
      },
      fontFamily: {
        noto_sans_tc: ['Noto Sans TC']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}