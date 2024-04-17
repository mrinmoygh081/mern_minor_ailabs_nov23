import React from "react";
import { IoMenu } from "react-icons/io5";

const Header = ({ setIsActive, isActive }) => {
  return (
    <div className="header">
      <IoMenu className="menu" onClick={() => setIsActive(!isActive)} />
    </div>
  );
};

export default Header;
