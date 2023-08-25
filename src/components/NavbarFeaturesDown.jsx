import React from "react";
import iconTodo from "../assets/icon-todo.svg";
import iconCalendar from "../assets/icon-calendar.svg";
import iconReminders from "../assets/icon-reminders.svg";
import iconPlanning from "../assets/icon-planning.svg";

const NavbarFeaturesDown = () => {
  return (
    <ul className="lg:bg-white py-4 px-6 lg:rounded-xl lg:shadow-2xl flex flex-col gap-2 ">
      <li className="flex items-center gap-3">
        <div className="min-w-[20px]">
          <img src={iconTodo} alt="todo icon" />
        </div>
        <a
          href="#"
          className="lg:hover:text-almost-black duration-200 active:text-almost-black"
        >
          Todo List
        </a>
      </li>
      <li className="flex items-center gap-3">
        <div className="min-w-[20px]">
          <img src={iconCalendar} alt="calendar icon" />
        </div>
        <a
          href="#"
          className="lg:hover:text-almost-black duration-200 active:text-almost-black"
        >
          Calendar
        </a>
      </li>
      <li className="flex items-center gap-3">
        <div className="min-w-[20px]">
          <img src={iconReminders} alt="reminder icon" />
        </div>
        <a
          href="#"
          className="lg:hover:text-almost-black duration-200 active:text-almost-black"
        >
          Reminders
        </a>
      </li>
      <li className="flex items-center gap-3">
        <div className="min-w-[20px]">
          <img src={iconPlanning} alt="planning icon" />
        </div>
        <a
          href="#"
          className="lg:hover:text-almost-black duration-200 active:text-almost-black"
        >
          Planning
        </a>
      </li>
    </ul>
  );
};

export default NavbarFeaturesDown;
