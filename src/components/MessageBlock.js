import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import AvatarBlock16 from './AvatarBlock16'
import LikeFacebook from './LikeFacebook'
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
            var iRender = images.map((image, index) => {
                return <img src={image} alt="images" className="object-cover rounded-lg flex-grow flex-shrink inline w-32 m-1" key={index} />
            })
            return <div className={classnames("flex flex-wrap", {
                "justify-end": isMe,
            })} style={{ maxWidth: "26rem" }} >
                {iRender}
            </div>
        }
        else {
            console.log('message.typing', message.typing)
            return message?.typing===true&&(<div id="wave">
	
            <span class="dot one"></span>
            <span class="dot two"></span>
            <span class="dot three"></span>
            
        </div>)
        }
    }





    return (
        <div className={classnames("flex p-0.5", { "flex-row-reverse": isMe })}>
            {!isMe ? (<div className="flex items-end mx-2">
                {next ? <span className="w-7 h-7"></span> : <AvatarBlock16 src={userInfo?.avatar} className="w-7 h-7" />}
            </div>) : (
                    <div className="w-4"></div>
                )}
            {renderMessage()}
        </div>
    )
}

export default MessageBlock
