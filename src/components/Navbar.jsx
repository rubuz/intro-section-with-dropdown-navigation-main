import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import NavbarFeaturesDown from "./NavbarFeaturesDown";
import NavbarCompanyDown from "./NavbarCompanyDown";

const Navbar = () => {
  const [dropdownFeatures, setDropdownFeatures] = useState(false);
  const [dropdownCompany, setDropdownCompany] = useState(false);

  const dropdownFeaturesRef = useRef(null);
  const dropdownCompanyRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       dropdownFeaturesRef.current &&
  //       !dropdownFeaturesRef.current.contains(event.target)
  //     ) {
  //       setDropdownFeatures(false);
  //     }
  //     if (
  //       dropdownCompanyRef.current &&
  //       !dropdownCompanyRef.current.contains(event.target)
  //     ) {
  //       setDropdownCompany(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <div className="lg:mr-auto">
      <nav>
        <ul className="flex lg:gap-12 lg:flex-row flex-col gap-4 lg:py-0 py-10 ">
          <li
            className="flex lg:flex-row flex-col lg:items-center lg:justify-between relative dropdown-link"
            onClick={() => setDropdownFeatures(!dropdownFeatures)}
          >
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="lg:hover:text-almost-black duration-200 active:text-almost-black"
              >
                Features
              </a>
              <div className={dropdownFeatures ? "arrow-u" : "arrow-d"}>
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="arrow-down"
                    stroke="#686868"
                    stroke-width="1.5"
                    fill="none"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </div>
            </div>
            {/* {dropdownFeatures && (
              <div
                className="absolute top-10 right-0"
                ref={dropdownFeaturesRef}
              >
                <NavbarFeaturesDown />
              </div>
            )} */}
            <div
              className={
                dropdownFeatures
                  ? "lg:absolute top-10 right-0 scale-100 duration-100"
                  : "lg:absolute max-lg:hidden top-10 right-0 scale-0 duration-100"
              }
              // ref={dropdownFeaturesRef}
            >
              <NavbarFeaturesDown />
            </div>
          </li>
          <li
            className="flex lg:flex-row flex-col lg:items-center lg:justify-between relative dropdown-link"
            onClick={() => setDropdownCompany(!dropdownCompany)}
          >
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="lg:hover:text-almost-black duration-200 active:text-almost-black"
              >
                Company
              </a>
              <div className={dropdownCompany ? "arrow-u" : "arrow-d"}>
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="arrow-down"
                    stroke="#686868"
                    stroke-width="1.5"
                    fill="none"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </div>
            </div>
            {/* {dropdownCompany && (
              <div className="absolute top-10 right-0" ref={dropdownCompanyRef}>
                <NavbarCompanyDown />
              </div>
            )} */}
            <div
              className={
                dropdownCompany
                  ? "lg:absolute top-10 right-0 scale-100 duration-100"
                  : "lg:absolute max-lg:hidden top-10 right-0 scale-0 duration-100"
              }
              // ref={dropdownCompanyRef}
            >
              <NavbarCompanyDown />
            </div>
          </li>
          <li>
            <a
              href="#"
              className="lg:hover:text-almost-black duration-200 active:text-almost-black"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              href="#"
              className="lg:hover:text-almost-black duration-200 active:text-almost-black"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
