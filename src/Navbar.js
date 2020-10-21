import React from 'react';
import Link from '@material-ui/core/Link';
import './navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className='site-logo'  style={{display:'inline-block', float: 'left'}}>
      Logo
    </div>
    <div style={{display:'inline-block',  float: 'right'}}>
      <Link
      href="#"
        className="navbar__link"
        color="inherit"
      >
        Home
      </Link>
      <Link
          href="#"
        className="navbar__link"
        color="inherit"
      >
        My Portfolio
      </Link>
      <Link
          href="#"
        className="navbar__link"
        color="inherit"
      >
        Clients
      </Link>
      <Link
          href="#"
        className="navbar__link"
        color="inherit"
      >
        Get In Touch
      </Link>
    </div>
  </nav>
);

export default Navbar;