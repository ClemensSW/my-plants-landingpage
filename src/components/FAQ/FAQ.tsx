import { useState } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqData = [
    {
      category: "Allgemein",
      questions: [
        {
          question: "Was ist My Plants und wie funktioniert die App?",
          answer: "My Plants ist eine innovative Lern-App für die Gartenbau-Ausbildung, die KI-gestützte Pflanzenerkennung mit adaptivem Lernen verbindet. Die App nutzt die Pl@ntNet-API für die Identifikation von über 100.000 Pflanzenarten aus der GBIF-Datenbank und bietet personalisierte Lernpfade mit Spaced Repetition Technologie."
        },
        {
          question: "Wie genau ist die KI-Pflanzenerkennung?",
          answer: "Unsere KI-Pflanzenerkennung basiert auf der weltweit führenden Pl@ntNet-API und erreicht eine Genauigkeit von über 95%. Die Erkennungsrate hängt von der Bildqualität und der Verbreitung der Pflanzenart ab. Seltene oder regional spezifische Arten können eine niedrigere Erkennungsrate haben."
        },
        {
          question: "Welche Pflanzenarten sind in der Datenbank enthalten?",
          answer: "My Plants greift auf die GBIF-Datenbank zu, die über 100.000 Pflanzenarten weltweit umfasst. Der Fokus liegt auf mitteleuropäischen Arten, die für die deutsche Gartenbau-Ausbildung relevant sind. Die Datenbank wird kontinuierlich erweitert und aktualisiert."
        },
        {
          question: "Kann ich My Plants offline nutzen?",
          answer: "Grundfunktionen wie das Durchsuchen bereits gespeicherter Pflanzen und das Lernen mit heruntergeladenen Inhalten funktionieren offline. Für die KI-Pflanzenerkennung und den Botaniker-Chat ist jedoch eine Internetverbindung erforderlich."
        }
      ]
    },
    {
      category: "Für Betriebe",
      questions: [
        {
          question: "Wie kann ich meine Auszubildenden verwalten und deren Fortschritt verfolgen?",
          answer: "Das Management-Dashboard ermöglicht es Ihnen, alle Auszubildenden zu registrieren, Lernziele zu setzen und detaillierte Fortschrittsberichte einzusehen. Sie erhalten wöchentliche Berichte über Lernaktivitäten, Schwachstellen und Erfolge jedes Einzelnen."
        },
        {
          question: "Können wir eigene Pflanzen und betriebsspezifische Inhalte hinzufügen?",
          answer: "Ja, im Professional- und Enterprise-Paket können Sie eigene Pflanzenbilder, Beschreibungen und betriebsspezifische Informationen zur App hinzufügen. Diese werden dann in die Lernmodule Ihrer Auszubildenden integriert."
        },
        {
          question: "Wie funktioniert die Integration in bestehende Ausbildungsstrukturen?",
          answer: "My Plants lässt sich nahtlos in bestehende Ausbildungspläne integrieren. Wir unterstützen Sie bei der Einrichtung und bieten Schulungen für Ausbilder an. Die App ergänzt den praktischen Unterricht und ersetzt keine traditionellen Lernmethoden."
        },
        {
          question: "Welche Berichte und Analysen erhalte ich als Ausbilder?",
          answer: "Sie erhalten detaillierte Berichte über Lernzeiten, erkannte Pflanzenarten, Fortschritte in verschiedenen Kategorien, Schwachstellen und Verbesserungen. Diese Daten können für Ausbildungsnachweise und Bewertungen exportiert werden."
        }
      ]
    },
    {
      category: "Technische Fragen",
      questions: [
        {
          question: "Auf welchen Geräten läuft My Plants?",
          answer: "My Plants ist verfügbar für iOS (iPhone/iPad) ab Version 13.0 und Android ab Version 8.0. Eine Web-Anwendung für Desktop-Computer ist in Entwicklung und wird 2025 verfügbar sein."
        },
        {
          question: "Wie sicher sind meine Daten bei My Plants?",
          answer: "Datenschutz hat höchste Priorität. My Plants ist DSGVO-konform und ISO 27001 zertifiziert. Alle Daten werden verschlüsselt in deutschen Rechenzentren gespeichert. Wir verkaufen keine Daten an Dritte und verwenden sie ausschließlich zur Verbesserung der Lernerfahrung."
        },
        {
          question: "Kann My Plants in unsere bestehende IT-Infrastruktur integriert werden?",
          answer: "Ja, für Enterprise-Kunden bieten wir SSO-Integration (Single Sign-On), API-Zugang und die Möglichkeit zur Integration in bestehende Lernmanagementsysteme. Sprechen Sie uns für individuelle Lösungen an."
        },
        {
          question: "Was passiert bei technischen Problemen oder Ausfällen?",
          answer: "Unser technischer Support ist je nach Paket per E-Mail oder Telefon erreichbar. Enterprise-Kunden erhalten 24/7 Premium-Support. Wir haben eine Verfügbarkeit von 99,9% und regelmäßige Backups aller Daten."
        }
      ]
    },
    {
      category: "Preise & Abonnements",
      questions: [
        {
          question: "Wie funktioniert die kostenlose Testphase?",
          answer: "Die 30-tägige Testphase ist vollständig kostenlos und erfordert keine Kreditkarte. Sie haben Zugang zu allen Starter-Features und können bis zu 3 Auszubildende registrieren. Nach Ablauf der Testphase wählen Sie ein passendes Abo oder die Nutzung wird automatisch beendet."
        },
        {
          question: "Gibt es Rabatte für Bildungseinrichtungen?",
          answer: "Ja, Berufsschulen, Universitäten und öffentliche Bildungseinrichtungen erhalten spezielle Bildungsrabatte von bis zu 40%. Kontaktieren Sie uns für ein individuelles Angebot."
        },
        {
          question: "Kann ich mein Abonnement jederzeit ändern oder kündigen?",
          answer: "Ja, Sie können Ihr Abonnement jederzeit über das Dashboard upgraden, downgraden oder kündigen. Bei monatlicher Zahlung gilt eine Kündigungsfrist von 30 Tagen, bei jährlicher Zahlung bis zum Ende der Laufzeit."
        },
        {
          question: "Was ist in den verschiedenen Paketen enthalten?",
          answer: "Der Starter-Plan ist ideal für kleine Betriebe (bis 3 Azubis), Professional für mittlere Betriebe mit erweiterten Features, und Enterprise für große Organisationen mit individuellen Anpassungen. Detaillierte Vergleiche finden Sie in unserer Preisübersicht."
        }
      ]
    }
  ]

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Häufig gestellte Fragen
          </h2>
          <p className="section-subtitle">
            Hier finden Sie Antworten auf die wichtigsten Fragen zu My Plants. 
            Haben Sie weitere Fragen? Kontaktieren Sie uns gerne direkt.
          </p>
        </div>

        <div className="faq-content">
          <div className="faq-categories">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="faq-category">
                <h3 className="category-title">{category.category}</h3>
                <div className="faq-list">
                  {category.questions.map((item, questionIndex) => {
                    const globalIndex = categoryIndex * 10 + questionIndex
                    const isOpen = openFAQ === globalIndex
                    
                    return (
                      <div key={questionIndex} className={`faq-item ${isOpen ? 'open' : ''}`}>
                        <button
                          className="faq-question"
                          onClick={() => toggleFAQ(globalIndex)}
                          aria-expanded={isOpen}
                        >
                          <span>{item.question}</span>
                          <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                        </button>
                        <div className="faq-answer">
                          <div className="faq-answer-content">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="faq-contact">
            <div className="contact-card">
              <h3>Weitere Fragen?</h3>
              <p>
                Unser Support-Team steht Ihnen gerne zur Verfügung. 
                Wir antworten in der Regel innerhalb von 24 Stunden.
              </p>
              
              <div className="contact-options">
                <div className="contact-option">
                  <div className="contact-icon">📧</div>
                  <div className="contact-info">
                    <strong>E-Mail Support</strong>
                    <span>support@myplants.de</span>
                  </div>
                </div>
                
                <div className="contact-option">
                  <div className="contact-icon">📞</div>
                  <div className="contact-info">
                    <strong>Telefon Support</strong>
                    <span>+49 (0) 30 12345678</span>
                  </div>
                </div>
                
                <div className="contact-option">
                  <div className="contact-icon">💬</div>
                  <div className="contact-info">
                    <strong>Live Chat</strong>
                    <span>Mo-Fr, 9:00-17:00 Uhr</span>
                  </div>
                </div>
              </div>

              <div className="contact-cta">
                <a href="#contact" className="btn btn-primary">Kontakt aufnehmen</a>
                <a href="#demo" className="btn btn-secondary">Demo buchen</a>
              </div>
            </div>

            <div className="help-resources">
              <h4>Hilfreiche Ressourcen</h4>
              <div className="resource-links">
                <a href="#help" className="resource-link">
                  <span className="resource-icon">📖</span>
                  <div>
                    <strong>Hilfezentrum</strong>
                    <span>Anleitungen und Tutorials</span>
                  </div>
                </a>
                
                <a href="#webinars" className="resource-link">
                  <span className="resource-icon">🎥</span>
                  <div>
                    <strong>Webinare</strong>
                    <span>Regelmäßige Schulungen</span>
                  </div>
                </a>
                
                <a href="#community" className="resource-link">
                  <span className="resource-icon">👥</span>
                  <div>
                    <strong>Community</strong>
                    <span>Austausch mit anderen Nutzern</span>
                  </div>
                </a>
                
                <a href="#api-docs" className="resource-link">
                  <span className="resource-icon">⚙️</span>
                  <div>
                    <strong>API Dokumentation</strong>
                    <span>Für Entwickler</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ