import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
import { useProvideFriend } from '../hooks/useFriend'
import AvatarBlock from '../components/AvatarBlock'

const MyRequestFriends = ({ users = [] }) => {
    const { handleCancelRequest } = useProvideFriend()
    return (
        <div>
            <Title title="My request" />
            <div className='space-y-2 p-2'>
                {users.length > 0 ? users.map((friend, index) => {
                    let fuser = friend?.user
                    return (
                        <Link to={`/friend/${fuser?._id}`} key={index} >
                            <div className="flex flex-row p-2 rounded-lg fb-hover-bg-dark">
                                <AvatarBlock src={fuser.avatar} />
                                <div className="px-4 flex-grow">
                                    <div className="text-lg">{fuser.username || fuser.email || "null"}</div>
                                    <button className="fb-bg-dark-2 flex-grow rounded-lg py-2 px-4 focus:outline-none" onClick={() => handleCancelRequest(fuser._id)}>Cancel request</button>
                                </div>
                            </div>
                        </Link>
                    )
                }) : <div className="text-center">You have no request</div>}
            </div>
        </div>
    )
}

export default MyRequestFriends
