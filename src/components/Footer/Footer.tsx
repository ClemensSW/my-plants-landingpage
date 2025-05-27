import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#home" className="brand-section">
                <img 
                  src="/images/logos/my-plants-logo-light.svg" 
                  alt="My Plants Logo" 
                  className="footer-logo" 
                />
                <span className="brand-text">My Plants</span>
              </a>
              <p className="brand-description">
                Die führende Lern-App für die Gartenbau-Ausbildung. 
                KI-gestützte Pflanzenerkennung trifft auf adaptives Lernen.
              </p>
              <div className="social-links">
                <a href="https://linkedin.com/company/myplants" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">💼</span>
                </a>
                <a href="https://twitter.com/myplants" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">🐦</span>
                </a>
                <a href="https://youtube.com/@myplants" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">📺</span>
                </a>
                <a href="https://instagram.com/myplants" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">📷</span>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Produkt</h4>
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#preise">Preise</a></li>
                  <li><a href="#demo">Demo</a></li>
                  <li><a href="#updates">Updates</a></li>
                  <li><a href="#roadmap">Roadmap</a></li>
                </ul>
              </div>

              <div className="link-group">
                <h4>Zielgruppen</h4>
                <ul>
                  <li><a href="#betriebe">Ausbildungsbetriebe</a></li>
                  <li><a href="#berufsschulen">Berufsschulen</a></li>
                  <li><a href="#auszubildende">Auszubildende</a></li>
                  <li><a href="#bildungseinrichtungen">Bildungseinrichtungen</a></li>
                  <li><a href="#enterprise">Enterprise</a></li>
                </ul>
              </div>

              <div className="link-group">
                <h4>Ressourcen</h4>
                <ul>
                  <li><a href="#hilfe">Hilfezentrum</a></li>
                  <li><a href="#tutorials">Tutorials</a></li>
                  <li><a href="#webinare">Webinare</a></li>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#community">Community</a></li>
                </ul>
              </div>

              <div className="link-group">
                <h4>Unternehmen</h4>
                <ul>
                  <li><a href="#ueber-uns">Über uns</a></li>
                  <li><a href="#karriere">Karriere</a></li>
                  <li><a href="#presse">Presse</a></li>
                  <li><a href="#partner">Partner</a></li>
                  <li><a href="#kontakt">Kontakt</a></li>
                </ul>
              </div>

              <div className="link-group">
                <h4>Support</h4>
                <ul>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#support">Support</a></li>
                  <li><a href="#status">Systemstatus</a></li>
                  <li><a href="#api">API Docs</a></li>
                  <li><a href="#entwickler">Entwickler</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-newsletter">
            <div className="newsletter-content">
              <h3>Bleiben Sie auf dem Laufenden</h3>
              <p>
                Erhalten Sie Updates zu neuen Features, Bildungsressourcen 
                und Tipps für die moderne Gartenbau-Ausbildung.
              </p>
              
              <form className="newsletter-form">
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Ihre E-Mail-Adresse" 
                    className="newsletter-input"
                    required 
                  />
                  <button type="submit" className="btn btn-primary">
                    Abonnieren
                  </button>
                </div>
                <p className="newsletter-note">
                  Kein Spam. Abmeldung jederzeit möglich.
                </p>
              </form>
            </div>

            <div className="newsletter-benefits">
              <div className="benefit">
                <span className="benefit-icon">📧</span>
                <span>Monatlicher Newsletter</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">🎯</span>
                <span>Exklusive Tipps & Tricks</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">🔔</span>
                <span>Neue Feature-Updates</span>
              </div>
            </div>
          </div>

          <div className="footer-apps">
            <h4>My Plants herunterladen</h4>
            <div className="app-stores">
              <a href="https://apps.apple.com/app/myplants" className="store-link" target="_blank" rel="noopener noreferrer">
                <div className="store-icon">🍎</div>
                <div className="store-info">
                  <span className="store-label">Download im</span>
                  <span className="store-name">App Store</span>
                </div>
              </a>
              
              <a href="https://play.google.com/store/apps/details?id=com.myplants" className="store-link" target="_blank" rel="noopener noreferrer">
                <div className="store-icon">🤖</div>
                <div className="store-info">
                  <span className="store-label">Jetzt bei</span>
                  <span className="store-name">Google Play</span>
                </div>
              </a>
            </div>
            
            <div className="app-stats">
              <div className="stat">
                <span className="stat-value">4.9★</span>
                <span className="stat-label">App Store</span>
              </div>
              <div className="stat">
                <span className="stat-value">10k+</span>
                <span className="stat-label">Downloads</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <div className="legal-links">
              <a href="#impressum">Impressum</a>
              <a href="#datenschutz">Datenschutz</a>
              <a href="#agb">AGB</a>
              <a href="#cookies">Cookie-Einstellungen</a>
            </div>
            
            <div className="certifications">
              <div className="cert">
                <span className="cert-icon">🔒</span>
                <span>DSGVO konform</span>
              </div>
              <div className="cert">
                <span className="cert-icon">🛡️</span>
                <span>ISO 27001</span>
              </div>
              <div className="cert">
                <span className="cert-icon">🇩🇪</span>
                <span>Made in Germany</span>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <p>© 2025 My Plants GmbH. Alle Rechte vorbehalten.</p>
            <p className="version-info">
              Version 2.1.0 • Letzte Aktualisierung: März 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer