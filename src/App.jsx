import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail.jsx';
// import RocketBoost from './pages/projectDetails/RocketBoost';
// import Portfolio from './pages/projectDetails/portfolioWebsite';
// import WeerApp from './pages/projectDetails/weatherApp';
import './App.css';


function App() {
  return (
    <BrowserRouter basename='/portfolio-website/'>
      <div className="App">

        <Routes>
          <Route path='/' element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/projecten" element={<Projects />} />
          <Route path="/over-mij" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          </Route>
          {/* <Route path="/projects/rocket-boost" element={<RocketBoost />} />
          <Route path="/projects/portfolio" element={<Portfolio />} />
          <Route path="/projects/weerapp" element={<WeerApp />} />
          <Route path="/projects/escapeRoom" element={<escapeRoom />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;