import './KeyFeatures.css'

const KeyFeatures = () => {
  return (
    <section className="key-features section" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Innovative Features für modernen Pflanzenbau-Unterricht
          </h2>
          <p className="section-subtitle">
            Entdecken Sie die Technologien, die My Plants zur führenden Lern-App 
            für die Gartenbau-Ausbildung machen.
          </p>
        </div>

        <div className="features-showcase">
          <div className="feature-hero">
            <div className="feature-content">
              <div className="feature-badge">🤖 KI-Powered</div>
              <h3>Pl@ntNet KI-Integration</h3>
              <p>
                Unsere App nutzt die weltweit führende Pl@ntNet-API für die Pflanzenerkennung. 
                Mit über 95% Genauigkeit identifiziert die KI Pflanzen aus einem einzigen Foto 
                und liefert sofort detaillierte botanische Informationen.
              </p>
              <div className="feature-stats">
                <div className="stat">
                  <span className="stat-value">95%</span>
                  <span className="stat-label">Erkennungsgenauigkeit</span>
                </div>
                <div className="stat">
                  <span className="stat-value">&lt; 3s</span>
                  <span className="stat-label">Antwortzeit</span>
                </div>
                <div className="stat">
                  <span className="stat-value">30.000+</span>
                  <span className="stat-label">Erkannte Arten</span>
                </div>
              </div>
            </div>
            <div className="feature-visual">
              <div className="ai-demo">
                <div className="camera-view">
                  <div className="camera-overlay">
                    <div className="scan-area"></div>
                    <div className="scan-line"></div>
                  </div>
                  <div className="plant-silhouette"></div>
                </div>
                <div className="ai-result">
                  <div className="result-header">
                    <span className="ai-icon">🤖</span>
                    <span>KI-Analyse</span>
                  </div>
                  <div className="result-content">
                    <h4>Quercus robur</h4>
                    <p>Stieleiche • 95% Sicherheit</p>
                    <div className="result-details">
                      <span>🌳 Laubbaum</span>
                      <span>🍂 Sommergrün</span>
                      <span>🌍 Heimisch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h4>GBIF-Datenbank</h4>
              <p>
                Zugriff auf über 100.000 Pflanzenarten aus der Global Biodiversity 
                Information Facility - der weltweit größten Biodiversitätsdatenbank.
              </p>
              <div className="feature-highlight">
                <span>100.000+ Arten weltweit</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h4>Adaptives Lernsystem</h4>
              <p>
                Spaced Repetition Algorithmus passt Wiederholungsintervalle individuell 
                an Ihren Lernfortschritt an für optimale Langzeit-Behaltensraten.
              </p>
              <div className="feature-highlight">
                <span>+60% bessere Behaltensrate</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h4>KI-Botaniker Chat</h4>
              <p>
                Ihr persönlicher Botanik-Experte beantwortet Fragen zu Pflanzenpflege, 
                Standortansprüchen und botanischen Details rund um die Uhr.
              </p>
              <div className="feature-highlight">
                <span>24/7 Expertenberatung</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎮</div>
              <h4>Gamification System</h4>
              <p>
                Blätter-Punkte, Streak-Counter und Erfolgs-Badges motivieren zu 
                kontinuierlichem Lernen und schaffen nachhaltigen Lernerfolg.
              </p>
              <div className="feature-highlight">
                <span>3x höhere Motivation</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h4>Digitales Herbarium</h4>
              <p>
                Erstellen Sie Ihre persönliche Pflanzensammlung mit Notizen, 
                Fotos und Standortdaten für praxisnahe Dokumentation.
              </p>
              <div className="feature-highlight">
                <span>Unbegrenzte Sammlung</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h4>Fortschritts-Analytics</h4>
              <p>
                Detaillierte Lernstatistiken und Fortschrittsberichte für Ausbilder 
                und Auszubildende mit exportierbaren Nachweisen.
              </p>
              <div className="feature-highlight">
                <span>Komplette Transparenz</span>
              </div>
            </div>
          </div>

          <div className="technology-stack">
            <h3>Bewährte Technologien im Einsatz</h3>
            <div className="tech-partners">
              <div className="tech-partner">
                <div className="partner-logo">🌱</div>
                <div className="partner-info">
                  <h4>Pl@ntNet API</h4>
                  <p>Weltweit führende KI für Pflanzenerkennung</p>
                </div>
              </div>
              
              <div className="tech-partner">
                <div className="partner-logo">🌍</div>
                <div className="partner-info">
                  <h4>GBIF Database</h4>
                  <p>Größte globale Biodiversitätsdatenbank</p>
                </div>
              </div>
              
              <div className="tech-partner">
                <div className="partner-logo">🤖</div>
                <div className="partner-info">
                  <h4>OpenAI GPT</h4>
                  <p>Intelligenter Botaniker-Chatbot</p>
                </div>
              </div>
              
              <div className="tech-partner">
                <div className="partner-logo">☁️</div>
                <div className="partner-info">
                  <h4>Cloud Infrastructure</h4>
                  <p>Skalierbare und sichere Datenverarbeitung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KeyFeatures