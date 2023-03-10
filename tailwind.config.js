/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Poppins"],
        serif: ["ui-serif", "Georgia", "Poppins"],
        mono: ["ui-monospace", "SFMono-Regular", "Poppins"],
        display: ["Oswald", "Poppins"],
        body: ['"Open Sans"', "Poppins"],
      },
    },
  },

  plugins: [],
};
