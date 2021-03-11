import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'assets/images/avatar.jpg'
const SearchResultBlock = ({ user = {} }) => {
    return (<Link to={`/message/${user?._id || ""}`}>
        <div className="hover:bg-gray-500 flex items-center no-underline p-1 items-center rounded-xl">
            <div className="flex-none w-9 h-9 relative" >
                <img src={user?.avatar || logo} alt="avatar-friend" className="rounded-full" />
                {user?.status || <span className="absolute bottom-0 right-0 bg-green-500 rounded-full w-2 h-2 border-2 border-current"></span>}
            </div>
            <div className="flex-grow px-3">
                <div className="text-lg font-normal">{user?.username || user?.email || "null"}</div>
                <div className="text-sm">is_friend: {user?.is_friend ? "true" : "false"}</div>
            </div>
        </div>
    </Link>)
}

export default SearchResultBlock
