import React from "react";
// special import syntax for importing from css modules
import style from './Button.module.css';

const Button = (props) => {
  return (
    <button type={props.type} className={style.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
