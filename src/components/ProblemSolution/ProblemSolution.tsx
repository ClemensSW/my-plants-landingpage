import './ProblemSolution.css'

const ProblemSolution = () => {
  return (
    <section className="problem-solution section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Warum die Gartenbau-Ausbildung eine digitale Lösung braucht
          </h2>
          <p className="section-subtitle">
            Traditionelle Lernmethoden stoßen an ihre Grenzen. My Plants bietet die Antwort auf moderne Ausbildungsanforderungen.
          </p>
        </div>

        <div className="problem-solution-grid">
          <div className="problem-section">
            <div className="section-badge problem-badge">Herausforderungen</div>
            <h3 className="subsection-title">Aktuelle Probleme in der Ausbildung</h3>
            
            <div className="problem-cards">
              <div className="problem-card">
                <div className="problem-icon">📚</div>
                <h4>Veraltete Lehrmaterialien</h4>
                <p>Schwere Bücher, statische Bilder und begrenzte Artenvielfalt in gedruckten Werken</p>
              </div>
              
              <div className="problem-card">
                <div className="problem-icon">⏰</div>
                <h4>Zeitaufwändige Bestimmung</h4>
                <p>Stundenlange Suche in Bestimmungsschlüsseln ohne Erfolgskontrolle</p>
              </div>
              
              <div className="problem-card">
                <div className="problem-icon">📊</div>
                <h4>Fehlender Lernfortschritt</h4>
                <p>Keine Möglichkeit, individuellen Fortschritt zu verfolgen oder anzupassen</p>
              </div>
              
              <div className="problem-card">
                <div className="problem-icon">🎯</div>
                <h4>Mangelnde Motivation</h4>
                <p>Trockener Lernstoff ohne interaktive Elemente oder Gamification</p>
              </div>
            </div>
          </div>

          <div className="solution-section">
            <div className="section-badge solution-badge">Unsere Lösung</div>
            <h3 className="subsection-title">My Plants revolutioniert das Lernen</h3>
            
            <div className="solution-cards">
              <div className="solution-card">
                <div className="solution-icon">🤖</div>
                <h4>KI-gestützte Erkennung</h4>
                <p>Sofortige Pflanzenbestimmung per Foto mit 95% Genauigkeit durch Pl@ntNet-Integration</p>
                <div className="benefit-tag">Zeitersparnis: 90%</div>
              </div>
              
              <div className="solution-card">
                <div className="solution-icon">🌐</div>
                <h4>Umfassende Datenbank</h4>
                <p>Über 100.000 Pflanzenarten aus der GBIF-Datenbank mit detailliertem Wissen</p>
                <div className="benefit-tag">100x mehr Arten</div>
              </div>
              
              <div className="solution-card">
                <div className="solution-icon">📈</div>
                <h4>Adaptives Lernsystem</h4>
                <p>Spaced Repetition Algorithmus passt sich individuell an Lernfortschritt an</p>
                <div className="benefit-tag">+60% Behaltensrate</div>
              </div>
              
              <div className="solution-card">
                <div className="solution-icon">🎮</div>
                <h4>Gamification & Motivation</h4>
                <p>Streak-System, Blätter-Punkte und Erfolgsstatistiken motivieren kontinuierlich</p>
                <div className="benefit-tag">3x höhere Motivation</div>
              </div>
            </div>
          </div>
        </div>

        <div className="transformation-visual">
          <div className="before-after">
            <div className="before">
              <h4>Vorher</h4>
              <div className="process-step">
                <span className="step-number">1</span>
                <span>Schweres Buch aufschlagen</span>
              </div>
              <div className="process-step">
                <span className="step-number">2</span>
                <span>Bestimmungsschlüssel durcharbeiten</span>
              </div>
              <div className="process-step">
                <span className="step-number">3</span>
                <span>30+ Minuten investieren</span>
              </div>
              <div className="process-step">
                <span className="step-number">4</span>
                <span>Unsichere Bestimmung</span>
              </div>
              <div className="time-indicator problem-time">⏱️ 30+ Min</div>
            </div>

            <div className="arrow">→</div>

            <div className="after">
              <h4>Mit My Plants</h4>
              <div className="process-step success">
                <span className="step-number">1</span>
                <span>Foto aufnehmen</span>
              </div>
              <div className="process-step success">
                <span className="step-number">2</span>
                <span>KI analysiert automatisch</span>
              </div>
              <div className="process-step success">
                <span className="step-number">3</span>
                <span>Sofortige Bestimmung</span>
              </div>
              <div className="process-step success">
                <span className="step-number">4</span>
                <span>Detaillierte Informationen</span>
              </div>
              <div className="time-indicator solution-time">⚡ 30 Sek</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution