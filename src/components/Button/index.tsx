import React from "react";
import './Button.scss'
interface props {
  name: String,
  className: String,
}
const Button = (props: props) => {
  const handleButtonClick = () => {
    // button event
  }
  return (
    <button
      className={props.className + " btn"}
      onClick={handleButtonClick}>
      {props.name}
    </button>
  );
};
export default Button;