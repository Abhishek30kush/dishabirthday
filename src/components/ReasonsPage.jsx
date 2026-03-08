import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const loveReasons = [
  "Because your smile makes my worst days better",
  "Because life feels magical with you",
  "Because you are my favorite person",
  "Because your laugh is my favorite song",
  "Because you understand me without words",
  "Because your kindness inspires me daily",
  "Because you believe in me even when I don't",
  "Because every moment with you is precious",
  "Because you make me want to be better",
  "Because your eyes hold infinite warmth",
  "Because you support all my dreams",
  "Because your love is my greatest treasure",
  "Because you dance like no one's watching",
  "Because you care so deeply for others",
  "Because your hugs heal everything",
  "Because you see beauty in simple things",
  "Because you make ordinary days special",
  "Because your voice is my favorite sound",
  "Because you challenge me to grow",
  "Because your presence calms my soul",
  "Because you remember the little things",
  "Because you make my heart skip a beat",
  "Because you're my biggest cheerleader",
  "Because you make life an adventure",
  "Because your love is unconditional",
  "Because you accept me completely",
  "Because you make me feel safe",
  "Because your touch is electric",
  "Because you light up every room",
  "Because you're my best friend",
  "Because you make the future exciting",
  "Because your thoughts are always caring",
  "Because you see the best in me",
  "Because you make time stand still",
  "Because your love is my home",
  "Because you're uniquely wonderful",
  "Because you make me laugh daily",
  "Because your spirit is beautiful",
  "Because you motivate me constantly",
  "Because you're my greatest blessing",
  "Because you complete my life",
  "Because your love is priceless",
  "Because you make everything better",
  "Because you're my soulmate",
  "Because I fall for you more each day",
  "Because you're everything I ever wanted",
  "Because you make my world complete",
  "Because loving you is easy",
  "Because you're my forever person",
  "Because with you, forever feels just right"
]

const ReasonsPage = ({ onNavigate }) => {
  const [currentReason, setCurrentReason] = useState(null)
  const [showButton, setShowButton] = useState(true)
  const [reasonCount, setReasonCount] = useState(0)

  const generateNewReason = () => {
    const randomIndex = Math.floor(Math.random() * loveReasons.length)
    setCurrentReason(loveReasons[randomIndex])
    setShowButton(false)
    setReasonCount(prev => prev + 1)
  }

  const handleContinue = () => {
    onNavigate(5)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
    >
      {/* Background decorations */}
      <div className="absolute top-10 left-10 text-5xl animate-float opacity-20">💕</div>
      <div className="absolute top-20 right-16 text-4xl animate-float opacity-20" style={{ animationDelay: '0.5s' }}>💗</div>
      <div className="absolute bottom-20 left-16 text-5xl animate-float opacity-20" style={{ animationDelay: '1s' }}>💖</div>
      <div className="absolute bottom-10 right-10 text-4xl animate-float opacity-20" style={{ animationDelay: '1.5s' }}>💝</div>
      <div className="absolute top-1/2 left-4 text-3xl animate-float opacity-20" style={{ animationDelay: '2s' }}>💞</div>
      <div className="absolute top-1/2 right-4 text-3xl animate-float opacity-20" style={{ animationDelay: '2.5s' }}>💟</div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-3xl z-10"
      >
        {/* Header */}
        <motion.div className="text-center mb-8">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-display text-4xl md:text-5xl text-text-dark mb-2"
          >
            Reasons Why I Love You <span className="text-heart-red">❤️</span>
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-text-muted"
          >
            Click to see why you're amazing
          </motion.p>
        </motion.div>

        {/* Reason counter */}
        {reasonCount > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-6"
          >
            <span className="bg-gradient-to-r from-pink-primary to-purple text-white px-4 py-1 rounded-full text-sm font-medium">
              Reasons revealed: {reasonCount}
            </span>
          </motion.div>
        )}

        {/* Main card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12 shadow-card"
        >
          <AnimatePresence mode="wait">
            {currentReason ? (
              <motion.div
                key={currentReason}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 90 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Heart decoration */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="text-6xl mb-6"
                >
                  💖
                </motion.div>

                {/* Reason text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-3xl text-text-dark font-semibold leading-relaxed"
                >
                  {currentReason}
                </motion.p>

                {/* Another reason button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8"
                >
                  <button
                    onClick={generateNewReason}
                    className="bg-white/50 hover:bg-white/80 text-text-dark px-6 py-3 rounded-full text-lg font-medium transition-all hover:shadow-lg"
                  >
                    Show me another 💕
                  </button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                {/* Heart icon */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-8xl mb-8"
                >
                  💝
                </motion.div>

                {showButton && (
                  <motion.button
                    onClick={generateNewReason}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 15px 40px rgba(255, 107, 157, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="shine-button text-white text-xl md:text-2xl font-semibold px-10 py-4 rounded-full shadow-button transition-all"
                  >
                    Click to See Why I Love You ❤️
                  </motion.button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Continue button */}
        {reasonCount >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8"
          >
            <button
              onClick={handleContinue}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-primary to-purple text-white text-lg font-semibold px-8 py-3 rounded-full shadow-button transition-all hover:shadow-romantic"
            >
              Continue to Next Surprise ✨
            </button>
          </motion.div>
        )}

        {/* Hint */}
        {reasonCount > 0 && reasonCount < 3 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-6 text-text-muted"
          >
            Keep clicking to discover more reasons! ({(3 - reasonCount)} more to unlock)
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  )
}

export default ReasonsPage

