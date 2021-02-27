import React from 'react'
// import { useHistory } from 'react-router-dom'
// import { useAuth } from '../hooks/useAuth'

const LogoutButton = () => {
    // const history = useHistory()
    // const auth = useAuth()
    return (
        <button onClick={() => {localStorage.clear(); window.location.href="/"}}>
            Logout
        </button>
    )
}

export default LogoutButton
