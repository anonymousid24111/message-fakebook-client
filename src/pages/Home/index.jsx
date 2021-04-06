import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className="flex flex-col space-y-5">
            <h1>HomePage</h1>
            {!localStorage.getItem('user_id') && (
                <>
                    <Link to="/login">
                        <span className="underline bg-blue-500 p-2">
                            Go to Login
                        </span>
                    </Link>
                    <Link to="/signup">
                        <span className="underline bg-blue-500 p-2">
                            Go to Signup
                        </span>
                    </Link>
                </>
            )}
        </div>
    )
}

export default HomePage
