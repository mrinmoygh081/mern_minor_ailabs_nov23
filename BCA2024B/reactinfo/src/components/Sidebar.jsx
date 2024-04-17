import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ isActive }) => {
  return (
    <>
      <div className={isActive ? "sidebar active" : "sidebar"}>
        <div className="sidebar_brand">
          <img src={require("../assets/logo.png")} alt="" />
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
                <FaPhoneAlt />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
