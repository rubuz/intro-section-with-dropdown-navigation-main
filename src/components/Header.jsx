import React from "react";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-5 flex">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
