import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import LogoutButton from './LogoutButton'
// import { useAuth } from '../hooks/useAuth'

const NavBar = ({ routes = [] }) => (
    // const auth = useAuth()

    <div className="flex flex-row">
        {routes.map((route) => (
            <NavLink
                key={route.path}
                to={route.path}
                exact
                activeClassName="fb-bg-active"
                className="fb-bg-dark p-4 border border-black fb-hover-bg-dark"
            >
                {route.name}
            </NavLink>
        ))}
        <LogoutButton />
    </div>
)
NavBar.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
}

export default NavBar
