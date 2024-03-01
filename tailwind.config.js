/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        'custom': '500px', // You can change the value as per your requirement
      },
    },
  },
  plugins: [],
}

