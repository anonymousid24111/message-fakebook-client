import React from 'react'
import Title from '../components/Title'

import { useFriend } from '../hooks/useFriend'
import { Link } from 'react-router-dom'
import AvatarBlock from '../components/AvatarBlock'
const SuggestFriends = ({ users = [] }) => {

    const { handleAddFriend } = useFriend()

    return (
        <div>
            <Title title="People You May Know" />
            <div className="space-y-2 p-2" >
                {users?.length > 0 && users.map((user, index) => {
                    return (
                        <Link to={`/friend/${user?._id}`} key={index} >
                            <div className="flex flex-row p-2 rounded-lg fb-hover-bg-dark">
                                <AvatarBlock src={user.avatar} />
                                <div className="px-4 flex-grow">
                                    <div className="text-lg">{user.username || user.email || "null"}</div>
                                    {user._id !== localStorage.getItem("user_id") ?
                                        user.is_friend ?
                                            <button onClick={() => alert("doing")}>Message</button> : <div className="flex flex-row w-full space-x-4">
                                                <button className="fb-bg-main flex-grow rounded-lg py-2 px-4 focus:outline-none" onClick={() => handleAddFriend(user._id, true)}>Add friend</button>
                                                <button className="fb-bg-dark-2 flex-grow rounded-lg py-2 px-4 focus:outline-none" onClick={() => alert("doing")}>Remove</button>
                                            </div> :
                                        <button onClick={() => handleAddFriend(user._id, true)}>My Profile</button>
                                    }
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default SuggestFriends
