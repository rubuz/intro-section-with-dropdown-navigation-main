import React from "react";

const Buttons = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-center w-full">
      <a href="#" className="hover:text-almost-black duration-200 text-center">
        Login
      </a>
      <button className="w-full max-w-[250px] lg:max-w-[150px] lg:ml-10 lg:mt-0 mt-4 border-2 py-2 px-7 rounded-xl hover:text-almost-black hover:border-almost-black duration-200">
        Register
      </button>
    </div>
  );
};

export default Buttons;
