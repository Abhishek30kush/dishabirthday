/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-primary': '#FF6B9D',
        'pink-deep': '#C44569',
        'purple': '#8E44AD',
        'gold': '#F8B500',
        'heart-red': '#FF4757',
        'text-dark': '#4A1942',
        'text-muted': '#7B4B6E',
      },
      fontFamily: {
        'display': ['Dancing Script', 'cursive'],
        'body': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'bounce-gentle': 'bounce 1s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'heartbeat': 'heartbeat 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px) rotate(-5deg)' },
          '75%': { transform: 'translateX(10px) rotate(5deg)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      backgroundImage: {
        'gradient-romantic': 'linear-gradient(135deg, #FFE6EE 0%, #F5E6FF 50%, #E6F0FF 100%)',
        'gradient-pink': 'linear-gradient(135deg, #FF6B9D 0%, #C44569 50%, #8E44AD 100%)',
        'gradient-button': 'linear-gradient(135deg, #FF6B9D 0%, #FF8FB1 100%)',
      },
      boxShadow: {
        'romantic': '0 20px 60px rgba(255, 107, 157, 0.3)',
        'button': '0 10px 30px rgba(255, 107, 157, 0.4)',
        'card': '0 10px 40px rgba(74, 25, 66, 0.15)',
      },
    },
  },
  plugins: [],
}

