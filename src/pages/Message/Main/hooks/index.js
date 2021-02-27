import React, { useContext, createContext, useState, useEffect, useRef } from "react";

import { useParams } from 'react-router-dom';

import { JOIN, SEND_MESSAGE } from 'commons/socketEvents'
import { useAuth } from 'hooks/useAuth';
import io from "socket.io-client";

import callApiHttp from 'functions/callApiHttp';
import { RECEIVE_MESSAGE } from 'commons/socketEvents'
import { useSocket } from "hooks/useSocket";
import { API_URL } from "commons/constants";



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
    // const { socketRef } = useSocket()
    // let socket = socketRef.current

    const user = localStorage.getItem("user_id")
    const [conversation, setConversation] = useState()
    let userInfoRef = useRef()
    let userInfo = userInfoRef.current
    
    const handleSubmitSendMessage = (e) => {
        // console.log(object)
        // socket.emit(SEND_MESSAGE, {
        //     sender: user,
        //     receiver: id,
        //     message: {
        //         kind: e ? "text" : "react",
        //         content: e
        //     },
        //     conversationId: conversation?._id || ""
        // })

        setConversation(x => ({
            ...x, messages: [...x.messages, {
                kind: "text",
                content: e,
                sender: user
            }]
        }))
        // setMessage("")
    }
    console.log("render effect body main ", user, conversation, userInfo)

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
                        console.log("get conv", data.data)
                        const { member, conversations } = data.data
                        !userInfoRef.current && isSubscribed && (userInfoRef.current = member)
                        isSubscribed && setConversation(conversations)
                    } else {
                        isSubscribed && setConversation({})
                        console.log("lost data", data)
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
        // conversation&&socketRef.current.emit(JOIN,"hihi")
        // console.log("socket", socket, id, conversation)
        // if (!socket || !id || !conversation) return
        // socket.emit(JOIN, "aaa")
        // socket.on(RECEIVE_MESSAGE, data => {
        //     console.log("id current: ", id, data)
        //     data.sender === id && setConversation(x => ({ ...x, messages: [...x.messages, data] }))
        // })
        return () => {
            // socket && socket.disconnect()
        }
    }, [id, conversation])



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