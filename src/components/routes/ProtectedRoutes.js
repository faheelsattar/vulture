import React, { useEffect, useState } from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { fetchAuthPending, fetchAuthSuccess, fetchAuthError } from "../../actions/authactions"

const ProtectedRoute = ({ component: Component, path , ...rest }) => {
    const authreducer = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    const authVerification = async() => {
        try {
          dispatch(fetchAuthPending())
          const result = await fetch("http://localhost:4000/verification", {
            method: "GET",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            credentials: "include"
          })
          if (result.ok) {
            const data = await result.json()
            dispatch(fetchAuthSuccess(data.Data.user))
          } else {
            throw result
          }
        } catch (err) {
          if(err.status === 401){
            const errholder = await err.json()
            dispatch(fetchAuthError({
              error: errholder.message
            }))
          }
        }
      }
    useEffect(() => {
        authVerification()
        console.log("Mounted Again")
    }, [path])
    return (

        // Show the component only when the user is logged in       
        // Otherwise, redirect the user to /signin page
        <div>
            <Route {...rest} render={props => (
                Object.keys(authreducer.user).length > 0 ?
                    <Component {...props} />
                    : <Redirect to="/" />
            )} />
        </div>
    );
};
export default ProtectedRoute;