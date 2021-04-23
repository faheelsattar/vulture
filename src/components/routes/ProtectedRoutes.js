import React, { useEffect } from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

const ProtectedRoute = ({ component: Component, path, ...rest }) => {
  const authVerification = async () => {
    try {
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
      } else {
        throw result
      }
    } catch (err) {
      if (err.status === 401) {
        const errholder = await err.json()
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
        2===2 ?
          <Component {...props} />
          : <Redirect to="/" />
      )} />
    </div>
  );
};
export default ProtectedRoute;