/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'blue-dark': '#204C80', // Nama kelas kustom dan nilai warna
      },
      textColor: {
        'blue-dark': '#204C80', // Nama kelas kustom dan nilai warna
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}