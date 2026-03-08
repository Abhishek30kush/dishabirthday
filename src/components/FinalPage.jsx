import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FinalPage = () => {
  const [showConfetti, setShowConfetti] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Start confetti after a short delay
    const timer = setTimeout(() => {
      setShowConfetti(true)
      setShowContent(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Generate confetti pieces
  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
    color: ['#FF6B9D', '#C44569', '#8E44AD', '#FFD700', '#FF4757', '#FF8FB1'][Math.floor(Math.random() * 6)],
    emoji: ['❤️', '💕', '💗', '💖', '💘', '🎉', '🎊', '⭐', '✨'][Math.floor(Math.random() * 9)]
  }))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden"
    >
      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {confettiPieces.map((piece) => (
            <div
              key={piece.id}
              className="absolute confetti-piece"
              style={{
                left: `${piece.left}%`,
                animationDelay: `${piece.delay}s`,
                animationDuration: `${piece.duration}s`,
                fontSize: `${1 + Math.random()}rem`,
              }}
            >
              {piece.emoji}
            </div>
          ))}
        </div>
      )}

      {/* Background decorations */}
      <div className="absolute top-10 left-10 text-6xl animate-float opacity-20">🎉</div>
      <div className="absolute top-20 right-16 text-5xl animate-float opacity-20" style={{ animationDelay: '0.5s' }}>🎊</div>
      <div className="absolute bottom-20 left-16 text-6xl animate-float opacity-20" style={{ animationDelay: '1s' }}>✨</div>
      <div className="absolute bottom-10 right-10 text-5xl animate-float opacity-20" style={{ animationDelay: '1.5s' }}>⭐</div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-3xl z-10 text-center"
      >
        {/* Animated Birthday Text */}
        <AnimatePresence>
          {showContent && (
            <>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  delay: 0.3
                }}
                className="text-8xl md:text-9xl mb-6"
              >
                🎂
              </motion.div>

              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl text-text-dark mb-6"
              >
                Happy Birthday <br />
                <span className="gradient-text">My Love</span> <span className="text-heart-red">❤️</span> <span className="gradient-text">Disha</span>
              </motion.h1>

              {/* Romantic Message */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="glass rounded-3xl p-8 mb-8 shadow-card"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-xl md:text-2xl text-text-dark leading-relaxed"
                >
                  Thank you for being the best part of my life. 
                  <br /><br />
                  I can't wait to create many more memories with you. 
                  <br />
                  You make every day feel like a celebration! 🎉
                </motion.p>
              </motion.div>

              {/* Hearts animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex justify-center gap-4 mb-8"
              >
                {['💕', '💗', '💖', '💘', '💝'].map((heart, idx) => (
                  <motion.span
                    key={idx}
                    animate={{ 
                      scale: [1, 1.3, 1],
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      delay: idx * 0.2 
                    }}
                    className="text-4xl"
                  >
                    {heart}
                  </motion.span>
                ))}
              </motion.div>

              {/* Video Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <motion.button
                  onClick={() => setIsVideoOpen(true)}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 15px 50px rgba(255, 107, 157, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="shine-button text-white text-xl md:text-2xl font-semibold px-10 py-4 rounded-full shadow-button transition-all"
                >
                  Play Your Birthday Surprise 🎬
                </motion.button>
              </motion.div>

              {/* Footer */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="mt-8 text-text-muted"
              >
                Made with 💖 just for you
              </motion.p>
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>
              
              {/* YouTube Embed - Replace with your video ID */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VSMcJrfX1oo?autoplay=1"
                title="Birthday Surprise"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default FinalPage

