import AppStoreButtons from '../AppStoreButtons/AppStoreButtons'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Die digitale Revolution für die <span className="highlight">Gartenbau-Ausbildung</span>
            </h1>
            <p className="hero-subtitle">
              My Plants verbindet KI-gestützte Pflanzenerkennung mit adaptivem Lernen. 
              Über 100.000 Pflanzen aus der GBIF-Datenbank, Pl@ntNet-Integration und 
              personalisierte Lernpfade revolutionieren Ihre Ausbildung.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">100.000+</span>
                <span className="stat-label">Pflanzen</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">KI-Genauigkeit</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Betriebe</span>
              </div>
            </div>

            <div className="hero-actions">
              <div className="primary-cta">
                <AppStoreButtons variant="primary" size="large" />
              </div>
              
              <div className="secondary-actions">
                <a href="#demo" className="btn btn-secondary btn-large demo-btn">
                  <span className="btn-icon">📺</span>
                  Live Demo ansehen
                </a>
                <a href="#preise" className="btn btn-outline btn-large">
                  <span className="btn-icon">💰</span>
                  Preise & Pakete
                </a>
              </div>
            </div>

            <div className="hero-note">
              <div className="trust-indicators">
                <span className="trust-item">
                  <span className="trust-icon">✅</span>
                  30 Tage kostenlos testen
                </span>
                <span className="trust-item">
                  <span className="trust-icon">🚀</span>
                  Sofortige Einrichtung
                </span>
                <span className="trust-item">
                  <span className="trust-icon">🔒</span>
                  DSGVO-konform
                </span>
              </div>
              
              <div className="social-proof-mini">
                <div className="rating-stars">
                  <span>⭐⭐⭐⭐⭐</span>
                  <span className="rating-text">4.9/5 (2.500+ Bewertungen)</span>
                </div>
                <p className="download-count">Bereits über 10.000 Downloads!</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-preview">
                  <div className="app-header">
                    <div className="app-nav">
                      <div className="nav-dot"></div>
                      <div className="nav-dot"></div>
                      <div className="nav-dot"></div>
                    </div>
                    <div className="app-title">My Plants</div>
                  </div>
                  <div className="app-content">
                    <div className="scan-interface">
                      <div className="scan-viewfinder">
                        <div className="scan-corners">
                          <div className="corner top-left"></div>
                          <div className="corner top-right"></div>
                          <div className="corner bottom-left"></div>
                          <div className="corner bottom-right"></div>
                        </div>
                        <div className="plant-preview"></div>
                        <div className="scan-line"></div>
                      </div>
                      <div className="scan-button">
                        <span className="camera-icon">📷</span>
                      </div>
                    </div>
                    
                    <div className="plant-result">
                      <div className="result-card">
                        <div className="plant-image"></div>
                        <div className="plant-info">
                          <h3>Quercus robur</h3>
                          <p>Stieleiche</p>
                          <div className="confidence">95% Sicherheit</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="feature-pills">
                      <div className="pill">🤖 KI-Erkennung</div>
                      <div className="pill">📚 Lernmodus</div>
                      <div className="pill">📊 Fortschritt</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Download-Pulse Animation */}
              <div className="download-pulse">
                <div className="pulse-ring"></div>
                <div className="pulse-ring delay-1"></div>
                <div className="pulse-ring delay-2"></div>
                <span className="pulse-text">Jetzt downloaden!</span>
              </div>
            </div>

            <div className="floating-elements">
              <div className="floating-card floating-1">
                <span className="emoji">🌱</span>
                <div className="card-text">
                  <strong>Sofortiger Scan</strong>
                  <span>95% Genauigkeit</span>
                </div>
              </div>
              <div className="floating-card floating-2">
                <span className="emoji">📊</span>
                <div className="card-text">
                  <strong>Lernfortschritt</strong>
                  <span>Personalisiert</span>
                </div>
              </div>
              <div className="floating-card floating-3">
                <span className="emoji">🎯</span>
                <div className="card-text">
                  <strong>Adaptives Lernen</strong>
                  <span>Spaced Repetition</span>
                </div>
              </div>
              <div className="floating-card floating-4">
                <span className="emoji">💬</span>
                <div className="card-text">
                  <strong>KI-Botaniker</strong>
                  <span>24/7 Hilfe</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Zusätzlicher Download-CTA Bereich */}
        <div className="hero-bottom-cta">
          <div className="bottom-cta-content">
            <h3>Starten Sie noch heute Ihre digitale Gartenbau-Ausbildung</h3>
            <p>Über 500 Betriebe vertrauen bereits auf My Plants</p>
            <AppStoreButtons variant="secondary" size="normal" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection