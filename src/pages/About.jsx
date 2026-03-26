import './About.css';
/* BUG FIX: both imports were lowercase .jpg but actual files are .JPG */
import berg from '../assets/GrandCanyon.jpg';
import berg2 from '../assets/GrandCanyon2.JPG';

const SKILLS = ['HTML', 'CSS', 'JavaScript', 'C#', 'PHP', 'SQL', 'React'];

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <span className="about-eyebrow">Over mij</span>
        <h1 className="about-title">Ryan Kalisvaart</h1>
      </header>

      <div className="about-body">
        <div className="about-text">
          <p>
            Mijn naam is Ryan Kalisvaart en ik ben een 18-jarige software developer aan het
            Techniek College op de Schiedamseweg in Rotterdam. Ik ben gepassioneerd over
            technologie en altijd bezig met iets nieuws te leren.
          </p>
          <p>
            Ik beheers de volgende talen en technologieën:
          </p>
          <div className="about-skills">
            {SKILLS.map(s => (
              <span className="skill-tag" key={s}>{s}</span>
            ))}
          </div>
          <p>
            Buiten het programmeren houd ik van sporten in de sportschool, gamen en
            verschillende activiteiten buiten. Ik heb grote interesse in coderen, dieren,
            reizen en computers.
          </p>
        </div>

        <div className="about-photos">
          <img src={berg} alt="Grand Canyon zonsondergang" className="about-photo" />
          <img src={berg2} alt="Grand Canyon uitzicht" className="about-photo" />
        </div>
      </div>
    </div>
  );
};

export default About;
