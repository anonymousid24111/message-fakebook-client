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


    return {
        userFriends,
        setUserFriends,
        fetchUserFriends
    };
}

export {
    ProvideFriend,
    useFriend,
    useProvideFriend,
}