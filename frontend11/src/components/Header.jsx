import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <div className="name">
          <span>A</span>
          <span>R</span>
          <span>Y</span>
          <span>A</span>
        </div>
      </div>

      <div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
