import callApiHttp from "functions/callApiHttp";
import React, { useContext, createContext, useState, useEffect } from "react";

const userContext = createContext();

function ProvideFriend({ children }) {
    const user = useProvideFriend();
    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    );
}

function useFriend() {
    return useContext(userContext);
}

function useProvideFriend() {
    const [userFriends, setUserFriends] = useState(localStorage.getItem('user_friends'));

    const [users, setUsers] = useState()

    useEffect(() => {
        fetchUserFriends()
    }, [])

    const fetchUserFriends = async () => {
        try {
            const [res1, res2] = await Promise.all([
                callApiHttp({
                    url: '/friend/get_all_sent_request_friends',
                    method: 'GET'
                }), callApiHttp({
                    url: '/friend/get_all_received_request_friends',
                    method: 'GET'
                })])
            // const { data } = res1
            if (res1.data.code === 1000 || res2.data.code === 1000) {
                let data = { ...res1.data.data, ...res2.data.data }
                setUserFriends(data)
                localStorage.setItem('user_friends', JSON.stringify(data))
            } else {
                console.log("error: ", res1, res2)
            }
        } catch (error) {
            console.log('error: ' + error)
        }
    }

    
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
            const { data } = res
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

    const handleAddFriend = async (user_id) => {
        try {
            const res = await callApiHttp({
                method: "POST",
                url: '/friend/send_request_friend',
                data: {
                    user_id
                }
            })
            const { data } = res
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
    const fetchUsers = async (keyword = "") => {
        try {
            const res = await callApiHttp({
                method: "GET",
                url: "/search/search_user?keyword=" + keyword
            })
            const { data } = res
            if (data.code === 1000) {
                setUsers(data?.data)
                return data?.data
            } else {
                console.log(data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])


    return {
        userFriends,
        users,
        setUserFriends,
        fetchUserFriends,
        handleCancelRequest,
        handleAcceptFriend,
        handleAddFriend
    };
}

export {
    ProvideFriend,
    useFriend,
    useProvideFriend,
}