import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const close = () => setOpen(false);

  const link = (to, label) => (
    <Link
      className={`navbar-link${pathname === to ? ' active' : ''}`}
      to={to}
      onClick={close}
    >
      {label}
    </Link>
  );

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/" onClick={close}>
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>

        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          aria-label="Menu openen"
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>

        <div className={`navbar-center${open ? ' open' : ''}`}>
          <ul className="nav-links">
            <li>{link('/', 'Home')}</li>
            <li>{link('/projecten', 'Projecten')}</li>
            <li>{link('/over-mij', 'Over mij')}</li>
          </ul>
        </div>

        <div className={`navbar-contact${open ? ' open' : ''}`}>
          {link('/contact', 'Contact')}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
