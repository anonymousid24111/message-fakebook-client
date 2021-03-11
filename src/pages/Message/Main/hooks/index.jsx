import React, { useContext, createContext, useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import {
    JOIN,
    OUT_ROOM,
    SEND_MESSAGE,
    TYPING,
    RECEIVE_MESSAGE,
} from 'commons/socketEvents'
import { useAuth } from 'hooks/useAuth'

import callApiHttp from 'functions/callApiHttp'
import PropTypes from 'prop-types'

const mainContext = createContext()

function ProvideMain({ children }) {
    const main = useProvideMain()
    return <mainContext.Provider value={main}>{children}</mainContext.Provider>
}
ProvideMain.propTypes = {
    children: PropTypes.node.isRequired,
}

function useMain() {
    return useContext(mainContext)
}

function useProvideMain() {
    const [show, setShow] = useState(false)
    const { id } = useParams()
    const { socket, user } = useAuth()
    const [conversation, setConversation] = useState()
    const [userInfo, setUserInfo] = useState()
    const [typing, setTyping] = useState(false)
    const [changing, setChanging] = useState(false)
    const handleTypingHook = (flag) => {
        const { _id } = conversation
        socket &&
            socket.emit(TYPING, {
                sender: user,
                conversationId: _id,
                typing: flag,
                kind: 'typing',
            })
    }

    const handleSubmitSendMessage = (e, kind = 'text') => {
        const now = Date.now()
        const { _id } = conversation
        socket.emit(SEND_MESSAGE, {
            sender: user,
            receiver: id,
            message: {
                kind,
                content: e,
            },
            conversationId: _id || '',
        })

        setConversation((x) =>
            x
                ? {
                      ...x,
                      messages: [
                          ...x?.messages,
                          {
                              kind,
                              content: e,
                              sender: user,
                              created: now,
                          },
                      ],
                  }
                : {
                      members: [id, user],
                      messages: [
                          {
                              kind,
                              content: e,
                              sender: user,
                              created: now,
                          },
                      ],
                  }
        )
    }

    useEffect(() => {
        let isSubscribed = true
        const fetchConversation = async () => {
            try {
                const { data } = await callApiHttp({
                    method: 'GET',
                    url: `/conversation/${id}`,
                })
                if (data.code === 1000) {
                    if (data.data) {
                        const { member, conversations } = data.data
                        isSubscribed && setUserInfo(member)
                        isSubscribed && setConversation(conversations)
                    } else {
                        isSubscribed && setConversation({})
                    }
                } else {
                    // console.log(data.message)
                }
            } catch (error) {
                // console.log(error)
            }
        }
        id && isSubscribed && fetchConversation()
        return () => {
            isSubscribed = false
        }
    }, [id])

    useEffect(() => {
        if (!conversation) return null
        const { _id } = conversation
        if (!_id) return null
        socket.emit(JOIN, {
            conversationId: _id,
            userId: localStorage.getItem('user_id'),
            members: conversation?.members,
        })
        socket.on(RECEIVE_MESSAGE, (data) => {
            // error
            // socket.emit(ISREAD, {
            //     conversationId: _id,
            //     members: conversation.members,
            //     userId: localStorage.getItem("user_id")
            // })
            setConversation((x) => ({ ...x, messages: [...x.messages, data] }))
        })
        socket.on(TYPING, (data) => {
            setTyping(data.typing)
        })
        return () => {
            if (socket) {
                socket.off(RECEIVE_MESSAGE)
                socket.off(TYPING)
            }
            if (id && socket) socket.emit(OUT_ROOM, _id)
        }
    }, [socket, conversation, id])

    return {
        show,
        setShow,
        conversation,
        handleSubmitSendMessage,
        userInfo,
        typing,
        setTyping,
        handleTypingHook,
        changing,
        setChanging,
        // message,
        // setMessage
    }
}

export { ProvideMain, useMain, useProvideMain }