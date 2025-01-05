/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg: "url('/src/assets/Images/hero-desktop.jpg')",
        mobileBannerImg: "url('/src/assets/Images/hero-mobile.webp')",
        sectionMobileBannerImg: "url('/src/assets/Images/ix1-mobile.jpg')",
        sectionDesktopBannerImg: "url('/src/assets/Images/ix1-desktop.jpg')",
        carsBannerImg: "url('/src/assets/Images/cars-desktop.jpg')",
        carsBannerMobileImg: "url('/src/assets/Images/cars-mobile.jpg')",
        blackOverlay: "bg-gradient-to-r from-black to-white",
      },
      fontFamily: {
        bmw: "DM Sans",
      },
      colors: {
        off_white: "#F0F0F0",
        gray_medium: "#4D4D4D",
        blue_light: "#63B1FF",
        blue_medium: "#007EFF",
        blue_dark: "#1C69D4",
      },
    },
  },
  plugins: [],
};
