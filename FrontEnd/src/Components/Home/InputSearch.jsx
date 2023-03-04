import React from "react";

const InputSearch = (props) => {
  const { label, placeholder } = props;

  return (
    <div className="search_input">
      <label htmlFor={label} className="label_search">
        {label}
        <i className="fa-light fa-chevron-down"></i>
      </label>
      <input
        id={label}
        type="text"
        className="input_search"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputSearch;
