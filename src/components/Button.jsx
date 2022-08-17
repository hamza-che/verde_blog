import React from "react";

const Button = ({ children, bgColor, onClick }) => {
  return (
    <button
      className={`flex items-center gap-1 ${bgColor} text-white text-sm px-3 py-2 rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
