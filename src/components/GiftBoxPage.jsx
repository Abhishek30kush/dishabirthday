import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GiftBoxPage = ({ onNavigate }) => {
  const [isOpened, setIsOpened] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleGiftClick = () => {
    setIsOpened(true)
    setTimeout(() => {
      onNavigate(3)
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 relative"
    >
      {/* Background decorations */}
      <div className="absolute top-10 left-10 text-6xl animate-float opacity-20">🎈</div>
      <div className="absolute top-20 right-20 text-5xl animate-float opacity-20" style={{ animationDelay: '1s' }}>🎀</div>
      <div className="absolute bottom-20 left-20 text-6xl animate-float opacity-20" style={{ animationDelay: '0.5s' }}>✨</div>
      <div className="absolute bottom-10 right-10 text-5xl animate-float opacity-20" style={{ animationDelay: '1.5s' }}>⭐</div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center z-10"
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-display text-4xl md:text-5xl text-text-dark mb-4"
        >
          Your Surprise Awaits! 🎁
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-text-muted mb-12"
        >
          Tap the gift to unlock your birthday surprises
        </motion.p>

        {/* Gift Box */}
        <motion.div
          className="relative inline-block cursor-pointer"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={handleGiftClick}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        >
          <AnimatePresence mode="wait">
            {!isOpened ? (
              <motion.div
                key="closed"
                animate={{
                  y: isHovered ? -10 : 0,
                  rotate: isHovered ? [0, -3, 3, 0] : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Gift Box Body */}
                <div className="relative">
                  {/* Box ribbon vertical */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-8 bg-gradient-to-b from-pink-deep to-purple transform -translate-x-1/2 rounded-lg"></div>
                  
                  {/* Box body */}
                  <motion.div
                    className="w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-pink-primary to-pink-deep rounded-2xl shadow-romantic flex items-center justify-center"
                    animate={isHovered ? { 
                      boxShadow: "0 25px 80px rgba(255, 107, 157, 0.5)"
                    } : {}}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Decorative pattern */}
                    <div className="absolute inset-4 border-2 border-white/30 rounded-xl"></div>
                    <div className="absolute inset-8 border border-white/20 rounded-lg"></div>
                  </motion.div>

                  {/* Box lid */}
                  <motion.div
                    className="absolute -top-6 left-0 right-0 h-12 bg-gradient-to-br from-pink-primary to-purple rounded-t-xl"
                    animate={isHovered ? { y: -5 } : {}}
                    style={{ margin: '0 8px' }}
                  >
                    {/* Lid ribbon */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-8 bg-gradient-to-b from-purple to-pink-deep transform -translate-x-1/2"></div>
                    {/* Bow */}
                    <motion.div
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      animate={isHovered ? { scale: 1.1 } : {}}
                    >
                      <span className="text-5xl">🎀</span>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Sparkles around gift */}
                {isHovered && (
                  <>
                    <motion.span
                      className="absolute -top-4 -right-4 text-2xl"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                    >
                      ✨
                    </motion.span>
                    <motion.span
                      className="absolute top-1/2 -left-8 text-xl"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      💫
                    </motion.span>
                    <motion.span
                      className="absolute -bottom-2 -right-6 text-2xl"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      ⭐
                    </motion.span>
                  </>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="opened"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative"
              >
                {/* Explosion effect */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.5, 2] }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="text-9xl">🎉</span>
                </motion.div>

                {/* Open box with contents */}
                <motion.div
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: -45 }}
                  transition={{ duration: 0.5 }}
                  className="w-48 h-48 md:w-56 md:h-56 relative"
                >
                  {/* Box bottom (shown from angle) */}
                  <div className="absolute bottom-0 w-full h-32 bg-gradient-to-br from-pink-deep to-purple rounded-b-2xl"></div>
                  
                  {/* Contents coming out */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: -80, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
                  >
                    <span className="text-7xl">💝</span>
                  </motion.div>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: -60, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="absolute bottom-24 left-1/4"
                  >
                    <span className="text-5xl">❤️</span>
                  </motion.div>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: -60, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute bottom-24 right-1/4"
                  >
                    <span className="text-5xl">✨</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Instruction text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpened ? 0 : 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-text-muted"
        >
          {isOpened ? 'Unwrapping your surprise...' : '👆 Tap the gift!'}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default GiftBoxPage

