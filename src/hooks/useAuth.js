import React, { useContext, createContext, useState, useEffect } from "react";
import { JOIN } from 'commons/socketEvents'
import { API_URL } from "commons/constants";
import io from "socket.io-client";

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
    const [socket, setSocket] = useState()
    useEffect(() => {
        user && socket && socket.emit(JOIN, { userId: user })
        return () => {
            socket && socket.disconnect()
        }
    }, [user, socket])

    useEffect(() => {
        setSocket(io(API_URL))
    }, [])

    return {
        user,
        setUser,
        socket
    };
}

export {
    ProvideAuth,
    useAuth,
    useProvideAuth,
}