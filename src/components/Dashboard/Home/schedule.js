import Card from "../shared/card";
import React from "react";
import "./schedule.css";
import moment from "moment";
import Filledbtn from "../shared/filledbtn";
const Schedule = () => {
  const meetings = [1, 2, 3, 4].map((data) => {
    return (
      <Card className="sch-meeting-card">
        <div className="sch-meeting-text-holder">
          <h5 className="sch-meeting-heading">Design Daily Meeting</h5>
          <p className="sch-meeting-time">
            <i class="fa fa-clock-o" aria-hidden="true" /> 10:00 - 11-30 |
            starts in 18 hours{" "}
          </p>
          <p className="sch-meeting-desc">
            Design analysis of the microservice will be  discussed in the meet...
          </p>
        </div>
        <div className="sch-meeting-btn-holder">
          <div style={{marginRight:"10px"}}>
            <Filledbtn className="meeting-id-btn">Id</Filledbtn>
          </div>
          <div>
            <Filledbtn>Start</Filledbtn>
          </div>
        </div>
      </Card>
    );
  });
  return (
    <div className="sch-holder-container">
      <Card className="sch-card">
        <h2 className="sch-time-now"> {moment().format("HH:MM")} </h2>
        <p className="sch-date-now">{moment().format("dddd, DD MMMM YYYY")}</p>
      </Card>
      <div id="scrollbar-style" className="sch-list">{meetings}</div>
    </div>
  );
};
export default Schedule;
