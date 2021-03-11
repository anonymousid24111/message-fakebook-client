import React from 'react'

import MessageBlock from 'components/MessageBlock'
import MessageTime from 'components/MessageTime'
import AvatarBlock16 from 'components/AvatarBlock16'
import { useAuth } from 'hooks/useAuth'
import { useMain } from '../hooks'

const Body = () => {
    const { user } = useAuth()
    const { conversation, userInfo, typing } = useMain()
    return (
        <div>
            {conversation?.messages?.length > 0 ? (
                conversation.messages.map((message, index, messages) => {
                    const prev =
                        messages[index - 1]?.sender === message?.sender &&
                        new Date(message?.created).getTime() -
                            new Date(messages[index - 1]?.created).getTime() <
                            1000 * 60
                            ? 1
                            : 0
                    const next =
                        messages[index + 1]?.sender === message?.sender &&
                        new Date(messages[index + 1]?.created).getTime() -
                            new Date(message?.created).getTime() <
                            1000 * 60
                            ? 1
                            : 0
                    const isMe = user === message?.sender
                    return (
                        <div key={message}>
                            {!prev && <MessageTime time={message?.created} />}
                            <MessageBlock
                                message={message}
                                isMe={isMe}
                                userInfo={userInfo}
                                prev={prev}
                                next={next}
                            />
                        </div>
                    )
                })
            ) : (
                <i>You have no message</i>
            )}
            {typing && (
                <div className="flex p-0.5">
                    <div className="flex items-end mx-2">
                        <AvatarBlock16
                            src={userInfo?.avatar}
                            className="w-7 h-7"
                        />
                    </div>
                    <div id="wave" className="bg-gray-600">
                        <span className="dot one" />
                        <span className="dot two" />
                        <span className="dot three" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Body
