import React from "react";
import "./home.css";
import Schedule from "./schedule";
import Tabs from "./tabs";

const Home = () => {
  return (
    <main className="main-home">
      <div className="row container vertical-center">
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <Tabs />
        </div>
        <div className="col-md-5">
          <Schedule />
        </div>
        <div className="col-md-1"></div>
      </div>
    </main>
  );
};
export default Home;
