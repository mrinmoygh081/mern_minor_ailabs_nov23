import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <!---HEADER--> */}
      <header>
        <div className="wrapper">
          <h1>
            LOGO<span className="color">.</span>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
