import React from "react";
import { IoMenu } from "react-icons/io5";

const Header = ({ setIsActive }) => {
  return (
    <div className="header">
      <IoMenu onClick={() => setIsActive(true)} />
    </div>
  );
};

export default Header;
