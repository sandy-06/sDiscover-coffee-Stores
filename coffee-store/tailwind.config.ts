import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient: 'url("/static/background.png")',
    },
      colors: {
        purple: {
        "951": "#5755eb",
      },
      gray: {
        951: 'hsla(0, 0%, 100%, 0.04)',
        952: '#373b64',
      },
      
    }


  }
    
  },
  plugins: [],
};

export default config;
