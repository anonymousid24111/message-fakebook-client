import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import routes from 'routes'
import LogoutButton from './LogoutButton'
import DropIcon from './UI/DropIcon'
import FriendIconFacebook from './UI/FriendIconFacebook'
import HomeIconFacebook from './UI/HomeIconFacebook'
import MessageIconFacebook from './UI/MessageIconFacebook'
import WatchIconFacebook from './UI/WatchIconFacebook'

function NavBar() {
    const [showDropdown, setShowDropdown] = useState(false)
    return (
        <div className="flex flex-row items-center justify-between">
            <span>logo</span>
            <div className="flex flex-row items-center justify-between">
                <NavLink
                    to="/"
                    exact
                    activeClassName="fb-bg-active"
                    className="fb-bg-dark py-4 px-6  fb-hover-bg-dark text-white"
                >
                    <HomeIconFacebook />
                </NavLink>
                <NavLink
                    to="/watch"
                    activeClassName="fb-bg-active"
                    className="fb-bg-dark py-4 px-6  fb-hover-bg-dark text-white"
                >
                    <WatchIconFacebook />
                </NavLink>
                <NavLink
                    to="/message"
                    activeClassName="fb-bg-active"
                    className="fb-bg-dark py-4 px-6  fb-hover-bg-dark text-white"
                >
                    <MessageIconFacebook />
                </NavLink>
                <NavLink
                    to="/friend"
                    activeClassName="fb-bg-active"
                    className="fb-bg-dark py-4 px-6  fb-hover-bg-dark text-white"
                >
                    <FriendIconFacebook />
                </NavLink>
            </div>

            <button
                type="button"
                className="relative w-10 h-10 rounded-full bg-gray-500 text-center flex items-center justify-center focus:outline-none"
                onClick={() => setShowDropdown((x) => !x)}
            >
                <DropIcon />
                {showDropdown && (
                    <div className="absolute top-full right-0 w-56 bg-gray-400">
                        <LogoutButton />
                    </div>
                )}
            </button>
            {/* {routes.map((route) => (
                <NavLink
                    key={route.path}
                    to={route.path}
                    exact
                    activeClassName="fb-bg-active"
                    className="fb-bg-dark p-4 fb-hover-bg-dark"
                >
                    {route.name}
                </NavLink>
            ))} */}
        </div>
    )
}

export default NavBar
