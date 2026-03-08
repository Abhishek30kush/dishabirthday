import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import FloatingHearts from './FloatingHearts'

const WelcomePage = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
    >
      <FloatingHearts />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl animate-float opacity-30">✨</div>
      <div className="absolute top-20 right-16 text-4xl animate-float opacity-30" style={{ animationDelay: '0.5s' }}>💫</div>
      <div className="absolute bottom-20 left-16 text-5xl animate-float opacity-30" style={{ animationDelay: '1s' }}>⭐</div>
      <div className="absolute bottom-10 right-10 text-6xl animate-float opacity-30" style={{ animationDelay: '1.5s' }}>💖</div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center z-10"
      >
        {/* Animated birthday emoji */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-8xl mb-8"
        >
          🎂
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl text-text-dark mb-6"
        >
          Hey Love <span className="text-heart-red">❤️</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-text-muted mb-4 font-body"
        >
          I made something special for your birthday
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          {/* Decorative hearts */}
          <div className="flex gap-2 mb-2">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-2xl"
            >
              💕
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              className="text-2xl"
            >
              💗
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              className="text-2xl"
            >
              💖
            </motion.span>
          </div>

          {/* Start button */}
          <motion.button
            onClick={() => onNavigate(2)}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 40px rgba(255, 107, 157, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="shine-button button-pulse text-white text-xl md:text-2xl font-semibold px-10 py-4 rounded-full shadow-button transition-all"
          >
            Start Your Surprise 🎁
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-2 text-center"
      >
        <p className="text-text-muted text-sm">Made with 💖 just for you</p>
      </motion.div>
    </motion.div>
  )
}

export default WelcomePage

