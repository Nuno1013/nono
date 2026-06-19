// 文件位置：项目根目录/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'custom': '1700px',
      },
      colors: {
        dark: {
          900: '#07070a',
          800: '#0d0d12',
          700: '#15151e',
        },
        starlight: {
          DEFAULT: '#818cf8',
          dim: '#4f46e5',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
