import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaHeadphones, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = ({ isActive, setIsActive }) => {
  return (
    <>
      <div className={isActive ? "sidebar active" : "sidebar"}>
        <div className="sidebar_brand">
          <img
            src={require("../assets/logo.png")}
            alt=""
            onClick={() => setIsActive(false)}
          />
        </div>
        <div className="sidebar_nav">
          <ul>
            <li>
              <Link to={"/"}>
                <IoMdHome />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                <FaUser />
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to={"/contact"}>
                <FaHeadphones />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
