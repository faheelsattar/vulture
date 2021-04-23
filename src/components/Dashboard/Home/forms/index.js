import React from "react";
import Joinform from "./joinform";
import Meetingform from "./meetingform";

const Formhome = (props) => {
  if (props.id === 1) {
    return <Meetingform />;
  } else if (props.id === 2) {
    return <Joinform />;
  }
};
export default Formhome;
