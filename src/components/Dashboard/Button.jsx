import React from "react";
import Style from "../../assets/css/style.module.css";

const Button = ({ color, background, padding, text, borderRadius, type = "", onClick, disabled = false }) => {
  const styleCss = {
    background: background ? background : "blue",
    color: "white",
    padding: padding,
    borderRadius: borderRadius ? borderRadius : "4px",
  };

  const disableButton = {
    background: "#DCDCDC",
    color: "white",
    padding: padding,
    borderRadius: borderRadius ? borderRadius : "4px",
  };

  const buttonStyle = disabled ? disableButton : styleCss;
  // const buttonClassName = disabled ? Style.disableButton : Style.enableButton;

  return (
    <button
      style={buttonStyle}
      type={type}
      onClick={onClick}
      disabled={disabled}
      // className={buttonClassName}
    >
      {text}
    </button>
  );
};

export default Button;
