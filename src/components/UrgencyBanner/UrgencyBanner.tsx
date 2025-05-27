import { useState } from 'react'
import './UrgencyBanner.css'

const UrgencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="urgency-banner">
      <div className="container">
        <div className="banner-content">
          <div className="banner-text">
            <span className="highlight">🎉 Neu:</span> My Plants 2.1 ist da! 
            <strong>30 Tage kostenlos testen</strong> + exklusive Features für Frühanwender
          </div>
          <div className="banner-actions">
            <a href="#download" className="banner-cta">
              Jetzt herunterladen
            </a>
            <button 
              className="banner-close"
              onClick={() => setIsVisible(false)}
              aria-label="Banner schließen"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UrgencyBanner