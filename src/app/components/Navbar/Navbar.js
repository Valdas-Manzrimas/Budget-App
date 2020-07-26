import React from 'react';
import './Navbar.scss';

import Button from '../common/Button/Button';

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar__left-side"></div>

      <div className="Navbar__right-side">
        <Button>Login</Button>
      </div>
    </nav>
  );
}

export default Navbar;
