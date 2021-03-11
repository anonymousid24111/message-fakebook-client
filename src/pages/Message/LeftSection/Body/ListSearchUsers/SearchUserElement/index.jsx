import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'assets/images/avatar.jpg'
import PropTypes from 'prop-types'

const SearchUserElement = ({
    _id,
    avatar,
    email,
    is_friend: isFriend,
    username,
    status,
}) => (
    <Link to={`/message/t/${_id || ''}`}>
        <div className="hover:bg-gray-500 flex items-center no-underline p-1 items-center rounded-xl">
            <div className="flex-none w-9 h-9 relative">
                <img
                    src={avatar || logo}
                    alt="avatar-friend"
                    className="rounded-full"
                />
                {status || (
                    <span className="absolute bottom-0 right-0 bg-green-500 rounded-full w-2 h-2 border-2 border-current" />
                )}
            </div>
            <div className="flex-grow px-3">
                <div className="text-lg font-normal">
                    {username || email || 'null'}
                </div>
                <div className="text-sm">
                    is_friend: {isFriend ? 'true' : 'false'}
                </div>
            </div>
        </div>
    </Link>
)
SearchUserElement.propTypes = {
    _id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    is_friend: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
}

export default SearchUserElement