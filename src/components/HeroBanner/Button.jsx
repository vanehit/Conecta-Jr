import React from "react";

const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl shadow-lg transition duration-300 ease-in-out"
    >
      {children}
    </button>
  );
};

export default Button;
