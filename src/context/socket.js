import React from 'react'
import io from 'socket.io-client'
export const socket = io("https://localhost:3016", {
    withCredentials: true,
})
export const socketcontext = React.createContext()