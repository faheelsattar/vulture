import React from "react";
import "./card.css";
const Card = React.memo((props) => {
  const { style, onClick, children, className } = props;
  return (
    <div
      className={`card-body-custom ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
});

export default Card;
