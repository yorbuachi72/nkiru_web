/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        background: '#050505',
        foreground: '#ffffff',
        accent: {
          cyan: '#25c0f4',
          violet: '#8b5cf6',
          neon: '#00ffcc',
        },
        card: {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          hover: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #25c0f4 0%, #8b5cf6 100%)',
        'gradient-dark': 'radial-gradient(circle at center, #111111 0%, #050505 100%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(37, 192, 244, 0.5)',
        'neon-violet': '0 0 15px rgba(139, 92, 246, 0.5)',
      }
    },
  },
  plugins: [],
};
