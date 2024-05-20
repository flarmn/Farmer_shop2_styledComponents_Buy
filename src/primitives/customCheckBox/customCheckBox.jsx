import React from "react";
import "./style.css";

function CustomCheckBox({ idx, onChange }) {
  return (
    <label className="container">
      <input type="checkbox" onChange={onChange} idx={idx} />
      <span className="checkmark"></span>
    </label>
  );
}

export default CustomCheckBox;
