import React, { useState } from 'react'
import { useUser, ProvideUser } from 'hooks/useUser'
import callApiHttp from 'functions/callApiHttp'

const ProfileImpl = () => {
    const user = useUser()
    const { userInfo = null } = user
    // useEffect(() => {
    //     console.log("hihihi")
    //     fetchUserInfo()
    // }, [])
    const [error, setError] = useState()

    const handleUnfriend =async (user_id) => {
        try {
            const {data} = await callApiHttp({
                method: 'POST',
                url: "/friend/set_unfriend",
                data: {
                    user_id
                }
            })
            if (data.code===1000) {
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
        <div>
            <div>username: {userInfo?.username}</div>
            <div>email: {userInfo?.email}</div>
            <div>birthday: {userInfo?.birthday}</div>
            <div>friends: </div>
            <div className="pl-5rem">
                {userInfo?.friends?.length > 0 ? userInfo.friends.map((friend, index) => {
                    return (<div key={index}>
                        {friend} <button onClick={()=>handleUnfriend(friend)}>Unfriend</button>
                    </div>)
                }) : <div>You have no friend</div>}
            </div>
            {error&&<div>Error: {error}</div>}
        </div>
    )
}

const Profile = () => {
    return <ProvideUser>
        <ProfileImpl />
    </ProvideUser>
}


export default Profile
