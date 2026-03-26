import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-page">
      <header className="contact-header">
        <span className="contact-eyebrow">Bereik mij</span>
        <h1 className="contact-title">Contact</h1>
      </header>

      <div className="contact-grid">
        {/* Contact form */}
        <div className="contact-card contact-form-card">
          <h3>Stuur een bericht</h3>
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <input type="text"  placeholder="Je naam"    className="form-input" />
            <input type="email" placeholder="Je e-mail"  className="form-input" />
            <input type="text"  placeholder="Onderwerp"  className="form-input" />
            <textarea placeholder="Je bericht..." className="form-textarea" rows="5"></textarea>
            <button type="submit" className="submit-btn">Versturen</button>
          </form>
        </div>

        {/* CV */}
        <div className="contact-card">
          <h3>Download CV</h3>
          <p>Bekijk mijn ervaring en vaardigheden als beginnend software developer.</p>
          <button className="cv-btn">📄 CV Downloaden</button>
        </div>

        {/* Social */}
        <div className="contact-card">
          <h3>Volg mij</h3>
          <div className="social-links">
            <a href="#" className="social-link tiktok">TikTok</a>
            <a href="#" className="social-link instagram">Instagram</a>
            <a href="#" className="social-link linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
