import './home.css'
import profileImage from '../assets/profiel.jpg' // Replace with your actual image name

const Home = () => {
  return (
    <div>
      <h1 id="NameH1">Ryan Kalisvaart</h1>
      <h2 id="SDH2">software developer</h2>
      <h3 id="SDH3">Beginnende software developer <br /> met veel talen om te leren</h3>
      <img src={profileImage} alt="Profile" className="profile-image" />
    </div>

  );
};

export default Home;
