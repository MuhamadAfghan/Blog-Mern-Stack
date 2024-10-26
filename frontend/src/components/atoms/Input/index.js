import React from "react";
import { randomID } from "../../../config";
import "./input.scss";

const Input = ({ label, ...rest }) => {
  const id = randomID();

  return (
    <div className="input-container">
      <label for={id}>{label}</label>
      <input id={id} {...rest} />
    </div>
  );
};

export default Input;
