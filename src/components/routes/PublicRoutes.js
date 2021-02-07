import React from 'react';
import {
    Route,
    Redirect,
    useHistory
} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const authreducer = useSelector(state => state.authReducer)
    console.log(Object.keys(authreducer.user).length ,"Public route auth length")
    console.log(authreducer)
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            Object.keys(authreducer.user).length > 0 ?
                <Redirect to="/dashboard" />
            : <Component {...props} />
        )} />
    );
};
export default PublicRoute;