import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateRoom from "../Dashboard/createroom";
import Room1 from "../Dashboard/room1";
import Home from '../Home/home'
// import Navbar from '../dashboard/navbar'
import PublicRoute from './PublicRoutes';
import ProtectedRoute from './ProtectedRoutes';

import { useDispatch, useSelector } from "react-redux"

const WebRoutes = (props) => {
    const authreducer = useSelector(state => state.authReducer)
    return (
        <Router>
            {/* {Object.keys(authreducer.user).length > 0 ? <Navbar /> : null} */}
            <Switch>
                <PublicRoute exact path="/" component={Home} />
                <ProtectedRoute exact path="/dashboard" component={CreateRoom} />
                <ProtectedRoute exact path="/room/:roomid" component={Room1} />
                <Route path="*" component={() => <div>404 </div>} />
            </Switch>
        </Router>
    )
}

export default WebRoutes