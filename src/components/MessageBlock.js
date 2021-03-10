import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import AvatarBlock16 from './AvatarBlock16'
import LikeFacebook from './LikeFacebook'
import SentStatus from 'pages/Message/Main/Body/SentStatus'
import ReceivedStatus from 'pages/Message/Main/Body/ReceivedStatus'
const MessageBlock = ({ isMe = true, message = {}, prev, next, userInfo = {} }) => {
    const renderMessage = () => {
        const { kind } = message
        if (kind === "text") {
            if (message?.content?.slice(0, 8) === "https://" || message?.content?.slice(0, 7) === "http://") {
                return <Link to={message.content} className={classnames("px-3 py-2 rounded-3xl bg-gray-600 underline",
                    {
                        "my-message bg-blue-600": isMe,
                        "rounded-tl": !isMe && prev,
                        "rounded-bl": !isMe && next,
                        "rounded-tr": isMe && prev,
                        "rounded-br": isMe && next,
                    })} >
                    {message?.content}
                </Link>
            }
            else {
                return <div className={classnames("px-3 py-2 rounded-3xl bg-gray-600",
                    {
                        "my-message bg-blue-600": isMe,
                        "rounded-tl": !isMe && prev,
                        "rounded-bl": !isMe && next,
                        "rounded-tr": isMe && prev,
                        "rounded-br": isMe && next,
                    })} >
                    {message?.content || "null"}
                </div>
            }
        }
        if (kind === "react") {
            return <div className="w-7 h-7">
                <LikeFacebook />
            </div >
        }
        if (kind === "images") {
            var images = JSON.parse(message.content)
            var numberOfImages = images.length
            if (numberOfImages === 1) {
                return <img src={images[0]} alt="images" className="object-cover rounded-lg w-96 h-96 m-1" />
            }
            if (numberOfImages === 2) {
                return <div className="flex space-x-2">
                    {images.map((image, index) => {
                        return <img src={image} alt="images" className="object-cover rounded-lg w-48 h-48" key={index} />
                    })}
                </div>
            }
            else {
                return <div className={classnames("flex flex-wrap max-w-sm -m-1", {
                    "justify-end": isMe,
                })} >
                    {images.map((image, index) => {
                        return <img src={image} alt="images" className="object-cover rounded-lg w-32 h-32 p-1" key={index} />
                    })}
                </div>
            }
        }
    }

    const renderLastMessage = () => {
        if (message.status === 'sent') {
            return <SentStatus />
        }
        if (message.status === 'received') {
            return <ReceivedStatus />
        }
        if (message.status === 'read') {
            return <AvatarBlock16 className="w-4 h-4" />
        }
        if (message.status === 'error') {
            return <SentStatus />
        }

    }


    return (
        <div className={classnames("flex p-0.5", { "flex-row-reverse": isMe })}>
            {!isMe ? (
                <div className="flex items-end mx-2">
                    {next ?
                        <span className="w-7 h-7"></span> :
                        <AvatarBlock16 src={userInfo?.avatar} className="w-7 h-7" />}
                </div>) :
                (
                    <div className="w-4 flex items-end">
                        {renderLastMessage()}
                    </div>
                )}
            {renderMessage()}
        </div>
    )
}

export default MessageBlock
