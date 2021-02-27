import callApiHttp from 'functions/callApiHttp'
import { ProvideFriend, useFriend } from 'hooks/useFriend'
import React, { useEffect, useState } from 'react'

const FriendImpl = () => {
    const { userFriends = null } = useFriend()
    const [error, setError] = useState()

    const handleAcceptFriend = async (user_id, type = true) => {
        try {
            const { data } = await callApiHttp({
                method: "POST",
                url: '/friend/set_accept_request_friend',
                data: {
                    user_id,
                    is_accept: type
                }
            })
            if (data.code === 1000) {
                alert("success")
            }
            else {
                alert("failed")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleCancelRequest = async (user_id) => {
        try {
            const res = await callApiHttp({
                method: "POST",
                url: '/friend/cancel_request_friend',
                data: {
                    user_id
                }
            })
            console.log(res)
            const { data } = res
            if (data.code === 1000) {
                alert("success")
            }
            else {
                alert("failed")
            }
        } catch (error) {
            console.log(error)
            setError(error?.message)
        }
    }

    const handleAddFriend = async (user_id) => {
        try {
            const res = await callApiHttp({
                method: "POST",
                url: '/friend/send_request_friend',
                data: {
                    user_id
                }
            })
            console.log(res)
            const { data } = res
            if (data.code === 1000) {
                alert("success")
            }
            else {
                alert("failed")
            }
        } catch (error) {
            console.log(error)
            setError(error?.message)
        }
    }
    const fetchUsers = async (keyword = "") => {
        try {
            const res = await callApiHttp({
                method: "GET",
                url: "/search/search_user?keyword=" + keyword
            })
            const { data } = res
            console.log(data.data)
            if (data.code === 1000) {
                setUsers(data?.data)
                return data?.data
            } else {
                setError(data.message)
            }
        } catch (error) {
            console.log(error)
            setError(error?.message || "unknown")
        }
    }

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetchUsers()
    }, [])


    return (
        <div>
            <div>My sent requests: </div>
            <div className='pl-5rem'>
                {userFriends?.sentRequestFriends?.length > 0 ? userFriends?.sentRequestFriends.map((friend, index) => {
                    let fuser = friend?.user
                    return fuser && (<div key={index}>
                        <div>avatar: {fuser.avatar || "null"}</div>
                        <div>username: {fuser.username || "null"}</div>
                        <div>email: {fuser.email}</div>
                        <button onClick={() => handleCancelRequest(fuser._id)}>Cancel request</button>
                    </div>)
                }) : "You have no request"}
            </div>
            <div>Received requests: </div>
            <div className='pl-5rem'>
                {userFriends?.receivedRequestFriends?.length > 0 ? userFriends?.receivedRequestFriends.map((friend, index) => {
                    let fuser = friend?.user
                    return fuser && (<div key={index}>
                        <div>avatar: {fuser.avatar || "null"}</div>
                        <div>username: {fuser.username || "null"}</div>
                        <div>email: {fuser.email}</div>
                        <button onClick={() => handleAcceptFriend(fuser._id, true)}>Accept</button>
                    </div>)
                }) : "You have no request"}
            </div>
            <div>Users: </div>
            <div className="pl-5rem">
                {users?.length > 0 && users.map((user, index) => {
                    return <div key={index}>
                        <div>avatar: {user.avatar || "null"}</div>
                        <div>username: {user.username || "null"}</div>
                        <div>email: {user.email}</div>
                        {user._id !== localStorage.getItem("user_id") ?
                            user.is_friend ?
                                <button onClick={() => alert("doing")}>Message</button> :
                                <button onClick={() => handleAddFriend(user._id, true)}>Add friend</button> :
                                <button onClick={() => handleAddFriend(user._id, true)}>My Profile</button>
                        }
                    </div>
                })}
            </div>
            {error && <div>Error: {error}</div>}
        </div>
    )
}

const Friend = () => {
    return <ProvideFriend>
        <FriendImpl />
    </ProvideFriend>
}


export default Friend
