import React from "react";
import "./upload.scss";
import { LoginBg } from "../../../assets";

const Upload = () => {
  return (
    <div className="upload">
      <img className="preview" src={LoginBg} alt="Image-Preview" />
      <input type="file" name="" id="" />
    </div>
  );
};

export default Upload;
