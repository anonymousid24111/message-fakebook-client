import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            This page don't exist. Please, move to 
            <Link to='/'>Home Page</Link>
        </div>
    )
}

export default NotFound
