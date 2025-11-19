import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        
        <div className="contact-content">
          <div className="contact-form-section">
            <h3>Stuur een bericht</h3>
            <form className="contact-form">
              <input 
                type="text" 
                placeholder="Je naam" 
                className="form-input"
              />
              <input 
                type="email" 
                placeholder="Je email" 
                className="form-input"
              />
              <input 
                type="text" 
                placeholder="Onderwerp" 
                className="form-input"
              />
              <textarea 
                placeholder="Je bericht..." 
                className="form-textarea"
                rows="5"
              ></textarea>
              <button type="submit" className="submit-btn">
                Versturen
              </button>
            </form>
          </div>

          <div className="cv-section">
            <h3>Download CV</h3>
            <p>Bekijk mijn ervaring en skills</p>
            <button className="cv-btn">
              📄 CV Downloaden
            </button>
          </div>

          <div className="social-section">
            <h3>Volg mij</h3>
            <div className="social-links">
              <a href="#" className="social-link tiktok">
                TikTok
              </a>
              <a href="#" className="social-link instagram">
                Instagram
              </a>
              <a href="#" className="social-link linkedin">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;