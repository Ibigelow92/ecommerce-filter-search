import React from "react";

// value is what kind of value you're going to be specifying in this input container
function Input({handleChange, value, title, name, color}) {
  return (
    <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value={value} name={name} />
          <span className="checkmark" style={{backgroundColor: color}}></span>{title}
    </label>
  )
}

export default Input;