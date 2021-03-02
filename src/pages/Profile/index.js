import React, { useState } from 'react'
import { useUser, ProvideUser } from 'hooks/useUser'
import callApiHttp from 'functions/callApiHttp'
import logo from 'assets/images/avatar.jpg'
const ProfileImpl = () => {
    const user = useUser()
    const { userInfo = null } = user
    const [error, setError] = useState()

    const handleUnfriend = async (user_id) => {
        try {
            const { data } = await callApiHttp({
                method: 'POST',
                url: "/friend/set_unfriend",
                data: {
                    user_id
                }
            })
            if (data.code === 1000) {
                alert("success")
            } else {
                alert("failed")
            }
        } catch (error) {
            console.log(error)
            setError(error?.message)
        }
    }

    return (
        <div className="w-screen h-screen bg-gray-900">
            <div className="h-96 overflow-hidden relative pb-4 box-content" >
                <img src={logo} className="rounded-lg h-96 object-cover m-auto" alt="cover_image" style={{width: "940px"}} />
                <div className="absolute bottom-0 left-1/2" style={{marginLeft: "-64px"}}>
                    <img src={userInfo?.avatar||logo} className="rounded-full w-32 h-32 border-4 border-black object-cover" alt="avatar_image" />
                </div>
            </div>
            <div>
                <div className="text-4xl font-bold text-center">
                    {userInfo?.username || "Null"}
                </div>
            </div>
            <ul className="flex flex-row space-x-4 p-4" >
                <li className="p-3 bg-blue-900 w-20 text-center">Post</li>
                <li className="p-3 bg-blue-900 w-20 text-center">About</li>
                <li className="p-3 bg-blue-900 w-20 text-center">Friends</li>
                <li className="p-3 bg-blue-900 w-20 text-center">Mores</li>
            </ul>
            <div>email: {userInfo?.email}</div>
            <div>birthday: {userInfo?.birthday}</div>
            <div>friends: </div>
            <div className="pl-5rem">
                {userInfo?.friends?.length > 0 ? userInfo.friends.map((friend, index) => {
                    return (<div key={index}>
                        {friend} <button onClick={() => handleUnfriend(friend)}>Unfriend</button>
                    </div>)
                }) : <div>You have no friend</div>}
            </div>
            {error && <div>Error: {error}</div>}
        </div>
    )
}

const Profile = () => {
    return <ProvideUser>
        <ProfileImpl />
    </ProvideUser>
}


export default Profile
