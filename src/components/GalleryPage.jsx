import { motion } from 'framer-motion'

const galleryImages = [
  {
    id: 1,
    placeholder: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop',
    alt: 'Our first date',
    caption: 'Our first date 💕'
  },
  {
    id: 2,
    placeholder: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=400&fit=crop',
    alt: 'Beach day together',
    caption: 'Beach day together 🌊'
  },
  {
    id: 3,
    placeholder: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=400&fit=crop',
    alt: 'Movie night',
    caption: 'Movie night 🍿'
  },
  {
    id: 4,
    placeholder: 'https://images.unsplash.com/photo-1487452066049-a710f7296400?w=400&h=400&fit=crop',
    alt: 'Birthday celebration',
    caption: 'Your birthday 🎂'
  },
  {
    id: 5,
    placeholder: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop',
    alt: 'Travel adventure',
    caption: 'Our adventure ✈️'
  },
  {
    id: 6,
    placeholder: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=400&fit=crop',
    alt: 'Special moment',
    caption: 'My favorite moment ❤️'
  }
]

const GalleryPage = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center px-4 py-8"
    >
      {/* Background decorations */}
      <div className="absolute top-10 left-10 text-5xl animate-float opacity-20">📸</div>
      <div className="absolute top-20 right-16 text-4xl animate-float opacity-20" style={{ animationDelay: '0.5s' }}>💕</div>
      <div className="absolute bottom-20 left-16 text-5xl animate-float opacity-20" style={{ animationDelay: '1s' }}>✨</div>
      <div className="absolute bottom-10 right-10 text-4xl animate-float opacity-20" style={{ animationDelay: '1.5s' }}>⭐</div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-5xl z-10"
      >
        {/* Header */}
        <motion.div className="text-center mb-10">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-display text-4xl md:text-5xl text-text-dark mb-2"
          >
            Some of my favorite memories with you <span className="text-heart-red">❤️</span>
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-text-muted"
          >
            Every moment with you is a treasure
          </motion.p>
        </motion.div>

        {/* Photo Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {galleryImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative"
            >
              {/* Image frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-card bg-white p-2">
                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-pink-primary z-10"></div>
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-pink-primary z-10"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-pink-primary z-10"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-pink-primary z-10"></div>
                
                {/* Image */}
                <div className="relative rounded-xl overflow-hidden aspect-square">
                  <img
                    src={image.placeholder}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-center font-medium">{image.caption}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Heart decoration */}
              <motion.div
                className="absolute -top-2 -right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.2 }}
              >
                💖
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <button
            onClick={() => onNavigate(6)}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 40px rgba(255, 107, 157, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="shine-button text-white text-xl md:text-2xl font-semibold px-10 py-4 rounded-full shadow-button transition-all"
          >
            Ready for the Final Surprise? 🎉
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default GalleryPage

