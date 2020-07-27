import React from 'react';
import './Header.scss';

import Button from '../common/Button/Button';

function Header() {
  return (
    <nav className="Header">
      <div className="Header__left-side"></div>

      <div className="Header__right-side">
        <Button>Login</Button>
      </div>
    </nav>
  );
}

export default Header;
