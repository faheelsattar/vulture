import React, { useEffect, useState } from "react";
import "./App.css";
import WebRoutes from "./components/routes/index";
import { socketcontext, socket } from "./context/socket";

function App() {
  const [ispending, setIsPending] = useState(true);
  const authVerification = async () => {
    try {
      const result = await fetch("http://localhost:4000/verification", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (result.ok) {
        const data = await result.json();
        console.log("App.js ", data);
        setIsPending(false);
      } else {
        throw result;
      }
    } catch (err) {
      if (err.status === 401) {
        const errholder = await err.json();
      }
      setIsPending(false);
    }
  };
  useEffect(() => {
    authVerification();
  }, []);
  if (ispending) {
    return <p> Loading</p>;
  } else {
    return (
      <div className="App">
        <socketcontext.Provider value={socket}>
          <WebRoutes />
        </socketcontext.Provider>
      </div>
    );
  }
}

export default App;
