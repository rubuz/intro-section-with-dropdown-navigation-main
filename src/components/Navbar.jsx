import React from "react";
import "./navbar.css";
import NavbarFeaturesDown from "./NavbarFeaturesDown";
import NavbarCompanyDown from "./NavbarCompanyDown";

const Navbar = () => {
  return (
    <div className="mr-auto">
      <nav>
        <ul className="flex gap-12">
          <li className="flex items-center justify-between gap-2 relative dropdown-link">
            <a href="#" className="hover:text-almost-black duration-200 ">
              Features
            </a>
            <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
              <path
                className="arrow-down"
                stroke="#686868"
                stroke-width="1.5"
                fill="none"
                d="m1 1 4 4 4-4"
              />
            </svg>
            <div className="absolute top-10 right-0">
              <NavbarFeaturesDown />
            </div>
          </li>
          <li className="flex items-center justify-between gap-2 relative dropdown-link">
            <a href="#" className="hover:text-almost-black duration-200 ">
              Company
            </a>
            <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
              <path
                className="arrow-down"
                stroke="#686868"
                stroke-width="1.5"
                fill="none"
                d="m1 1 4 4 4-4"
              />
            </svg>
            <div className="absolute top-10 right-0">
              <NavbarCompanyDown />
            </div>
          </li>
          <li>
            <a href="#" className="hover:text-almost-black duration-200">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-almost-black duration-200">
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
