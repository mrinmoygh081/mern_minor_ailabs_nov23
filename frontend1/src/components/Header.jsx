import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo_container">
          <img
            href="#"
            className="logo"
            src="https://i.imgur.com/gyEJAne.jpeg"
            alt="logo"
          />
        </div>
        <nav className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
