import React, { useContext } from 'react'
import { socketcontext } from "../../context/socket"

export const useSocketFunctions = () => {
    const socket = useContext(socketcontext)

    const orderAccepted = (callback) => {
        socket.on("order-accepted", callback)
    }

    const orderCancelled = (callback) => {
        socket.on("order-cancelled", callback)
    }
    
    return [
        orderAccepted,
        orderCancelled
    ]
}

export const useDisconnectFunctions = () => {
    const socket = useContext(socketcontext)
    const orderAcceptedDisconnect = (callback) => {
        socket.off("order-accepted", callback)
    }

    const orderCancelledDisconnect = (callback) => {
        socket.off("order-cancelled", callback)
    }

    return [
        orderAcceptedDisconnect,
        orderCancelledDisconnect
    ]
}