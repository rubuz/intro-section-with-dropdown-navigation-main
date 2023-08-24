import React from "react";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-6 flex justify-between items-center text-medium-gray mb-7 gap-16">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <Navbar />
      <div>
        <a href="#" className="hover:text-almost-black duration-200">
          Login
        </a>
        <button className="ml-10 border-2 py-2 px-7 rounded-xl hover:text-almost-black hover:border-almost-black duration-200">
          Register
        </button>
      </div>
    </div>
  );
};

export default Header;
