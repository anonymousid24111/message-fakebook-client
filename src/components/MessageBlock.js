import React from 'react'
import { AiFillLike } from 'react-icons/ai'
import logo from './../assets/images/avatar.jpg'

const MessageBlock = ({isMe=true, message={}}) => {
    return (
        <div className={isMe?"flex flex-row-reverse p-1":"flex p-1"}>
            <div className="flex items-end rounded-full w-7 mx-2">
                <img src={logo} alt="avatar-friend" className="rounded-full" />
            </div>
            
            <div className="flex flex-col items-start">
                <div className={isMe?"px-3 py-2 rounded-full my-message bg-blue-600":"rounded-full px-3 py-2 bg-gray-600"}>
                    {message?.content||<AiFillLike/>}
                </div>
            </div>
        </div>
    )
}

export default MessageBlock
