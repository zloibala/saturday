import React from "react";
import "./customButton.style.css";

const CustomButton = (props) => {
  return (
    <button className="custom-btn" onClick={props.onClickHandler}>
      {" "}
      {props.text}
    </button>
  );
};

export default CustomButton;
