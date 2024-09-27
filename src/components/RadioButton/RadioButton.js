import React from "react";

function RadioButton({ children, id, ...delegated }) {
  return (
    <label htmlFor={id}>
      <input id={id} type="radio" {...delegated} />
      {children}
    </label>
  );
}

export default RadioButton;
