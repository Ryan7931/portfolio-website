import './home.css'
import profileImage from '../assets/profiel.jpg' 

const Home = () => {
  return (
    <main className="home">
      <section className="home-text">
        <div className="NameSD">
          <h1 id="NameH1">Ryan Kalisvaart</h1>
          <h2 id="SDH2">software developer</h2>
        </div>
        <h3 id="SDH3">Beginnende software developer <br /> met veel talen om te leren</h3>
      </section>
      <aside className="home-media">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </aside>
    </main>
  );
};

export default Home;
