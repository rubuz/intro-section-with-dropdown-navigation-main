import React from "react";

const Buttons = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-center w-full">
      <a href="#" className="hover:text-almost-black duration-200 text-center">
        Login
      </a>
      <button className="w-full max-w-[250px] lg:max-w-[150px] lg:ml-10 lg:mt-0 mt-4 border-2 py-2 px-7 rounded-xl lg:hover:text-almost-black lg:hover:border-almost-black duration-200 active:border-almost-black active:text-almost-black">
        Register
      </button>
    </div>
  );
};

export default Buttons;
