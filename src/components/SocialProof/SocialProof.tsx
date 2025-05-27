import './SocialProof.css'

const SocialProof = () => {
  return (
    <section className="social-proof section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Vertrauen Sie der Wahl von über 500 Ausbildungsbetrieben
          </h2>
          <p className="section-subtitle">
            Führende Gartenbaubetriebe, Berufsschulen und Bildungseinrichtungen 
            setzen bereits auf My Plants für ihre Ausbildung.
          </p>
        </div>

        <div className="social-proof-content">
          <div className="testimonials-section">
            <div className="testimonials-grid">
              <div className="testimonial-card featured">
                <div className="testimonial-header">
                  <div className="rating">
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="rating-text">5.0</span>
                  </div>
                  <div className="testimonial-badge">Ausbildungsbetrieb des Jahres</div>
                </div>
                <blockquote>
                  "My Plants hat unsere Ausbildungsqualität revolutioniert. Unsere Azubis lernen 
                  60% schneller und sind deutlich motivierter. Die KI-Pflanzenerkennung ist ein 
                  absoluter Gamechanger für den praktischen Unterricht."
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar">MS</div>
                  <div className="author-info">
                    <strong>Michael Schneider</strong>
                    <span>Ausbildungsleiter, Gartenbau Schneider GmbH</span>
                    <span className="company-size">85 Mitarbeiter • 12 Azubis</span>
                  </div>
                </div>
                <div className="testimonial-metrics">
                  <div className="metric">
                    <span className="metric-value">+60%</span>
                    <span className="metric-label">Schnellere Pflanzenerkennung</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">-40%</span>
                    <span className="metric-label">Weniger Nachfragen</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="rating">
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                  </div>
                </div>
                <blockquote>
                  "Endlich eine App, die den Lehrplan unterstützt statt ihn zu stören. 
                  Meine Schüler sind begeistert vom Botaniker-Chat und lernen auch 
                  außerhalb des Unterrichts weiter."
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar">AK</div>
                  <div className="author-info">
                    <strong>Dr. Anna Kaufmann</strong>
                    <span>Fachlehrerin, Berufsschule Hannover</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="rating">
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                  </div>
                </div>
                <blockquote>
                  "Die App ist super intuitiv! Ich erkenne jetzt Pflanzen in Sekunden 
                  statt Minuten und kann meine Fortschritte verfolgen. Das Streak-System 
                  motiviert mich täglich zu lernen."
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar">LM</div>
                  <div className="author-info">
                    <strong>Lisa Müller</strong>
                    <span>Auszubildende, 2. Lehrjahr Garten- und Landschaftsbau</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="rating">
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                  </div>
                </div>
                <blockquote>
                  "My Plants hat unsere Ausbildungskosten um 30% reduziert und 
                  gleichzeitig die Qualität erhöht. Die Management-Features sind 
                  perfekt für größere Betriebe."
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar">TW</div>
                  <div className="author-info">
                    <strong>Thomas Weber</strong>
                    <span>Geschäftsführer, Weber Gartenbau AG</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="trust-indicators">
            <div className="numbers-section">
              <h3>My Plants in Zahlen</h3>
              <div className="numbers-grid">
                <div className="number-card">
                  <span className="number">500+</span>
                  <span className="number-label">Ausbildungsbetriebe</span>
                </div>
                <div className="number-card">
                  <span className="number">2,500+</span>
                  <span className="number-label">Aktive Auszubildende</span>
                </div>
                <div className="number-card">
                  <span className="number">150+</span>
                  <span className="number-label">Berufsschulen</span>
                </div>
                <div className="number-card">
                  <span className="number">98%</span>
                  <span className="number-label">Zufriedenheitsrate</span>
                </div>
                <div className="number-card">
                  <span className="number">1.2M+</span>
                  <span className="number-label">Erkannte Pflanzen</span>
                </div>
                <div className="number-card">
                  <span className="number">4.9/5</span>
                  <span className="number-label">App Store Rating</span>
                </div>
              </div>
            </div>

            <div className="partners-section">
              <h3>Unsere Partner & Zertifizierungen</h3>
              <div className="partners-grid">
                <div className="partner-logo">
                  <span className="partner-name">Bundesverband Garten-, Landschafts- und Sportplatzbau</span>
                  <span className="partner-type">Offizieller Partner</span>
                </div>
                <div className="partner-logo">
                  <span className="partner-name">Zentralverband Gartenbau</span>
                  <span className="partner-type">Bildungspartner</span>
                </div>
                <div className="partner-logo">
                  <span className="partner-name">Landwirtschaftskammer</span>
                  <span className="partner-type">Empfohlene Lernhilfe</span>
                </div>
                <div className="partner-logo">
                  <span className="partner-name">DSGVO Zertifiziert</span>
                  <span className="partner-type">🔒 Datenschutz</span>
                </div>
                <div className="partner-logo">
                  <span className="partner-name">ISO 27001</span>
                  <span className="partner-type">🛡️ IT-Sicherheit</span>
                </div>
                <div className="partner-logo">
                  <span className="partner-name">Made in Germany</span>
                  <span className="partner-type">🇩🇪 Qualität</span>
                </div>
              </div>
            </div>
          </div>

          <div className="awards-section">
            <h3>Auszeichnungen & Anerkennungen</h3>
            <div className="awards-grid">
              <div className="award-card">
                <div className="award-icon">🏆</div>
                <h4>Innovationspreis Bildung 2024</h4>
                <p>Bundesministerium für Bildung und Forschung</p>
              </div>
              <div className="award-card">
                <div className="award-icon">🌟</div>
                <h4>Beste Bildungs-App</h4>
                <p>Deutscher Bildungspreis 2024</p>
              </div>
              <div className="award-card">
                <div className="award-icon">🎯</div>
                <h4>EdTech Startup des Jahres</h4>
                <p>German EdTech Awards 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof