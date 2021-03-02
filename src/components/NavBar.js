import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoutButton from './LogoutButton'
// import { useAuth } from '../hooks/useAuth'

const NavBar = ({ routes = [] }) => {
    // const auth = useAuth()

    return (
        <div className="flex flex-row">
            {routes.map((route, index) => {
                return (<NavLink
                    key={index}
                    to={route?.path}
                    exact
                    activeClassName="fb-bg-active"
                    className="fb-bg-dark p-4 border border-black fb-hover-bg-dark" >
                    {route?.name}
                </NavLink>)
            })}
            <LogoutButton />
        </div>
    )
}

export default NavBar
