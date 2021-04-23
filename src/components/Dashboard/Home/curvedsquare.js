import React from "react";
import "./curvedsquare.css";

const Curvedsquare = (props) => {
  return (
    <div className="curv-sqr-holder"> 
      <div className={`curv-sqr-cont ${props.bckclr}`}>
        <div className="curv-img-holder">
          <img className="curv-img" src={props.img} />
        </div>
      </div>
      <p style={{ margin: "0 auto", fontSize: "0.8rem", textAlign: "center", color:"#ffffff" }}>
        {props.label}
      </p>
    </div>
  );
};
export default Curvedsquare;
