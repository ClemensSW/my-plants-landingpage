import './PricingDemo.css'

const PricingDemo = () => {
  return (
    <section className="pricing-demo section" id="preise">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Transparente Preise für jede Betriebsgröße
          </h2>
          <p className="section-subtitle">
            Starten Sie kostenlos und wählen Sie das passende Paket für Ihre Ausbildung. 
            Alle Preise verstehen sich pro Monat und Nutzer.
          </p>
        </div>

        <div className="pricing-toggle">
          <span className="toggle-label">Monatlich</span>
          <div className="toggle-switch">
            <input type="checkbox" id="pricing-toggle" />
            <label htmlFor="pricing-toggle"></label>
          </div>
          <span className="toggle-label">
            Jährlich <span className="discount-badge">-20%</span>
          </span>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="card-header">
              <h3>Starter</h3>
              <p className="plan-description">Perfekt für kleine Betriebe und erste Tests</p>
            </div>
            
            <div className="price-section">
              <div className="price">
                <span className="currency">€</span>
                <span className="amount" data-monthly="0" data-yearly="0">0</span>
                <span className="period">/Monat</span>
              </div>
              <p className="price-note">30 Tage kostenlos, dann €9/Monat</p>
            </div>

            <div className="features-list">
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>Bis zu 3 Auszubildende</span>
              </div>
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>KI-Pflanzenerkennung (Pl@ntNet)</span>
              </div>
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>GBIF-Datenbank (100.000+ Pflanzen)</span>
              </div>
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>Grundlegende Lernstatistiken</span>
              </div>
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>Botaniker-ChatBot</span>
              </div>
              <div className="feature-item limited">
                <span className="feature-icon">~</span>
                <span>E-Mail Support</span>
              </div>
            </div>

            <div className="cta-section">
              <a href="#start" className="btn btn-secondary btn-large">Kostenlos starten</a>
              <p className="cta-note">Keine Kreditkarte erforderlich</p>
            </div>
          </div>

          <div className="pricing-card popular">
            <div className="popular-badge">Beliebteste Wahl</div>
            <div className="card-header">
              <h3>Professional</h3>
              <p className="plan-description">Ideal für mittlere Betriebe und Berufsschulen</p>
            </div>
            
            <div className="price-section">
              <div className="price">
                <span className="currency">€</span>
                <span className="amount" data-monthly="15" data-yearly="12">15</span>
                <span className="period">/Monat</span>
              </div>
              <p className="price-note">Pro Auszubildender/Schüler</p>
            </div>

            <div className="features-list">
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>Unbegrenzte Auszubildende</span>
              </div>
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>Alle Starter-Features</span>
              </div>
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>Erweiterte Analytics & Berichte</span>
              </div>
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>Management-Dashboard</span>
              </div>
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>Individuelle Lernpfade</span>
              </div>
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>Prioritäts-Support</span>
              </div>
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>Klassenraum-Modus</span>
              </div>
            </div>

            <div className="cta-section">
              <a href="#professional" className="btn btn-primary btn-large">Jetzt starten</a>
              <p className="cta-note">30 Tage Geld-zurück-Garantie</p>
            </div>
          </div>

          <div className="pricing-card">
            <div className="card-header">
              <h3>Enterprise</h3>
              <p className="plan-description">Für große Betriebe und Bildungseinrichtungen</p>
            </div>
            
            <div className="price-section">
              <div className="price">
                <span className="currency">€</span>
                <span className="amount" data-monthly="25" data-yearly="20">25</span>
                <span className="period">/Monat</span>
              </div>
              <p className="price-note">Pro Nutzer, ab 50 Lizenzen</p>
            </div>

            <div className="features-list">
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>Alle Professional-Features</span>
              </div>
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>Multi-Standort Verwaltung</span>
              </div>
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>SSO Integration</span>
              </div>
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>Dedizierter Account Manager</span>
              </div>
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>Individuelle Schulungen</span>
              </div>
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>API-Zugang</span>
              </div>
              <div className="feature-item included">
                <span className="feature-icon">✓</span>
                <span>24/7 Premium Support</span>
              </div>
            </div>

            <div className="cta-section">
              <a href="#enterprise" className="btn btn-secondary btn-large">Angebot anfordern</a>
              <p className="cta-note">Individuelle Preisverhandlung</p>
            </div>
          </div>
        </div>

        <div className="demo-section">
          <div className="demo-content">
            <div className="demo-text">
              <h3>Testen Sie My Plants risikofrei</h3>
              <p>
                Buchen Sie noch heute eine persönliche Demo und erleben Sie, 
                wie My Plants Ihre Ausbildung revolutioniert. Unsere Experten 
                zeigen Ihnen alle Features und beraten Sie bei der Auswahl des 
                passenden Pakets.
              </p>
              
              <div className="demo-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">🎯</span>
                  <span>Individuelle Beratung für Ihren Betrieb</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">⏱️</span>
                  <span>30-minütige Live-Demo</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">💡</span>
                  <span>Maßgeschneiderte Lösungsvorschläge</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🚀</span>
                  <span>Sofortige Implementierung möglich</span>
                </div>
              </div>
            </div>
            
            <div className="demo-form">
              <div className="form-container">
                <h4>Demo-Termin buchen</h4>
                <form className="demo-booking-form">
                  <div className="form-group">
                    <input type="text" placeholder="Ihr Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="E-Mail-Adresse" required />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Unternehmen" required />
                  </div>
                  <div className="form-group">
                    <select required>
                      <option value="">Betriebsgröße wählen</option>
                      <option value="small">1-10 Auszubildende</option>
                      <option value="medium">11-50 Auszubildende</option>
                      <option value="large">50+ Auszubildende</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select required>
                      <option value="">Gewünschter Termin</option>
                      <option value="morning">Vormittags</option>
                      <option value="afternoon">Nachmittags</option>
                      <option value="flexible">Flexibel</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary btn-large">
                    Demo buchen
                  </button>
                </form>
                <p className="form-note">
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-preview">
          <h3>Häufige Fragen zu Preisen</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Gibt es Rabatte für Bildungseinrichtungen?</h4>
              <p>Ja, wir bieten spezielle Bildungsrabatte von bis zu 40% für Berufsschulen und öffentliche Einrichtungen.</p>
            </div>
            <div className="faq-item">
              <h4>Kann ich jederzeit kündigen?</h4>
              <p>Ja, alle Abonnements können monatlich gekündigt werden. Bei jährlicher Zahlung erhalten Sie 20% Rabatt.</p>
            </div>
            <div className="faq-item">
              <h4>Was passiert nach der kostenlosen Testphase?</h4>
              <p>Nach 30 Tagen wechseln Sie automatisch zum gewählten Tarif. Sie können jederzeit kündigen oder das Paket wechseln.</p>
            </div>
            <div className="faq-item">
              <h4>Sind Updates und neue Features inklusive?</h4>
              <p>Ja, alle Updates, neue Features und Verbesserungen sind in Ihrem Abonnement enthalten.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingDemo