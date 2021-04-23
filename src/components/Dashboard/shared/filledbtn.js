import React from "react";
import "./filledbtn.css";
const Filledbtn = (props) => {
  const { style, onClick, children, className } = props;
  return (
    <a className={`filled-btn ${className}`} style={style} onClick={onClick}>
      {children}
    </a>
  );
};

export default Filledbtn;
