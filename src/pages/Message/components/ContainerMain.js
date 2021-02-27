import React, { useEffect, useRef, useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { RiFileGifFill, RiStarSmileFill } from 'react-icons/ri'
import { FaImages } from 'react-icons/fa'
import HeaderMain from './HeaderMain';
import { IoSend } from 'react-icons/io5';
// import { emitSocket, initiateSocket, onSocket } from 'functions/callApiWebsocket';
import { SEND_MESSAGE } from 'commons/socketEvents'
import { useAuth } from 'hooks/useAuth';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form'

import MessageBlock from 'components/MessageBlock';
import callApiHttp from 'functions/callApiHttp';
import { RECEIVE_MESSAGE } from 'commons/socketEvents'
import ContainerDetail from 'components/ContainerDetail';

const ContainerMain = () => {
    const [message, setMessage] = useState("")
    const [showDetail, setShowDetail] = useState(false)
    // const [typing, setTyping] = useState(false)
    const { user, emitSocket, onSocket,socket } = useAuth()
    const { id } = useParams()
    const { register, handleSubmit } = useForm()
    const [conversation, setConversation] = useState({})
    const handleSubmitSendMessage = (e) => {
        emitSocket(SEND_MESSAGE, {
            sender: user,
            receiver: id,
            message: {
                kind: message ? "text" : "react",
                content: message
            },
            conversationId: conversation?._id || ""
        })

        setConversation(x => ({
            ...x, messages: [...x.messages, {
                kind: "text",
                content: message,
                sender: user
            }]
        }))
        setMessage("")
    }
    console.log("render body")
    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollTop = divRef.current.scrollHeight;
        const fetchConversation = async () => {
            try {
                divRef.current.scrollTop = 800;
                const { data } = await callApiHttp({
                    method: "GET",
                    url: "/conversation/" + id,
                })
                if (data.code === 1000) {
                    // console.log(data.data)
                    setConversation(data.data)
                } else {
                    console.log(data.message)
                }
            } catch (error) {
                console.log(error)
            }
        }
        id && fetchConversation()
        socket&&socket.on(RECEIVE_MESSAGE, data => {
            console.log("id current: ", id, data)
            data.sender === id && setConversation(x => ({ ...x, messages: [...x.messages, data] }))
        })
        return ()=>{
            // socket&&socket
        }

    }, [id, user, onSocket])
    


    const [userInfo, setUserInfo] = useState({})
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const { data } = await callApiHttp({
                    method: "GET",
                    url: "/user/" + id,
                })
                if (data.code === 1000) {
                    setUserInfo(data.data)
                } else {
                    console.log(data.message)
                }
            } catch (error) {
                console.log(error)
            }
        }
        id&&fetchUserInfo()
    }, [id])
    return (
        <>
            <div className="container-main">
                <HeaderMain setShowDetail={() => setShowDetail(x => !x)} user={userInfo} />
                <div className="list-chat" ref={divRef}>
                    <div className="list-chat__left">
                        {conversation?.messages?.length > 0 ? conversation.messages.map((message, index) => {
                            return <MessageBlock message={message} key={index} isMe={user === message?.sender} />
                        }) : <i>You have no message</i>}
                    </div>
                </div>
                <div className="footer-right">
                    <BsFillPlusCircleFill className="footer-right__icon" />
                    <FaImages className="footer-right__icon" />
                    <RiStarSmileFill className="footer-right__icon" />
                    <RiFileGifFill className="footer-right__icon" />
                    <form onSubmit={handleSubmit(handleSubmitSendMessage)} className="footer-right__input" id="messageForm">
                        <input ref={register} type="text" name="message"
                            className="w-full rounded-full focus: outline-none bg-gray-600 p-2 "
                            value={message}
                            placeholder="Aa" autoComplete="off"
                            onChange={e => setMessage(e.target.value)}
                        />

                    </form>
                    {message ?
                        <button type="submit" className="button-icon" form="messageForm"><IoSend className="footer-right__icon" /></button> :
                        <button type="submit" className="button-icon" form="messageForm"><AiFillLike className="footer-right__icon" /></button>
                    }
                </div>
            </div>
            <ContainerDetail showDetail={showDetail} user={userInfo} />
        </>
    )
}

export default ContainerMain
