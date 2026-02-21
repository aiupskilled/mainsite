import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#faf9f6",
        accent: "#ff6b6b",
        ink: "#111111",
        mist: "#f0eee7"
      },
      fontFamily: {
        sans: ["Google Sans", "Proxima Nova", "Avenir", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 8px 30px rgba(17, 17, 17, 0.08)",
        card: "0 12px 40px rgba(17, 17, 17, 0.07)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
