import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

const Button = ({ type = 'submit', children, linkTo, onClick }) => {
  return linkTo ? (
    <Link to={linkTo ? linkTo : null} className="Button">
      {children}
    </Link>
  ) : (
    <button className="Button" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
