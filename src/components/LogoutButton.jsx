import React from 'react'
// import { useHistory } from 'react-router-dom'
// import { useAuth } from '../hooks/useAuth'

const LogoutButton = () => (
    // const history = useHistory()
    // const auth = useAuth()
    <button
        type="button"
        onClick={() => {
            localStorage.clear()
            window.location.href = '/login'
        }}
    >
        Logout
    </button>
)

export default LogoutButton
