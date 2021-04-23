import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/home";
import PublicRoute from "./PublicRoutes";
import ProtectedRoute from "./ProtectedRoutes";
import Navbar from "../Dashboard/navbar";
import Homemain from "../Dashboard/Home/home";
import Room from "../Dashboard/Room/room";

const WebRoutes = (props) => {
  return (
    <Router>
      {/* {Object.keys(authreducer.user).length > 0 ? <Navbar /> : null} */}
      <Navbar />
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/home" component={Homemain} />
        <PublicRoute exact path="/room/:id" component={Room} />
        <Route path="*" component={() => <div>404 </div>} />
      </Switch>
    </Router>
  );
};

export default WebRoutes;
