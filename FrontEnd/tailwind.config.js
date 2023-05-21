/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit' ,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-datepicker/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      fontFamily: {
        sans: ["Poppins"],
        serif: ["Poppins"],
        mono: ["Poppins"],
        display: ["Poppins"],
        body: ["Poppins"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
