import { useState, useEffect } from 'react'
import './FloatingDownload.css'

const FloatingDownload = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Zeige Button nach dem Hero-Bereich
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="floating-download">
      <div className="floating-content">
        <div className="floating-text">
          <span className="app-name">My Plants</span>
          <span className="app-rating">★★★★★ 4.9</span>
        </div>
        <a href="#download" className="floating-button">
          Kostenlos laden
        </a>
      </div>
    </div>
  )
}

export default FloatingDownload