import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="mr-auto">
      <nav>
        <ul className="flex gap-12">
          <li className="flex items-center justify-between gap-2 hover:text-almost-black duration-200 relative dropdown-link">
            <a href="#">Features</a>
            <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
              <path
                className="arrow-down"
                stroke="#686868"
                stroke-width="1.5"
                fill="none"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </li>
          <li className="flex items-center justify-between gap-2 hover:text-almost-black duration-200 relative dropdown-link">
            <a href="#">Company</a>
            <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
              <path
                className="arrow-down"
                stroke="#686868"
                stroke-width="1.5"
                fill="none"
                d="m1 1 4 4 4-4"
              />
            </svg>
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
