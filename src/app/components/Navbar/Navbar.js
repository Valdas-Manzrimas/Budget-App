import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

import NavButton from '../common/navButton/NavButton';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to="/">Budget Counter</Link>
      <Link to="/transactions">Transactions</Link>
    </nav>
  );
};

export default Navbar;
