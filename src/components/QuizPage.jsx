import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const quizQuestions = [
  {
    id: 1,
    question: "Where did we meet first?",
    options: ["School 🏫", "Coffee Shop ☕", "Manali 🌳", "Mall 🛒"],
    correct: 2 // Manali
  },
  {
    id: 2,
    question: "What is our favorite food together?",
    options: ["Pizza 🍕", "Siddu 🍣", "Pasta 🍝", "Burgers 🍔"],
    correct: 1 // Siddu
  },
  {
    id: 3,
    question: "What was the first gift I gave you? 🎁",
    options: ["Teddy Bear 🧸", "Chocolate Box 🍫", "Pendant 💍", "Rose 🌹"],
    correct: 2 // Pendant
  }
]

const QuizPage = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (index) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(index)
    
    const newAnswers = { ...answers, [currentQuestion]: index }
    setAnswers(newAnswers)

    // Calculate score
    const newScore = Object.keys(newAnswers).reduce((acc, qIdx) => {
      return acc + (newAnswers[qIdx] === quizQuestions[qIdx].correct ? 1 : 0)
    }, 0)
    setScore(newScore)

    // Move to next question after delay
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      } else {
        setShowResult(true)
        setTimeout(() => {
          onComplete(newAnswers, newScore)
        }, 2500)
      }
    }, 1000)
  }

  const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correct

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
    >
      {/* Background decorations */}
      <div className="absolute top-10 left-10 text-5xl animate-float opacity-20">💕</div>
      <div className="absolute top-30 right-15 text-4xl animate-float opacity-20" style={{ animationDelay: '0.5s' }}>💗</div>
      <div className="absolute bottom-20 left-20 text-5xl animate-float opacity-20" style={{ animationDelay: '1s' }}>💖</div>
      <div className="absolute bottom-10 right-10 text-4xl animate-float opacity-20" style={{ animationDelay: '1.5s' }}>💝</div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-2xl z-10"
      >
        {/* Header */}
        <motion.div className="text-center mb-8">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-display text-4xl md:text-5xl text-text-dark mb-2"
          >
            Our Memory Quiz <span className="text-heart-red">❤️</span>
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-text-muted"
          >
            Let's test how well you know us!
          </motion.p>
        </motion.div>

        {/* Progress indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-3 mb-8"
        >
          {quizQuestions.map((_, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className={`w-3 h-3 rounded-full ${
                idx < currentQuestion ? 'bg-pink-primary' :
                idx === currentQuestion ? 'bg-pink-deep' :
                'bg-pink-200'
              }`}
            />
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-3xl p-8 shadow-card"
            >
              {/* Question number */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-6"
              >
                <span className="bg-gradient-to-r from-pink-primary to-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </span>
              </motion.div>

              {/* Question */}
              <motion.h2
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl text-text-dark text-center mb-8 font-semibold"
              >
                {quizQuestions[currentQuestion].question}
              </motion.h2>

              {/* Options */}
              <div className="space-y-4">
                {quizQuestions[currentQuestion].options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    onClick={() => handleAnswerSelect(idx)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-2xl text-left text-lg font-medium transition-all duration-300 ${
                      selectedAnswer === null
                        ? 'bg-white/50 hover:bg-white/80 text-text-dark hover:shadow-lg'
                        : selectedAnswer === idx
                          ? isCorrect
                            ? 'bg-green-100 text-green-700 border-2 border-green-400'
                            : 'bg-red-100 text-red-700 border-2 border-red-400'
                          : idx === quizQuestions[currentQuestion].correct && selectedAnswer !== null
                            ? 'bg-green-100 text-green-700 border-2 border-green-400'
                            : 'bg-white/30 text-text-muted'
                    }`}
                  >
                    <span className="mr-3">{option}</span>
                    {selectedAnswer !== null && (
                      <span className="float-right">
                        {idx === quizQuestions[currentQuestion].correct ? '✓' : 
                         selectedAnswer === idx ? '✗' : ''}
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-3xl p-12 text-center shadow-card"
            >
              {/* Celebration emoji */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 0.5 }}
                className="text-8xl mb-6"
              >
                {score >= 2 ? '🎉' : '💕'}
              </motion.div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-display text-4xl md:text-5xl text-text-dark mb-4"
              >
                {score >= 2 ? 'Wow! You know us so well ❤️' : 'Thanks for playing! 💖'}
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-text-muted mb-6"
              >
                You got {score} out of {quizQuestions.length} questions right!
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center gap-2 mb-4"
              >
                {Array.from({ length: quizQuestions.length }).map((_, idx) => (
                  <span key={idx} className="text-3xl">
                    {idx < score ? '🌟' : '💫'}
                  </span>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-text-muted"
              >
                Unlocking next surprise...
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default QuizPage

