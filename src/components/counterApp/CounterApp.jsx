import React, { useState } from "react";
import "./counterApp.style.css";
import CustomButton from "../customButton/CustomButton";

const CounterApp = () => {
  const [value, SetValue] = useState(0);
  const incrementValue = () => {
    SetValue(value + 10);
  };
  const decrementValue = () => {
    SetValue(value - 10);
  };

  const multiplyValue = () => {
    SetValue(value * 2);
  };

  const divideValue = () => {
    SetValue(value / 2);
  };
  const resetButton = () => {
    SetValue(0);
  };

  return (
    <div className="container">
      <CustomButton onClickHandler={incrementValue} text="+10" />
      <CustomButton onClickHandler={decrementValue} text="-10" />
      <h1> {value} </h1>
      <CustomButton onClickHandler={multiplyValue} text="*2" />
      <CustomButton onClickHandler={divideValue} text="/2" />
      <CustomButton onClickHandler={resetButton} text="Reset" />
    </div>
  );
};
export default CounterApp;
