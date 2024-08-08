/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      // Backgrounds
      mainBackground: "var(--main-background)",
      toggleBackgroundKeypadBackground:
        "var(--toggle-background-keypad-background)",
      screenBackground: "var(--screen-background)",

      // Keys
      primaryKeyBackground: "var(--primary-key-background)",
      primaryKeyShadow: "var(--primary-key-shadow)",

      secondaryKeyBackground: "var(--secondary-key-background-toggle)",
      secondaryKeyShadow: "var(--secondary-key-shadow)",

      tertiaryKeyBackground: "var(--tertiary-key-background)",
      tertiaryKeyShadow: "var(--tertiary-key-shadow)",

      // Text
      main: "var(--text-main)",
      white: "var(--text-white)",
      header: "var(--text-header)",
    },
    extend: {},
  },
  plugins: [],
};
