import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import { useDispatch, useSelector } from "react-redux"
import WebRoutes from './components/routes/index'
import { fetchAuthPending, fetchAuthSuccess, fetchAuthError } from "./actions/authactions"
function App() {
  const dispatch = useDispatch()
  const [ispending, setIsPending] = useState(true)
  const authVerification = async () => {
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
        console.log("App.js ", data)
        dispatch(fetchAuthSuccess(data.Data.user))
        setIsPending(false)
      } else {
        throw result
      }
    } catch (err) {
      if (err.status === 401) {
        const errholder = await err.json()
        dispatch(fetchAuthError({
          error: errholder.message
        }))
      }
      setIsPending(false)
    }
  }
  useEffect(() => {
    authVerification()
  }, [])
  if (ispending) {
    return <p> Loading</p>
  } else {
    return (
      <div className="App">
        <WebRoutes />
      </div>
    )
  }
}

export default App;
