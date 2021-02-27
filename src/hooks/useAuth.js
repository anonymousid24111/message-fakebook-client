import { API_URL } from "commons/constants";
import { JOIN } from "commons/socketEvents";
import React, { useContext, createContext, useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { useSocket } from "./useSocket";
// import { useSocket } from "./useSocket";

const authContext = createContext();

function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

function useAuth() {
    return useContext(authContext);
}

function useProvideAuth() {
    const [user, setUser] = useState(localStorage.getItem('user_id'));
    // const [socket, setSocket] = useState()
    const { socketRef } = useSocket()
    useEffect(() => {
        console.log("emit",socketRef)
        socketRef.current&&socketRef.current.emit(JOIN, "user")
    })
    return {
        user,
        setUser
    };
}

export {
    ProvideAuth,
    useAuth,
    useProvideAuth,
}