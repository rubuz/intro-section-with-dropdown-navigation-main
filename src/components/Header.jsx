import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import Buttons from "./Buttons";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto p-6 flex justify-between items-center text-medium-gray mb-7 gap-16">
      <div>
        <img src={logo} alt="logo" />
      </div>
      {windowWidth < 1024 ? (
        <NavbarMobile />
      ) : (
        <React.Fragment>
          <Navbar />
          <Buttons />
        </React.Fragment>
      )}
    </div>
  );
};

export default Header;
