import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import { useProvideFriend } from '../hooks/useFriend'
import AvatarBlock from '../components/AvatarBlock'

const MyRequestFriends = ({ users = [] }) => {
    const { handleCancelRequest } = useProvideFriend()
    return (
        <div>
            <Title title="My request" />
            <div className="space-y-2 p-2">
                {users.length > 0 ? (
                    users.map((friend, index) => {
                        const fuser = friend?.user
                        const { _id, avatar, username, email } = fuser
                        return (
                            <Link to={`/friend/${_id}`} key={_id}>
                                <div className="flex flex-row p-2 rounded-lg fb-hover-bg-dark">
                                    <AvatarBlock src={avatar} />
                                    <div className="px-4 flex-grow">
                                        <div className="text-lg">
                                            {username || email || 'null'}
                                        </div>
                                        <button
                                            type="button"
                                            className="fb-bg-dark-2 flex-grow rounded-lg py-2 px-4 focus:outline-none"
                                            onClick={() =>
                                                handleCancelRequest(_id)
                                            }
                                        >
                                            Cancel request
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                ) : (
                    <div className="text-center">You have no request</div>
                )}
            </div>
        </div>
    )
}

MyRequestFriends.propTypes = {
    users: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default MyRequestFriends
