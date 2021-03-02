import React, { memo, useEffect, useState } from 'react'
import ConversationElement from './ConversationElement'
import callApiHttp from 'functions/callApiHttp'

import { NEW_CONVERSATION } from 'commons/socketEvents'
import { useAuth } from 'hooks/useAuth'
const ListConversations = () => {
    const [listConversations, setListConversations] = useState()
    // const { id } = useParams()
    const { socket } = useAuth()
    const user = localStorage.getItem("user_id")
    useEffect(() => {
        const fetchListConversations = async () => {
            const { data } = await callApiHttp({
                method: "GET",
                url: "/conversation/"
            })
            if (data.code === 1000) {
                setListConversations(data.data.sort((a,b)=>b?.last_message.created-a?.last_message.created))
            } else {
                alert("error")
            }
        }
        fetchListConversations()
    }, [])


    useEffect(() => {
        console.log("ondata", socket)
        socket && socket.on(NEW_CONVERSATION, data => {
            // console.log("data", listConversations, data)
            setListConversations(x => [data, ...x.filter(y => y._id !== data._id)])
        })
        return () => {
            socket && socket.off(NEW_CONVERSATION)
        }
    }, [socket])

    return (
        <div className="list-conversation">
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

export default memo(ListConversations)
