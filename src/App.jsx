import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import WelcomePage from './components/WelcomePage'
import GiftBoxPage from './components/GiftBoxPage'
import QuizPage from './components/QuizPage'
import ReasonsPage from './components/ReasonsPage'
import GalleryPage from './components/GalleryPage'
import FinalPage from './components/FinalPage'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [quizScore, setQuizScore] = useState(0)

  const navigateTo = (page) => {
    setCurrentPage(page)
  }

  const handleQuizComplete = (answers, score) => {
    setQuizAnswers(answers)
    setQuizScore(score)
    setCurrentPage(4)
  }

  return (
    <div className="min-h-screen bg-gradient-romantic overflow-hidden">
      <AnimatePresence mode="wait">
        {currentPage === 1 && (
          <WelcomePage key="welcome" onNavigate={navigateTo} />
        )}
        {currentPage === 2 && (
          <GiftBoxPage key="gift" onNavigate={navigateTo} />
        )}
        {currentPage === 3 && (
          <QuizPage key="quiz" onComplete={handleQuizComplete} />
        )}
        {currentPage === 4 && (
          <ReasonsPage key="reasons" onNavigate={navigateTo} />
        )}
        {currentPage === 5 && (
          <GalleryPage key="gallery" onNavigate={navigateTo} />
        )}
        {currentPage === 6 && (
          <FinalPage key="final" />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

