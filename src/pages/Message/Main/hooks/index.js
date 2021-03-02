import React, { useContext, createContext, useState, useEffect } from "react";

import { useParams } from 'react-router-dom';

import { JOIN, OUT_ROOM, SEND_MESSAGE } from 'commons/socketEvents'
import { useAuth } from 'hooks/useAuth';

import callApiHttp from 'functions/callApiHttp';
import { RECEIVE_MESSAGE } from 'commons/socketEvents'



const mainContext = createContext();

function ProvideMain({ children }) {
    const main = useProvideMain();
    return (
        <mainContext.Provider value={main}>
            {children}
        </mainContext.Provider>
    );
}

function useMain() {
    return useContext(mainContext);
}

function useProvideMain() {
    const [show, setShow] = useState(false)
    const { id } = useParams()
    const { socket, user } = useAuth()
    const [conversation, setConversation] = useState()
    const [userInfo, setUserInfo] = useState()


    const handleSubmitSendMessage = (e, kind = "text") => {
        let now = Date.now()
        socket.emit(SEND_MESSAGE, {
            sender: user,
            receiver: id,
            message: {
                kind,
                content: e
            },
            conversationId: conversation?._id || ""
        })

        

        setConversation(x => x ? ({
            ...x, messages: [...x?.messages, {
                kind,
                content: e,
                sender: user,
                created: now
            }]
        }) : ({
            members: [id, user],
            messages: [{
                kind,
                content: e,
                sender: user,
                created: now
            }]
        }))
    }

    useEffect(() => {
        let isSubscribed = true;
        const fetchConversation = async () => {
            try {
                const { data } = await callApiHttp({
                    method: "GET",
                    url: "/conversation/" + id,
                })
                if (data.code === 1000) {
                    if (data.data) {
                        const { member, conversations } = data.data
                        isSubscribed && (setUserInfo(member))
                        isSubscribed && setConversation(conversations)
                    } else {
                        isSubscribed && setConversation({})
                    }

                } else {
                    console.log(data.message)
                }
            } catch (error) {
                console.log(error)
            }
        }
        id && isSubscribed && fetchConversation()
        return () => (isSubscribed = false)
    }, [id])


    useEffect(() => {
        if (!conversation) return
        const { _id } = conversation
        if (!_id) return
        socket.emit(JOIN, _id)
        socket.on(RECEIVE_MESSAGE, data => {
            setConversation(x => ({ ...x, messages: [...x.messages, data] }))
        })
        return () => {
            socket && socket.off(RECEIVE_MESSAGE)
            _id && socket && socket.emit(OUT_ROOM, _id)
        }
    }, [socket, conversation])



    return {
        show,
        setShow,
        conversation,
        handleSubmitSendMessage,
        userInfo
        // message,
        // setMessage
    };
}

export {
    ProvideMain,
    useMain,
    useProvideMain,
}