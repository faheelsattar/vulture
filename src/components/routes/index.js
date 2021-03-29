import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../Home/home'
import PublicRoute from './PublicRoutes';
import ProtectedRoute from './ProtectedRoutes';
import { useSelector } from "react-redux"
const WebRoutes = (props) => {
    const authreducer = useSelector(state => state.authReducer)
    return (
        <Router>
            {/* {Object.keys(authreducer.user).length > 0 ? <Navbar /> : null} */}
            <Switch>
                <PublicRoute exact path="/" component={Home} />
                <ProtectedRoute exact path="/room/:roomid" component={Room1} />
                <Route path="*" component={() => <div>404 </div>} />
            </Switch>
        </Router>
    )
}

export default WebRoutes