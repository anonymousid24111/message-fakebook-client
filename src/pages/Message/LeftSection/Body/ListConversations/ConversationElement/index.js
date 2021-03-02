import React from 'react'
import { NavLink } from 'react-router-dom'
import { getTimeToNow } from 'functions/formatTime'
import AvatarBlock16 from 'components/AvatarBlock16'
import LikeFacebook from 'components/LikeFacebook'

const ConversationElement = ({ members = {}, conversation = {}, conversationName = "", firstMessage = {}, conversationId = "" }) => {
    let is_read, isMe = members?.username || members?.email;
    if (firstMessage?.sender === localStorage.getItem("user_id")) {
        is_read = true
        isMe = "You: "
    }
    else {
        if (firstMessage?.is_read === 1) {
            is_read = true
        } else {
            is_read = false
        }
    }
    const renderFirstMessage = () => {
        if (firstMessage === {}) {
            return <i>You have no message</i>
        }
        if (firstMessage.kind === "react") {
            return <div className="w-4 h-4"><LikeFacebook /></div>
        }
        if (firstMessage.kind === "text") {
            return <div className="conversation-block-content__message">
                {firstMessage.content || <i>You have no message</i>}
            </div>
        }
        if (firstMessage.kind === "images") {
            let json = JSON.parse(firstMessage.content)

            return <div className="conversation-block-content__message">
                {<i>sent some {json?.length>1?json?.length+" photos.":"a photo."}</i>}
            </div>
        }
        else {
            return <i>Doing</i>
        }
    }

    return (
        <NavLink activeClassName="bg-active" className="hover:bg-gray-600" to={`/message/t/${conversationId}`}>
            <div className="flex items-center no-underline p-3 items-center rounded-xl"
                style={{ backgroundColor: "inherit", fontWeight: is_read ? "" : "bolder" }}>
                <div className="flex-none w-16 h-16 relative" >
                    <AvatarBlock16 src={members?.avatar} />
                    {conversation?.status || <span className="absolute bottom-0 right-0 bg-green-500 rounded-full w-4 h-4 border-4 border-current"></span>}
                </div>
                <div className="conversation-block-content">
                    <span className="conversation-block-content__headline">{conversationName || 'null'}</span>
                    <div className="conversation-block-content__body">
                        {isMe}&nbsp;
                        {renderFirstMessage()}
                        <span>-</span>
                        <span>{getTimeToNow(firstMessage?.created)} </span>
                    </div>
                </div>
                {firstMessage.sender !== localStorage.getItem('user_id') && firstMessage.is_read === 0 &&

                    <span className="w-4 h-4 bg-blue-500 rounded-full" style={{ minWidth: "16px" }}></span>
                }
            </div>
        </NavLink>
    )
}

export default ConversationElement
