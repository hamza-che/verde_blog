import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// Icons
import { IoMdNotifications } from "react-icons/io";
import { BsGridFill } from "react-icons/bs";
// Imgs
import Avatar from "../assets/images/avatar.jpg";

const Header = ({ postsData }) => {
  return (
    <header className="flex justify-between items-center p-6 mb-3 bg-white">
      <Link to="/" className="font-bold text-gray-900 text-xl">
        Arbrit Blog
      </Link>
      <ul className="flex items-center gap-7 text-gray-600 font-bold">
        <li className="relative cursor-pointer">
          Posts{" "}
          <span className="absolute -top-6 -right-2 h-fit w-fit p-1 flex items-center justify-center text-green-600 bg-green-100 rounded-full text-sm">
            {postsData && postsData.postsNumber ? postsData.postsNumber : "0"}
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

const mapStateToProps = state => {
  return {
    postsData: state.posts,
  };
};

export default connect(mapStateToProps)(Header);
