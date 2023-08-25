import React, { useState } from "react";
import menuIcon from "../assets/icon-menu.svg";
import menuIconClose from "../assets/icon-close-menu.svg";
import Buttons from "./Buttons";
import Navbar from "./Navbar";

const NavbarMobile = () => {
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <div>
      <div>
        <img
          src={menuIcon}
          alt="hamburger menu icon"
          className="cursor-pointer transform transition duration-200 hover:scale-110"
          onClick={() => setSideMenu(!sideMenu)}
        />
        {/* Overlay */}
        {sideMenu && (
          <div className="bg-black/50 fixed w-full h-screen z-10 top-0 left-0"></div>
        )}
        <div
          className={
            sideMenu
              ? "bg-alomost-white z-20 fixed w-[60%] max-w-[300px] min-w-[250px] top-0 right-0 p-6 h-screen duration-200"
              : "bg-alomost-white z-20 fixed w-[320px] top-0 p-6 h-screen right-[-100%] duration-200"
          }
        >
          <img
            src={menuIconClose}
            alt="X icon for close"
            onClick={() => setSideMenu(!sideMenu)}
            className="cursor-pointer ml-auto transform transition duration-200 hover:scale-110 "
          />
          <Navbar />
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
