import React from "react";
import "./textarea.scss";

const Textarea = ({ ...rest }) => {
  return (
    <div>
      <textarea className="textarea" {...rest} />
    </div>
  );
};

export default Textarea;
