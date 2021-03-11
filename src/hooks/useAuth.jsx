import React, { useContext, createContext, useState, useEffect } from 'react'
import io from 'socket.io-client'
import PropTypes from 'prop-types'
import { JOIN } from '../commons/socketEvents'
import { API_URL } from '../commons/constants'

const authContext = createContext()

function useProvideAuth() {
    const [user, setUser] = useState(localStorage.getItem('user_id'))
    const [socket, setSocket] = useState()
    useEffect(() => {
        if (user && socket) socket.emit(JOIN, { userId: user })
        return () => {
            if (socket) socket.disconnect()
        }
    }, [user, socket])

    useEffect(() => {
        setSocket(io(API_URL))
    }, [])

    return {
        user,
        setUser,
        socket,
    }
}

function ProvideAuth({ children }) {
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

ProvideAuth.propTypes = {
    children: PropTypes.node.isRequired,
}

function useAuth() {
    return useContext(authContext)
}

export { ProvideAuth, useAuth, useProvideAuth }
