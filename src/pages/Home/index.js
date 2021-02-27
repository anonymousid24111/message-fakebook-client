import React from 'react'
import NavBar from 'components/NavBar'
import routes from 'routes'

const HomePage = () => {
    return (
        <div>
            <NavBar routes={routes}/>
            <h1>HomePage</h1>
        </div>
    )
}

export default HomePage
