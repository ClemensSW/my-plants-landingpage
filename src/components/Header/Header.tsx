import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#home" className="nav-brand">
            <img 
              src="/images/logos/my-plants-logo.svg" 
              alt="My Plants - Gartenbau Lern-App" 
              className="logo" 
            />
            <span className="brand-text">My Plants</span>
          </a>
          
          <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
            <li><a href="#features" className="nav-link">Features</a></li>
            <li><a href="#zielgruppen" className="nav-link">Zielgruppen</a></li>
            <li><a href="#preise" className="nav-link">Preise</a></li>
            <li><a href="#faq" className="nav-link">FAQ</a></li>
            <li><a href="#kontakt" className="nav-link">Kontakt</a></li>
          </ul>

          <div className="nav-actions">
            <a href="#demo" className="btn btn-secondary">Demo buchen</a>
            <a href="#download" className="btn btn-primary">App testen</a>
          </div>

          <button 
            className={`hamburger ${isMenuOpen ? 'hamburger-active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menü öffnen"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header