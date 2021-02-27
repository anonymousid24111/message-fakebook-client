import callApiHttp from 'functions/callApiHttp'
import { useAuth } from 'hooks/useAuth'
import React, { useEffect } from 'react'

const MessageRedirect = () => {
    const { user } = useAuth()
    useEffect(() => {
        const fetchLastConversation = async () => {
            const { data } = await callApiHttp({
                method: "GET",
                url: "/conversation/get_last_conversation"
            })
            if (data.code === 1000) {
                if (data.data?.length > 0) {
                    const { members } = data.data[0]
                    document.location.href = "/message/t/" + members.filter(x => x !== user)[0]
                }
                else {
                    document.location.href = "/message/t/"
                }
            } else {
                document.location.href = "/message/t/"
                console.log(data.message)
            }
        }
        fetchLastConversation()
    }, [user])
    return (
        <div className="loading"></div>
    )
}

export default MessageRedirect
