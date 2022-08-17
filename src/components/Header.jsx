import React from "react";
import { Link } from "react-router-dom";
// Icons
import { IoMdNotifications } from "react-icons/io";
import { BsGridFill } from "react-icons/bs";
// Imgs
import Avatar from "../assets/images/avatar.jpg";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white">
      <Link to="/" className="font-bold text-gray-900 text-xl">
        Arbrit Blog
      </Link>
      <ul className="flex items-center gap-7 text-gray-600 font-bold">
        <li className="relative cursor-pointer">
          Posts{" "}
          <span className="absolute -top-7 -right-2 p-1 text-green-600 bg-green-100 rounded-full text-sm">
            10
          </span>
        </li>
        <li className="cursor-pointer">
          <IoMdNotifications size="1.5em" />
        </li>
        <li className="cursor-pointer">
          <BsGridFill size="1.3em" />
        </li>
        <li className="cursor-pointer">
          <img
            src={Avatar}
            alt="Profile"
            className="w-9 h-9 max-w-full rounded-full"
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;