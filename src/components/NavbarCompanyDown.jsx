import React from "react";

const NavbarCompanyDown = () => {
  return (
    <ul className="lg:bg-white py-4 px-6 lg:rounded-xl lg:shadow-2xl flex flex-col gap-2 min-w-[120%]">
      <li>
        <a href="#" className="hover:text-almost-black duration-200">
          History
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-almost-black duration-200">
          Our Team
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-almost-black duration-200">
          Blog
        </a>
      </li>
    </ul>
  );
};

export default NavbarCompanyDown;
