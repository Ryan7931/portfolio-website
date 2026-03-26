import './home.css';
import { Link } from 'react-router-dom';
/* BUG FIX: filename was profiel.jpg but actual file is profiel.JPG */
import profileImage from '../assets/profiel.JPG';

const Home = () => {
  return (
    <main className="home">
      <section className="home-text">
        <span className="home-eyebrow">Software Developer</span>
        <h1 className="home-name">Ryan Kalisvaart</h1>
        <h2 className="home-role">Beginnende software developer</h2>
        <p className="home-bio">
          Enthousiast over code, technologie en het bouwen van dingen die werken.
          Altijd bezig met leren en groeien als developer.
        </p>
        <div className="home-actions">
          <Link className="btn-primary" to="/projecten">Bekijk projecten</Link>
          <Link className="btn-ghost" to="/contact">Contact</Link>
        </div>
      </section>

      <aside className="home-media">
        <div className="profile-frame">
          <img src={profileImage} alt="Ryan Kalisvaart" className="profile-image" />
        </div>
      </aside>
    </main>
  );
};

export default Home;
