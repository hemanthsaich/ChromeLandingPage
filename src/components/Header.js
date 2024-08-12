import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#all">All</a></li>
          <li><a href="#yours">Yours</a></li>
          <li><a href="#safe">Safe</a></li>
          <li><a href="#fast">Fast</a></li>
          <li><a href="#by-google">By Google</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
