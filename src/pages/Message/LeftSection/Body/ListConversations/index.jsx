import React, { useEffect, useState } from 'react'
import callApiHttp from 'functions/callApiHttp'

import { ISREAD, NEW_CONVERSATION, RECEIVED } from 'commons/socketEvents'
import { useAuth } from 'hooks/useAuth'
import ConversationElement from './ConversationElement'

const ListConversations = () => {
    const [listConversations, setListConversations] = useState()
    // const { id } = useParams()
    const { socket } = useAuth()
    const user = localStorage.getItem('user_id')
    useEffect(() => {
        const fetchListConversations = async () => {
            const { data } = await callApiHttp({
                method: 'GET',
                url: '/conversation/',
            })
            if (data.code === 1000) {
                setListConversations(
                    data.data.sort(
                        (a, b) =>
                            b?.last_message.created - a?.last_message.created
                    )
                )
            } else {
                // alert('error')
            }
        }
        fetchListConversations()
    }, [])

    useEffect(() => {
        socket &&
            socket.on(NEW_CONVERSATION, (data) => {
                const { _id } = data
                socket.emit(RECEIVED, {
                    conversationId: _id,
                    userId: data.last_message.sender,
                })
                setListConversations((x) => [
                    data,
                    ...x.filter((y) => {
                        const { _id: yId } = y
                        return yId !== _id
                    }),
                ])
            })
        return () => {
            socket && socket.off(NEW_CONVERSATION)
        }
    }, [socket])

    useEffect(() => {
        let isSubscribed = true
        socket &&
            socket.on(ISREAD, (data) => {
                // setListConversations([])
                isSubscribed &&
                    setListConversations((x) => {
                        const i = x.find((e) => {
                            const { _id: eId } = e
                            return eId === data?.conversationId
                        })
                        // if (i !== -1) x[i].last_message.is_read = 2
                        i.last_message.is_read = 2
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
        socket &&
            socket.on(RECEIVED, (data) => {
                isSubscribed &&
                    setListConversations((x) => {
                        const i = x.find((e) => {
                            const { _id: eId } = e
                            return eId === data?.conversationId
                        })
                        i.last_message.is_read = 1
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
            {listConversations?.length > 0 ? (
                listConversations?.map((conversationE, index) => {
                    const conversation = conversationE
                    conversation.members = conversation.members.filter((x) => {
                        const { _id: xId } = x
                        return xId !== user
                    })
                    const tempMember = conversation.members[0]
                    const conversationName =
                        tempMember.username || tempMember.email
                    const { _id: conversationId } = tempMember
                    return (
                        <ConversationElement
                            members={tempMember}
                            conversation={conversation}
                            conversationId={conversationId}
                            conversationName={conversationName}
                            key={conversationId}
                            firstMessage={conversation?.last_message}
                        />
                    )
                })
            ) : (
                <i>You have no conversation</i>
            )}
        </div>
    )
}

export default ListConversations
