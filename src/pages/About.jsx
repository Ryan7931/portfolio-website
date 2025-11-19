import "./About.css";
import berg from "../assets/GrandCanyon.jpg";
import berg2 from "../assets/GrandCanyon2.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1 className="AboutH1">Over Mij</h1>
        <p className="AboutP">
          Mijn naam is Ryan Kalisvaart en ik ben een 18-jarige software developer op het Techniek College aan de Schiedamseweg. 
          Ik beheers de volgende talen: <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, <span>C#</span>, <span>PHP</span> en <span>SQL</span>.
        </p>
        <p className="AboutP">
          Mijn hobby’s zijn sporten in de sportschool, gamen en verschillende activiteiten buiten. 
          Ik heb grote interesse in coderen, dieren, reizen en computers.
        </p>
      </div>
      <section className="AboutImages">
        <img src={berg} alt="Grand Canyon" className="AboutImage" />
        <img src={berg2} alt="Grand Canyon" className="AboutImage" />
      </section>
    </div>
  );
};

export default About;
