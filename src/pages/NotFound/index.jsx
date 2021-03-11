import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="w-screen h-screen flex items-center justify-center text-3xl font-semibold">
            This page don&apos;t exist. Please, move to
            <Link to="/" className="p-4 bg-blue-900 m-2 underline">
                Home Page
            </Link>
        </div>
    )
}

export default NotFound
