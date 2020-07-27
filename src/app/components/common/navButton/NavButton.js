import React from 'react';
import './NavButton.scss';

import { Link } from 'react-router-dom';

const NavButton = ({ children, onClick, ...props }) => {
  const Tag = props.to ? Link : props.href ? 'a' : 'button';

  return (
    <Tag className="navbar-button" onClick={onClick}>
      {children}
    </Tag>
  );
};

export default NavButton;
