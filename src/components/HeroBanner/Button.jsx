import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, onClick, type = "button", className = "", to }) => {
  if (to) {
    // Si hay prop "to", usamos Link
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
