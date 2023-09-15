/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dsh-bg": "url('./src/assets/png/dashboard-bg.png')", 
        "auth-bg": "url('./src/assets/png/auth-bg-img.png')", 
        
      },
     
      
    },
  },
  plugins: [],
};
