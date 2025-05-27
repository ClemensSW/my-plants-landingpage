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
              <a href="#download" className="btn btn-primary btn-large">
                Kostenlos testen
              </a>
              <a href="#demo" className="btn btn-secondary btn-large">
                Demo buchen
              </a>
            </div>
            <p className="hero-note">
              ✓ 30 Tage kostenlos testen • ✓ Keine Kreditkarte erforderlich • ✓ Sofortige Einrichtung
            </p>
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
                  </div>
                  <div className="app-content">
                    <div className="plant-card">
                      <div className="plant-image"></div>
                      <div className="plant-info">
                        <h3>Quercus robur</h3>
                        <p>Stieleiche</p>
                      </div>
                    </div>
                    <div className="feature-icons">
                      <div className="feature-icon">🔍</div>
                      <div className="feature-icon">📷</div>
                      <div className="feature-icon">🤖</div>
                      <div className="feature-icon">📚</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-card floating-1">
                <span className="emoji">🌱</span>
                <span>KI-Erkennung</span>
              </div>
              <div className="floating-card floating-2">
                <span className="emoji">📊</span>
                <span>Lernfortschritt</span>
              </div>
              <div className="floating-card floating-3">
                <span className="emoji">🎯</span>
                <span>Adaptives Lernen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection