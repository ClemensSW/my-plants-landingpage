import './TargetGroups.css'

const TargetGroups = () => {
  return (
    <section className="target-groups section" id="zielgruppen">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Maßgeschneidert für jede Zielgruppe
          </h2>
          <p className="section-subtitle">
            My Plants passt sich den spezifischen Bedürfnissen von Ausbildungsbetrieben, 
            Ausbildern und Auszubildenden an.
          </p>
        </div>

        <div className="target-groups-grid">
          <div className="target-group-card featured">
            <div className="card-header">
              <div className="target-icon">🏢</div>
              <h3>Ausbildungsbetriebe</h3>
              <p className="target-subtitle">Für Gartenbaubetriebe, Baumschulen und grüne Unternehmen</p>
            </div>

            <div className="features-list">
              <h4>Ihre Vorteile:</h4>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <div>
                  <strong>Management-Dashboard</strong>
                  <p>Überwachen Sie den Lernfortschritt aller Auszubildenden in Echtzeit</p>
                </div>
              </div>
              
              <div className="feature-item">
                <span className="feature-icon">👥</span>
                <div>
                  <strong>Multi-User-Verwaltung</strong>
                  <p>Verwalten Sie Lizenzen und Zugriffsrechte für Ihr gesamtes Team</p>
                </div>
              </div>
              
              <div className="feature-item">
                <span className="feature-icon">📈</span>
                <div>
                  <strong>Fortschrittsberichte</strong>
                  <p>Detaillierte Analysen und Berichte für Ausbildungsnachweis</p>
                </div>
              </div>
              
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <div>
                  <strong>Betriebsspezifische Inhalte</strong>
                  <p>Fügen Sie eigene Pflanzen und betriebsspezifisches Wissen hinzu</p>
                </div>
              </div>
            </div>

            <div className="success-metrics">
              <div className="metric">
                <span className="metric-number">67%</span>
                <span className="metric-label">Schnellere Einarbeitung</span>
              </div>
              <div className="metric">
                <span className="metric-number">45%</span>
                <span className="metric-label">Weniger Nachfragen</span>
              </div>
            </div>

            <div className="cta-section">
              <a href="#demo" className="btn btn-primary">Betriebsdemo buchen</a>
              <p className="cta-note">Kostenlose Beratung für Ihr Unternehmen</p>
            </div>
          </div>

          <div className="target-group-card">
            <div className="card-header">
              <div className="target-icon">👨‍🏫</div>
              <h3>Ausbilder & Lehrer</h3>
              <p className="target-subtitle">Für Berufsschulen, Ausbilder und Fachdozenten</p>
            </div>

            <div className="features-list">
              <h4>Ihre Werkzeuge:</h4>
              <div className="feature-item">
                <span className="feature-icon">📚</span>
                <div>
                  <strong>Lehrplan-Integration</strong>
                  <p>Nahtlose Einbindung in bestehende Curricula und Lernziele</p>
                </div>
              </div>
              
              <div className="feature-item">
                <span className="feature-icon">✅</span>
                <div>
                  <strong>Bewertungstools</strong>
                  <p>Automatische Tests und Bewertungen mit detaillierten Analysen</p>
                </div>
              </div>
              
              <div className="feature-item">
                <span className="feature-icon">🎮</span>
                <div>
                  <strong>Interaktive Lernmodule</strong>
                  <p>Gamification-Elemente steigern Engagement und Motivation</p>
                </div>
              </div>
              
              <div className="feature-item">
                <span className="feature-icon">📱</span>
                <div>
                  <strong>Klassenraum-Modus</strong>
                  <p>Gemeinsame Aktivitäten und Wettbewerbe für die ganze Klasse</p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <blockquote>
                "My Plants hat meinen Unterricht revolutioniert. Die Schüler sind deutlich motivierter und lernen schneller."
              </blockquote>
              <cite>— Maria Schmidt, Berufsschule Münster</cite>
            </div>

            <div className="cta-section">
              <a href="#educator" className="btn btn-secondary">Für Bildungseinrichtungen</a>
            </div>
          </div>

          <div className="target-group-card">
            <div className="card-header">
              <div className="target-icon">🎓</div>
              <h3>Auszubildende</h3>
              <p className="target-subtitle">Für angehende Gärtner, Landschaftsbauer und Floristen</p>
            </div>

            <div className="features-list">
              <h4>Dein Lernbegleiter:</h4>
              <div className="feature-item">
                <span className="feature-icon">📸</span>
                <div>
                  <strong>Sofortige Pflanzen-ID</strong>
                  <p>Fotografiere Pflanzen und erhalte sofort alle wichtigen Informationen</p>
                </div>
              </div>
              
              <div className="feature-item">
                <span className="feature-icon">🧠</span>
                <div>
                  <strong>Intelligentes Lernsystem</strong>
                  <p>Personalisierte Wiederholungen basierend auf deinem Lernfortschritt</p>
                </div>
              </div>
              
              <div className="feature-item">
                <span className="feature-icon">🏆</span>
                <div>
                  <strong>Erfolgs-Tracking</strong>
                  <p>Verfolge deine Streaks, sammle Punkte und erreiche neue Level</p>
                </div>
              </div>
              
              <div className="feature-item">
                <span className="feature-icon">💬</span>
                <div>
                  <strong>KI-Botaniker Chat</strong>
                  <p>Stelle jederzeit Fragen an deinen persönlichen Botanik-Experten</p>
                </div>
              </div>
            </div>

            <div className="app-preview">
              <div className="phone-mini">
                <div className="screen-content">
                  <div className="app-element">📱 Scan & Learn</div>
                  <div className="app-element">🎯 Daily Challenges</div>
                  <div className="app-element">📊 Progress Tracking</div>
                </div>
              </div>
            </div>

            <div className="cta-section">
              <a href="#download" className="btn btn-primary">App herunterladen</a>
              <p className="cta-note">Kostenlos für alle Auszubildenden</p>
            </div>
          </div>
        </div>

        <div className="integration-section">
          <h3>Nahtlose Integration in Ihre Ausbildungsstruktur</h3>
          <div className="integration-flow">
            <div className="flow-step">
              <div className="flow-icon">🏢</div>
              <h4>Betrieb</h4>
              <p>Registriert Auszubildende und verwaltet Lizenzen</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="flow-icon">👨‍🏫</div>
              <h4>Ausbilder</h4>
              <p>Erstellt Lernpläne und überwacht Fortschritt</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="flow-icon">🎓</div>
              <h4>Auszubildende</h4>
              <p>Lernt interaktiv und dokumentiert Fortschritt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TargetGroups