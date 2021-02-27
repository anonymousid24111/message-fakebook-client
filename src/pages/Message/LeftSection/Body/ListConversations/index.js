import React, { memo, useEffect, useState } from 'react'
import ConversationElement from './ConversationElement'
import callApiHttp from 'functions/callApiHttp'

const ListConversations = () => {
    const [listConversations, setListConversations] = useState()
    // const { id } = useParams()
    const user = localStorage.getItem("user_id")
    console.log("render list conversations:", listConversations?"loaded":"loading")
    useEffect(() => {
        const fetchListConversations = async () => {
            const { data } = await callApiHttp({
                method: "GET",
                url: "/conversation/"
            })
            if (data.code === 1000) {
                setListConversations(data.data)
            } else {
                alert("error")
            }
        }
        fetchListConversations()
    }, [])

    return (
        <div className="list-conversation">
            {listConversations?.length > 0 ? listConversations?.map((conversation, index) => {
                conversation.members = conversation.members.filter(x => x._id !== user)
                let tempMember = conversation.members[0]
                let conversationName = tempMember.username || tempMember.email
                let conversationId = tempMember._id
                return <ConversationElement conversation={conversation} conversationId={conversationId} conversationName={conversationName} key={index} firstMessage={conversation?.messages.slice(-1)[0]} />
            }) :
                <i>You have no conversation</i>
            }
        </div>
    )
}

export default memo(ListConversations)
