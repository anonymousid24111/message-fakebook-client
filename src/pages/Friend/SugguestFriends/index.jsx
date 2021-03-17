import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Title from '../components/Title'

import { useFriend } from '../hooks/useFriend'
import AvatarBlock from '../components/AvatarBlock'

const SuggestFriends = ({ users = [] }) => {
    const { handleAddFriend } = useFriend()

    const renderButton = ({ _id, isFriend }) => {
        if (_id !== localStorage.getItem('user_id')) {
            if (isFriend) {
                return (
                    <button type="button" onClick={() => {}}>
                        Message
                    </button>
                )
            }
            return (
                <div className="flex flex-row w-full space-x-4">
                    <button
                        type="button"
                        className="fb-bg-main flex-grow rounded-lg py-2 px-4 focus:outline-none"
                        onClick={() => handleAddFriend(_id, true)}
                    >
                        Add friend
                    </button>
                    <button
                        type="button"
                        className="fb-bg-dark-2 flex-grow rounded-lg py-2 px-4 focus:outline-none"
                        onClick={() => {}}
                    >
                        Remove
                    </button>
                </div>
            )
        }
        return (
            <button type="button" onClick={() => handleAddFriend(_id, true)}>
                My Profile
            </button>
        )
    }

    return (
        <div>
            <Title title="People You May Know" />
            <div className="space-y-2 p-2">
                {users?.length > 0 &&
                    users.map((user) => {
                        const {
                            _id,
                            avatar,
                            username,
                            email,
                            is_friend: isFriend,
                        } = user
                        return (
                            <Link to={`/friend/${_id}`} key={_id}>
                                <div className="flex flex-row p-2 rounded-lg fb-hover-bg-dark">
                                    <AvatarBlock src={avatar} />
                                    <div className="px-4 flex-grow">
                                        <div className="text-lg">
                                            {username || email || 'null'}
                                        </div>
                                        {renderButton(_id, isFriend)}
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
            </div>
        </div>
    )
}

SuggestFriends.defaultProps = {
    users: [],
}

SuggestFriends.propTypes = {
    users: PropTypes.arrayOf(PropTypes.any),
}

export default SuggestFriends
