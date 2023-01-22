import React from "react";

function Input({ value, onChange, inputStyle, type, onBlur }, ref) {
  return (
    <input
      placeholder='Enter location'
      type={type}
      value={value}
      onChange={onChange}
      className={inputStyle}
      onBlur={onBlur}
      ref={ref}
    />
  );
}

export default React.forwardRef(Input);
