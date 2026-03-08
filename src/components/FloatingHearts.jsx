import { useEffect, useState } from 'react'

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const heartSymbols = ['❤️', '💕', '💗', '💖', '💘', '💝', '💞', '💟']
    const newHearts = []

    for (let i = 0; i < 25; i++) {
      newHearts.push({
        id: i,
        symbol: heartSymbols[Math.floor(Math.random() * heartSymbols.length)],
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 15 + Math.random() * 10,
        size: 1 + Math.random() * 1.5,
        opacity: 0.3 + Math.random() * 0.5
      })
    }

    setHearts(newHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute heart-float"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}rem`,
            opacity: heart.opacity,
          }}
        >
          {heart.symbol}
        </div>
      ))}
    </div>
  )
}

export default FloatingHearts

