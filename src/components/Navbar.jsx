import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link className="navbar-link" to="/">HOME</Link></li>
          <li><Link className="navbar-link" to="/projecten">PROJECTEN</Link></li>
          <li><Link className="navbar-link" to="/over-mlj">OVER MIJ</Link></li>
        </ul>
      </div>

      <div className="navbar-contact">
        <Link className="navbar-link" to="/contact">CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;