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
        "robotomono-light": ["RobotoMonoLight"],
        "robotomono-regular": ["RobotoMonoRegular"],
        "robotomono-semibold": ["RobotoMonoSemiBold"],
        "anton-regular": ["AntonRegular"],
        "lato-light": ["LatoLight"],
        "lato-bold": ["LatoBold"],
      },
      borderWidth: {
        0.75: "0.75px",
      },
      height: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
