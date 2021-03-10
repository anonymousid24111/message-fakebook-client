import React, { memo, useEffect, useState } from 'react'
import ConversationElement from './ConversationElement'
import callApiHttp from 'functions/callApiHttp'

import { ISREAD, NEW_CONVERSATION, RECEIVED } from 'commons/socketEvents'
import { useAuth } from 'hooks/useAuth'
const ListConversations = () => {
    const [listConversations, setListConversations] = useState()
    // const { id } = useParams()
    const { socket } = useAuth()
    const user = localStorage.getItem("user_id")
    console.log("yyyyyyyy left")
    useEffect(() => {
        console.log("yyyyyy fetch")
        const fetchListConversations = async () => {
            const { data } = await callApiHttp({
                method: "GET",
                url: "/conversation/"
            })
            if (data.code === 1000) {
                setListConversations(data.data.sort((a, b) => b?.last_message.created - a?.last_message.created))
            } else {
                alert("error")
            }
        }
        fetchListConversations()
    }, [])


    useEffect(() => {
        socket && socket.on(NEW_CONVERSATION, data => {
            socket.emit(RECEIVED, {
                conversationId: data._id,
                userId: data.last_message.sender
            })
            setListConversations(x => [data, ...x.filter(y => y._id !== data._id)])
        })
        return () => {
            socket && socket.off(NEW_CONVERSATION)
        }
    }, [socket])

    useEffect(() => {
        let isSubscribed = true
        socket && socket.on(ISREAD, data => {
            console.log('xxxxxxxxxxxx', data)
            // setListConversations([])
            isSubscribed && setListConversations(x => {
                let i = x.find(e => e._id === data?.conversationId)
                // if (i !== -1) x[i].last_message.is_read = 2
                i.last_message.is_read = 2
                console.log('xxxxxxx', data.conversationId, x, i)
                return [...x]
            })
        })
        return () => {
            isSubscribed = false
            socket && socket.off(ISREAD)
        }
    }, [socket])

    useEffect(() => {
        let isSubscribed = true
        socket && socket.on(RECEIVED, data => {
            isSubscribed && setListConversations(x => {
                let i = x.find(e => e._id === data?.conversationId)
                // if (i !== -1) x[i].last_message.is_read = 2
                i.last_message.is_read = 1
                console.log('xxxxxxx', data.conversationId, x, i)
                return [...x]
            })
        })
        return () => {
            isSubscribed = false
            socket && socket.off(RECEIVED)
        }
    }, [socket])

    return (
        <div className="list-conversation overflow-auto p-1">
            {listConversations?.length > 0 ? listConversations?.map((conversation, index) => {
                conversation.members = conversation.members.filter(x => x._id !== user)
                let tempMember = conversation.members[0]
                let conversationName = tempMember.username || tempMember.email
                let conversationId = tempMember._id
                return <ConversationElement members={tempMember} conversation={conversation} conversationId={conversationId} conversationName={conversationName} key={index} firstMessage={conversation?.last_message} />
            }) :
                <i>You have no conversation</i>
            }
        </div>
    )
}

export default (ListConversations)
