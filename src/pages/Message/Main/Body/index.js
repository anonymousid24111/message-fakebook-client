import React from 'react'

import { useMain } from '../hooks';
import MessageBlock from 'components/MessageBlock';
import { useAuth } from 'hooks/useAuth';
import MessageTime from 'components/MessageTime';

const Body = () => {
    const { user } = useAuth()
    const { conversation, userInfo } = useMain()

    return (

        <div className="list-chat__left">
            {conversation?.messages?.length > 0 ? conversation.messages.map((message, index, messages) => {
                console.log('message', message)
                let prev,next
                if (messages[index - 1]?.sender === message?.sender &&
                    new Date(message?.created).getTime() - new Date(messages[index - 1]?.created).getTime() < 1000 * 60) {
                    prev = 1;
                }
                else {
                    prev = 0;
                }
                if (messages[index + 1]?.sender === message?.sender &&
                    new Date(messages[index+1]?.created).getTime() - new Date(message?.created).getTime() < 1000 * 60) {
                    next = 1;
                }
                else {
                    next = 0;
                }

                let isMe= user === message?.sender
                return <div  key={index}>
                    {!prev&&<MessageTime time={message?.created} />}
                    <MessageBlock message={message} key={index} isMe={isMe} userInfo={userInfo} prev={prev} next={next} />
                </div> 
            }) : <i>You have no message</i>}
        </div>

    )
}

export default Body
