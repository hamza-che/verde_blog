import React from "react";

const Button = ({ children, bgColor }) => {
  return (
    <button
      className={`flex items-center gap-1 ${bgColor} text-white text-sm px-3 py-2 rounded-md`}
    >
      {children}
    </button>
  );
};

export default Button;
