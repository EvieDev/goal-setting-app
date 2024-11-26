import React from "react";

const Button = ({ text, type }) => {
  const btnClass = type === "primary" ? "btn-primary" : "btn-secondary";

  return <button className={`btn ${btnClass}`}>{text}</button>;
};

export default Button;
